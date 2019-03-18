var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [
        {
            data: [700, 1300, 1200, 2200, 200, 600, 800],
            backgroundColor: [
                'rgba(25, 120, 32, 0.2)',
            ],
        }]
    },
});