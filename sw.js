if(!self.define){let s,e={};const t=(t,o)=>(t=new URL(t+".js",o).href,e[t]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=t,s.onload=e,document.head.appendChild(s)}else s=t,importScripts(t),e()})).then((()=>{let s=e[t];if(!s)throw new Error(`Module ${t} didn’t register its module`);return s})));self.define=(o,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const b=s=>t(s,r),c={module:{uri:r},exports:a,require:b};e[r]=Promise.all(o.map((s=>c[s]||b(s)))).then((s=>(i(...s),a)))}}define(["./workbox-1f73f963"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"asset-manifest.json",revision:"73c61dffb8c089def27cde3c3634310d"},{url:"bootstrap-5.3.2-dist/css/bootstrap-grid.css",revision:"0b849bedbbfa9f2f79fbda15d99adf60"},{url:"bootstrap-5.3.2-dist/css/bootstrap-grid.min.css",revision:"39d86e0381ffc70d7946fb64f7196c35"},{url:"bootstrap-5.3.2-dist/css/bootstrap-grid.rtl.css",revision:"d7033814406584373d344344725dc8c3"},{url:"bootstrap-5.3.2-dist/css/bootstrap-grid.rtl.min.css",revision:"e2a866eadcf7433c4ddee586e8274afb"},{url:"bootstrap-5.3.2-dist/css/bootstrap-reboot.css",revision:"1955fc0aa4b5b461c6168b8898d1ea88"},{url:"bootstrap-5.3.2-dist/css/bootstrap-reboot.min.css",revision:"4bd9c7e9da52cb7f2c034cb8254b4439"},{url:"bootstrap-5.3.2-dist/css/bootstrap-reboot.rtl.css",revision:"e02a9453f8b7b01a54ffea46f471b0f3"},{url:"bootstrap-5.3.2-dist/css/bootstrap-reboot.rtl.min.css",revision:"ea37e78d14adc3c2b997a37ed6405182"},{url:"bootstrap-5.3.2-dist/css/bootstrap-utilities.css",revision:"e37f368fb80f834e421346e2714de253"},{url:"bootstrap-5.3.2-dist/css/bootstrap-utilities.min.css",revision:"c20520043b2fef578f56664502feef29"},{url:"bootstrap-5.3.2-dist/css/bootstrap-utilities.rtl.css",revision:"442d3421b1a94baf36310d693cbe3308"},{url:"bootstrap-5.3.2-dist/css/bootstrap-utilities.rtl.min.css",revision:"09f073ec3e8af42408824792d94e5f8b"},{url:"bootstrap-5.3.2-dist/css/bootstrap.css",revision:"0f0f4fb619d0b8187bdea9ee84692b39"},{url:"bootstrap-5.3.2-dist/css/bootstrap.min.css",revision:"cd822b7fd22c8a95a68470c795adea69"},{url:"bootstrap-5.3.2-dist/css/bootstrap.rtl.css",revision:"476379dfafbb63eba2302eac2e79f547"},{url:"bootstrap-5.3.2-dist/css/bootstrap.rtl.min.css",revision:"54cf0bc79dadd28e7b1eb2df032f7bfb"},{url:"bootstrap-5.3.2-dist/js/bootstrap.bundle.js",revision:"fe87f14dfe6a44b0d03fb2ae9764a3f9"},{url:"bootstrap-5.3.2-dist/js/bootstrap.bundle.min.js",revision:"6baf57f25796c332144ed58a2a0cd9ee"},{url:"bootstrap-5.3.2-dist/js/bootstrap.esm.js",revision:"296ea7c80a8730e2a511c9c756a27887"},{url:"bootstrap-5.3.2-dist/js/bootstrap.esm.min.js",revision:"37f036058f51ced4d7be7972e81de087"},{url:"bootstrap-5.3.2-dist/js/bootstrap.js",revision:"7b140b82d972ce11c804035a2e10575c"},{url:"bootstrap-5.3.2-dist/js/bootstrap.min.js",revision:"f63dfbdcc649f13af4791a90e51f7907"},{url:"images/144.png",revision:"3b93cb9dad3e2e34c03a51e6430427b3"},{url:"images/192.png",revision:"e15b94e6edc3bd61b8c458cdb2cbcf8b"},{url:"images/36.png",revision:"f8b0e6987559908ab35410c699a373c2"},{url:"images/48.png",revision:"b52354514fa092056ce41985696cdb37"},{url:"images/512.png",revision:"f0a8e1f4b83960f859859824e89f63a3"},{url:"images/72.png",revision:"a5b9fb497cc39860f0eae124a05f0f2e"},{url:"images/96.png",revision:"8d401b87055ed45d56f3b6bdd07c8b68"},{url:"images/favicon.png",revision:"f8b0e6987559908ab35410c699a373c2"},{url:"index.html",revision:"5d809486bdefe201ee80603644259885"},{url:"manifest.json",revision:"6e026207370a399429ead84643359722"},{url:"static/css/main.524f7264.css",revision:"5b95d9ad769a6a1b72d37dbb1cc8d19f"},{url:"static/js/main.459132a6.js",revision:"a182f77cf854284046ba55183cd5054e"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
