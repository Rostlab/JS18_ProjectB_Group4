/* global document alert angular Plotly */

const plotGraph = angular.module('plotGraph', []);

function graphViewerController($scope, $http) {
  const viewer = this;
  const viewerPlotDiv = document.getElementById('plot');

  $scope.chart = {
    data: undefined,
    layout: undefined,
  };

  $scope.doActions = function (plotDiv, actions) {
    actions.forEach((task) => {
      if (task.action === 'updateStyle') {
        Plotly.restyle(plotDiv, task.value, task.trace);
      } else if (task.action === 'updateLayout') {
        Plotly.relayout(plotDiv, task.value);
      } else if (task.action === 'updateData') {
        while (plotDiv.data.length) {
          Plotly.deleteTraces(plotDiv, 0);
        }
        Plotly.addTraces(plotDiv, task.value);
      }
    });
  };

  $scope.submitSentence = function (sentence, plotDiv) {
    return $http
      .post('/api/nlp', {
        sentence,
        data: plotDiv.data,
        layout: plotDiv.layout,
      })
      .success((res) => {
        $scope.doActions(plotDiv, res);
        return res;
      });
  };

  $scope.submit = function () {
    const { sentence } = viewer;
    viewer.sentence = '';

    $scope
      .submitSentence(sentence, viewerPlotDiv)
      .then(() => {
        console.log('Success');
      })
      .catch(() => {
        alert('Sorry, I do not understand.');
      });
  };

  $scope.callBackendFunction = function (chartType, functionName, parameters = {}) {
    const finalParameters = parameters;
    finalParameters.layout = viewerPlotDiv.layout;
    finalParameters.data = viewerPlotDiv.data;
    $http.post(`/api/function/${chartType}/${functionName}`, finalParameters).success((res) => {
      $scope.doActions(viewerPlotDiv, res);
    });
  };

  $scope.callBackendFunctionOneParameter = function (chartType, functionName, name, value) {
    const parameters = {};
    parameters[name] = value;
    $scope.callBackendFunction(chartType, functionName, parameters);
  };

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
    $scope.currentChartType = 'histogram';
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
    $scope.currentChartType = 'bar';
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
    $scope.currentChartType = 'line';
  };

  $scope.createPieChart = function () {
    const data = [
      {
        values: [8, 12, 20],
        labels: ['Residential', 'Non_Residential', 'Utility'],
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
    $scope.currentChartType = 'pie';
  };

  $scope.changeColors = function () {
    const { chart: { data } } = $scope;
    const [{ labels }] = data;
    const colors = ['orange', 'teal', 'lime'];
    $scope.callBackendFunction('pie', 'updateColors', {
      labels,
      colors,
      data,
    });
  };

  $scope.changeLegendPosition = function () {
    $scope.callBackendFunction('general', 'changeLegendPosition', {
      x: 1,
      y: 0,
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
    $scope.currentChartType = 'scatter';
  };
}
