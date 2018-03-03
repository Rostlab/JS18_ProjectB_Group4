var plotGraph = angular.module('plotGraph', []);

function graphViewerController($scope, $http) {

  $scope.createHistogram = function () {
    var x = [];
    for (var i = 0; i < 500; i++) {
      x[i] = Math.random();
    }

    var trace = {
      x: x,
      type: 'histogram',
    };
    var data = [trace];
    Plotly.newPlot('plot', data);
  }

  $scope.createBarChart = function () {
    var data = [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar'
      }
    ];

    Plotly.newPlot('plot', data);
  }

  $scope.createLineChart = function () {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter'
    };

    var trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter'
    };

    var data = [trace1, trace2];

    Plotly.newPlot('plot', data);
  }

  $scope.createPieChart = function () {
    var data = [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }];

    var layout = {
      height: 400,
      width: 500
    };

    Plotly.newPlot('plot', data, layout);
  }

  $scope.createScatterChart = function () {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers',
      type: 'scatter'
    };

    var trace2 = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      type: 'scatter'
    };

    var trace3 = {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      type: 'scatter'
    };

    var data = [trace1, trace2, trace3];

    Plotly.newPlot('plot', data);
  }
}