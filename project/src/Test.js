new Chart('chart', {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      datasets: [{
        label: 'My Dataset',
        data: [60, 90, 130, 110, 100, 90, 80, 70, 80, 100],
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            stepSize: 20
          },
          gridLines: {
            display: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
        }]
      },
      annotation: {
        annotations: [{
          type: 'box',
          yScaleID: 'y-axis-0',
          yMin: 120,
          yMax: 220,
          borderColor: 'rgba(255, 51, 51, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 51, 51, 0.25)',
        },
        {
          type: 'box',
          yScaleID: 'y-axis-0',
          yMin: 80,
          yMax: 120,
          borderColor: 'rgba(0, 204, 0, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(0, 204, 0, 0.25)',
        },
        {
          type: 'box',
          yScaleID: 'y-axis-0',
          yMin: 0,
          yMax: 80,
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
        }],
      }
    }
  });