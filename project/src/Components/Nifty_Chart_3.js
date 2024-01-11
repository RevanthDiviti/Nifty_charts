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
    var xVal = 1, yVal1 = 10, yVal2 = 20; 
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
      backgroundColor: "transparent", 
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
      }
    };

    const containerStyle = {
      width: "100%",
      height: "450px",
      margin: "auto",
      background: "linear-gradient(to bottom right, #F5DEB3, #FFFFFF)"
    };

    return (
      <div>
        <div style={containerStyle}>
          <CanvasJSStockChart options={options} />
        </div>
      </div>
    );
  }
}

export default Nifty_chart_3;
