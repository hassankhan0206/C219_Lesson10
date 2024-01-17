



$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#f8f8f8', '#f8f8f8', '#f8f8f8'],
        navigation: true,
        navigationPosition: 'right',

        anchors: ['section1', 'section2', 'section3'], //name the anchors for each section

        afterLoad: function (origin, destination, direction) {

            if (destination.index == 1) { // Section 2
                anime({
                    targets: '.fade-in',
                    translateX: 1,
                    opacity: [0, 1],
                    delay: anime.stagger(200, { start: 500 })
                });

                anime({
                    targets: '.blackHuman',
                    translateX: 1,
                    opacity: [0, 1],
                    delay: anime.stagger(200, { start: 500 })
                });

                anime({
                    targets: '.greyHuman',
                    translateX: 1,
                    opacity: [0, 1],
                    delay: anime.stagger(200, { start: 500 })
                });

                anime({
                    targets: '.greyHuman',
                    translateX: 10,
                    direction: 'alternate',
                    loop: true,
                    easing: 'easeInOutSine'
                });


            } else if (destination.index == 0) {
                anime({
                    targets: '.fade-in',
                    translateX: 1,
                    opacity: [0, 1],
                    delay: anime.stagger(200, { start: 500 })
                });

                anime({
                    targets: '.number1',
                    innerHTML: [0, 257504],
                    easing: 'linear',
                    round: 10,
                    delay: 1000
                });

                anime({
                    targets: '.number2',
                    innerHTML: [0, 397],
                    easing: 'linear',
                    round: 10,
                    delay: 1000
                });

                anime({
                    targets: '.number3',
                    innerHTML: [0, 687],
                    easing: 'linear',
                    round: 10,
                    delay: 1000
                });

            } else {
                anime({
                    targets: '.fade-in',
                    translateX: 1,
                    opacity: [0, 1],
                    delay: anime.stagger(200, { start: 200 })
                });

            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var dates = ["Dec 1", "Dec 2", "Dec 3", "Dec 4", "Dec 5", "Dec 6", "Dec 7", "Dec 8", "Dec 9", "Dec 10", "Dec 11", "Dec 12", "Dec 13", "Dec 14"];
    var cases = [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103];

    var ctx = document.getElementById('dailyCasesChart').getContext('2d');

    var dailyCasesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Daily Cases',
                borderColor: 'rgb(75, 192, 192)',
                data: cases,
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Cases'
                    }
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var vaccinationCentres = [
        ["Bedok Polyclinic", "11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662", "Pfizer", "6343 1121"],
        ["Bukit Batok Polyclinic", "50 Bukit Batok West Avenue 3, Singapore 659164", "Moderna", "6343 1122"],
        ["Bukit Merah Polyclinic", "162 Bukit Merah Central Level 4, Singapore 150163", "Pfizer", "6343 1123"],
        ["Choa Chu Kang Polyclinic", "2 Teck Whye Crescent, Singapore 688846", "Moderna", "6343 1124"],
        ["Clementi Polyclinic", "451 Clementi Avenue 3, Singapore 120451", "Pfizer", "6343 1125"],
        ["Geylang Polyclinic", "21 Geylang East Central, Singapore 389707", "Pfizer", "6343 1126"],
        ["Hougang Polyclinic", "89 Hougang Avenue 4, Singapore 538829", "Pfizer", "6765 1121"],
        ["Jurong Polyclinic", "190 Jurong East Avenue 1, Singapore 609788", "Pfizer", "6765 1122"],
        ["Marine Parade Polyclinic", "80 Marine Parade Central, Singapore 440080", "Pfizer", "6765 1123"],
        ["Outram Polyclinic", "3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937", "Comirnaty", "6765 1124"],
        ["Pasir Ris Polyclinic", "1 Pasir Ris Drive 4, Singapore 519457", "Comirnaty", "6765 1125"],
        ["Pioneer Polyclinic", "26 Jurong West Street 61, Singapore 648201", "Moderna", "6765 1126"]
    ];

    // Create DataTable 
    $('#centersTable').DataTable({
        data: vaccinationCentres,
        columns: [
            { title: "Name" },
            { title: "Address" },
            { title: "Vaccine Type" },
            { title: "Phone" }
        ],
        responsive: true,
        pageLength: 5
    });
});


tippy('#Bedok', {
    content: 'Bedok Polyclinic',
});

tippy('#BukitBatok', {
    content: 'Bukit Batok Polyclinic',
});

tippy('#BukitMerah', {
    content: 'Bukit Merah Polyclinic',
});

tippy('#ChoaChuKang', {
    content: 'Choa Chu Kang Polyclinic',
});

tippy('#Clementi', {
    content: 'Clementi Polyclinic',
});

tippy('#Geylang', {
    content: 'Geylang Polyclinic',
});

tippy('#Hougang', {
    content: 'Hougang Polyclinic',
});

tippy('#Jurong', {
    content: 'Jurong Polyclinic',
});

tippy('#MarineParade', {
    content: 'Marine Parade Polyclinic',
});

tippy('#Outram', {
    content: 'Outram Polyclinic',
});

tippy('#PasirRis', {
    content: 'Pasir Ris Polyclinic',
});

tippy('#Pioneer', {
    content: 'Pioneer Polyclinic',
    Animation: 'perspective'

});




