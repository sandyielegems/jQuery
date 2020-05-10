$(document).ready(function () {
    // begin van mijn code
    $('button#set').on('click', SetSandy);
    $('button#get').on('click', GetSandy);
    // eind van mijn code
});


function SetSandy() {
    console.log('sandy drinkt graag bier');
    $("input").val("Glenn Quagmire");
}

function GetSandy() {
    console.log('get Sandy');
    var x = $('input').val();
    console.log('waarde is: ' + x);
}