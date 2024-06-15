document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('ctrChart').getContext('2d');
    var ctrChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'CTR',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'rgba(255, 206, 86, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 206, 86, 1)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#fff' // Cambiar color de las etiquetas del eje y
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Cambiar color de las líneas del eje y
                    }
                },
                x: {
                    ticks: {
                        color: '#fff' // Cambiar color de las etiquetas del eje x
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Cambiar color de las líneas del eje x
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff' // Cambiar color de las etiquetas de la leyenda
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
