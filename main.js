$(document).ready(() => {

$('.audio').hide();

$('.image').on('click', (event) => {
  $(event.currentTarget).parent().siblings()
    .find('.audio').slideUp();
  $(event.currentTarget).next().slideToggle();
});


$('audio').on("play", function() {
    var id = $(this).attr('id');
    $("audio").not(this).each(function(index, audio) {
        audio.pause();
    });
    // i couldn't figure out how to make the other audios stop when another was played, so I used an answer to a question in a comment I found in this thread about using jQuery https://stackoverflow.com/questions/15930328/how-can-i-stop-all-audio-playing-using-jquery. I changed the code a little to apply to my html.
});


  });
