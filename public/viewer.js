const plotGraph = angular.module('plotGraph', []);

function graphViewerController($scope, $http) {
  $scope.chart = {
    data: undefined,
    layout: undefined,
  };

  $scope.callBackendFunction = function(chartType, functionName, parameters={}) {
    $http
      .post('/api/function/' + chartType + '/' + functionName, parameters)
      .success((res) => {
        console.log(res);
        res.forEach(task => {
          if(task.action == "updateStyle") {
            Plotly.restyle('plot', task.value, task.trace);
          }
        });
      });
  }

  $scope.createHistogram = function () {
    const x = [];
    for (let i = 0; i < 500; i++) {
      x[i] = Math.random();
    }

    const trace = {
      x,
      type: 'histogram',
    };
    const data = [trace];
    $scope.chart.data = data;
    Plotly.newPlot('plot', data);
    $scope.currentChartType = "histogram";
  };

  $scope.createBarChart = function () {
    const data = [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar',
      },
    ];
    $scope.chart.data = data;
    Plotly.newPlot('plot', data);
    $scope.currentChartType = "bar";
  };

  $scope.createLineChart = function () {
    const trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
    };

    const trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter',
    };

    const data = [trace1, trace2];
    $scope.chart.data = data;
    Plotly.newPlot('plot', data);
    $scope.currentChartType = "line";
  };

  $scope.createPieChart = function () {
    const data = [
      {
        values: [8, 12, 20],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie',
        marker: {
          colors: ['red', 'green', 'blue'],
        },
      },
    ];

    const layout = {
      height: 400,
      width: 500,
    };
    $scope.chart.data = data;
    Plotly.newPlot('plot', data, layout);
    $scope.currentChartType = "pie";
  };

  $scope.changeColors = function () {
    const data = $scope.chart.data;
    const labels = data[0].labels;
    const colors = ['orange', 'teal', 'lime'];
    $scope.callBackendFunction('pie', 'updateColors', {
      labels,
      colors,
      data,
    });
  };

  $scope.createScatterChart = function () {
    const trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers',
      type: 'scatter',
    };

    const trace2 = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      type: 'scatter',
    };

    const trace3 = {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      type: 'scatter',
    };

    const data = [trace1, trace2, trace3];
    $scope.chart.data = data;
    Plotly.newPlot('plot', data);
    $scope.currentChartType = "scatter";
  };
}
