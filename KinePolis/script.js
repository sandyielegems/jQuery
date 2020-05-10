var prijsTickets;
var selectedExtras;
var prijs = 0;

$(document).ready(function () {
    //
    // Get # of tickets
    $('input[name="ticket"]').on('change', function () {
        let ticketKeuze = $('input[name="ticket"]:checked').val();
        console.log(`keuze is: ${ticketKeuze}`);
        prijsTickets = ticketKeuze * 11.5;
        console.log('prijs tickets is: ' + prijsTickets);
        $('table tr.tickets td.result').text(prijsTickets);
        return prijsTickets;
    });

    // Get values from 'Extras'
    $('input[name="extras"]').on('change', function () {
        let extras = [];
        $.each($("input[name='extras']:checked"), function () {
            extras.push($(this).val());
        });
        //console.log("My favourite snacks are: " + extras.join(", "));
        $('table tr.extras td:first-child').text(extras);

        selectedExtras = extras;
    });

    // Add eventhandler for pay function
    $('button#pay').on('click', pay);

});

function pay() {
    var prijs = 0;
    // prijs bereken van de tickets
    console.log('prijs tickets inside function pay: ' + prijsTickets);
    prijs = prijs + prijsTickets;

    // prijs berekenen van extras
    console.log('extras: test ' + selectedExtras);

    selectedExtras.forEach(function (extra, index) {
        console.log(index);
        console.log(extra);
        if (extra == 'popcorn') {
            console.log('true het is popcorn');
            prijs = prijs + 5;
            console.log(prijs);
        } else if (extra == 'cola') {
            prijs = prijs + 2.5;
            console.log(prijs);
        }
    });

    // alles optellen.

    // tonen op het scherm
    $('table .total .result').text(prijs);

}




