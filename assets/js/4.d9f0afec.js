(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{396:function(t,e,n){},397:function(t,e,n){},399:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,o){var s=i.prototype;o.utc=function(t){var e={date:t,utc:!0,args:arguments};return new i(e)},s.utc=function(e){var n=o(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var u=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=s.utcOffset;s.utcOffset=function(r,i){var o=this.$utils().u;if(o(r))return this.$u?0:o(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&null===(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],o=i[0],s=60*+i[1]+ +i[2];return 0===s?0:"+"===o?s:-s}(r)))return this;var s=Math.abs(r)<=16?60*r:r,a=this;if(i)return a.$offset=s,a.$u=0===r,a;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+u,t)).$offset=s,a.$x.$localOffset=u}else a=this.utc();return a};var p=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var f=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var l=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return l.call(this,t,e,n);var r=this.local(),i=o(t).local();return l.call(r,i,e,n)}}}()},400:function(t,e,n){"use strict";n(396)},401:function(t,e,n){"use strict";n(397)},402:function(t,e,n){"use strict";var r=n(12),i=n(1),o=n(3),s=n(102),a=n(20),u=n(15),c=n(143),p=n(34),f=n(101),l=n(226),h=n(6),m=n(52).f,v=n(42).f,g=n(16).f,d=n(403),_=n(236).trim,$=i.Number,y=$.prototype,b=i.TypeError,O=o("".slice),x=o("".charCodeAt),C=function(t){var e=l(t,"number");return"bigint"==typeof e?e:P(e)},P=function(t){var e,n,r,i,o,s,a,u,c=l(t,"number");if(f(c))throw b("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=_(c),43===(e=x(c,0))||45===e){if(88===(n=x(c,2))||120===n)return NaN}else if(48===e){switch(x(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(s=(o=O(c,2)).length,a=0;a<s;a++)if((u=x(o,a))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(s("Number",!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var T,I=function(t){var e=arguments.length<1?0:$(C(t)),n=this;return p(y,n)&&h((function(){d(n)}))?c(Object(e),n,I):e},S=r?m($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;S.length>N;N++)u($,T=S[N])&&!u(I,T)&&g(I,T,v($,T));I.prototype=y,y.constructor=I,a(i,"Number",I)}},403:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},404:function(t,e,n){var r=n(234),i=n(227),o=n(405),s=n(409);t.exports=function(t,e){if(null==t)return{};var n=r(s(t),(function(t){return[t]}));return e=i(e),o(t,n,(function(t,n){return e(t,n[0])}))}},405:function(t,e,n){var r=n(148),i=n(406),o=n(142);t.exports=function(t,e,n){for(var s=-1,a=e.length,u={};++s<a;){var c=e[s],p=r(t,c);n(p,c)&&i(u,o(c,t),p)}return u}},406:function(t,e,n){var r=n(407),i=n(142),o=n(146),s=n(99),a=n(71);t.exports=function(t,e,n,u){if(!s(t))return t;for(var c=-1,p=(e=i(e,t)).length,f=p-1,l=t;null!=l&&++c<p;){var h=a(e[c]),m=n;if("__proto__"===h||"constructor"===h||"prototype"===h)return t;if(c!=f){var v=l[h];void 0===(m=u?u(v,h,l):void 0)&&(m=s(v)?v:o(e[c+1])?[]:{})}r(l,h,m),l=l[h]}return t}},407:function(t,e,n){var r=n(408),i=n(145),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||r(t,e,n)}},408:function(t,e,n){var r=n(235);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},409:function(t,e,n){var r=n(228),i=n(410),o=n(412);t.exports=function(t){return r(t,o,i)}},410:function(t,e,n){var r=n(144),i=n(411),o=n(229),s=n(230),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:s;t.exports=a},411:function(t,e,n){var r=n(233)(Object.getPrototypeOf,Object);t.exports=r},412:function(t,e,n){var r=n(231),i=n(413),o=n(147);t.exports=function(t){return o(t)?r(t,!0):i(t)}},413:function(t,e,n){var r=n(99),i=n(232),o=n(414),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&n.push(a);return n}},414:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},415:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l}));n(10),n(24),n(29);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(3).then(n.t.bind(null,454,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(400),n(19)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(401),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(402),n(104)),u=n.n(a),c=n(404),p=n.n(c),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},l=Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},425:function(t,e,n){},441:function(t,e,n){"use strict";n(425)},458:function(t,e,n){"use strict";n.r(e);n(70),n(4);var r=n(149),i=n.n(r),o=n(399),s=n.n(o),a=n(11),u=n(415);i.a.extend(s.a);var c={components:{NavigationIcon:a.n,ClockIcon:a.a,TagIcon:a.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return u.b},resolvePostDate:function(t){return i.a.utc(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},p=(n(441),n(19)),f=Object(p.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-list-layout"}},[n("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[n("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),e.excerpt?n("client-only",[n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(e.excerpt)}})]):n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(e.frontmatter.summary||e.summary)+"\n      ")]),t._v(" "),n("footer",[e.frontmatter.author?n("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(e.frontmatter.author))]),t._v(" "),e.frontmatter.location?n("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(e.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),e.frontmatter.date?n("div",{staticClass:"ui-post-meta ui-post-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),e.frontmatter.tags?n("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[n("TagIcon"),t._v(" "),t._l(t.resolvePostTags(e.frontmatter.tags),(function(e){return n("router-link",{key:e,attrs:{to:"/tag/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e()])],1)})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=f.exports}}]);