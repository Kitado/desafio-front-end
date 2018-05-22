$(function () {
    const mentorName = 'nomeDoMentorAqui'
    $('#mentor-name').html(mentorName)

    $('#btn-accept').on('click', function () {
        window.location = 'inscrito.html'
    })

    $('#btn-deny').on('click', function () {
        location.reload()
    })
})