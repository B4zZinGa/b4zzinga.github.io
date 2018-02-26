'use strict';

$('#pobierz').click(function () {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        $('#kontener').append('<br>' + '<div id="dane-programisty">' + 'Dane programisty:' + '<br>' + 'Firma: ' + data.firma + '<br>' + 'Imie: ' + data.imie + '<br>' + 'Nazwisko: ' + data.nazwisko + '<br>' + 'Zawód: ' + data.zawod).css({
            'text-align': 'left'
        });
    })
});





// jak odwołać się do danych poza funkcją??????????
