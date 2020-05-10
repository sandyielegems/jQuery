$(document).ready(function() {

    $('li').on('click', function() {
        // alert("in winkelwagen " + $(this).text());
        $(this).css('text-decoration', 'line-through');
    });

    $('button').on('click', function() {
        let numItem = $('#lijst li').lenght + 1;
        $('lijst').append(`<li>item ${numItem}</li>`);
    });

    // $('ul').on('click', function() {
    //     $(this).toggleClass('line-through');
    // })

}); // einde doc ready