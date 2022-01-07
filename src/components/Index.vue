<template>
  <div
    class="resafety-system-echart-riangularcone-bar"
    :style="mainCssVars"
    v-on="eventListeners"
    v-show="isShow"
  ></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "resafety-system-echart-riangularcone-bar",
  version: "1.0.0",
  // mixins: [myMixin],
  type: "echarts",
  props: {
    config: {
      type: Object,
      default: () => {
        return {

        };
      },
    },
    datasource: {
      type: Object,
      default: () => {
        return {
          dataset: [
            { x: "深圳", series0: 16, series1: 13 },
            { x: "北京", series0: 55, series1: 50 },
            { x: "上海", series0: 42, series1: 31 },
            { x: "广州", series0: 40, series1: 45 },
            { x: "香港", series0: 40, series1: 48 },
          ],
        };
      },
    },
    instanceMap: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {


    return {
      chart: null,
      isShow: true,
      option: {
        dataset: {
          dimensions: ["x", "series0", "series1"],
          source: this.datasource.dataset,
        },
        dataZoom: [
          {
            type: "slider",
            show: false,
            xAxisIndex: [0],
            yAxisIndex: [],
            setStart: false,
            startValue: 80,
            endValue: 100,
            height: 10,
            height: "auto",
            bottom: "1%",
            textStyle: false,
            showDetail: false,
            zoomLock: true,
            moveOnMouseMove: true,
            moveOnMouseWheel: true,
            zoomOnMouseWheel: false,
          },
          {
            type: "inside",
            xAxisIndex: [0],
            yAxisIndex: [],
            zoomOnMouseWheel: false,
            moveOnMouseMove: true,
            moveOnMouseWheel: true,
          },
        ],
        grid: {
          left: "10%",
          right: "5%",
          top: "25%",
          bottom: "15%",
          containLabel: true,
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "line",
            crossStyle: {
              color: " #555",
              width: 1,
              type: "dashed",
            },
            label: {
              show: false,
            },
          },
          textStyle: {
            color: '#333',
            lineHeight: 30,
            align: 'center',
            fontFamily: "Microsoft YaHei",
            fontSize: 14,
            fontWeight: "normal",
            fontStyle: "normal",
          },
          formatter: function(params) {
            let result = '';
            params.forEach(function(item,index){
              let Index = params[index].componentType + index;
              result += `<p>${params[index].marker} ${params[index].seriesName} ${params[index].data[Index]}</p>`
            })

            return params[0].name+ result;
          }
        },
        legend: {
          show: true,
          type: "plain",
          zlevel: 0,
          z: 2,
          left: "auto",
          right: "20",
          top: "20",
          bottom: "auto",
          width: "auto",
          height: "auto",
          orient: "horizontal",
          align: "auto",
          padding: 5,
          itemGap: 20,
          itemWidth: 10,
          itemHeight: 10,
          symbolKeepAspect: true,
          formatter: "",
          selectedMode: "true",
          inactiveColor: "#ccc",
          icon: "circle",
          backgroundColor: "transparent",
          borderColor: "#ccc",
          borderWidth: 0,
          borderRadius: 0,
          borderType: "solid",
          shadowBlur: 0,
          shadowColor: "",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
          textStyle: {
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "黑体",
            color: "rgba(185,225,245,1)",
            isMax: false,
            width: 150,
            overflow: "none",
            ellipsis: "...",
          },
        },
        xAxis: [
          {
            type: "category",
            show: true,
            position: "bottom",
            inverse: false,
            name: "",
            nameGap: 15,
            nameRotate: 0,
            nameLocation: "end",
            nameTextStyle: {
              fontSize: "14",
              fontStyle: "normal",
              fontWeight: "400",
              fontFamily: "黑体",
              color: "#fff",
            },
            axisLabel: {
              ellipsis: "...",
              overflow: "truncate",
              width: "30",
              show: true,
              fontSize: "14",
              fontStyle: "normal",
              fontWeight: "400",
              fontFamily: "黑体",
              color: "rgba(185,225,245,1)",
              inside: false,
              rotate: 0,
              interval: 0,
              margin: 8,
            },
            axisLine: {
              show: true,
              onZero: true,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 1,
                      color: "rgba(189,240,255,1)",
                    },
                  ],
                },
                type: "solid",
                width: 1,
                opacity: 1,
              },
              interval: 0,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "red",
                    },
                  ],
                },
                type: "solid",
                width: 1,
                opacity: 1,
              },
              interval: 0,
            },
            splitArea: {
              show: false,
              interval: 0,
              areaStyle: {
                color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
              },
            },
            axisTick: {
              show: true,
              alignWithLabel: true,
              interval: "auto",
              inside: false,
              length: 5,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 1,
                      color: "rgba(189,240,255,1)",
                    },
                  ],
                },
                type: "solid",
                width: 1,
                opacity: 1,
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            show: true,
            position: "bottom",
            offset: 0,
            inverse: false,
            name: "单位",
            nameGap: 15,
            nameRotate: 0,
            nameLocation: "end",
            nameTextStyle: {
              fontSize: "14",
              fontStyle: "normal",
              fontWeight: "400",
              fontFamily: "黑体",
              color: "rgba(185,225,245,1)",
            },
            axisLabel: {
              show: true,
              fontSize: "14",
              fontStyle: "normal",
              fontWeight: "400",
              fontFamily: "黑体",
              color: "rgba(185,225,245,1)",
              inside: false,
              rotate: 0,
              margin: 8,
              interval: 0,
              align: "",
              isMax: false,
              width: 150,
              overflow: "none",
              ellipsis: "...",
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "red",
                    },
                  ],
                },
                type: "solid",
                width: 1,
                opacity: 1,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(0,255,234,0.1)",
                    },
                  ],
                },
                type: "dashed",
                width: 1,
                opacity: 1,
              },
              interval: 0,
            },
            splitArea: {
              show: false,
              interval: 0,
              areaStyle: {
                color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
              },
            },
            isMax: false,
            isMin: false,
            max: "100",
            min: "0",
            data: [],
            axisTick: {
              show: false,
              alignWithLabel: false,
              interval: "auto",
              inside: false,
              length: 5,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "red",
                    },
                  ],
                },
                type: "solid",
                width: 1,
                opacity: 1,
              },
            },
          },
        ],
        series: [
          {
            name: "系列一",
            type: "pictorialBar",
            barWidth: "30",
            stack: "总量",
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(0, 255, 234,1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 255, 234,0.2)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                }, //渐变颜色
              },
            },
            symbol:
              "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
            // 'path://M2.313,27.496 C8.740,19.639 17.699,3.339 17.699,3.339 C17.699,3.339 25.401,19.380 33.465,27.568',
            encode: {
              itemName: "x",
              value: "series0",
            },
          },
          {
            name: "系列二",
            type: "pictorialBar",
            barWidth: "30",
            stack: "总量",
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(23,177,248,1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(23,177,248,0.2)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                }, //渐变颜色
              },
            },
            symbol:
              "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
            encode: {
              itemName: "y",
              value: "series0",
            },
          },
          {
            // 背景
            name: "",
            type: "bar",
            barWidth: "40",
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(210,232,242,0.15)",
                    },
                    {
                      offset: 1,
                      color: "rgba(255,255,255,0.01)",
                    },
                  ],
                },
              },
            },
            barGap: "-155%",
            data: [1000, 1000, 1000, 1000, 1000, 1000],
            z: 8,
            tooltip: {
              show: false,
            },
          },
        ],

        animation: true,
        animationDelay: 100,
      },
      // 组件中数据驱动部分的数据
      mapConfig: {
        // ----------------  barStyle ------------
        "config.option.barStyle.barWidth": "option.series[0].barWidth",
        "config.option.barStyle.style": function ({ vm, value }) {
          const barWidth = vm.config.option.barStyle.barWidth;
          const mapshape = {
            square: [0, 0, 0, 0],
            circle: [0, barWidth, barWidth, 0],
          };
          vm.option.series.forEach((item) => {
            item.itemStyle.borderRadius = mapshape[value];
          });
        },
        // 没生效
        "config.option.barStyle.gap.barGap": function ({ vm, value }) {
          vm.option.series.forEach((item) => {
            item.barGap = value;
          });
        },
        // 没生效
        "config.option.barStyle.gap.barCategoryGap": function ({ vm, value }) {
          vm.option.series.forEach((item) => {
            item.barCategoryGap = value;
          });
        },
        "config.option.barStyle.showBackground": function ({ vm, value }) {
          vm.option.series.forEach((item) => {
            item.showBackground = value;
          });
        },
        // "config.option.barStyle.showBackground": function ({ vm, value }) {
        //   vm.option.series.forEach((item) => {
        //     console.log(value, "vaue");
        //     item.showBackground = value;
        //   });
        // },
        "config.option.barStyle.backgroundStyle": function ({ vm, value }) {
          vm.option.series.forEach((item) => {
            item.backgroundStyle.color = value;
          });
        },
        // ------------------ xAxis ------------
        "config.option.xAxis.max": function ({ vm, value }) {
          if (value === 0) {
            vm.option.xAxis.max = '';
          } else {
            vm.option.xAxis.max = value;
          }
        },
        "config.option.xAxis.min": function ({ vm, value }) {
          vm.option.xAxis.min = value;
        },
        //  xAxis.label
        "config.option.xAxis.axisLabel.offset.x": function ({ vm, value }) {
          if (!vm.option.xAxis.axisLabel.padding) {
            vm.option.xAxis.axisLabel.padding = [0, 0, 0, 0];
          }
          vm.option.xAxis.axisLabel.padding[3] = Number(value);
        },
        "config.option.xAxis.axisLabel.offset.y": function ({ vm, value }) {
          if (!vm.option.xAxis.axisLabel.padding) {
            vm.option.xAxis.axisLabel.padding = [0, 0, 0, 0];
          }
          vm.option.xAxis.axisLabel.padding[0] = Number(value);
        },
        //  待处理
        "config.option.xAxis.axisLabel.view.labelSize": function ({ vm, value }) {
          vm.option.xAxis.axisLabel.interval = value;
        },
        "config.option.xAxis.axisLabel.view.rotate": "option.xAxis.axisLabel.rotate",
        // 待处理
        "config.option.xAxis.axisLabel.view.textSize": function ({ vm, value }) {},
        "config.option.xAxis.axisLabel.font": function ({ vm, value, key} ) {
          console.log(vm, key, value);
          vm.option.xAxis.axisLabel[key] = value;
        },
        // xAxis.axisLine
        "config.option.xAxis.axisLine.type": "option.xAxis.axisLine.lineStyle.type",
        "config.option.xAxis.axisLine.color": "option.xAxis.axisLine.lineStyle.color",
        "config.option.xAxis.axisLine.width": "option.xAxis.axisLine.lineStyle.width",
        // xAxis.axisTick
        "config.option.xAxis.axisTick.type": "option.xAxis.axisTick.lineStyle.type",
        "config.option.xAxis.axisTick.color": "option.xAxis.axisTick.lineStyle.color",
        "config.option.xAxis.axisTick.size.width": "option.xAxis.axisTick.lineStyle.width",
        "config.option.xAxis.axisTick.size.length": "option.xAxis.axisTick.length",
        "config.option.xAxis.axisTick.direction": function ({ vm, value }) {
          vm.option.xAxis.axisTick.inside = value === "inside" ? true : false;
        },
        // xAxis.splitLine
        "config.option.xAxis.splitLine.type": "option.xAxis.splitLine.lineStyle.type",
        "config.option.xAxis.splitLine.color": "option.xAxis.splitLine.lineStyle.color",
        "config.option.xAxis.splitLine.width": "option.xAxis.splitLine.lineStyle.width",
        // xAxis.name
        "config.option.xAxis.axisName.show": function ({ vm, value }) {
          if (value) {
            vm.option.xAxis.name = "";
          } else {
            vm.option.xAxis.name = vm.config.option.xAxis.axisName.name;
          }
        },
        "config.option.xAxis.axisName.name": function ({ vm, value }) {
          if (this.config.option.xAxis.axisName.show) {
            vm.option.xAxis.name = value;
          } else {
            vm.option.xAxis.name = "";
          }
        },
        "config.option.xAxis.axisName.offset.x": "option.xAxis.nameGap",
        // 待处理
        "config.option.xAxis.axisName.offset.y": function ({ vm, value }) {},

        "config.option.xAxis.axisName.nameTextStyle": function ({vm, value, key}) {
          vm.option.xAxis.nameTextStyle[key] = value;
        },

        // ------------------ yAxis ------------
        "config.option.yAxis[n].min": function ({ vm, value, index }) {
          if (value === "dataMin") {
            vm.option.yAxis[index].min = function (val) {
              return 0;
            };
          } else {
            vm.option.yAxis[index].min = value;
          }
        },
          // yAxis.axisLabel
        "config.option.yAxis[n].axisLabel.offset.x": function ({ vm, value, index }) {

            if (!vm.option.yAxis[index].axisLabel.padding) {
              vm.option.yAxis[index].axisLabel.padding = [0, 0, 0, 0];
            }
            vm.option.yAxis[index].axisLabel.padding[3] = Number(value);
        },
        "config.option.yAxis[n].axisLabel.offset.y": function ({ vm, value, index }) {
            if (vm.option[index].axisLabel.padding) {
              vm.option[index].axisLabel.padding = [0, 0, 0, 0];
            }
            vm.option[index].axisLabel.padding[0] = Number(value);
        },
         //  待处理
        "config.option.yAxis[n].axisLabel.view.labelSize": function ({ vm, value, index }) {
            vm.option.yAxis[index].axisLabel.interval = value;
        },
        "config.option.yAxis[n].axisLabel.view.rotate": function({ vm, value, index }) {
            vm.option.yAxis[index].axisLabel.rotate = value;
        },
        // 待处理
        "config.option.yAxis[n].axisLabel.view.textSize": function ({vm, value, index}) {},
        "config.option.yAxis[n].axisLabel.font": function ({ vm, value, key, index }) {
           vm.option.yAxis[index].axisLabel[key] = value;
        },
          // yAxis.axisLine
        "config.option.yAxis[n].axisLine.type": function({vm, value, index}) {
          vm.option.yAxis[index].axisLine.lineStyle.type = value;
        },
        "config.option.yAxis[n].axisLine.color": function({vm, value, index}) {
          vm.option.yAxis[index].axisLine.lineStyle.color = value;
        },
        "config.option.yAxis[n].axisLine.width": function({vm, value, index}) {
          vm.option.yAxis[index].axisLine.lineStyle.width = value;
        },
         // yAxis.axisLine
        "config.option.yAxis[n].axisTick.type": function({vm, value, index}) {
          vm.option.yAxis[index].axisTick.lineStyle.width = value;
        },
        "config.option.yAxis[n].axisTick.color": function({vm, value, index}) {
          vm.option.yAxis[index].axisTick.lineStyle.color = value;
        },
        "config.option.yAxis[n].axisTick.size.width": function({vm, value, index}) {
          vm.option.yAxis[index].axisTick.lineStyle.width = value;
        },
        "config.option.yAxis[n].axisTick.size.length": function({vm, value, index}) {
          vm.option.yAxis[index].axisTick.length = value;
        },
        "config.option.yAxis[n].axisTick.direction": function ({ vm, value, index }) {
          vm.option.yAxis[index].axisTick.inside = value === "inside" ? true : false;
        },
           // yAxis.splitLine
        "config.option.yAxis[n].splitLine.type": function({ vm, value, index }) {
          vm.option.yAxis[index].splitLine.lineStyle.type = value;

        },
        "config.option.yAxis[n].splitLine.color":function({ vm, value, index }) {
          vm.option.yAxis[index].splitLine.lineStyle.color = value;
        } ,
        "config.option.yAxis[n].splitLine.width":function({ vm, value, index }) {
          vm.option.yAxis[index].splitLine.lineStyle.width = value;
        } ,
        // yAxis.name
        "config.option.yAxis[n].axisName.show": function ({ vm, value, index }) {
          if (value) {
            vm.option.yAxis[index].name = "";
          } else {
            vm.option.yAxis[index].name = vm.config.option.yAxis[index].axisName.name;
          }
        },
        "config.option.yAxis[n].axisName.name": function ({ vm, value, index }) {
          if (vm.config.option.yAxis[index].axisName.show) {
            vm.option.yAxis[index].name = value;
          } else {
            vm.option.yAxis[index].name = "";
          }
        },
        "config.option.yAxis[n].axisName.offset.x": function ({ vm, value, index }) {
          vm.option.yAxis[index].nameGap = value;
        },
        // 待处理
        "config.option.yAxis[n].axisName.offset.y": function ({ vm, value, index }) {},
        "config.option.yAxis[n].axisName.nameTextStyle": function ({vm, value, key, index}) {
          vm.option.yAxis[index].nameTextStyle[key] = value;
        },
        // ----------------------series--------------------
        "config.option.series[n].itemStyle.color": function ({vm, value, index}) {
          vm.option.series[index].itemStyle.color = value;
        },
        // 待处理
        "config.option.series[n].itemStyle.hightlight": function ({vm, value, index}) {},
        // 待处理
        "config.option.series[n].extremalHightlight.show": function ({vm, value, index}) {},
        // 待处理
        "config.option.series[n].extremalHightlight.type": function ({vm, value, index}) {},
        "config.option.series[n].label.offset.x": function ({vm, value, index}) {
          if(!vm.option.series[index].label.offset) {
            vm.option.series[index].label.offset = [0, 0];
          }
           vm.option.series[index].label.offset[0] = value;
        },
        "config.option.series[n].label.offset.y": function ({vm, value, index}) {
          if(!vm.option.series[index].label.offset) {
            vm.option.series[index].label.offset = [0, 0];
          }
           vm.option.series[index].label.offset[1] = value;
        },
        // ---------------------legend-------------------
        // 待处理
        "config.option.legend.padding": function ({vm, value}) {

        },
        "config.option.legend.itemSize": function ({vm, value}) {
          vm.option.legend.itemWidth = value;
          vm.option.legend.itemHeight = value;
        },
        "config.option.legend.textStyle": function ({vm, value, key}) {
          vm.option.legend.itemWidth = value;
          vm.option.legend.itemHeight = value;
        },
         "config.option.legend.textStyle": function ({vm, value, key}) {
          vm.option.legend.itemWidth = value;
          vm.option.legend.itemHeight = value;
        },
        // layout 没处理
        // -----------------------tooltip.axisPointer-----------
        "config.option.tooltip.axisPointer.show": function ({vm, value }) {
          if(value) {
            vm.option.tooltip.axisPointer.type = vm.config.option.tooltip.axisPointer.type;
          } else {
            vm.option.tooltip.axisPointer.type = 'none';
          }
        },
        "config.option.tooltip.axisPointer.show": function ({vm, value }) {
          if(vm.config.option.tooltip.axisPointer.show) {
            vm.option.tooltip.axisPointer.type = value;
          } else {
            vm.option.tooltip.axisPointer.type = 'none';
          }
        },
        "config.option.tooltip.tooltip.show": function ({vm, value }) {
          vm.option.tooltip.show = value;
        },
        // 暂定：offset属性不存在
        "config.option.tooltip.tooltip.offset.x": function ({vm, value }) {},
        "config.option.tooltip.tooltip.offset.y": function ({vm, value }) {},

        "config.option.tooltip.tooltip.size.width": function ({vm, value }) {
           vm.option.tooltip.extraCssText = `width:${value}px`;
        },
        "config.option.tooltip.tooltip.size.height": function ({vm, value }) {
          vm.option.tooltip.extraCssText = `height:${value}px`;
        },
        // 暂定padding 接收的格式[0,0,0,0]
        "config.option.tooltip.tooltip.padding": function ({vm, value }) {
          vm.option.tooltip.padding = [`${value}`];
        },

        "config.option.tooltip.tooltip.iconSize": function ({vm, value }) {
          vm.option.tooltip.formatter = function(params) {
            let result = '';
            params.forEach( function(item) {
              const DomHtml = item.marker;
              let Dom = DomHtml.replace(/width:[\d|px]*/,`width:${value}px`);
              Dom = Dom.replace(/height:[\d|px]*/,`height:${value}px`);
              result += Dom + item.seriesName + ' ' + item.name;
            })　　　
　　　      return result;
          }
        },

        "config.option.tooltip.title.show": function ({vm, value }) {
          vm.option.tooltip.formatter = function(params) {
            let result = '';
            params.forEach(function(item){
              const DomHtml = item.marker;
              let Header = item.seriesName;
              let Content = DomHtml + ' '+ item.name;
              if(value === true){
                result = `<div><header>${Header}</header><span>${Content}</span></div>`
              }else{
                result = `<div><span>${Content}</span></div>`
              }
            })
            return result;
          }
        },
        "config.option.tooltip.title.content": function ({vm, value }) {
          vm.option.tooltip.formatter = function(params) {
            let result = '';
            params.forEach(function(item){
              const DomHtml = item.marker;
              let Header = value;
              let Content = DomHtml + ' '+ item.name;
              if(vm.option.tooltip.show !== false){
                result = `<div><header>${Header}</header><span>${Content}</span></div>`
              }else{
                result = `<div><span>${Content}</span></div>`
              }
            })
            return result;
          }
        },
        "config.option.tooltip.title.textStyle": function ({vm, value, key }) {
          let newValue;
          if(key !== 'color'){
              newValue= `${value}px`;
          }else{
            newValue = value;
          }
          let newKey  = key.split('');
          // 将字符串转为数组
          for (var i = 0; i < newKey.length; i++) {
            // 找到大写字母
            if (newKey[i].search(/[A-Z]/) != -1) {
              newKey[i] = `-${newKey[i].toLowerCase()}`;
            }
          };
          newKey = newKey.join('');

          vm.option.tooltip.formatter = function(params) {
            let result = '';
            params.forEach(function(item){
              const DomHtml = item.marker;
              let Header = item.seriesName;
              let Content = DomHtml + ' '+ item.name;
              if(vm.option.tooltip.show !== false){
                result = `<div><header style="${newKey}:${newValue}">${Header}</header><p>${Content}</p></div>`;
              }else{
                result = `<div><p>${Content}</p></div>`;
              }
            })
            return result;
          }
        },
        "config.option.tooltip.title.offset.x": function ({vm, value, key }) {
          vm.option.tooltip.formatter = function(params) {
            let result = '';
            params.forEach(function(item){
              const DomHtml = item.marker;
              let Header = item.seriesName;
              let Content = DomHtml + ' '+ item.name;
              if(vm.option.tooltip.show !== false){
                result = `<div style="position: absolute;"><header style="left:${value}">${Header}</header><p>${Content}</p></div>`
              }else{
                result = `<div><p>${Content}</p></div>`
              }
            })
            return result;
          }
        },
        "config.option.tooltip.title.offset.y": function ({vm, value, key }) {
           vm.option.tooltip.formatter = function(params) {
            let result = '';
            params.forEach(function(item){
              const DomHtml = item.marker;
              let Header = item.seriesName;
              let Content = DomHtml + ' '+ item.name;
              if(vm.option.tooltip.show !== false){
                result = `<div style="position: absolute;"><header style="top:${value}">${Header}</header><p>${Content}</p></div>`
              }else{
                result = `<div><p>${Content}</p></div>`
              }
            })
            return result;
          }
        },
        "config.option.tooltip.series.textStyle": function ({vm, value, key }) {
          vm.option.tooltip.formatter = function(params) {
            let result = '';
            params.forEach(function(item){
              const DomHtml = item.marker;
              let Header = item.seriesName;
              let Content = DomHtml + ' '+ item.name;
              if(vm.option.tooltip.show !== false){
                result = `<div><header>${Header}</header><p>${Content}</p></div>`
              }else{
                result = `<div><p>${Content}</p></div>`
              }
            })
            return result;
          }
          vm.option.tooltip.textStyle[key] = value;
        },
        "config.option.tooltip.series.value.show": function ({vm, value }) {

        },
        "config.option.tooltip.series.value.precision": function ({vm, value }) {},
        "config.option.tooltip.series.value.gap": function ({vm, value }) {},
        "config.option.tooltip.series.value.extendColor": function ({vm, value }) {},
        "config.option.tooltip.series.value.textStyle": function ({vm, value, key }) {},


        // const
      },
      toStringfn: Object.prototype.toString,
      replacefn: String.prototype.replace,
    };
  },
  methods: {
     //组件加载时调用一次
    init() {
      if (!this.$el) return;
      this.echart = echarts.init(this.$el);
      this.initCharts();
    },
    // 初始化数据显示
    initCharts(){
      if (this.echart) {
        try {
          const option = this.option;
          this.echart.setOption(option, true);
        } catch (error) {
          console.log(error);
        }
      }
    },
    // 组件配置和数据源发生变化事调用，只有一个有变化时，另外一个为null
    updateDataset(config, datasource) {
      // 组件的option发生变化时调用
      this.initCharts();
    },

    assignment() {},
    //组件销毁时调用
    destroy() {
      //组件销毁时调用
    },

    // 统一的事件注册方法
    addEventListener(eventName, triggerElement, interactionId) {
      if (!triggerElement) {
        // 触发全局
        let callbackList = this.eventList[eventName] || [];
        callbackList.push(() => {
          this.$emit(
            "executeComponentInteraction",
            this.instanceId,
            interactionId,
            JSON.parse(JSON.stringify(this.dataset))
          );
        });
        this.$set(this.eventList, eventName, callbackList);
        const eventNameId = eventName + "Id";
        let callbackIdList = this.eventList[eventNameId] || [];
        callbackIdList.push(interactionId);
        this.$set(this.eventList, eventNameId, callbackList);
      } else {
        this.echart.off(eventName);
        this.echart.on(eventName, triggerElement, () => {
          this.$emit(
            "executeComponentInteraction",
            this.instanceId,
            interactionId,
            eventName,
            JSON.parse(JSON.stringify(this.dataset))
          );
        });
      }

      // 可以根据需要单独处理
    },

    // 统一的事件注册方法
    removeEventListener(eventName, triggerElement, interactionId) {
      if (!triggerElement) {
        // 触发全局
      }
    },
  },
  mounted(){
    console.log('props',this.$props)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.resafety-system-echart-riangularcone-bar {
  position: absolute;
  left: var(--left);
  top: var(--top);
  width: var(--width);
  height: var(--height);
  padding: var(--padding);
  background-color: var(--backgroundColor);
  border: var(--border);
  opacity: var(--opcity);
  box-sizing: border-box;
  &>div{
    width: 100%;
    height: 100%;
  }
}
</style>
