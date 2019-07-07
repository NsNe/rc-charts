(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/box.mdx":function(e,t,a){"use strict";a.r(t);var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=a("react"),l=a.n(r),A=a("./node_modules/@mdx-js/react/dist/index.es.js"),o=a("./node_modules/docz/dist/index.esm.js"),i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b=a("./node_modules/classnames/index.js"),c=a.n(b),y=a("./node_modules/bizcharts/umd/BizCharts.js"),d=a("./node_modules/@antv/data-set/build/data-set.js"),g=a("./node_modules/awe-utils/dist/index.esm.js");"undefined"!==typeof IDataItem&&IDataItem&&IDataItem===Object(IDataItem)&&Object.isExtensible(IDataItem)&&Object.defineProperty(IDataItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IDataItem",filename:"src/box/box-chart.tsx"}}),"undefined"!==typeof IBoxChartProps&&IBoxChartProps&&IBoxChartProps===Object(IBoxChartProps)&&Object.isExtensible(IBoxChartProps)&&Object.defineProperty(IBoxChartProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IBoxChartProps",filename:"src/box/box-chart.tsx"}});var u=function(e){var t=e.className,a=e.style,n=e.data,r=e.height,A=e.colors,o=e.borderWidth,b=e.valueSection,u=e.outlierColor,O=e.xAxis,j=e.yAxis,m=e.legend,p=e.tooltip,B=e.padding,x=e.title,E=!1;n.map(function(e,t){return e.hasOwnProperty("outliers")&&(E=!0),t});var h={};n.map(function(e,t){return e.hasOwnProperty("x")&&void 0===h[e.x]&&(h[e.x]=A[Object.keys(h).length]),t});var I={};b&&b.length>1&&(I.bin={min:b[0],max:b[1]},I.outliers={min:b[0],max:b[1]});var k=l.a.useState([]),Y=Object(s.a)(k,2),C=Y[0],D=Y[1];return l.a.useEffect(function(){if(Object(g.a)(n)){if(!n[0])return;var e=Object.keys(n[0]).filter(function(e){return"x"!==e&&"key"!==e&&"outliers"!==e}),t=[];n.map(function(a,n){var r={};return e.forEach(function(e){(r={}).x=a.x,r.key=a.key,r.value=a[e],t.push(r)}),n});var a=new d.DataView;a.source(t).transform({type:"bin.quantile",field:"value",as:"bin",groupBy:["x","key"]}),D(a)}},[e.data]),l.a.createElement("div",{className:c()(t,Object(i.a)({},"".concat("rc-line-chart"),!0)),style:a},x&&l.a.createElement("h4",null,x),l.a.createElement(y.Chart,{height:r,data:C,scale:I,padding:B,forceFit:!0},l.a.createElement(y.Axis,Object.assign({key:"axis-x",name:"x"},O)),l.a.createElement(y.Axis,Object.assign({key:"axis-y",name:"value"},j)),l.a.createElement(y.Tooltip,p),l.a.createElement(y.Legend,m),l.a.createElement(y.Geom,{type:"schema",position:"key*bin",size:o,color:["x",function(e){return h[e]}],style:["x",{stroke:"rgba(0, 0, 0, 0.45)",fill:function(e){return h[e]},fillOpacity:.3}],shape:"box",adjust:"dodge"}),E?l.a.createElement(y.View,{data:n},l.a.createElement(y.Geom,{type:"point",position:"key*outliers",shape:"circle",color:["x",u],size:3,active:!1,adjust:"dodge"})):""))};u.defaultProps={data:[],height:400,colors:[],borderWidth:20,valueSection:[],outlierColor:[],xAxis:{},yAxis:{},legend:{},tooltip:{},padding:"auto"};var O=u;u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxChart",filename:"src/box/box-chart.tsx"}}),"undefined"!==typeof IDataItem&&IDataItem&&IDataItem===Object(IDataItem)&&Object.isExtensible(IDataItem)&&Object.defineProperty(IDataItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IDataItem",filename:"src/box/index.tsx"}});var j=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxChart",filename:"src/box/index.tsx"}}),a.d(t,"default",function(){return B});var m={},p="wrapper";function B(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(A.b)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(A.b)("h1",{id:"box-charts"},"Box charts"),Object(A.b)("h2",{id:"\u57fa\u7840\u7bb1\u578b\u56fe"},"\u57fa\u7840\u7bb1\u578b\u56fe"),Object(A.b)(o.c,{__position:0,__code:"<Box\n  data={[\n    { x: '\u4e09\u6708', key: '\u70b9\u8d5e\u91cf', y1: 5, y2: 9, y3: 16, y4: 24, y5: 29 },\n    { x: '\u4e09\u6708', key: '\u8bc4\u8bba\u91cf', y1: 5, y2: 6, y3: 15, y4: 20, y5: 23 },\n    { x: '\u4e09\u6708', key: '\u4e0b\u8f7d\u91cf', y1: 5, y2: 6, y3: 15, y4: 20, y5: 23 },\n  ]}\n  height={400}\n  colors={['rgb(28, 146, 255)']}\n  borderWidth={40}\n  valueSection={[0, 50]}\n  padding={[40, 50, 95, 50]}\n  title={'\u57fa\u7840\u7bb1\u578b\u56fe'}\n  legend={{\n    marker: 'circle',\n    position: 'top',\n  }}\n  tooltip={{\n    showTitle: false,\n  }}\n/>",__scope:{props:this?this.props:a,Playground:o.c,Props:o.d,Box:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZr28LDZXaAABcg_GFOBJGqAiIPYQNJTIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnOSABYVPYAA2FS1PWMBgIAMW9aBEjk_hnEOBEHUwGChH4JYiGoSg4E0hFTOrcyaGcCBcMudgAEZdPU-QuJ4qYAEE5lE9gIyg6joHQMN2HkDlRLEFLoxkdgUWEmBuGAPDBNKuB5C3GtgHSqBMuCAAyFrxkSeZKGaRrmvMbgBrlMBkMlAZUHadgAH4NgysMI1yq5erDGLqykGQqzfMwYXVY4YDAMIoCmea8oK1bEuXasExYggcAszIUivAg6prWsSKwFcXvQaJXHKgBtD6XvE9gsDkwBIOUACHM1PYbYYFsuVAE6HQA9WMAecSocScKrgAViWRIACYrgAThxpMrnCwycd0q5cailpMapgnsvUwHAagkG5QhqGYbh9pABHowAu6NRnGMfYbGWnxozidJ0XEkp9hcfknG6blpNGYBl7WbByGli5uTAGg5QBfeMFlphel8XyZaEmIul2X5cVqmVaUNX2AAXRW5mLE2CAUkIcrdPk-S3fdqgoCFOA_s6FIPAjXGAA4lki83ccxzGOXaV2na8AQpwAdS4CZfYDp3WHiBlnC2btUD-hWRfk9PLsBzTOwKP6_aWTHq4J0X27r93xheWByvaQAv9UAAQ9AEbvQBo9UAP7V2kD5nYDSDByok-vmakmGyzlcgIAEchfSZ3u-28l4xrkiIZn83v5DnwGIkoQ6IBmZenYsOBhhGSx-7C_aoDgGAD-ZtfAGm4VxSGurde6j06pSHOhtMwX4QC-W2K4NI_44DUEAroECBgwIrwsPwVA3pGRIHYPwH4xZqgZHND-MkxCD78FYBkfI1B-BXH4PJHAHD5LuXWPwco5B-gzArqw0hIB4rFUIrAaEWBvS0N2mSSgiRcx5AKBOTU5pyF_FLDw6s_AohoBEfwVQ2A0E6PwSATA8xwzcQgPAEReCaz8FNJKQxIAAB6ZMcAxxwEmMxjjBDqKtK4jxhkvE-P4OsFa8gEEUO8B8agkAUhoIwdoLB-gGASRALQH0WRWFkNNLQc0ziLSzBmPwaJ195BAA",mdxType:"Playground"},Object(A.b)(j,{data:[{x:"\u4e09\u6708",key:"\u70b9\u8d5e\u91cf",y1:5,y2:9,y3:16,y4:24,y5:29},{x:"\u4e09\u6708",key:"\u8bc4\u8bba\u91cf",y1:5,y2:6,y3:15,y4:20,y5:23},{x:"\u4e09\u6708",key:"\u4e0b\u8f7d\u91cf",y1:5,y2:6,y3:15,y4:20,y5:23}],height:400,colors:["rgb(28, 146, 255)"],borderWidth:40,valueSection:[0,50],padding:[40,50,95,50],title:"\u57fa\u7840\u7bb1\u578b\u56fe",legend:{marker:"circle",position:"top"},tooltip:{showTitle:!1},mdxType:"Box"})),Object(A.b)("h2",{id:"\u5206\u7ec4\u7bb1\u578b\u56fe"},"\u5206\u7ec4\u7bb1\u578b\u56fe"),Object(A.b)(o.c,{__position:1,__code:"<Box\n  data={[\n    { x: '\u4e09\u6708', key: '\u70b9\u8d5e\u91cf', y1: 1, y2: 9, y3: 16, y4: 24, y5: 29 },\n    { x: '\u4e09\u6708', key: '\u8bc4\u8bba\u91cf', y1: 1, y2: 6, y3: 15, y4: 20, y5: 23 },\n    { x: '\u4e09\u6708', key: '\u4e0b\u8f7d\u91cf', y1: 1, y2: 6, y3: 15, y4: 20, y5: 23 },\n    { x: '\u56db\u6708', key: '\u70b9\u8d5e\u91cf', y1: 2, y2: 11, y3: 20, y4: 28, y5: 33 },\n    { x: '\u56db\u6708', key: '\u8bc4\u8bba\u91cf', y1: 3, y2: 12, y3: 19, y4: 27, y5: 35 },\n    { x: '\u56db\u6708', key: '\u4e0b\u8f7d\u91cf', y1: 3, y2: 12, y3: 19, y4: 27, y5: 35 },\n    { x: '\u4e94\u6708', key: '\u70b9\u8d5e\u91cf', y1: 2, y2: 11, y3: 20, y4: 28, y5: 33 },\n    { x: '\u4e94\u6708', key: '\u8bc4\u8bba\u91cf', y1: 3, y2: 12, y3: 19, y4: 27, y5: 35 },\n    { x: '\u4e94\u6708', key: '\u4e0b\u8f7d\u91cf', y1: 3, y2: 12, y3: 19, y4: 27, y5: 35 },\n  ]}\n  height={400}\n  colors={['rgb(28, 146, 255)', 'rgb(77, 201, 115)', 'red']}\n  borderWidth={30}\n/>",__scope:{props:this?this.props:a,Playground:o.c,Props:o.d,Box:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZr28LDZXaAABcg_GFOBJGqAiIPYQNJTIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnOSABYVPYAA2FS1PWMBgIAMW9aBEjk_hnEOBEHUwGChH4JYiGoSg4E0hFTOrcyaGcCBcMudgAEZdPU-QuJ4qYAEE5lE9gIyg6joHQMN2HkDlRLEFLoxkdgUWEmBuGAPDBNKuB5C3GtgHSqBMuCAAyFrxkSeZKGaRrmvMbgBrlMBkMlAZUHadgAH4NgysMI1yq5erDGLqykGQqzfMwYXVY4YDAMIoCmea8oK1bEuXasExYggcAszIUivAg6prWsSKwFcXvQaJXHKgBtD6XvE9gsDkwBIOUACHM1PYbYYFsuVAE6HQA9WMAecSocScKrnCpZEgAJiuABObGk0xwzsd0q4cailoAFYKfx7L1MBwGoJBuUIahmG4faQAR6MALujUexjGIuxvGjKJzHqbJin5Ox2n2BxpMGYBl6WbByGlk5uTAGg5QBfeIFlohaxlpRdJlpiYiyWWnJ-WZZpinFaUZX6uBuTAG21dXodhuSkf19GKZFzGjcSc2cdtxJrZxgAOWWriTB3GaZ53Wfad2Oa9uU-d9oWkwDiKcfFiLCatimAHYY6U6mlcuxPVblVONfT9pdaz2Pc_C_Ozcxovw9L8uk0rx3q6Z2v2kAFLkPc1hGUbRoWO9xwOC9DqX5eju2lPjp2LBH8e065zOZ9b43Mbn83wu7iOy7X_uq8TpO5J3huuebg-lLbk-u-XnHL8SOXr8H2-AC6K1b6bAgCkQg5VdLyXksAxOVAoBCjgH9ToKQPARijksSKpscbU2phyKGKC0El0vqHI24Vwp4IIV0dA7QgFOy8AIKcAB1LgExypJhgQDTcK4pDXVuvdR6dUpDnQ2mYL8IBfLbFcGkf8cBqCAV0CBAwYEJLVn4Kgb0jIkDsH4D8Ys1QMjmh_GSLRCd-CsAyPkag_Arj8Hkjgex8l3LrH4OUcg_QZjdn9No_g8ViqEVgNCLA3oTG7TJJQRIuY8gFAnJqc0ei_ilmcWokAUQ0A2J0SocMGg4DJIsK4mA8xwzcQgPADJqiXr8FNJKDJ_AAB64VDI4EjjgJMeSaxVLiVaWpIAGlNJaW0kA6wVryHEfo7wHxqCQBSLI-R2hFH6AYBJEAtAfRZBsbo00tBzTVItLMGY_BRnyGOUAA",mdxType:"Playground"},Object(A.b)(j,{data:[{x:"\u4e09\u6708",key:"\u70b9\u8d5e\u91cf",y1:1,y2:9,y3:16,y4:24,y5:29},{x:"\u4e09\u6708",key:"\u8bc4\u8bba\u91cf",y1:1,y2:6,y3:15,y4:20,y5:23},{x:"\u4e09\u6708",key:"\u4e0b\u8f7d\u91cf",y1:1,y2:6,y3:15,y4:20,y5:23},{x:"\u56db\u6708",key:"\u70b9\u8d5e\u91cf",y1:2,y2:11,y3:20,y4:28,y5:33},{x:"\u56db\u6708",key:"\u8bc4\u8bba\u91cf",y1:3,y2:12,y3:19,y4:27,y5:35},{x:"\u56db\u6708",key:"\u4e0b\u8f7d\u91cf",y1:3,y2:12,y3:19,y4:27,y5:35},{x:"\u4e94\u6708",key:"\u70b9\u8d5e\u91cf",y1:2,y2:11,y3:20,y4:28,y5:33},{x:"\u4e94\u6708",key:"\u8bc4\u8bba\u91cf",y1:3,y2:12,y3:19,y4:27,y5:35},{x:"\u4e94\u6708",key:"\u4e0b\u8f7d\u91cf",y1:3,y2:12,y3:19,y4:27,y5:35}],height:400,colors:["rgb(28, 146, 255)","rgb(77, 201, 115)","red"],borderWidth:30,mdxType:"Box"})),Object(A.b)("h2",{id:"\u57fa\u7840\u7bb1\u578b\u56fe\u5f02\u5e38"},"\u57fa\u7840\u7bb1\u578b\u56fe(\u5f02\u5e38)"),Object(A.b)(o.c,{__position:2,__code:"<Box\n  data={[\n    {\n      x: '\u4e09\u6708',\n      key: '\u70b9\u8d5e\u91cf',\n      y1: 5,\n      y2: 9,\n      y3: 16,\n      y4: 24,\n      y5: 29,\n      outliers: [33, 35],\n    },\n    {\n      x: '\u4e09\u6708',\n      key: '\u8bc4\u8bba\u91cf',\n      y1: 5,\n      y2: 6,\n      y3: 15,\n      y4: 20,\n      y5: 23,\n      outliers: [30],\n    },\n    {\n      x: '\u4e09\u6708',\n      key: '\u4e0b\u8f7d\u91cf',\n      y1: 5,\n      y2: 6,\n      y3: 15,\n      y4: 20,\n      y5: 23,\n      outliers: [2, 30, 34, 36],\n    },\n  ]}\n  height={400}\n  colors={['rgb(77, 201, 115)']}\n  borderWidth={40}\n  valueSection={[0, 50]}\n  outlierColor={['red']}\n/>",__scope:{props:this?this.props:a,Playground:o.c,Props:o.d,Box:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZr28LDZXaAABcg_GFOBJGqAiIPYQNJTIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnOSABYVPYAA2FS1PWMBgIAMW9aBEjk_hnEOBEHUwGChH4JYiGoSg4E0hFTOrcyaGcCBcMudgAEZdPU-QuJ4qYAEE5lE9gIyg6joHQMN2HkDlRLEFLoxkdgUWEmBuGAPDBNKuB5C3GtgHSqBMuCAAyFrxkSeZKGaRrmvMbgBrlMBkMlAZUHadgAH4NgysMI1yq5erDGLqykGQqzfMwYXVY4YDAMIoCmea8oK1bEuXasExYggcAszIUivAg6prWsSKwFcXvQaJXHKgBtD6XvEgHAfYLA5MASDlAAhzfyQZB7YYFsuVAE6HQA9WMAecSYdhl7EnCq4AFZ1Kx7GACYrgATkJomLESJMrnCwzKapxJdKuYmouBwHEjx1mKY5l79igCAMnudhfqTJMliTPGAF1GdhpQ-aBy6ibBuUocxqn4cR9pABHowAu6IxuWsZx_GjdhxJSaMs2QZpumCcV6mWfYYn5OtznuediWHb2cJBeFq4xfk2XFYV5WQYksPYdV9p1bdl6tbkwBoOUAX3jDe9k32HtyObcthn09piKs6px3Wdd9OPeJr3s8BgWhYEEXfuJyXXaUqKlMM4Pq4sUOsellasc2CAUkIcrdPk-T-9hqgoCFOA_s6FIPAjAB2Zelhd8KlnC8K8Y5do-45rwBCnAB1LgJlHieOdYeIGWcLZu1QP6W7xoPJ5B2uMkcGeBHnrp0H3u_Gsm4VxSGurde6j06pSHOhtMwX4QC-W2K4NI_44DUEAroECBgwIRwsPwVA3pGRIHYPwH4xZqgZHND-MkxDKb8FYMLMa_Arj8Hkjgdh8l3LrH4OUcg_QZiPxYaQkA8ViqEVgNCLA3paG7TJJQRIuY8gFAnJqc05C_ilm4dWfgUQ0DCP4KobAaDtH4JAJgeY4ZuJCzgMIvBNZ-CmklAYkAAA9emOAAAcOAkymIcYINRVoXHuMMl4nx_B1grXkAgih3gPjUEgCkNBGDtBYP0AwCSIBaA-iyCwshppaDmicRaWYMx-DRPkJUoAA",mdxType:"Playground"},Object(A.b)(j,{data:[{x:"\u4e09\u6708",key:"\u70b9\u8d5e\u91cf",y1:5,y2:9,y3:16,y4:24,y5:29,outliers:[33,35]},{x:"\u4e09\u6708",key:"\u8bc4\u8bba\u91cf",y1:5,y2:6,y3:15,y4:20,y5:23,outliers:[30]},{x:"\u4e09\u6708",key:"\u4e0b\u8f7d\u91cf",y1:5,y2:6,y3:15,y4:20,y5:23,outliers:[2,30,34,36]}],height:400,colors:["rgb(77, 201, 115)"],borderWidth:40,valueSection:[0,50],outlierColor:["red"],mdxType:"Box"})),Object(A.b)("h2",{id:"api"},"API"),Object(A.b)("table",null,Object(A.b)("thead",{parentName:"table"},Object(A.b)("tr",{parentName:"thead"},Object(A.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(A.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(A.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(A.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(A.b)("tbody",{parentName:"table"},Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"height"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6307\u5b9a\u56fe\u8868\u7684\u9ad8\u5ea6\uff0c\u5355\u4f4d\u4e3a 'px'"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"400")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"data"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u56fe\u8868\u7684\u6570\u636e\u6e90"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"Array"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"[]")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"colors"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u989c\u8272"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"string[]"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"--")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"borderWidth"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7ebf\u7684\u5bbd\u5ea6"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"2")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"valueSection"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"y\u8f74\u5750\u6807\u533a\u95f4"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"number[]"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"[]")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"outlierColor"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5f02\u5e38\u503c\u70b9\u7684\u989c\u8272"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"string[]"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"--")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"padding"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5185\u8fb9\u8ddd\u5c5e\u6027"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"number[]"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"auto")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"xAxis"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"x\u5750\u6807\u8f74\u7684\u914d\u7f6e"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"object"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"{}")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"yAxis"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"y\u5750\u6807\u8f74\u7684\u914d\u7f6e"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"object"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"{}")),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"legend"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u56fe\u4f8b\u6837\u5f0f"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"object"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"{}")))))}B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/box.mdx"}}),B.isMDXComponent=!0}}]);