const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
	labels: ['Red', 'Blue', 'yellow', 'green', 'Purple', 'Orange'],
	datasets: [{
	    label: '# of Votes',
	    data: [12, 15, 3, 5, 2, 7],
	    borderWidth: 1
	}],
	options: {
	    scales: {
		y: {
		    beginAtZero: true
		}
	    }
	}
    }
});
