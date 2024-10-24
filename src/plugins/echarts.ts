import type { App } from "vue";
import * as echarts from "echarts/core";
import { PieChart, BarChart, LineChart } from "echarts/charts";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";
import {
  GridComponent,
  TitleComponent,
  PolarComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
} from "echarts/components";

const { use } = echarts;

use([
  PieChart,
  BarChart,
  LineChart,
  CanvasRenderer,
  SVGRenderer,
  GridComponent,
  TitleComponent,
  PolarComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
]);

/**
 * @description Nhập ECharts theo nhu cầu, cụ thể xem tại https://echarts.apache.org/handbook/zh/basics/import/#%E5%9C%A8-typescript-%E4%B8%AD%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5
 * @see Lưu ý: Phải thêm `$echarts` vào `globalProperties` toàn cầu, cụ thể xem tại https://pure-admin-utils.netlify.app/hooks/useECharts/useECharts#%E4%BD%BF%E7%94%A8%E5%89%8D%E6%8F%90
 */
export function useEcharts(app: App) {
  app.config.globalProperties.$echarts = echarts;
}

export default echarts;
