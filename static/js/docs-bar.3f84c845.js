(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/bar.mdx":function(e,A,n){"use strict";n.r(A);var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("react"),a=n.n(o),r=n("./node_modules/@mdx-js/react/dist/index.es.js"),i=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),B=n("./node_modules/classnames/index.js"),c=n.n(B),g=n("./node_modules/awe-utils/dist/index.esm.js"),m=n("./node_modules/@antv/data-set/build/data-set.js"),p=n("./node_modules/bizcharts/umd/BizCharts.js"),u=n("./src/components/title.tsx"),y=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function x(e){return Array.isArray(e)}function b(){for(var e=arguments.length,A=new Array(e),n=0;n<e;n++)A[n]=arguments[n];return A.reduce(function(e,A){return e+=x(A)?b.apply(void 0,Object(y.a)(A)):A},0)}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArray",filename:"src/utils/utils.ts"}}),b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"sum",filename:"src/utils/utils.ts"}});"undefined"!==typeof IDataItem&&IDataItem&&IDataItem===Object(IDataItem)&&Object.isExtensible(IDataItem)&&Object.defineProperty(IDataItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IDataItem",filename:"src/bar/bar-chart.tsx"}}),"undefined"!==typeof IBarProps&&IBarProps&&IBarProps===Object(IBarProps)&&Object.isExtensible(IBarProps)&&Object.defineProperty(IBarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IBarProps",filename:"src/bar/bar-chart.tsx"}});var E=p.Guide.Line,j=function(e){var A=e.className,n=e.type,t=e.scale,o=e.style,r=e.title,i=e.titlePosition,B=e.height,y=e.xAxis,x=e.yAxis,j=e.mini,D=e.colors,w=e.label,I=e.tooltip,O=e.meanLine,Y=e.showLabel,h=e.legend,M=e.padding,C=e.direction,Q=e.titleMap,S=e.borderWidth,f=e.data,T=a.a.useState(null),R=Object(d.a)(T,2),Z=R[0],k=R[1],P=a.a.useState([]),K=Object(d.a)(P,2),G=K[0],U=K[1],F=Object(g.a)(f)?f:[];a.a.useEffect(function(){if(Object(g.a)(f)){var e=f[0];if(!e)return;var A=Object.keys(e).filter(function(e){return"x"!==e});if(O){var n=A.map(function(e){var A=F.map(function(A,n){return F[n][e]});return{value:(b(A)/A.length).toFixed(0),text:Q[e]||e}});U(n)}var t=new m.DataView;t.source(F).transform({type:"map",callback:function(e){var n=Object(l.a)({},e);return A.forEach(function(A){n[Q[A]]=e[A]}),n}}).transform({type:"fold",fields:A.map(function(e){return Q[e]}),key:"key",value:"value"}),k(t)}},[e.data,e.meanLine]);var L=a.a.useMemo(function(){return O&&G.length?a.a.createElement(p.Guide,null,G.map(function(e,A){var n=["start",e.value],t=["end",e.value];return a.a.createElement(E,Object.assign({top:!0,key:A,start:n,end:t,lineStyle:{stroke:"#595959",lineWidth:1,lineDash:[3,3]},text:{position:"start",style:{fill:"#595959",fontSize:12,fontWeight:300},content:"".concat(1===G.length?"":e.text,"\u5747\u503c\u7ebf")}},O))})):null},[e.meanLine,e.data,G]);return console.log(L),a.a.createElement("div",{className:c()(A,Object(s.a)({},"".concat("rc-bar-chart"),!0)),style:o},a.a.createElement(u.a,{text:r,position:i}),a.a.createElement(p.Chart,{height:B,padding:M,data:Z,scale:t,forceFit:!0},!j&&a.a.createElement(p.Axis,Object.assign({key:"axis-x",name:"x"},y)),!j&&a.a.createElement(p.Axis,Object.assign({key:"axis-y",name:"value"},x)),!j&&a.a.createElement(p.Legend,Object.assign({name:"key",position:"top"},h)),L,a.a.createElement(p.Coord,{transpose:"horizontal"===C}),a.a.createElement(p.Tooltip,I),a.a.createElement(p.Geom,{type:n,position:"x*value",color:D?["key",D]:"key",size:S||void 0},Y&&"interval"===n&&a.a.createElement(p.Label,Object.assign({content:["key*value",function(e,A){return A}]},w)))))};j.defaultProps={height:400,type:"interval",direction:"vertical",titlePosition:"left",titleMap:{},mini:!1,showLabel:!1,padding:"auto"};var D=j;j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BarChart",filename:"src/bar/bar-chart.tsx"}}),"undefined"!==typeof IBarProps&&IBarProps&&IBarProps===Object(IBarProps)&&Object.isExtensible(IBarProps)&&Object.defineProperty(IBarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IBarProps",filename:"src/bar/index.tsx"}});var w=D;"undefined"!==typeof D&&D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BarChart",filename:"src/bar/index.tsx"}}),n.d(A,"default",function(){return Y});var I={},O="wrapper";function Y(e){var A=e.components,n=Object(t.a)(e,["components"]);return Object(r.b)(O,Object.assign({},I,n,{components:A,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"linechart"},"LineChart"),Object(r.b)("h2",{id:"\u57fa\u7840\u67f1\u72b6\u56fe"},"\u57fa\u7840\u67f1\u72b6\u56fe"),Object(r.b)(i.c,{__position:0,__code:"<Bar\n  data={[\n    { x: '1951', y1: 20 },\n    { x: '1952', y1: 10 },\n    { x: '1953', y1: 20 },\n    { x: '1954', y1: 100 },\n    { x: '1955', y1: 10 },\n    { x: '1956', y1: 50 },\n  ]}\n  titleMap={{\n    y1: '\u9500\u552e\u989d',\n  }}\n/>",__scope:{props:this?this.props:n,Playground:i.c,Bar:w},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1cI4jVldoAAFyD8YU4EkDwiNwiD2EDSV0NI01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ1kgAWZT2AANmU1T1jAYCADFvWgRJZP4ZxDgRB1MBgoR-CWIhqEoOANIREzqzMmhnAgLDLnYABGHS1PkTjuKmABBOYRPYCMoMo6B0DDVCOREsRkujGR2BRISYG4YBsIE4q4HkLca2ANKoAy4IADImvGRJ5koZp6sa8xuD6uUwGQyUBlQdp2AAfg2dKwwjbKrm6sNourKQZCrN8zBhdVjhgMAwigKZZpyvLloS5dqwTZiCBwczMhSK8CBqmta0IgQVye9BolcUqAG03qesT2CwWSwoATgAVjC1SWjCq4ACYFKUP6nqgoG5VBsHYahxIYfChG1P-_6UeB8GkyxnH4dQ_GCdqwHibBnSyauMK5LxpGadR9p0bBxnccptmLCJtHwYMnmwdZ87_oAXSW6nxheWA9VmUrxIlgnsdkwAAVMAOlVAFyMvzZfkGX_s3FcpEu67bvumqpFOtazC_EAfO2Vw0n_OBqEA3QQIMMCVYsfhUG9RkkHYfgfmLaoMnNH8yWDqn-FYDJ8mofgrn4OScAzuS3PWfhynIfoZm7f0Q_4OLCrw2BoSwb1Y-2slKESXM8gKCdNXNcO_lLHPq34KI0FT0OVHDDQ4B7_2QEweZwy4iB4EHv2a34djRFLkAAD0woMnAAA4cCTcel8EdurUH_hN-3veD5AdYlvkB2I-8D5qEgFI3Y97Qvf0BhxJAWgfSyKnMOppaDmhXuaWYMx-D30NvIIAA",mdxType:"Playground"},Object(r.b)(w,{data:[{x:"1951",y1:20},{x:"1952",y1:10},{x:"1953",y1:20},{x:"1954",y1:100},{x:"1955",y1:10},{x:"1956",y1:50}],titleMap:{y1:"\u9500\u552e\u989d"},mdxType:"Bar"})),Object(r.b)("h2",{id:"\u57fa\u7840\u67f1\u72b6\u56fe---\u5747\u503c\u7ebf"},"\u57fa\u7840\u67f1\u72b6\u56fe - \u5747\u503c\u7ebf"),Object(r.b)(i.c,{__position:1,__code:"<Bar\n  data={[\n    { x: '1951', y1: 20 },\n    { x: '1952', y1: 10 },\n    { x: '1953', y1: 20 },\n    { x: '1954', y1: 100 },\n    { x: '1955', y1: 10 },\n    { x: '1956', y1: 50 },\n  ]}\n  meanLine={{}}\n  titleMap={{\n    y1: '\u9500\u552e\u989d',\n  }}\n/>",__scope:{props:this?this.props:n,Playground:i.c,Bar:w},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1cI4jVldoAAFyD8YU4EkDwiNwiD2EDSV0NI01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ1kgAWZT2AANmU1T1jAYCADFvWgRJZP4ZxDgRB1MBgoR-CWIhqEoOANIREzqzMmhnAgLDLnYABGHS1PkTjuKmABBOYRPYCMoMo6B0DDVCOREsRkujGR2BRISYG4YBsIE4q4HkLca2ANKoAy4IADImvGRJ5koZp6sa8xuD6uUwGQyUBlQdp2AAfg2dKwwjbKrm6sNourKQZCrN8zBhdVjhgMAwigKZZpyvLloS5dqwTZiCBwczMhSK8CBqmta0IgQVye9BolcUqAG03qesT2CwWSwoATgAVjC1SWjCq4ACYFKUP6nqgoG5VBsHYahxIYfChG1P-_6UeB8GkyxnH4dQ_GCdqwHibBnSyauMK5LxpGadR9p0bBxnccptmLCJtHwYMnmwdZ87_oAXSW6n2CPdwABk0BK4BgHkGXqZiAhYD1WZSvEiWCex2TAABUwA6VUAXIy_Nl9W_s3FcpEu67bvumqpFOtazC_EAfO2Vw0n_OBqEA3QQIMMCDYsfhUG9RkkHYfgfmLaoMnNH8yTjqn-FYDJ8mofgrn4OScGLuS3PWfhynIfoZm7f14_4OLCrw2BoSwb0M-2slKESXM8gKCdNXNJO_lLcvq34KI0ALhOVHDDQ4HHqOQEweZwy4iB4BnyOa34djRAbkAAD0woMnAAA4cCTJfd8EIerRn_gT7Py_r5AdYlvkb3k-8D5qEgFIgdg7aFDvoBg4kQC0B9FkAuidTS0HNPvc0swZj8C_ureQQA",mdxType:"Playground"},Object(r.b)(w,{data:[{x:"1951",y1:20},{x:"1952",y1:10},{x:"1953",y1:20},{x:"1954",y1:100},{x:"1955",y1:10},{x:"1956",y1:50}],meanLine:{},titleMap:{y1:"\u9500\u552e\u989d"},mdxType:"Bar"})),Object(r.b)("h2",{id:"\u57fa\u7840\u67f1\u72b6\u56fe-mini"},"\u57fa\u7840\u67f1\u72b6\u56fe mini"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"ant-design-pro \u793a\u4f8b")),Object(r.b)(i.c,{__position:2,__code:"<div style={{ width: 200 }}>\n  <Bar\n    height={46}\n    colors={['#1890FF']}\n    data={[\n      { x: '2019-07-07', y: 7 },\n      { x: '2019-07-08', y: 5 },\n      { x: '2019-07-09', y: 4 },\n      { x: '2019-07-10', y: 2 },\n      { x: '2019-07-11', y: 4 },\n      { x: '2019-07-12', y: 7 },\n      { x: '2019-07-13', y: 5 },\n      { x: '2019-07-14', y: 6 },\n      { x: '2019-07-15', y: 5 },\n      { x: '2019-07-16', y: 9 },\n      { x: '2019-07-17', y: 6 },\n      { x: '2019-07-18', y: 3 },\n      { x: '2019-07-19', y: 1 },\n      { x: '2019-07-20', y: 5 },\n      { x: '2019-07-21', y: 3 },\n      { x: '2019-07-22', y: 6 },\n      { x: '2019-07-23', y: 5 },\n    ]}\n    mini={true}\n    titleMap={{\n      y: '\u8bbf\u95ee\u91cf',\n    }}\n  />\n</div>",__scope:{props:this?this.props:n,Playground:i.c,Bar:w},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1cI4jVldoAAFyD8YU4EkDwiNwiD2EDSV0NI01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ1kgAWZT2AANmU1T1jAYCADFvWgRJZP4ZxDgRB1MBgoR-CWIhqEoOANIREzqzMmhnAgLDLnYABGHS1PkTjuKmABBOYRPYCMoMo6B0DDVCOREsRkujGR2BRISYG4YBsIE4q4HkLca2ANKoAy4IADImvGRJ5koZp6sa8xuD6uUwGQyUBlQdp2AAfg2dKwwjbKrm6sNourKQZCrN8zBhdVjhgMAwigKZZpyvLloS5dqwTZiCBwczMhSK8CBqmtawKorYFKqCcXQCYrgAJjkhT5GqlcnsYQiBGBp7fBgCAUkIUqdIMpbIchqgoCFOBSoAbXaABiMKAA4AE45PM8z2gAXSR5Ga3QaJXCxiHkagrBZL-sLCfNOSAHZOa51SWiuLnULU6nIeZ1m5PZ3nOfx_mbPYABWYXGbF9gWblNmOe5znCblq4dOV87RbEtWJal7WwrkvX2B-w3jdq02NclrWebCsLrYNpQVae8WnfN12futoWvaN0XffaTXpbCpNraVkP7YscPI4tnTrYMu2E6T52o4V2OM_trP_fNMKDOtwn8-NwuXeLvmlnl9P48zx2I-zi3Zbrq4kwrsPm-T13dY78Lu-pqvpb-vPG4L3vW55n73cHrvJ8r6ei5-wPB4bkWm_VlvV5jwe4630XKe99giDQCBStRBkqdFmICFgPVZne0-LHl9pAH7owA71MAecS_PtwGKtNwQxWrGFcUhLrXVuvdGqUhTprTMF-EAPltiuDSP-OA1BAK6BAgYMC4lqz8FQN6RkSB2D8B-MWaoGRzQ_jJKQre_BWAZHyNQfgVx-ByRwFwuSbl1j8HKOQfoMxuz-jIfwOKhU8KwGhFgb09DtpkkoIkXMeQCgTk1OaShfxSx8MISAKIaB2HkJUOGDQcA9EWAETAeY4YuIQHgMYghT1-DsVEOIkAAA9EuOB8Y4CTJYmsrjNFWmMfwbxBlfH-P4OsJa8gkFUO8B8agkAUgYKwdoHB-gGDiRALQH0WR2EUNNLQc0bjzSzBmPweJgN5BAA",mdxType:"Playground"},Object(r.b)("div",{style:{width:200}},Object(r.b)(w,{height:46,colors:["#1890FF"],data:[{x:"2019-07-07",y:7},{x:"2019-07-08",y:5},{x:"2019-07-09",y:4},{x:"2019-07-10",y:2},{x:"2019-07-11",y:4},{x:"2019-07-12",y:7},{x:"2019-07-13",y:5},{x:"2019-07-14",y:6},{x:"2019-07-15",y:5},{x:"2019-07-16",y:9},{x:"2019-07-17",y:6},{x:"2019-07-18",y:3},{x:"2019-07-19",y:1},{x:"2019-07-20",y:5},{x:"2019-07-21",y:3},{x:"2019-07-22",y:6},{x:"2019-07-23",y:5}],mini:!0,titleMap:{y:"\u8bbf\u95ee\u91cf"},mdxType:"Bar"}))),Object(r.b)("h2",{id:"\u5806\u53e0\u67f1\u72b6\u56fe"},"\u5806\u53e0\u67f1\u72b6\u56fe"),Object(r.b)(i.c,{__position:3,__code:"<Bar\n  data={[\n    { x: 'Jan', london: 18.9, berlin: 12.4 },\n    { x: 'Feb', london: 28.8, berlin: 23.2 },\n    { x: 'Mar', london: 39.3, berlin: 34.5 },\n    { x: 'Apr', london: 81.4, berlin: 23.2 },\n    { x: 'May', london: 47, berlin: 99.7 },\n    { x: 'Jun', london: 20.3, berlin: 52.6 },\n    { x: 'Jul', london: 24, berlin: 35.5 },\n    { x: 'Aug', london: 35.6, berlin: 37.4 },\n  ]}\n  titleMap={{\n    london: 'London',\n    berlin: 'Berlin',\n  }}\n  type=\"intervalStack\"\n/>",__scope:{props:this?this.props:n,Playground:i.c,Bar:w},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1cI4jVldoAAFyD8YU4EkDwiNwiD2EDSV0NI01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ1kgAWZT2AANmU1T1jAYCADFvWgRJZP4ZxDgRB1MBgoR-CWIhqEoOANIREzqzMmhnAgLDLnYABGHS1PkTjuKmABBOYRPYCMoMo6B0DDVCOREsRkujGR2BRISYG4YBsIE4q4HkLca2ANKoAy4IADImvGRJ5koZp6sa8xuD6uUwGQyUBlQdp2AAfg2dKwwjbKrm6sNourKQZCrN8zBhdVjhgMAwigKZZpyvLloS5dqwTZiCBwczMhSK8CBqmta0IgQVye9BolcUqAG03qesT2CwWSACl3FU9goGoE4ZPCgAOHAAE4lkCAQoDQK4woAJhwHTULU_7_qgoG5XMmAPHByGMGoK5Mfh2HkYyNGYcxpMcExvG_qeonZL1eilkp6GriTBGcCTBnUfRxSdJwABWDnzoJgHifaBKBApqHqfYWGwpx8WmZp1n2aUTnasBnn4PVqmYZ0gB2PXJYRkWbflxXTeV4HkMtwX2ExuTRftmGZexgyXddpWQdCKAvc1zHIvYFH9cUmXZdD13ublOL0WjmGk2TgyA6Fm2cdT_6AF0ltdmICFgXmZlK8SFYJgXNfaAAZDXRvxsOE8l9pr0ZtA_Nd-QK8VwT5j4FQ9AEVh4gEiVtn4P7NxXKRLuu277pqqRTrWswvxAHztlcNJ_zgahAN0ECDDAhuLH4VBvUZJB2H4H5i2qDJzR_Mln67_hWAZHyNQfgVx-B-wgW5dY_ByjkH6DMbs_oX78DioVPCsBoRYG9L_baZJKCJFzHkAoE5NTmnfn8UsUDqz8CiGgUBr8p5qDPlQ--IBMDzHDFxCA8B6F3xrPwdiohkEgAAHphQMjgeGSYWH8MEKQq09D-BiIkVIpe1YlryAPh_bwHxqCQBSGfC-2gr76AYOJEAtAfRZFAW_U0tBzSCPNLMGY_BNEj3kEAA",mdxType:"Playground"},Object(r.b)(w,{data:[{x:"Jan",london:18.9,berlin:12.4},{x:"Feb",london:28.8,berlin:23.2},{x:"Mar",london:39.3,berlin:34.5},{x:"Apr",london:81.4,berlin:23.2},{x:"May",london:47,berlin:99.7},{x:"Jun",london:20.3,berlin:52.6},{x:"Jul",london:24,berlin:35.5},{x:"Aug",london:35.6,berlin:37.4}],titleMap:{london:"London",berlin:"Berlin"},type:"intervalStack",mdxType:"Bar"})),Object(r.b)("h2",{id:"\u57fa\u7840\u6761\u5f62\u56fe"},"\u57fa\u7840\u6761\u5f62\u56fe"),Object(r.b)(i.c,{__position:4,__code:"<Bar\n  data={[{ x: '1951', y1: 20 }, { x: '1952', y1: 10 }, { x: '1953', y1: 20 }]}\n  direction=\"horizontal\"\n  titleMap={{\n    y1: '\u9500\u552e\u989d',\n  }}\n/>",__scope:{props:this?this.props:n,Playground:i.c,Bar:w},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1cI4jVldoAAFyD8YU4EkDwiNwiD2EDSV0NI01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ1kgAWZT2AANmU1T1jAYCADFvWgRJZP4ZxDgRB1MBgoR-CWIhqEoOANIREzqzMmhnAgLDLnYABGHS1PkTjuKmABBOYRPYCMoMo6B0DDVCOREsRkujGR2BRISYG4YBsIE4q4HkLca2ANKoAy4IADImvGRJ5koZp6sa8xuD6uUwGQyUBlQdp2AAfg2dKwwjbKrm6sNourKQZCrN8zBhdVjhgMAwigKZZpyvLloS5dqwTZiCBwczMhSK8CBqmta0IgQVye9BolcUqAG03qesT2CwWSwoATgAVjC1SWjCq4ACYFKUP6nqgoG5VBsHYahxIYfChG1P-_6UeB8GkyxnH4dQ_GCfYABdJbqeOCAumG6g-BAYZ-iw4D4n4JHxheWA9VmUrxPO6nsdkwAAVMAOlVAFyMvyGfken_s3FcpEu67bvumqpFOtazC_EAfO2Vw0n_OBqEA3QQIMMDRYsfhUG9RkkHYfgfmLaoMnNH8yRdqn-FYDJ8mofgrn4OScEjuS3PWfhynIfoZm7f1Xf4OLCrw2BoSwb0_e2slKESXM8gKCdNXND2_lLWPq34KI0DDt2VHDDQ4Frh2QEweZwy4iB4Cb-2a34djRDTkAAD0woMnAAA4cCTDvh8ECurSb_gp5n-fF5AdYlvkQ3Pe8D5qEgFJzct7Rrf0BhxJAWgfSyMP3dNWhzVH81ZhmfgD6V-QgA",mdxType:"Playground"},Object(r.b)(w,{data:[{x:"1951",y1:20},{x:"1952",y1:10},{x:"1953",y1:20}],direction:"horizontal",titleMap:{y1:"\u9500\u552e\u989d"},mdxType:"Bar"})),Object(r.b)("h2",{id:"\u5750\u6807\u8f74\u81ea\u5b9a\u4e49"},"\u5750\u6807\u8f74\u81ea\u5b9a\u4e49"),Object(r.b)(i.c,{__position:5,__code:"<Bar\n  data={[\n    { x: 'monday', series: 2800 },\n    { x: 'tuesday', series: 1800 },\n    { x: 'wednesday', series: 950 },\n    { x: 'thursday', series: 500 },\n    { x: 'friday', series: 170 },\n  ]}\n  title=\"\u6211\u662f\u6807\u9898\"\n  padding={['auto', 100, 'auto']}\n  showLegend={false}\n  xAxis={{\n    line: null,\n    tickLine: null,\n    grid: null,\n  }}\n  yAxis={{\n    visible: false,\n  }}\n  colors={['#1DBB99']}\n  showLabel={true}\n  direction=\"horizontal\"\n  titleMap={{\n    series: 'Series',\n  }}\n/>",__scope:{props:this?this.props:n,Playground:i.c,Bar:w},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1cI4jVldoAAFyD8YU4EkDwiNwiD2EDSV0NI01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ1kgAWZT2AANmU1T1jAYCADFvWgRJZP4ZxDgRB1MBgoR-CWIhqEoOANIREzqzMmhnAgLDLnYABGHS1PkTjuKmABBOYRPYCMoMo6B0DDVCOREsRkujGR2BRISYG4YBsIE4q4HkLca2ANKoAy4IADImvGRJ5koZp6sa8xuD6uUwGQyUBlQdp2AAfg2dKwwjbKrm6sNourKQZCrN8zBhdVjhgMAwigKZZpyvLloS5dqwTZiCBwczMhSK8CBqmta0IgQVye9BolcUqAG03qesT2CwWSPIweDVMKjIIHgK4ACYAA45IUpQ_qeqCgblAgGTgD7EnBuBIeh8KEaRtT_v-tHZJGbJnWxsGlnxuF7nYABOABWEmUdqwHZNeARadx-mCaZ9mOfOsmAfR9ppS4OmIcZq4woAdlF8X2AAXSW1WYgIWA-BAQBEI0AejNAHALQAMjP4TmNM7AofvaMIInBsLEaWO3wkodoNc5uBhhGAAZGA0gwUrdqgfHNfFrA4qwWxSvEsWyagNBQtQUIElJ1XxlibZfaTq4U7TzmLEQrg89TqB07J-Rw7JxIo5j4A44z9hWFsCAPFgK4Q_xiv_qrzmqCgIU4FtgBiMKtWva9meZj3q_-73Rl91xAigUrUQZOf3ogLphuoPXhn6LDgPiC345rbXYD1WZY8LuWoaZ9pnCFvzVb7s_NxXKRLuu277pqqRTprTMF-EAPltiuDSP-OA1BAK6BAgYMCjd2D8FQN6RkSBkFAXKH8Us5ofxknQenfgrAMj5GoPwK4_A5I4GoXJNy6x-DlHIP0GY3Z_QYP4HFQqeFYDQiwN6Ah20ySUESLmPIBQJyanND8Ys1RQQgCISAKIaAKGYNUNgKB9DqyMJgPMcMXF76qKQRYfg7FRAcJAAAPTCgZHAcMcBJi0U9UxUirSqP4NY2x9jHEgHWEteQIDZHeA-NQSAKQoEwO0HA_QDBxIgFoD6LIFD-DMPFLQc0ZjzSzBmPwAJVd5BAA",mdxType:"Playground"},Object(r.b)(w,{data:[{x:"monday",series:2800},{x:"tuesday",series:1800},{x:"wednesday",series:950},{x:"thursday",series:500},{x:"friday",series:170}],title:"\u6211\u662f\u6807\u9898",padding:["auto",100,"auto"],showLegend:!1,xAxis:{line:null,tickLine:null,grid:null},yAxis:{visible:!1},colors:["#1DBB99"],showLabel:!0,direction:"horizontal",titleMap:{series:"Series"},mdxType:"Bar"})))}Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/bar.mdx"}}),Y.isMDXComponent=!0},"./src/components/title.less":function(e,A,n){},"./src/components/title.tsx":function(e,A,n){"use strict";var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=n("react"),a=n.n(o),r=n("./node_modules/classnames/index.js"),i=n.n(r);n("./src/components/title.less");"undefined"!==typeof TPosition&&TPosition&&TPosition===Object(TPosition)&&Object.isExtensible(TPosition)&&Object.defineProperty(TPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TPosition",filename:"src/components/title.tsx"}}),"undefined"!==typeof ITitleProps&&ITitleProps&&ITitleProps===Object(ITitleProps)&&Object.isExtensible(ITitleProps)&&Object.defineProperty(ITitleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ITitleProps",filename:"src/components/title.tsx"}});var s=function(e){var A,n=e.className,o=e.text,r=e.position;return o?a.a.createElement("div",{className:i()(n,(A={},Object(t.a)(A,"".concat("rc-chart-title"),!0),Object(t.a)(A,"is-left","left"===r),Object(t.a)(A,"is-right","right"===r),Object(t.a)(A,"is-center","center"===r),A))},a.a.createElement("h4",null,o)):null};s.defaultProps={position:"left"},A.a=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Title",filename:"src/components/title.tsx"}})}}]);