import React from "react";
import ReactECharts from 'echarts-for-react';

export default function Echarts() {
  // prettier-ignore
  let dataAxis = ['TCS', 'INFOSYS', 'ZOHO', 'WIPRO', 'LARGSTONE']
  // prettier-ignore
  let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
  let yMax = 500;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  const option = {
    title: {

    },
    xAxis: {
      data: dataAxis,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,

        data: data
      }
    ]
  };
  // Enable data zoom when user click bar.

  return (
    <>
      <ReactECharts option={option} />
    </>);
}
