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

const tester = document.getElementById('tester');
Plotly.newPlot( tester, [{
    x: [1,2,3,4,5],
    y: [1,2,3,4,5] }], {
	margin: {t: 0 }});


//ribon plot

const myDiv = document.getElementById('myDiv');

  var trace1 = {
      x:[0,0,0,0,0], y:[0,1,2,3,4], z:[[2,4],[2,6],[7,3],[4,1],[3,10]],
    name: 'poop',
    type: 'surface',
    showscale: false
  }
  var trace2 = {
      x:[1,1,1,1,1], y:[0,1,2,3,4], z:[1,2,7,4,3],
    name: '',
    type: 'surface',
    showscale: false
  }
  var trace3 = {
      x:6, y:2, z:2,
    name: '',
    type: 'surface',
    showscale: false
  }
  var trace4 = {
      x:3, y:3, z:3,
    name: '',
    type: 'surface',
    showscale: false
  }
  var trace5 = {
      x:7, y:4, z:4,
    name: '',
    type: 'surface',
    showscale: false
  }
  var trace6 = {
      x:2, y:5, z:5,
    name: '',
    type: 'surface',
    showscale: false
  }
  var trace7 = {
      x:6, y:6, z:6,
    name: '',
    type: 'surface',
    showscale: false
  }

  var data = [trace1, trace2];

  var layout = {
    title: {
      text: 'Ribbon Plot'
    },
    showlegend: false,
    autosize: true,
    width: 600,
    height: 600,
    scene: {
      xaxis: {title: {text: 'Sample #'}},
      yaxis: {title: {text: 'Wavelength'}},
      zaxis: {title: {text: 'OD'}}
    }
  };
  Plotly.newPlot(myDiv, data, layout);
