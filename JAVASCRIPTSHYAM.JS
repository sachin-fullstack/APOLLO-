// heartRateChart
const heartRateCtx = document.getElementById("heartRateChart").getContext('2d');

const heartRateChart = new Chart(heartRateCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Heart Rate',
            data: [65, 59, 80, 81, 56, 55, 40, 20, 70, 62, 45, 78],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// bloodPressureChart
const bloodPressureCtx = document.getElementById("bloodPressureChart").getContext('2d');

const bloodPressureChart = new Chart(bloodPressureCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Systolic',
            data: [120, 118, 126, 122, 128, 131, 134, 136, 133, 129, 124, 121],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Diastolic',
            data: [80, 78, 86, 82, 88, 91, 94, 96, 93, 89, 84, 81],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

 // Get the canvas element for the BMI chart
var bmiCanvas = document.getElementById("bmiChart");

// Set the data for the chart
var bmiData = {
    labels: ["Underweight", "Normal weight", "Overweight", "Obesity"],
    datasets: [{
        label: "BMI Index",
        data: [15, 25, 30, 35],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

// Set the options for the chart
var bmiOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Create the chart object
var bmiChart = new Chart(bmiCanvas, {
    type: 'bar',
    data: bmiData,
    options: bmiOptions
});


