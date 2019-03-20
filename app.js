const traffic = document.getElementById('traffic').getContext('2d');
const alert = document.querySelector(".alert");
const closeAlert = alert.children[1];

var myChart = new Chart(traffic, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [
        {
            data: [700, 1300, 900, 1000, 800, 600, 800,900,700, 900, 800],
            backgroundColor: [
                '#e2e3f6',
            ],
        }]
    },
});
//bar
var bar = document.getElementById('bar').getContext('2d');
var barChart = new Chart(bar, {
        type: 'bar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F','S'],
            datasets: [
            {
                data: [600, 555, 575, 650, 750, 600, 800,],
                backgroundColor: [
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                    '#7377bf'
                ],
            }]
        }, 
})
//doughnut
var mobile = document.getElementById('mobile').getContext('2d');
var mobileChart = new Chart(mobile, {
        type: 'doughnut',
        data: {
            labels: ['Phones', 'Tablet', 'Desktop'],
            datasets: [
            {
                data: [300, 555, 575],
                backgroundColor: [
                    '#73b1bf',
                    '#81c98f',
                    '#7377bf',
                ],
            }]
        }, 
})
//JS
closeAlert.addEventListener("click", function(){
    alert.style.display = "none";
})