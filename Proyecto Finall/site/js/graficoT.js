const label = ['Total de consumo de energias Renovables','Total del consmo de energia hidraulica']
const colors = ['rgb(69,177,223)', 'rgb(99,201,122)'];

const graph2 = document.querySelector("#grafica2");

const data2 = {
    labels: label,
    datasets: [{
        data: ['2683.16623','2650.25227'],
        backgroundColor: colors
    }]
};

const config2 = {
    type: 'pie',
    data: data2,
};

new Chart(graph2, config2);