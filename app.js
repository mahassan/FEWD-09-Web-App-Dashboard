const alertBar = document.querySelector(".alert");
const form = document.getElementById("message-user");
const user = document.getElementById('user');
const msg = document.getElementById('msg');
const notifi = document.getElementById("notification");
const chartNav = document.getElementById("chart-nav");
const closeAlert = alertBar.children[1];
const userFieldError = document.getElementById("userError");
const bell = document.getElementById("bell");
const nPanel = document.getElementById("notification-panel");
const traffic = document.getElementById('traffic').getContext('2d');



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
    options:{
        legend:{
            display: false
        }
    }
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
        options:{
            legend:{
                display: false
            }
        }
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
        options:{
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 12,
                  }
            },

        }
})
//JS
closeAlert.addEventListener("submit", function(){
    alertBar.style.display = "none";
})
//form
loadEventListeners();

function loadEventListeners(){
    form.addEventListener("submit", confirmation);
    
    document.addEventListener("DOMContentLoaded", jogTimeZone);

    user.addEventListener("keyup", filterUser);
}
function confirmation(e){
   if(user.value === '' || msg.value === ''){
    //userFieldError.setAttribute("data-tip", "Please enter user name");
    alert(" Please fill out the form")
   }else{
    alert("submitted")
   }
   e.preventDefault();
}
//chart switch


//local storage
const timeZone = document.getElementById("timeZone");
let selected
//set LS
function selectedZone(){
    selected = localStorage.setItem("Time",timeZone.options[timeZone.selectedIndex].text);
}
//get LS
function jogTimeZone(){
    let ret = localStorage.getItem("Time");
    timeZone.options[timeZone.selectedIndex].text = ret;
}
//notification 
bell.addEventListener("click", () => {
    if(nPanel.style.display === "none"){
    bell.children[1].style.display = "none"
    nPanel.style.display = "block";
    }else{
    nPanel.style.display = "none";   
    }
})
//filter user
function filterUser(e){
     const text = e.target.value.toLowerCase();

     document.querySelectorAll(".new-members").forEach((e)=>{
         const item = e.children[1].children[0].textContent;
         if(item.toLowerCase().indexOf(text) != -1){
            e.style.display = "block"
            userFieldError.innerHTML = "No Mataches Found"
         }else{
            e.style.display = "none"
         }
     });
}
