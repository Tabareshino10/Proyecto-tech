const label = ['Total de consumo de energías Renovables','Total del consumo de energía hidráulica']
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
