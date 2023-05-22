$(function () {
    console.log("Let’s get ready to party with jQuery!");
    $('article img').addClass('image-center');
    $('article p:last').remove()
    $("#title").css("font-size", Math.random() * 100);
    $("ol").append('<li>Tyler was here</li>');
    $("aside")
        .empty()
        .append($("<p>", { text: "Sorry about that awkward aside" }));
    $('.form-control').on('input', function () {
        var redValue = parseInt($('.form-control').eq(0).val());
        var blueValue = parseInt($('.form-control').eq(1).val());
        var greenValue = parseInt($('.form-control').eq(2).val());
        console.log('rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')')
        // Set the background color of the body using the combined RGB values
        $('body').css('background-color', 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')');
        $("img").on('click', function (e) {
            $(e.target).remove();
          });
    });
});