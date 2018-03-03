const plotGraph = angular.module('plotGraph', []);

function graphViewerController($scope, $http) {
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
    Plotly.newPlot('plot', data);
  };

  $scope.createBarChart = function () {
    const data = [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar',
      },
    ];

    Plotly.newPlot('plot', data);
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

    Plotly.newPlot('plot', data);
  };

  $scope.createPieChart = function () {
    const data = [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
    }];

    const layout = {
      height: 400,
      width: 500,
    };

    Plotly.newPlot('plot', data, layout);
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

    Plotly.newPlot('plot', data);
  };
}
