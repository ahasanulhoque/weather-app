(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  height: 100vh;\n}\n\n#current-weather {\n  height: 80vh;\n}\n\n#daily-data {\n  display: none;\n  height: 80vh;\n  overflow-y: auto;\n}\n\n#hourly-data {\n  display: none;\n  height: 80vh;\n  overflow-y: auto;\n}\n",""]);const o=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);a&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},a=[],r=0;r<e.length;r++){var u=e[r],c=t.base?u[0]+t.base:u[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var l=i(d),h={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(o[l].references++,o[l].updater(h)):o.push({identifier:d,updater:g(h,t),references:1}),a.push(d)}return a}function c(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function l(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function h(e,t,n){var a=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,f=0;function g(e,t){var n,a,r;if(t.singleton){var o=f++;n=m||(m=c(t)),a=l.bind(null,n,o,!1),r=l.bind(null,n,o,!0)}else n=c(t),a=h.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=i(n[a]);o[r].references--}for(var c=u(e,t),s=0;s<n.length;s++){var d=i(n[s]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=c}}}}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),a=n(426);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const r=async function(e){try{if(isNaN(e.charAt(0))){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,{mode:"cors"}),n=await t.json(),a=await n.coord.lat,r=await n.coord.lon,o=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${a}&lon=${r}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,{mode:"cors"});return[n,await o.json()]}if(isNaN(e.charAt(e.length-1))){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${e}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,{mode:"cors"}),n=await t.json(),a=await n.coord.lat,r=await n.coord.lon,o=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${a}&lon=${r}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,{mode:"cors"});return[n,await o.json()]}if(!isNaN(e)){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${e}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,{mode:"cors"}),n=await t.json(),a=await n.coord.lat,r=await n.coord.lon,o=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${a}&lon=${r}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,{mode:"cors"});return[n,await o.json()]}}catch(e){return e}},o=function(e){const t=e[0].name,n=function(){const n=e[0].main.temp,a=e[0].main.temp_max,r=e[0].main.temp_min,o=e[0].main.feels_like,i=e[0].main.humidity,u=e[0].weather[0].description,c=e[0].weather[0].main;return{cityName:t,temp:n,maxTemp:a,minTemp:r,feelsLike:o,humidityPercentage:i,fullWeather:u,shortWeather:c}}(),a=function(t){return{date:new Date(1e3*e[1].daily[t+1].dt),minTemp:e[1].daily[t+1].temp.min,maxTemp:e[1].daily[t+1].temp.max,fullWeather:e[1].daily[t+1].weather[0].description,shortWeather:e[1].daily[t+1].weather[0].main}},r=function(){const t=[];for(let e=0;e<7;e++)t.push(a(e));const n=[];for(let t=0;t<48;t++)n.push((r=t,{temp:e[1].hourly[r].temp,feelsLike:e[1].hourly[r].feels_like,weather:e[1].hourly[r].weather[0].main}));var r;return{daily:t,hourly:n}}();return{cityName:t,currentData:n,forecastData:r}};function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function u(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function c(e){i(1,arguments);var t=u(e);return!isNaN(t)}var s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var l,h={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;a=e.values[c]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function g(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=a.match(i);if(!u)return null;var c,s=u[0],d=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(s))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(s))return n}(d),c=e.valueCallback?e.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(s.length)}}}const p={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof s[e]?s[e]:1===t?s[e].one:s[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:h,formatRelative:function(e,t,n,a){return m[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(l.matchPattern);if(!r)return null;var o=r[0],i=n.match(l.parsePattern);if(!i)return null;var u=l.valueCallback?l.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:n.slice(o.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e,t){i(2,arguments);var n=u(e).getTime(),a=w(t);return new Date(n+a)}function v(e,t){i(2,arguments);var n=w(t);return y(e,-n)}function b(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const C=function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return b("yy"===t?a%100:a,t.length)},T=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):b(n+1,2)},M=function(e,t){return b(e.getUTCDate(),t.length)},D=function(e,t){return b(e.getUTCHours()%12||12,t.length)},P=function(e,t){return b(e.getUTCHours(),t.length)},x=function(e,t){return b(e.getUTCMinutes(),t.length)},E=function(e,t){return b(e.getUTCSeconds(),t.length)},S=function(e,t){var n=t.length,a=e.getUTCMilliseconds();return b(Math.floor(a*Math.pow(10,n-3)),t.length)};var k=864e5;function U(e){i(1,arguments);var t=1,n=u(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function W(e){i(1,arguments);var t=u(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=U(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var c=U(o);return t.getTime()>=r.getTime()?n+1:t.getTime()>=c.getTime()?n:n-1}function L(e){i(1,arguments);var t=W(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=U(n);return a}var N=6048e5;function H(e,t){i(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,o=null==r?0:w(r),c=null==n.weekStartsOn?o:w(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=u(e),d=s.getUTCDay(),l=(d<c?7:0)+d-c;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function q(e,t){i(1,arguments);var n=u(e,t),a=n.getUTCFullYear(),r=t||{},o=r.locale,c=o&&o.options&&o.options.firstWeekContainsDate,s=null==c?1:w(c),d=null==r.firstWeekContainsDate?s:w(r.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(a+1,0,d),l.setUTCHours(0,0,0,0);var h=H(l,t),m=new Date(0);m.setUTCFullYear(a,0,d),m.setUTCHours(0,0,0,0);var f=H(m,t);return n.getTime()>=h.getTime()?a+1:n.getTime()>=f.getTime()?a:a-1}function O(e,t){i(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:w(r),u=null==n.firstWeekContainsDate?o:w(n.firstWeekContainsDate),c=q(e,t),s=new Date(0);s.setUTCFullYear(c,0,u),s.setUTCHours(0,0,0,0);var d=H(s,t);return d}var Y=6048e5;function j(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+b(o,2)}function F(e,t){return e%60==0?(e>0?"-":"+")+b(Math.abs(e)/60,2):A(e,t)}function A(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+b(Math.floor(r/60),2)+n+b(r%60,2)}const z={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return C(e,t)},Y:function(e,t,n,a){var r=q(e,a),o=r>0?r:1-r;return"YY"===t?b(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):b(o,t.length)},R:function(e,t){return b(W(e),t.length)},u:function(e,t){return b(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return b(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return b(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return T(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return b(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){i(1,arguments);var n=u(e),a=H(n,t).getTime()-O(n,t).getTime();return Math.round(a/Y)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):b(r,t.length)},I:function(e,t,n){var a=function(e){i(1,arguments);var t=u(e),n=U(t).getTime()-L(t).getTime();return Math.round(n/N)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):b(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):M(e,t)},D:function(e,t,n){var a=function(e){i(1,arguments);var t=u(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/k)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):b(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return b(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return b(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return D(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):P(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):b(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):b(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):x(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):E(e,t)},S:function(e,t){return S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return F(r);case"XXXX":case"XX":return A(r);case"XXXXX":case"XXX":default:return A(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return F(r);case"xxxx":case"xx":return A(r);case"xxxxx":case"xxx":default:return A(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+j(r,":");case"OOOO":default:return"GMT"+A(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+j(r,":");case"zzzz":default:return"GMT"+A(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return b(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return b((a._originalDate||e).getTime(),t.length)}};function X(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function $(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const B={p:$,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return X(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",X(r,t)).replace("{{time}}",$(o,t))}};function Q(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var G=["D","DD"],I=["YY","YYYY"];function R(e){return-1!==G.indexOf(e)}function _(e){return-1!==I.indexOf(e)}function J(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,ee=/''/g,te=/[a-zA-Z]/;function ne(e,t,n){i(2,arguments);var a=String(t),r=n||{},o=r.locale||p,s=o.options&&o.options.firstWeekContainsDate,d=null==s?1:w(s),l=null==r.firstWeekContainsDate?d:w(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=o.options&&o.options.weekStartsOn,m=null==h?0:w(h),f=null==r.weekStartsOn?m:w(r.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=u(e);if(!c(g))throw new RangeError("Invalid time value");var y=Q(g),b=v(g,y),C={firstWeekContainsDate:l,weekStartsOn:f,locale:o,_originalDate:g},T=a.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,o.formatLong,C):e})).join("").match(Z).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return ae(n);var i=z[a];if(i)return!r.useAdditionalWeekYearTokens&&_(n)&&J(n,t,e),!r.useAdditionalDayOfYearTokens&&R(n)&&J(n,t,e),i(b,n,o.localize,C);if(a.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return T}function ae(e){return e.match(K)[1].replace(ee,"'")}function re(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);const n=document.createElement("h2");n.innerHTML=t.currentData.cityName,e.appendChild(n),(()=>{const n=document.createElement("section");n.id="current-weather";const a=document.createElement("h3");a.innerHTML="Current Weather";const r=document.createElement("p");r.innerHTML=`Temperature: ${Math.round(t.currentData.temp-273.15)} C`;const o=document.createElement("p");o.innerHTML=`Feels like: ${Math.round(t.currentData.feelsLike-273.15)} C`;const i=document.createElement("p");i.innerHTML=`Low: ${Math.round(t.currentData.minTemp-273.15)} C`;const u=document.createElement("p");u.innerHTML=`High: ${Math.round(t.currentData.maxTemp-273.15)} C`,n.appendChild(a),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(u),e.appendChild(n)})(),(()=>{const n=document.createElement("section");n.id="daily-data";const a=document.createElement("h3");a.innerHTML="Daily Forecast",n.appendChild(a);for(let e=0;e<7;e++){const a=document.createElement("section");a.id=`day-${e}`;const r=document.createElement("p");r.innerHTML=ne(t.forecastData.daily[e].date,"PPPP").slice(0,ne(t.forecastData.daily[e].date,"PPPP").lastIndexOf(","));const o=document.createElement("p");o.innerHTML=`Low: ${Math.round(t.forecastData.daily[e].minTemp-273.15)} C`;const i=document.createElement("p");i.innerHTML=`High: ${Math.round(t.forecastData.daily[e].maxTemp-273.15)} C`;const u=document.createElement("p");u.innerHTML=`${t.forecastData.daily[e].shortWeather}`,a.appendChild(r),a.appendChild(o),a.appendChild(i),a.appendChild(u),n.appendChild(a)}e.appendChild(n)})(),(()=>{const n=document.createElement("section");n.id="hourly-data";const a=document.createElement("h3");a.innerHTML="Hourly Forecast",n.appendChild(a);for(let e=0;e<48;e++){const a=document.createElement("section");a.id=`hour-${e}`;const r=document.createElement("p");r.innerHTML=`Temperature: ${Math.round(t.forecastData.hourly[e].temp-273.15)} C`;const o=document.createElement("p");o.innerHTML=`Feels like: ${Math.round(t.forecastData.hourly[e].feelsLike-273.15)} C`;const i=document.createElement("p");i.innerHTML=`${t.forecastData.hourly[e].weather}`,a.appendChild(r),a.appendChild(o),a.appendChild(i),n.appendChild(a)}e.appendChild(n)})()}function oe(e,t){for(let n=0;n<e.length;n++)e[n].style.display=n==t?"block":"none"}(()=>{const e=document.querySelector("#content");!function(e){const t=document.createElement("form");t.id="search-form";const n=document.createElement("input");n.id="search-input";const a=document.createElement("button");a.id="input-button",n.placeholder="Search for your city",a.innerHTML="Submit",t.appendChild(n),t.appendChild(a),e.appendChild(t);const r=document.createElement("section");r.id="weather-wrapper",e.appendChild(r);const o=document.createElement("div");o.id="button-display-wrapper";const i=document.createElement("button");i.id="show-current",i.innerHTML="Current",o.appendChild(i);const u=document.createElement("button");u.id="show-daily",u.innerHTML="Daily",o.appendChild(u);const c=document.createElement("button");c.id="show-hourly",c.innerHTML="Hourly",o.appendChild(c),e.appendChild(o)}(e),async function(){const t=await r("london,uk");console.log(t);const n=o(t);console.log(n),re(e.querySelector("#weather-wrapper"),n)}();const t=document.querySelector("input");document.querySelector("#search-form").onsubmit=async n=>{n.preventDefault();const a=await r(t.value);console.log(a);const i=o(a);console.log(i),re(e.querySelector("#weather-wrapper"),i)},document.querySelector("#button-display-wrapper").onclick=t=>{const n=[];n.push(e.querySelector("#current-weather")),n.push(e.querySelector("#daily-data")),n.push(e.querySelector("#hourly-data")),"show-current"===t.target.id?oe(n,0):"show-daily"===t.target.id?oe(n,1):"show-hourly"===t.target.id&&oe(n,2)}})()})()})();