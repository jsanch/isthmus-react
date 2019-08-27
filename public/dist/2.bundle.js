webpackJsonp([2],{162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"AsCategoryWidget",function(){return i});var o=r(44),a=r(167),i=function(){function e(){this.categories=[],this.disableInteractivity=!1,this.showClearButton=!1,this.showHeader=!0,this.useTotalPercentage=!1,this.visibleCategories=1/0,this.selectedCategories=[]}return e.prototype.getSelectedCategories=function(){return this.selectedCategories},e.prototype.componentWillLoad=function(){this.el.style.setProperty("--category-bar-color",this.defaultBarColor||"var(--as-color-complementary)")},e.prototype.clearSelection=function(){this.selectedCategories.length&&(this.selectedCategories=[],this._onCategoriesChanged())},e.prototype.render=function(){return[this._renderHeader(),this._renderCategoryList(),this.disableInteractivity?"":this._renderFooter()]},e.prototype._renderHeader=function(){if(this.showHeader)return[o.b("h2",{class:"as-category-widget__heading"},this.heading),o.b("p",{class:"as-category-widget__description as-body"},this.description)]},e.prototype._renderCategoryList=function(){var e={"as-category-widget__list":!0,"as-category-widget__list--disabled":this.disableInteractivity};return o.b("ul",{class:e},this._renderCategories())},e.prototype._renderCategories=function(){var e,t=this,r=this.categories.length>this.visibleCategories,o=this._parseCategories(),a=o.categories,i=o.otherCategory,s=a.slice(0,this.visibleCategories),n=this.useTotalPercentage?this._getCategoriesTotalValue(this.categories):this._getCategoriesMaximumValue(a,Boolean(i));return(i||r)&&(e=this._renderOtherCategory(i,{maximumValue:n})),[s.map(function(e){return t._renderCategory(e,{maximumValue:n})}),e]},e.prototype._renderCategory=function(e,t){var r=this,i=t.isOther,s=t.maximumValue,n=this._isSelected(e.name),c=this.selectedCategories.length>0,g={backgroundColor:this._getBarColor(e.color,{isSelected:n,isOther:i})||"var(--category-bar-color)",width:e.value/s*100+"%"};return o.b("li",{class:{"as-category-widget__category":!0,"as-category-widget__category--not-selected":c&&(!n||i),"as-category-widget__category--other":i,"as-category-widget__category--selected":n},onClick:function(){return r._toggleCategory(e)}},o.b("p",{class:"as-category-widget__info as-body"},o.b("div",{class:"as-category-widget__title"},e.name),a.a(e.value)),o.b("div",{class:"as-category-widget__bar"},o.b("div",{class:"as-category-widget__bar-value",style:g})))},e.prototype._renderOtherCategory=function(e,t){var r=e||{name:"Other",value:this._getCategoriesTotalValue(this.categories.slice(this.visibleCategories,this.categories.length))};return this._renderCategory(r,{maximumValue:t.maximumValue,isOther:!0})},e.prototype._renderFooter=function(){var e=this,t=this.selectedCategories.length;return o.b("footer",{class:"as-category-widget__footer"},o.b("div",{class:"as-category-widget__count as-body"},t||"All"," selected"),this.showClearButton&&o.b("button",{class:"as-btn as-btn--primary as-btn--s as-category-widget__clear",disabled:!t,onClick:function(){return e.clearSelection()}},"Clear selection"))},e.prototype._isSelected=function(e){return this.selectedCategories.includes(e)},e.prototype._toggleCategory=function(e){this.disableInteractivity||(this.selectedCategories=this._isSelected(e.name)?this.selectedCategories.filter(function(t){return t!==e.name}):this.selectedCategories.concat([e.name]),this._onCategoriesChanged())},e.prototype._onCategoriesChanged=function(){this.categoriesSelected.emit(this.selectedCategories)},e.prototype._getCategoriesMaximumValue=function(e,t){return void 0===t&&(t=!1),this._getVisibleCategories(e,t).reduce(function(e,t){return t.value>e?t.value:e},0)},e.prototype._getCategoriesTotalValue=function(e){return e.reduce(function(e,t){return t.value+e},0)},e.prototype._getBarColor=function(e,t){return void 0===t&&(t={}),t.isOther?"#747474":t.isSelected?a.b(-.16,e):e},e.prototype._parseCategories=function(){var e=this.categories.find(function(e){return"Other"===e.name});return e?{categories:this.categories.filter(function(t){return t.name!==e.name}),otherCategory:e}:{categories:this.categories}},e.prototype._getVisibleCategories=function(e,t){return t?e:e.slice(0,this.visibleCategories)},Object.defineProperty(e,"is",{get:function(){return"as-category-widget"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{categories:{type:"Any",attr:"categories"},clearSelection:{method:!0},defaultBarColor:{type:String,attr:"default-bar-color"},description:{type:String,attr:"description"},disableInteractivity:{type:Boolean,attr:"disable-interactivity"},el:{elementRef:!0},getSelectedCategories:{method:!0},heading:{type:String,attr:"heading"},selectedCategories:{state:!0},showClearButton:{type:Boolean,attr:"show-clear-button"},showHeader:{type:Boolean,attr:"show-header"},useTotalPercentage:{type:Boolean,attr:"use-total-percentage"},visibleCategories:{type:Number,attr:"visible-categories"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"categoriesSelected",method:"categoriesSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);as-category-widget{--category-widget--description--color:#747474;--category-widget--bar--height:4px;--category-widget--background-color:#FFF;--category-bar--background-color:#F5F5F5;--category-bar--color:#47DB99;display:block;background:var(--category-widget--background-color,#fff)}as-category-widget .as-category-widget__heading{margin:0;font:16px/24px var(--font-family-base,Roboto,sans-serif)}as-category-widget .as-category-widget__count,as-category-widget .as-category-widget__description{color:var(--description--color,#747474);color:#747474}as-category-widget .as-category-widget__list{margin:0;padding:0;list-style:none}as-category-widget .as-category-widget__list.as-category-widget__list--disabled{pointer-events:none}as-category-widget .as-category-widget__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__description+.as-category-widget__list,as-category-widget .as-category-widget__list+.as-category-widget__footer{margin-top:16px}as-category-widget .as-category-widget__info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__title{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;padding-right:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}as-category-widget .as-category-widget__bar{position:relative;width:100%;height:4px;border-radius:2px;background-color:var(--category-bar--background-color,#f5f5f5);background-color:#f5f5f5}as-category-widget .as-category-widget__bar-value{position:absolute;left:0;max-width:100%;height:4px;-webkit-transition:background .2s ease,opacity .5s ease;transition:background .2s ease,opacity .5s ease;border-radius:2px}as-category-widget .as-category-widget__category{margin-bottom:8px;cursor:pointer}as-category-widget .as-category-widget__category--other{pointer-events:none}as-category-widget .as-category-widget__category--not-selected{opacity:.5}as-category-widget .as-category-widget__category:not(.as-category-widget__category--selected):hover .as-category-widget__bar-value{opacity:.6}"},enumerable:!0,configurable:!0}),e}()},167:function(e,t,r){"use strict";function o(e){var t=Math.ceil(100*e)/100;return t>=1e9?(t/1e9).toFixed(1)+"G":t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t}function a(e,t,r){if("number"!=typeof e||e<-1||e>1||"string"!=typeof t||"r"!=t[0]&&"#"!=t[0]||r&&"string"!=typeof r)return null;var o=function(e){var t=e.length,r={};if(t>9){if((e=e.split(",")).length<3||e.length>4)return null;r[0]=a(e[0].split("(")[1]),r[1]=a(e[1]),r[2]=a(e[2]),r[3]=e[3]?parseFloat(e[3]):-1}else{if(8==t||6==t||t<4)return null;t<6&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+(t>4?e[4]+""+e[4]:"")),e=a(e.slice(1),16),r[0]=e>>16&255,r[1]=e>>8&255,r[2]=255&e,r[3]=-1,9!=t&&5!=t||(r[3]=i(r[2]/255*1e4)/1e4,r[2]=r[1],r[1]=r[0],r[0]=e>>24&255)}return r},a=parseInt,i=Math.round,s=t.length>9,n=(s="string"==typeof r?r.length>9||"c"==r&&!s:s,e<0),c=(e=n?-1*e:e,r=r&&"c"!=r?r:n?"#000000":"#FFFFFF",o(t)),g=o(r);return c&&g?s?"rgb"+(c[3]>-1||g[3]>-1?"a(":"(")+i((g[0]-c[0])*e+c[0])+","+i((g[1]-c[1])*e+c[1])+","+i((g[2]-c[2])*e+c[2])+(c[3]<0&&g[3]<0?")":","+(c[3]>-1&&g[3]>-1?i(1e4*((g[3]-c[3])*e+c[3]))/1e4:g[3]<0?c[3]:g[3])+")"):"#"+(4294967296+16777216*i((g[0]-c[0])*e+c[0])+65536*i((g[1]-c[1])*e+c[1])+256*i((g[2]-c[2])*e+c[2])+(c[3]>-1&&g[3]>-1?i(255*((g[3]-c[3])*e+c[3])):g[3]>-1?i(255*g[3]):c[3]>-1?i(255*c[3]):255)).toString(16).slice(1,c[3]>-1||g[3]>-1?void 0:-2):null}r.d(t,"a",function(){return o}),r.d(t,"b",function(){return a})}});
//# sourceMappingURL=2.bundle.js.map