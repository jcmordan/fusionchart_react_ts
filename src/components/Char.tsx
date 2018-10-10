    // tslint:disable:object-literal-sort-keys

// Step 1 - Including react
import * as React from 'react';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import * as FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import * as Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Including the theme as fusion
import * as  FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// import * as Charts from 'fusioncharts/fusioncharts.charts';

// tslint:disable-next-line:no-console
console.log([ReactFC, FusionCharts])

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// Charts(FusionCharts)


// Step 7 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'column2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    theme: 'fusion',
    dataSource: { 
        // Chart Configuration 
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    }
};

// Step 8 - Creating the DOM element to pass the react-fusioncharts component 
export default class Chart extends React.Component {
  public render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}
