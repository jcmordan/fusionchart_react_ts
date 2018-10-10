declare module "react-fusioncharts" {
  import * as React from "react";
  import { FusionChartStatic } from "fusioncharts";

  /// this should be extended declaring more specificts types
  export default class ReactFC extends React.Component<any, any> {
    static fcRoot(
      FusionCharts: FusionChartStatic,
      Column2D: (H: FusionChartStatic) => FusionChartStatic,
      FusionTheme: (H: FusionChartStatic) => FusionChartStatic
    ): any;
  }
}
