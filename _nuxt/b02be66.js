(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,4],{250:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("75aac15e",content,!0,{sourceMap:!1})},251:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("74a5d95a",content,!0,{sourceMap:!1})},252:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("35610680",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n(250)},259:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.company-desc-wrapper[data-v-7a6ad9a6]{\n  background-color:#f5f5f5\n}\n.company-desc-wrapper .company-item[data-v-7a6ad9a6]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  cursor:pointer;\n  transition:background-color .2s ease-in-out\n}\n.company-desc-wrapper .company-item .descgroup-desc[data-v-7a6ad9a6],.company-desc-wrapper .company-item .descgroup-title[data-v-7a6ad9a6]{\n  transition:all .2s ease-in-out\n}\n.company-desc-wrapper .company-item[data-v-7a6ad9a6]:hover{\n  background-color:#21219c;\n  color:#fcfcfc\n}\n.company-desc-wrapper .company-item:hover .descgroup-title[data-v-7a6ad9a6]{\n  color:#fcfcfc\n}\n.company-desc-wrapper .company-desc[data-v-7a6ad9a6]{\n  line-height:35px;\n  max-width:1220px;\n  margin-left:auto;\n  margin-right:auto\n}\n.company-desc-wrapper .descgroup .descgroup-title[data-v-7a6ad9a6]{\n  line-height:24px;\n  letter-spacing:1.1px;\n  flex-basis:36px;\n  flex-shrink:0;\n  margin-right:20px\n}\n@media(min-width:768px){\n.company-desc-wrapper .descgroup .descgroup-title[data-v-7a6ad9a6]{\n    flex-basis:auto;\n    margin-right:0\n}\n}\n@media(min-width:1024px){\n.company-desc-wrapper .descgroup .descgroup-title[data-v-7a6ad9a6]{\n    margin-right:20px\n}\n}\n.company-desc-wrapper .descgroup .descgroup-desc[data-v-7a6ad9a6]{\n  line-height:24px;\n  letter-spacing:.8px;\n  flex-basis:97px\n}\n@media(min-width:768px){\n.company-desc-wrapper .descgroup-list[data-v-7a6ad9a6]{\n    flex-basis:auto;\n    padding-left:20px;\n    padding-right:20px\n}\n}\n\n/*purgecss end ignore*/",""]),t.exports=r},260:function(t,e,n){"use strict";n(251)},261:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.news-wrapper .news[data-v-ad8e213a]{\n  background-color:#fcfcfc\n}\n.news-wrapper .news .news-list[data-v-ad8e213a]{\n  max-width:1080px;\n  margin-left:auto;\n  margin-right:auto\n}\n.news-wrapper .news .news-list li[data-v-ad8e213a]{\n  border-color:#dbdbdb\n}\n.news-wrapper .news .news-list li[data-v-ad8e213a]:last-child{\n  border-bottom:1px solid #dbdbdb\n}\n@media(min-width:768px){\n.news-wrapper .news .news-item .title[data-v-ad8e213a]{\n    flex-shrink:0;\n    flex-basis:160px\n}\n}\n\n/*purgecss end ignore*/",""]),t.exports=r},262:function(t,e,n){t.exports=n.p+"img/client 01.17aa573.svg"},263:function(t,e,n){t.exports=n.p+"img/client 02.5f35ce4.svg"},264:function(t,e,n){t.exports=n.p+"img/client 03.891ba96.svg"},265:function(t,e,n){"use strict";n(252)},266:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.collaborate[data-v-a262305c]{\n  max-width:1080px;\n  margin-left:auto;\n  margin-right:auto\n}\n.collaborate__list li img[data-v-a262305c]{\n  width:320px;\n  height:84px\n}\n\n/*purgecss end ignore*/",""]),t.exports=r},278:function(e,n,r){"use strict";r.r(n);var l={data:function(){return{descriptionGroup:[{title:"成品代工",target:"foundry",items:[{title:"3C 電子組裝"},{title:"PCB 焊接"},{title:"熱縮包裝"},{title:"各類手加工"}]},{title:"設計生產",target:"design",items:[{title:"ID 設計"},{title:"MD 設計"},{title:"模具開發"},{title:"塑膠射出"}]},{title:"包材",target:"pack",items:[{title:"彩盒"},{title:"牛皮紙盒"},{title:"紙塑"}]}]}},methods:{goPage:function(t){this.$router.push({name:"service",query:{anchor:t}})},handleActive:function(){t}}},c=(r(258),r(16)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"company-desc-wrapper pt-13 pb-19 md:pt-22 md:pb-23"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("ul",{staticClass:"descgroup grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-5"},t._l(t.descriptionGroup,(function(e){return n("li",{key:e.title,staticClass:"company-item px-5 pt-4 pb-4 lg:pt-0 lg:pb-0 lg:px-0 border-2  border-deepblue bg-shonwhite font-medium",on:{click:function(n){return t.goPage(e.target)}}},[n("h2",{staticClass:"descgroup-title  lg:pl-15 lg:p-6 w-1/4 lg:w-1/2 lg:flex-basis text-deepblue lg:text-1xl text-center lg:text-left"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("ul",{staticClass:"descgroup-list  lg:pl-8 lg:p-6 w-3/4 lg:w-1/2 flex flex-wrap justify-between"},t._l(e.items,(function(desc){return n("li",{key:desc.title,staticClass:"descgroup-desc mb-1 lg:mb-3 w-1/2 lg:w-full last:mb-0"},[t._v("\n            "+t._s(desc.title)+"\n          ")])})),0)])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"company-desc text-lg md:text-xl mb-10 lg:mb-18 lg:px-44 text-center"},[t._v("\n        以成品代工服務為核心，串連起設計生產及包材服務，並透過優秀的專業團隊為客戶代勞；讓客戶不需再依製程分包不同代工廠，減少品質管控的風險，降低成本以提升產品競爭力。\n        ")])])}],!1,null,"7a6ad9a6",null);n.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{date:"2021.07.12",title:"產線場地規劃",description:"擴充生產線場地-3條 / 倉庫擴充"},{date:"2021.06.16",title:"產線擴充",description:"新增一條 8 米產線工作桌"},{date:"2021.05.19",title:"添購新機",description:"USB 延長線電測儀器交機"}]}}},l=(n(260),n(16)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-wrapper container pt-18 md:pt-23 pb-15"},[n("div",{staticClass:"news"},[n("h2",{staticClass:"text-4xl mb-10 text-center"},[t._v("最新消息")]),t._v(" "),n("ul",{staticClass:"news-list"},t._l(t.items,(function(e,r){return n("li",{key:r,staticClass:"news-item flex flex-col md:flex-row py-6 md:py-9 border-t"},[n("div",{staticClass:"date mb-2 md:mb-0 md:mr-18 font-bold"},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("h3",{staticClass:"title mb-2 md:mb-0  font-medium"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("p",{staticClass:"desc text-dark-350"},[t._v("\n          "+t._s(e.description)+"\n        ")])])})),0)])])}),[],!1,null,"ad8e213a",null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{img:n(262)},{img:n(263)},{img:n(264)}]}}},l=(n(265),n(16)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container pt-10 pb-30  md:pt-23 md:pb-46"},[n("div",{staticClass:"collaborate"},[n("h2",{staticClass:"text-4xl mb-10 md:mb-14  text-center"},[t._v("合作客戶")]),t._v(" "),n("ul",{staticClass:"collaborate__list flex flex-wrap md:flex-nowrap"},t._l(t.items,(function(t,e){return n("li",{key:e,staticClass:"w-1/2 md:w-1/3 md:mr-6"},[n("img",{attrs:{src:t.img,alt:t.alt}})])})),0)])])}),[],!1,null,"a262305c",null);e.default=component.exports},344:function(t,e,n){"use strict";n.r(e);var r=n(278),l=n(279),c=n(280),o={components:{CompanyDesc:r.default,News:l.default,Collaborate:c.default}},d=n(16),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CompanyDesc"),t._v(" "),n("News"),t._v(" "),n("Collaborate")],1)}),[],!1,null,null,null);e.default=component.exports}}]);