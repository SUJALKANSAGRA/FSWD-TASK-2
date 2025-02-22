// Chart.js Configuration
const salesChartCtx = document.getElementById('salesChart').getContext('2d');
const activityChartCtx = document.getElementById('activityChart').getContext('2d');

const salesChart = new Chart(salesChartCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [500, 800, 1200, 1000, 1500, 2000],
            borderColor: '#6a11cb',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const activityChart = new Chart(activityChartCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Activity',
            data: [30, 45, 60, 50, 70, 90, 80],
            backgroundColor: '#6a11cb',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});