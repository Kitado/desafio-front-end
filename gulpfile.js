require('gulp-watch')
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')

const SRC = 'src/'
const DIST = 'dist/'

const jsFileNames = ['home', 'confirmation', 'success']

function generateJsBundle(filenames){
    filenames.forEach(function(name) {
        gulp.task(name, ['js-vendors'], function () {
            const jsbuild = browserify([
                SRC + `js/${name}.js`,
            ],
            { debug: true, extensions: ['es6'] })
            .transform("babelify", { presets: ["es2015"] })
            .bundle()
            .pipe(source(name+'.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('/dev/null', { addComment: false }))
            .pipe(browserSync.reload({ stream: true }));
            
            return jsbuild.pipe(gulp.dest(DIST + 'js/'))
        })
    })
}

gulp.task('html', () => {
    return gulp.src(SRC + 'views/**/*.html')
        .pipe(gulp.dest(DIST));
})

gulp.task('sass', function () {
    return gulp.src(SRC + 'sass/*.scss')
        .pipe(sass({ outStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest(DIST + '/css'))
})

gulp.task('images', () => {
    return gulp.src(SRC + 'images/**/*')
        .pipe(gulp.dest(DIST + 'images/'))
})

generateJsBundle(jsFileNames)

gulp.task('js-vendors', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
    ])
        .pipe(gulp.dest(DIST + 'js'))
})

gulp.task('watch', () => {
    gulp.watch(SRC + 'images/**/*', ['images'])
    gulp.watch(SRC + '**/*.html', ['html', 'images'])
    gulp.watch(SRC + 'js/home.js', ['home'])
    gulp.watch(SRC + 'js/confirmation.js', ['confirmation'])
    gulp.watch(SRC + 'sass/*.scss', ['sass'])
})

gulp.task('serve', ['watch', 'run'], () => {
    browserSync.init({
        server: './dist'
    })
    gulp.watch(DIST + "css/*.css", ['sass']).on('change', browserSync.reload)
    gulp.watch(DIST + "images/**/*").on('change', browserSync.reload)
    gulp.watch(DIST + "**/*.pug").on('change', browserSync.reload)
    gulp.watch(DIST + "js/**/*").on('change', browserSync.reload)
})

gulp.task('run', ['html', 'sass', 'images', ...jsFileNames])
gulp.task('default', ['run'])