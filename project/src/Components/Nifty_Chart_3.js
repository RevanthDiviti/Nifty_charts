import React, { Component } from "react";
import CanvasJSReact from '@canvasjs/react-stockcharts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class Nifty_chart_3 extends Component {
  constructor(props) {
    super(props);
    this.generateDataPoints = this.generateDataPoints.bind(this);
  }

  generateDataPoints(noOfDps) {
    var xVal = 1, yVal1 = 10, yVal2 = 20; // Initial y-axis values
    var dps = [];
    for (var i = 0; i < noOfDps; i++) {
      yVal1 = yVal1 + Math.round(5 + Math.random() * (-5 - 5));
      yVal2 = yVal2 + Math.round(5 + Math.random() * (-5 - 5));
      dps.push({ x: xVal, y1: yVal1, y2: yVal2 });
      xVal++;
    }
    return dps;
  }

  render() {
    const options = {
      title: {
        text: "StockChart with Numeric Axis"
      },
      backgroundColor: "#F5DEB3",
      animationEnabled: true,
      exportEnabled: true,
      axisX: {
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY: {
        stripLines: [
          {
            startValue: 10,
            endValue: 20,
            color: "rgba(255, 255, 255, 0.5)", // Space color between 0 to 10
            lineDashType: "dash",
          },
          {
            startValue: 20,
            endValue: 30,
            color: "rgba(255, 255, 255, 0.5)", // Space color between 10 to 20
            lineDashType: "dash",
          },
          {
            startValue: 30,
            endValue: 40,
            color: "rgba(255, 255, 255, 0.5)", // Space color between 20 to 30
            lineDashType: "dash",
          },
          {
            startValue: 40,
            endValue: 50,
            color: "rgba(255, 255, 255, 0.5)", // Space color between 30 to 40
            lineDashType: "dash",
          }
        ],
        ticks: {
          min: 0,
          stepSize: 20
        },
        gridLines: {
          display: false
        },
        crosshair: {
          enabled: true
        }
      },
      charts: [{
        axisXType: "primary",
        axisYType: "primary",
        data: [
          {
            type: "spline",
            name: "Nifty Line 1",
            color: "blue",
            showInLegend: true,
            legendText: "Nifty Line 1",
            dataPoints: this.generateDataPoints(10000).map(point => ({ x: point.x, y: point.y1 }))
          },
          {
            type: "spline",
            name: "Nifty Line 2",
            color: "lightcoral",
            showInLegend: true,
            legendText: "Nifty Line 2",
            dataPoints: this.generateDataPoints(10000).map(point => ({ x: point.x, y: point.y2 }))
          }
        ]
      }],
      rangeSelector: {
        inputFields: {
          startValue: 4000,
          endValue: 6000,
          valueFormatString: "###0"
        },
        buttons: [{
          label: "1000",
          range: 1000,
          rangeType: "number"
        }, {
          label: "2000",
          range: 2000,
          rangeType: "number"
        }, {
          label: "5000",
          range: 5000,
          rangeType: "number"
        }, {
          label: "All",
          rangeType: "all"
        }]
      }
    };

    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto"
    };

    return (
      <div>
        <div>
          <CanvasJSStockChart containerProps={containerProps} options={options} />
        </div>
      </div>
    );
  }
}

export default Nifty_chart_3;
