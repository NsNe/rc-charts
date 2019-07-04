(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./docs/pie.mdx":function(e,A,t){"use strict";t.r(A);var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("react"),o=t.n(a),r=t("./node_modules/@mdx-js/react/dist/index.es.js"),i=t("./node_modules/docz/dist/index.esm.js"),g=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),B=t("./node_modules/classnames/index.js"),c=t.n(B),d=t("./node_modules/bizcharts/umd/BizCharts.js"),b=t("./node_modules/@antv/data-set/build/data-set.js"),m=t("./node_modules/rc-fit-text/dist/index.esm.js");t("./src/pie/pie-chart.less");"undefined"!==typeof IDataItem&&IDataItem&&IDataItem===Object(IDataItem)&&Object.isExtensible(IDataItem)&&Object.defineProperty(IDataItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IDataItem",filename:"src/pie/pie-chart.tsx"}}),"undefined"!==typeof IPieProps&&IPieProps&&IPieProps===Object(IPieProps)&&Object.isExtensible(IPieProps)&&Object.defineProperty(IPieProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IPieProps",filename:"src/pie/pie-chart.tsx"}});var p={x:{type:"cat",range:[0,1]},y:{min:0}},j={x:{type:"cat",range:[0,1]},y:{min:0}},E=function(e){var A,t=null,n=o.a.useRef(null),a=e.className,r=e.style,i=e.type,B=e.height,E=e.forceFit,D=e.padding,u=e.animate,I=e.percent,y=e.color,O=e.colors,x=e.title,h=e.subTitle,F=e.hasLegend,S=e.valueFormat,Y=e.label,Q=e.showLabel,M=e.total,C=e.autoTotal,T=e.radius,R=e.legend,G=e.innerRadius,w=e.lineWidth,P=e.onGetG2Instance,U=o.a.useState(0),Z=Object(l.a)(U,2),H=Z[0],f=Z[1],L=o.a.useState(!1),q=Object(l.a)(L,2),z=q[0],k=q[1],K=o.a.useState([]),J=Object(l.a)(K,2),N=J[0],W=J[1],V=o.a.useState(0),_=Object(l.a)(V,2),X=_[0],v=_[1];o.a.useEffect(function(){window.addEventListener("resize",function(){requestAnimationFrame(function(){return Ae()})},{passive:!0})},[]),o.a.useEffect(function(){var e=0;C?ne.forEach(function(A){A.y&&(e+=A.y)}):e="function"===typeof M?M():M,v(e)},[e.total,e.autoTotal,e.data]),o.a.useEffect(function(){ee()},[e.data]);var $,ee=function(){if(t){var e=t.getAllGeoms()[0];if(e){var A=(e.get("dataArray")||[]).map(function(e){var A=e[0]._origin;return A.color=e[0].color,A.checked=!0,A});W(A)}}},Ae=function e(){var A=n.current;F&&A?A&&A.parentNode&&A.parentNode.clientWidth<=380?z||k(!0):k(!1):window.removeEventListener("resize",e)},te=O,ne=e.data||[],ae=e.tooltip,oe=e.selected;(I||0===I)&&(oe=!1,ae=!1,$=function(e){return"\u5360\u6bd4"===e?y||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},ne=[{x:"\u5360\u6bd4",y:parseFloat(I+"")},{x:"\u53cd\u6bd4",y:100-parseFloat(I+"")}]);var re=new b.DataView;re.source(ne).transform({type:"percent",field:"y",dimension:"x",as:"percent"});var ie=Object.assign({},j,p);return o.a.createElement("div",{className:c()(a,(A={},Object(g.a)(A,"".concat("rc-pie-chart"),!0),Object(g.a)(A,"show-legend",!!F),Object(g.a)(A,"legend-block",z),A)),ref:n,style:r},o.a.createElement("div",{className:"".concat("rc-pie-chart","__chart")},o.a.createElement(d.Chart,{scale:"theta"===i?ie:void 0,height:B,forceFit:E,data:re,padding:D,animate:u,onGetG2Instance:function(e){t=e,f(e.get("height")*G),P&&P(e)}},!!ae&&o.a.createElement(d.Tooltip,{showTitle:!1}),o.a.createElement(d.Coord,{type:i,radius:T,innerRadius:G}),o.a.createElement(d.Legend,R),o.a.createElement(d.Geom,{style:{lineWidth:w,stroke:"#fff"},tooltip:ae?["x*percent",function(e,A){return{name:e,value:"".concat((100*A).toFixed(2),"%")}}]:void 0,type:"theta"===i?"intervalStack":"interval",position:"theta"===i?"percent":"x*percent",color:["x",I||0===I?$:te],selected:oe},Q&&o.a.createElement(d.Label,Object.assign({content:"percent"},Y)))),o.a.createElement(m.a,null,o.a.createElement("div",{className:"".concat("rc-pie-chart","__content"),style:{marginTop:R&&R.visible?.1*-H:0,width:H,height:+H,padding:.1*H}},o.a.createElement("div",null,x&&o.a.createElement("h4",null,x),(M||C)&&o.a.createElement("p",null,X),h&&o.a.createElement("h5",null,h))))),F&&o.a.createElement("ul",{className:"".concat("rc-pie-chart","__legend")},N.map(function(e,A){return o.a.createElement("li",{key:e.x,onClick:function(){return function(e,A){var n=e;n.checked=!n.checked;var a=Object(s.a)(N);a[A]=n;var o=a.filter(function(e){return e.checked}).map(function(e){return e.x});t&&t.filter("x",function(e){return o.indexOf(e+"")>-1}),W(a)}(e,A)}},o.a.createElement("div",{className:"title"},o.a.createElement("span",{className:"dot",style:{backgroundColor:e.checked?e.color:"#aaa"}}),o.a.createElement("span",null,e.x)),o.a.createElement("div",{className:"value"},o.a.createElement("span",{className:"value"},S?S(e.y):e.y)),o.a.createElement("div",{className:"percent"},o.a.createElement("span",{className:"percent"},"".concat((Number.isNaN(e.percent)?0:100*e.percent).toFixed(2),"%"))))})))};E.defaultProps={type:"theta",animate:!0,forceFit:!0,hasLegend:!1,showLabel:!1,height:400,radius:1,innerRadius:0,lineWidth:1,legend:{visible:!1},data:[],padding:"auto",autoTotal:!1};var D=E;E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PieChart",filename:"src/pie/pie-chart.tsx"}}),"undefined"!==typeof IDataItem&&IDataItem&&IDataItem===Object(IDataItem)&&Object.isExtensible(IDataItem)&&Object.defineProperty(IDataItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IDataItem",filename:"src/pie/index.tsx"}}),"undefined"!==typeof IPieProps&&IPieProps&&IPieProps===Object(IPieProps)&&Object.isExtensible(IPieProps)&&Object.defineProperty(IPieProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IPieProps",filename:"src/pie/index.tsx"}});var u=D;"undefined"!==typeof D&&D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PieChart",filename:"src/pie/index.tsx"}}),t.d(A,"default",function(){return O});var I={},y="wrapper";function O(e){var A=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(y,Object.assign({},I,t,{components:A,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"pie"},"Pie"),Object(r.b)("h2",{id:"\u57fa\u7840\u997c\u56fe"},"\u57fa\u7840\u997c\u56fe"),Object(r.b)(i.c,{__position:0,__code:"<Pie\n  data={[{ x: 'chrome', y: 20 }, { x: 'IE', y: 20 }, { x: 'Firefox', y: 20 }]}\n  tooltip={true}\n  innerRadius={0}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjGWut7jmiVxKoAbRXb7JPYLAFJomUYA0lorgAJmUpQge-qCwblBoz2h-z2Hh3LNOBt6UYUqyIC6Sz1KWLGccRr63oAXTW_Gh0oY6IBmSrUQZBn8bQZ0BBFDsIDySrFK5t7NxXKRbvux7noaqRLq2swvxAfztlcNJ_zgahAN0ECDDAqTq34VBvUZJB2H4H5i2qDJzR_Mkzbxi2QFYDJ8mofgrn4RScB9xTPPWfhynIfoZm7f1zf4RLSsI2BoSwb0Hf2slKESXM8gKCdNXNK2_lLAOjZAKI0E953VGwTWC4sIOYHmcNeNIuBS8Nt7-C40RI5AAA9SLjJwAAOHAkyrms2-zq1S_4Hu-8H4eQHWNb5GV63vA-ahIBSTXte0XX9AYKSQFoH0sk9y3TVoc12_NWYZn4Jf5AfoA",mdxType:"Playground"},Object(r.b)(u,{data:[{x:"chrome",y:20},{x:"IE",y:20},{x:"Firefox",y:20}],tooltip:!0,innerRadius:0,mdxType:"Pie"})),Object(r.b)("h2",{id:"\u57fa\u7840\u73af\u56fe"},"\u57fa\u7840\u73af\u56fe"),Object(r.b)(i.c,{__position:1,__code:"<Pie\n  data={[{ x: 'chrome', y: 20 }, { x: 'IE', y: 20 }, { x: 'Firefox', y: 20 }]}\n  tooltip={true}\n  innerRadius={0.75}\n  subTitle=\"\u603b\u9884\u8b66\u6570\"\n  total={100}\n  height={300}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjGWut7jmiVxKoAbRXb7JPYLAFJomUYA0lorgAJmUpQge-qCwblBoz2h-z2Hh3LNOBt6UYUqyIC6Sz1KWLGccRr63oAXTW_Gh0oY6IBmSrUQZBn8bQZ0BBFDsIDySrFJwAB2ABWLngfpDxLBeWA-BAQBuA0AEIzADNowAHU34JGLAiAh4kqyLFMUqXvs2CAUkISqk2N02LE3FcpFu-7HuehqpEurazC_EB_O2Vw0n_OBqEA3QQIMMCpOrfhUG9RkkHYfgfmLaoMnNH8yXjvHE5AVgMnyah-CufgRdLzz1n4cpyH6GZu39BP-ES0rCNgaEsG9TP9rJShElzPICgnTVzWTv5S3L6OQCiNAi5z1RsCD8eLErmB5nDXjSLgGeo7e_guNEBuQAAPUi4ycAADhwJNF5rXeh6tGf-GP0-L6vkB1jW-QfZT7wPmoSAUiDiHbQYd9AMCkiAWgPoshFyTqaWg5o97mlmDMfgn95DoKAA",mdxType:"Playground"},Object(r.b)(u,{data:[{x:"chrome",y:20},{x:"IE",y:20},{x:"Firefox",y:20}],tooltip:!0,innerRadius:.75,subTitle:"\u603b\u9884\u8b66\u6570",total:100,height:300,mdxType:"Pie"})),Object(r.b)("h2",{id:"\u57fa\u7840\u73af\u56fe---\u81ea\u52a8\u8ba1\u7b97\u603b\u6570"},"\u57fa\u7840\u73af\u56fe - \u81ea\u52a8\u8ba1\u7b97\u603b\u6570"),Object(r.b)(i.c,{__position:2,__code:"<Pie\n  data={[{ x: 'chrome', y: 20 }, { x: 'IE', y: 20 }, { x: 'Firefox', y: 20 }]}\n  tooltip={true}\n  innerRadius={0.75}\n  subTitle=\"\u603b\u9884\u8b66\u6570\"\n  autoTotal={true}\n  height={300}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjGWut7jmiVxKoAbRXb7JPYLAFJomUYA0lorgAJmUpQge-qCwblBoz2h-z2Hh3LNOBt6UYUqyIC6Sz1KWLGccRr63oAXTW_Gh0oY6IBmSrUQZBn8bQZ0BBFDsIDySrFJwAB2ABWLngfpDxLBeWA-BAQBuA0AEIzADNowAHU34JGLDCCJLBEeJ2bRGApe-zYIBSQhKqTRTFLNixNxXKRbvux7noaqRLq2swvxAfztlcNJ_zgahAN0ECDDAqTq34VBvUZJB2H4H5i2qDJzR_MlE7x5OQFYDJ8mofgrn4EXy889Z-HKch-hmbt_ST_hEtKwjYGhLBvWz_ayUoRJczyAoJ01c1U7-UtK9jkAojQEu89UbAQ8nixq5geZw140i4DnmO3v4LjRCbkAAD1IuMnAAA4cCTZea33kerTn_hT_Pq-b5AdY1vkP20-8D5qEgCkEOYdtAR30AwKSIBaA-iyCXFOppaDmgPuaWYMx-Df3kJgoAA",mdxType:"Playground"},Object(r.b)(u,{data:[{x:"chrome",y:20},{x:"IE",y:20},{x:"Firefox",y:20}],tooltip:!0,innerRadius:.75,subTitle:"\u603b\u9884\u8b66\u6570",autoTotal:!0,height:300,mdxType:"Pie"})),Object(r.b)("h2",{id:"\u663e\u793a\u8be6\u7ec6\u56fe\u4f8b"},"\u663e\u793a\u8be6\u7ec6\u56fe\u4f8b"),Object(r.b)(i.c,{__position:3,__code:"<Pie\n  data={[\n    { x: '\u771f\u5b9e\u9884\u8b66', y: 1 },\n    { x: '\u5b89\u5168\u9690\u60a3', y: 23 },\n    { x: '\u6d4b\u8bd5/\u5de1\u68c0', y: 15 },\n    { x: '\u8bef\u62a5', y: 6 },\n    { x: '\u672a\u786e\u8ba4', y: 2 },\n  ]}\n  colors={['#F35A58', '#F7CF5F', '#37B0E9', '#6D5EAC', '#DFDFDF']}\n  tooltip={true}\n  subTitle=\"\u9884\u8b66\u603b\u6570\"\n  total={235}\n  height={300}\n  innerRadius={0.75}\n  hasLegend={true}\n/>\n<Pie\n  data={[\n    { x: '\u6b63\u5e38', y: 3569 },\n    { x: '\u9884\u8b66', y: 1 },\n    { x: '\u6545\u969c', y: 26 },\n    { x: '\u5931\u8054', y: 19 },\n    { x: '\u672a\u6fc0\u6d3b', y: 26 },\n  ]}\n  colors={['#F35A58', '#F7CF5F', '#37B0E9', '#6D5EAC', '#DFDFDF']}\n  tooltip={true}\n  subTitle=\"\u9884\u8b66\u603b\u6570\"\n  total={235}\n  height={300}\n  innerRadius={0.75}\n  hasLegend={true}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjGWut7jmiVxKoAbRXb7JPYLAFMAfHdADztQAQjMAM2iNJaK5ItyzTgbeqCwblQBI7UAC0VAAS0wBigwR-z2AAJiTFGge-jGFMAaVtAFXoyRAEPdQABi2JpGAFZKa-4GablQB76MAUqN2ZM7m0ca0GFMAKnNADsPQAS6JF0mxbRgBdNbxaoKAhTgAH2gAYispMOcSjmAA4Ef1qyAHZ7CsjmrItvWkyt69FLPABOR3jK1Dmz0S-xHa1Kyg6D9o1apiwIkoY6IBmSrUQZdW0fpDxLBeWA-BAOHAG4DQAHU34COhwIeJKvJjmk-BzYIBSQhKqTRTFIr760GdAQRQ7CA8kqxScCt8vC78OAABkYDSDB47RGAm4sTcqcYD7C_QX6AcLiw-faQBja0ADj0RaN4z3eV8X17hkXkaUVeQcx9pAFFTQActMV4zD7R9fAEZNQAVANPg_z556nJblKXAAD9oAblsH5PzeuHH-FhNba11gbI2JtzZLEtjbO2DskFOxdm7T26Dva-39oHYOhCw7TxrFHGOcdgAJynoXFOacCAZ34DnfOIBC4RGLlAUuRsSEWCrjXAgdcG7cM4KgVu7cWBd2AD3PuQjB4jzHjwShk8SGzy-lIW691HrPQalIS6W0zBfhAP5bYrg0j_jgNQQCugQIGDAlJas_BUDekZEgdg_AfjFmqBkc0P4yTONRq4kArAMj5GoPwK4_Ae6RM8usfg5RyD9BmN2f0Lj-CJVKoRWA0IsDel8ftMklBEi5jyAUCcmpzTuL-KWaJ9iQBRDQGEgJqhsBmOqRYWJMB5jhl4qROADS7FvX4FxUQKSQAAD1IrGRwKbHASZWk1kGWUq0DT-DjMmdM2ZLDqxrXkAYjx3gPjUEgCkMxFjtBWP0AwKSIBaA-iyGEtxppaDmiGeaWYMx-A7PkF8oAA",mdxType:"Playground"},Object(r.b)(u,{data:[{x:"\u771f\u5b9e\u9884\u8b66",y:1},{x:"\u5b89\u5168\u9690\u60a3",y:23},{x:"\u6d4b\u8bd5/\u5de1\u68c0",y:15},{x:"\u8bef\u62a5",y:6},{x:"\u672a\u786e\u8ba4",y:2}],colors:["#F35A58","#F7CF5F","#37B0E9","#6D5EAC","#DFDFDF"],tooltip:!0,subTitle:"\u9884\u8b66\u603b\u6570",total:235,height:300,innerRadius:.75,hasLegend:!0,mdxType:"Pie"}),Object(r.b)(u,{data:[{x:"\u6b63\u5e38",y:3569},{x:"\u9884\u8b66",y:1},{x:"\u6545\u969c",y:26},{x:"\u5931\u8054",y:19},{x:"\u672a\u6fc0\u6d3b",y:26}],colors:["#F35A58","#F7CF5F","#37B0E9","#6D5EAC","#DFDFDF"],tooltip:!0,subTitle:"\u9884\u8b66\u603b\u6570",total:235,height:300,innerRadius:.75,hasLegend:!0,mdxType:"Pie"})),Object(r.b)("h2",{id:"\u81ea\u5b9a\u4e49"},"\u81ea\u5b9a\u4e49"),Object(r.b)(i.c,{__position:4,__code:"<Pie\n  data={[{ x: '\u5e38\u4f4f', y: 4990 }, { x: '\u5916\u6765', y: 110 }]}\n  innerRadius={0.75}\n  total={5100}\n  legend={{\n    visible: true,\n  }}\n  subTitle=\"\u51fa\u5165\u603b\u4eba\u6570\"\n  colors={['#6D5EAC', '#DFDFDF', '#F35A58']}\n  tooltip={true}\n  height={300}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjGWut7jmiVxKoAbSgrAFMADj1AHl5DSWiufSAE4YeUpRJPYYG5UANE1AFNzSH7KiyKEYAXTW76azQZ0BBFDsIDySrFJwAB2ABWQmiaHAh4kq-nccUpmidgNIMEqqSvqJ1hbAgDxYCuVEGU05ncu5776Q8SwXlgPgQEAL8VAFNFQBuA0ALrlAAdTfgVzeqgoCFOAAfaABiYytXps9EvsSHra1KzXdd52raspN6cS-mAA52gJ42awiShjogGZKqlmB5bezYIBSQhKqTRSuZDzcVykW77se56GqkS6trML8QH87ZXDSf84GoQDdBAgwwMFix-FQb1GSQdh-B-Ytqgyc0fzJDuZa7kBWAyfJqH4K5-BpufPPWfhynIfoZm7f1O_4RLSsI2BoSwb0h_2slKESXM8gKCdNXNHu_lLBfq34KI0Gn0fVGwauH5bkBMHmcNeNInAV-zcaz8C4qITeIAAB6kVjI4H9jgJMX9QGCGvlaV-_AYFwIQUgkA6w1ryFLr3bwHxqCQBSNXWu2h676AYFJEAtAfRZGnt3U0tBzTgPNLMGY_BCHyH4UAA",mdxType:"Playground"},Object(r.b)(u,{data:[{x:"\u5e38\u4f4f",y:4990},{x:"\u5916\u6765",y:110}],innerRadius:.75,total:5100,legend:{visible:!0},subTitle:"\u51fa\u5165\u603b\u4eba\u6570",colors:["#6D5EAC","#DFDFDF","#F35A58"],tooltip:!0,height:300,mdxType:"Pie"})),Object(r.b)("h2",{id:"\u81ea\u5b9a\u4e49\u989c\u8272"},"\u81ea\u5b9a\u4e49\u989c\u8272"),Object(r.b)(i.c,{__position:5,__code:"<Pie\n  data={[{ x: 'chrome', y: 20 }, { x: 'IE', y: 20 }, { x: 'Firefox', y: 20 }]}\n  colors={['#6D5EAC', '#DFDFDF', '#F35A58']}\n  tooltip={true}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjGWut7jmiVxKoAbRXb7JPYLAFJomUYA0lorgAJmUpQge-qCwblBoz2h-z2Hh3LNOBt6UYUqyIC6Sz1KWLGccRr63oAXTW_HCygIU4AB9oAGJjK1ABWM9EvsaGOa1KzheFwX2aspNucS7mAA52nppGLAiShjogGZKtRBkGe-zcVykW77se56GqkS6trML8QH87ZXDSf84GoQDdBAgwwKk6t-FQb1GSQdh-B-Ytqgyc0fzJX28f9kBWAyfJqH4K5-EUnBk8Uzz1n4cpyH6GZu39P3-ES0rCNgaEsG9cP9rJShElzPICgnTVzUDv5S3Tz2QCiNAE6j1RsAd9uLEzmB5nDXjSLgHuPbe_guNEAuQAAPUi4ycFlnAk0HmtZ6bq0e_4ZfV_XzeQHWNb5CtoPvA-ahIBSB2ne0F39AYKSQFoH0sgTgPTVoc05_NLMGY_AL7yDAUAA",mdxType:"Playground"},Object(r.b)(u,{data:[{x:"chrome",y:20},{x:"IE",y:20},{x:"Firefox",y:20}],colors:["#6D5EAC","#DFDFDF","#F35A58"],tooltip:!0,mdxType:"Pie"})),Object(r.b)("h2",{id:"\u767e\u5206\u6bd4"},"\u767e\u5206\u6bd4"),Object(r.b)(i.c,{__position:6,__code:"<Pie percent={60} />",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjulhBEaEq4zFMwzcVykW77se56GqkS6trML8QH87ZXDSf84GoQDdBAgwwKk6t-FQb1GSQdh-B-Ytqgyc0fzJAnNIsfhWAyfJqH4K5-EUnA2cUzz1n4cpyH6GZu39Qn-ES0rCNgaEsG9Kn9rJShElzPICgnTVzRJv5Sy5nGQCiNBmaJlRww0OAtdpkBMHmcNeNIk3Cext7-C40RhZAAA9SLjJwAAOHAk1NmtHdVq19f4d3PZ9v2QHWNb5Fh0nvA-ahIBSZHUe0dH9AYKSQFoH0smZ4nTVoc0nfNWYZn4WP5GroA",mdxType:"Playground"},Object(r.b)(u,{percent:60,mdxType:"Pie"})),Object(r.b)("h2",{id:"\u5357\u4e01\u683c\u5c14\u73ab\u7470\u5f69\u56fe"},"\u5357\u4e01\u683c\u5c14\u73ab\u7470\u5f69\u56fe"),Object(r.b)(i.c,{__position:7,__code:"<Pie\n  data={[\n    { x: '2001', y: 41.8 },\n    { x: '2002', y: 38 },\n    { x: '2003', y: 33.7 },\n    { x: '2004', y: 30 },\n    { x: '2005', y: 25.8 },\n    { x: '2006', y: 31.7 },\n    { x: '2007', y: 33 },\n    { x: '2008', y: 46 },\n    { x: '2009', y: 38.3 },\n  ]}\n  tooltip={true}\n  type=\"polar\"\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjGWut7jmiVxKoAbRXb7JPYLAFIAJkUxTIo0lorn0yKcAADlyzTgbeqCwblSHFPB2H7JUlGlCB77MYhqGk3xq4kyTHAAHZUZJjHQfJxT9KplTlOJr7gbJ7GoYAVg58GBeRxmedJln-cU4yOaTRGGe59HGql9ocbpuWk3F5WLD5tWoaRjn9OM7Wdb1nGAE45aRnAtaV9GAF01uViJKGOiAZkq1EGWd9GRPmPgQEFOCBH4EnNxXKRbvux7noaqRLq2swvyDiVtlcNJ_zgahAN0ECDDAqTq34VBvUZJB2H4H5i2qDJzR_Mly7RyuQFYDJ8mofgrn4RScF7xTPPWfhynIfoZm7f0K_4RLSsI2BoSwb1G_2slKESXM8gKCdNXNau_lLQfi5AKI0C7lvVGwLPD4sYeYHmcNeNIuAz6Lt7-C40Qp5AAA9SLjOR2218azvx3laM-_Bf7_xtkmMO1Y1ryBTjXbwHxqCQBSFnHO2g876AYFJEAtAfRZC7lXU0tBzQf3NLMGY_AEHyDoUAA",mdxType:"Playground"},Object(r.b)(u,{data:[{x:"2001",y:41.8},{x:"2002",y:38},{x:"2003",y:33.7},{x:"2004",y:30},{x:"2005",y:25.8},{x:"2006",y:31.7},{x:"2007",y:33},{x:"2008",y:46},{x:"2009",y:38.3}],tooltip:!0,type:"polar",mdxType:"Pie"})),Object(r.b)("h2",{id:"\u5357\u4e01\u683c\u5c14\u73ab\u7470\u73af\u56fe"},"\u5357\u4e01\u683c\u5c14\u73ab\u7470\u73af\u56fe"),Object(r.b)(i.c,{__position:8,__code:"<Pie\n  data={[\n    { x: '2001', y: 41.8 },\n    { x: '2002', y: 38 },\n    { x: '2003', y: 33.7 },\n    { x: '2004', y: 30 },\n    { x: '2005', y: 25.8 },\n    { x: '2006', y: 31.7 },\n    { x: '2007', y: 33 },\n    { x: '2008', y: 46 },\n    { x: '2009', y: 38.3 },\n  ]}\n  innerRadius={0.2}\n  tooltip={true}\n  type=\"polar\"\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Pie:u},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoIgbojVldoAAFyD8YU4EkGZSIIiD2EDSUsIo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwUgAWNT2AANjUjT1jAYCADFvWgRIFP4ZxDgRB1MBgoR-CWIhqEoOBtIRczq0smhnAgXDLnYABGfTNPkHi-KmABBOZxPYCMoJo6B0DDdh5A5cSxDS6MZHYFFRJgbhgDw4TyrgeQtxrYBMqgbLggAMja8ZEnmShmma1rzG4Ia5TAZDJQGVB2nYAB-DYsrDCN8qufqwzi6spBkKs3zMGF1WOGAwDCKApkWgqivW5Ll2rBM2IIHArMyFIrwIBqa1rEjGWut7jmiVxKoAbRXb7JPYLAFIAJkUxTIo0lorn0yKcAADlyzTgbeqCwblSHFPB2H7JUlGlCB77MYhqGk3xq4kyTHAAHZUZJjHQfJxT9KplTlOJr7gbJ7GoYAVg58GBeRxmedJln-cU4yOaTRGGe59HGql9ocbpuWk3F5WLD5tWoaRjn9OM7Wdb1nGAE45aRnAtaV9GAF01uVtBnQEEUOwgPJKsUnBwed9GIkoY6IBmSrUQZAPgZE-Y-BAQU4IEfgSc3FcpFu-7HuehqpEurazC_eOJW2Vw0n_OBqEA3QQIMMCpOrfhUG9RkkHYfgfmLaoMnNH8yRbtG25AVgMnyah-Cufhfanzz1n4cpyH6GZu39Vv-ES0rCNgaEsG9Pv9rJShElzPICgnTVzQ7v5SxnhuQCiNBx8H1RsHLm-LDnmB5nDXjSLgR_67evwLiohV4gAAHqRWMsjW2b8axAPPlaR-_AIFQJtkmZO1Y1ryELp3bwHxqCQBSOXSu2hq76AYFJEAtAfRZHHu3U0tBzTAPNLMGY_BsHyE4UAA",mdxType:"Playground"},Object(r.b)(u,{data:[{x:"2001",y:41.8},{x:"2002",y:38},{x:"2003",y:33.7},{x:"2004",y:30},{x:"2005",y:25.8},{x:"2006",y:31.7},{x:"2007",y:33},{x:"2008",y:46},{x:"2009",y:38.3}],innerRadius:.2,tooltip:!0,type:"polar",mdxType:"Pie"})),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a",Object(r.b)("inlineCode",{parentName:"td"},"polar"),"\u3001",Object(r.b)("inlineCode",{parentName:"td"},"theta")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"theta"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"animate"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u52a8\u753b\u5f00\u5173"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"colors"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u989c\u8272"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"--")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6307\u5b9a\u56fe\u8868\u7684\u9ad8\u5ea6\uff0c\u5355\u4f4d\u4e3a 'px'"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"400")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u56fe\u8868\u7684\u6570\u636e\u6e90"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Array"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"forceFit"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u56fe\u8868\u7684\u5bbd\u5ea6\u81ea\u9002\u5e94\u5f00\u5173"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"radius"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u534a\u5f84\uff0c","[0-1]","\u7684\u5c0f\u6570"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"number(0-1)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"innerRadius"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5185\u90e8\u6781\u5750\u6807\u7cfb\u7684\u534a\u5f84"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"number(0-1)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"0")))))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/pie.mdx"}}),O.isMDXComponent=!0},"./src/pie/pie-chart.less":function(e,A,t){}}]);