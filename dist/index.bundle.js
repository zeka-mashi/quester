(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Cinzel:wght@900&family=Quicksand:wght@400;700&display=block);"]),i.push([e.id,'* {\n    margin: 0;\n}\n::-webkit-scrollbar {\n    width: 5px;\n}\n\n::-webkit-scrollbar-track {\n    background: #c7c7c7;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #868686;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #707070;\n}\n\nbody {\n    background-color: #c6c7c4;\n}\n\na {\n    display: inherit;\n}\n\n.nos {\n    user-select: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.flex-c {\n    display: flex;\n    flex-direction: column;\n}\n\n.flex-r {\n    display: flex;\n    flex-direction: row;\n}\n\n.container {\n    /* width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    display: flex;\n    background-color: aliceblue;\n    background-image: url(https://images6.alphacoders.com/313/313253.jpg);\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center; */\n}\n\n.sidebar {\n    font-family: "Quicksand", sans-serif;\n    font-weight: 400;\n    width: 250px;\n    background-color: #353b3c;\n    box-shadow: 1px 0px 10px #000000;\n    position: fixed;\n    top: 0;\n    z-index: 1;\n    min-height: 100vh;\n    height: 100%;\n    transition: width 0.2s ease-in-out;\n}\n\n.sidebar-header {\n    text-align: center;\n    color: #c5cbd3;\n    padding: 20px 0;\n    box-shadow: -2px 3px 5px #000000;\n}\n\n.sidebar-header h5 {\n    font-weight: 400;\n}\n\n.mobile-menu {\n    position: absolute;\n    display: none;\n    top: 5px;\n    left: 5px;\n    color: #e1e1e1;\n    cursor: pointer;\n}\n\n.mobile-menu:hover {\n    color: white;\n}\n\n.mobile-menu svg {\n    width: 48px;\n    height: 48px;\n}\n\n.add-function {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n    margin-top: 15px;\n}\n\n.new-func {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    border: 1px solid gray;\n    background-color: #40ab58;\n    padding: 5px 0;\n    cursor: pointer;\n}\n\n.new-func svg {\n    width: 24px;\n    height: 24px;\n}\n\n.new-func:hover {\n    border-color: black;\n    background-color: #35bd53;\n}\n\n.sidebar-header h1 {\n    font-family: "Cinzel", serif;\n    font-size: 40px;\n}\n\n.sidebar-wrapper {\n    margin: 30px 10px 10px 10px;\n    flex: 1;\n    gap: 10px;\n    overflow-y: auto;\n}\n\n.sidebar-item {\n    display: flex;\n    align-items: center;\n    word-break: break-word;\n    gap: 15px;\n    font-size: 20px;\n    font-weight: 400;\n    cursor: pointer;\n    padding: 1px 5px;\n    color: #8b8b8b;\n}\n\n.item-del {\n    margin-left: auto;\n    color: #919191;\n}\n\n.sidebar-item svg {\n    height: 36px;\n    width: 36px;\n    vertical-align: bottom;\n}\n\n.item-del svg {\n    height: 20px;\n    width: 20px;\n    vertical-align: middle;\n}\n\n.item-del:hover {\n    color: #b6b6b6;\n}\n\n.active {\n    color: #ffffff;\n}\n\n.credit {\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2px;\n    color: #c5cbd3;\n    box-shadow: -5px 0px 15px black;\n}\n\n.credit svg {\n    width: 18px;\n    height: 18px;\n}\n\n.credit a {\n    color: #c5cbd3;\n}\n\n.main {\n    margin-left: 250px;\n    font-family: "Almarai", sans-serif;\n    flex: 1;\n    transition: margin-top 0.5s ease-in-out, margin-left 0.5s ease-in-out;\n}\n\n.home {\n    font-family: sans-serif;\n    justify-content: center;\n    height: 100%;\n    margin-top: 50px;\n    text-align: center;\n}\n\n.home-header {\n    font-family: "Quicksand", sans-serif;\n    font-size: 40px;\n}\n\n.home-header-unique {\n    font-family: "Cinzel", serif;\n    font-size: 50px;\n}\n\n.body-wrapper {\n    margin: 40px 10% 0 10%;\n}\n\n.modal {\n    position: absolute;\n    top: 0;\n    font-family: "Quicksand", sans-serif;\n    background-color: #000000d1;\n    z-index: 10000;\n    width: 100%;\n    height: 100%;\n}\n\n.close-btn {\n    position: absolute;\n    width: 36px;\n    height: 36px;\n    right: 10px;\n    top: 5px;\n    color: lightgray;\n    cursor: pointer;\n}\n\n.close-btn:hover {\n    color: white;\n}\n\n.board-modal {\n    width: 320px;\n    height: 230px;\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    transform: translateX(-50%) translateY(-50%);\n    font-weight: bold;\n    color: #195026;\n    background-color: #b9b9b9;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 20px;\n}\n\n.quest-modal {\n    width: 300px;\n    height: 450px;\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    transform: translateX(-50%) translateY(-50%);\n    color: #195026;\n    font-weight: bold;\n    background-color: #b9b9b9;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 20px;\n}\n\n.quest-wrapper {\n    display: flex;\n    gap: 20px;\n    margin: 20px;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.quest-container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 100%;\n    width: 300px;\n    gap: 10px;\n    background-color: #eef0f2;\n    border-radius: 3px 0 3px 3px;\n    box-shadow: 0px 0px 10px #000000a6;\n    overflow: hidden;\n}\n\n.quest-container h3 {\n    font-size: 18px;\n    margin-right: 25%;\n    padding: 10px 0 0 10px;\n}\n\n.header-actions {\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n}\n\n.header-actions svg {\n    width: 28px;\n    height: 28px;\n    color: white;\n}\n\n.minmax-box svg {\n    background-color: black;\n}\n\n.minmax-box:hover svg {\n    background-color: #404040;\n}\n\n.close-box svg {\n    background-color: #c13333;\n}\n\n.close-box:hover svg {\n    background-color: #e94545;\n}\n\n.side-color {\n    height: 100%;\n    width: 5px;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.overdue {\n    color: #a94c4c;\n}\n\n.quest-desc-wrapper {\n    overflow: hidden;\n    max-height: 0;\n    transition: max-height 0.2s ease-in-out;\n}\n\n.quest-desc {\n    line-height: 1.5em;\n    padding: 5px 10px 15px 15px;\n}\n\n.quest-action {\n    cursor: pointer;\n}\n\n.ctr {\n    text-align: center;\n}\n\n.mtb-10 {\n    margin: 10px 0;\n}\n\n.ma-0 {\n    margin: auto 0;\n}\n\n.ma-l {\n    margin-left: auto;\n}\n\n.fg-40 {\n    gap: 40px;\n}\n\n.fg-5 {\n    gap: 5px;\n}\n\n.drop-inactive {\n    transform: rotate(-90deg);\n    transition: -webkit-transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n}\n\n.drop-active {\n    transition: -webkit-transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n}\n\n.inline-wrapper {\n    display: flex;\n    height: 25px;\n    align-items: center;\n    padding: 0 10px;\n}\n\n.inline-wrapper svg {\n    width: 24px;\n    height: 24px;\n    vertical-align: sub;\n}\n\n.p-low {\n    background-color: #80bf80;\n}\n\n.p-med {\n    background-color: #d3d332;\n}\n\n.p-high {\n    background-color: #fd7e7e;\n}\n\n.pb-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px 10px;\n    background-color: #e1e1e1;\n    box-shadow: 0px 0px 15px #00000052;\n}\n\n.editbar svg {\n    width: 24px;\n    height: 24px;\n}\n\n#new-board .input-wrapper {\n    width: 50%;\n    margin-top: 20px;\n}\n\n#new-quest .input-wrapper {\n    width: 100%;\n    margin-top: 20px;\n}\n\n.input-wrapper label {\n    font-size: 14px;\n    width: fit-content;\n}\n\n.input-wrapper input {\n    border: none;\n    background-color: inherit;\n    border-bottom: 1px solid #777777;\n    outline: none;\n    padding: 3px;\n    margin-top: 5px;\n}\n\n.input-wrapper input:focus {\n    border-bottom: 1px solid #000000;\n}\n\n.modal form {\n    flex: 1;\n}\n\n.modal-btn {\n    height: 50px;\n    background-color: #40ab58;\n    border: 1px solid black;\n    cursor: pointer;\n}\n\n.modal-btn:hover {\n    background-color: #44be5e;\n}\n\n.hide {\n    display: none;\n}\n\n.disabled {\n    background-color: #ffffff73;\n    cursor: default;\n    pointer-events: none;\n}\n\ntextarea {\n    resize: none;\n}\n\n.edit-icon {\n    color: green;\n}\n\n.quest-container input {\n    outline: none;\n    border-style: none;\n    background-color: #eef0f2;\n    border-bottom: 2px solid black;\n}\n\n.title-edit {\n    font-size: 16px;\n    margin: 10px 25% 10px 10px;\n    padding: 5px;\n}\n\n.desc-edit {\n    margin: 10px;\n}\n\n.priority-edit {\n    margin: 0 auto 15px 10px;\n}\n\n@media only screen and (max-width: 595px) {\n    .sidebar.mobile-active {\n        display: flex;\n        width: 100%;\n    }\n\n    .sidebar {\n        width: 0px;\n    }\n\n    .sidebar:not(.mobile-active) > div:not(.mobile-menu) {\n        display: none;\n    }\n\n    .mobile-active > .mobile-menu {\n        color: #e1e1e1;\n    }\n\n    .mobile-active > .mobile-menu:hover {\n        color: white;\n    }\n\n    .mobile-menu {\n        color: black;\n        display: block;\n    }\n\n    .main {\n        margin-left: 0px;\n        margin-top: 70px;\n    }\n}\n\n@media only screen and (max-width: 250px) {\n    .sidebar.mobile-active {\n        min-width: 250px;\n    }\n}\n',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],c=a.base?d[0]+a.base:d[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var d=a(e,r),c=0;c<o.length;c++){var l=n(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),o=n(569),i=n.n(o),s=n(565),d=n.n(s),c=n(216),l=n.n(c),u=n(589),p=n.n(u),m=n(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const b='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z" /></svg>',g='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 22H18V17H20M6 22H4V17H6M23 4V13A2 2 0 0 1 21 15H3A2 2 0 0 1 1 13V4A2 2 0 0 1 3 2H21A2 2 0 0 1 23 4M21 4H3V13H21M20 6H15V8H20M18 9H15V11H18M14 11H4L6.73 7.36L8.73 10.09L9.46 9.55L8.2 7.82L9.91 5.55Z" /></svg>',f='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>',x='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>',v='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 10C10.68 9.44 11.19 9.15 11.88 9.14C12.33 9.14 12.74 9.34 13.03 9.63C13.31 9.94 13.5 10.37 13.5 10.8H15.3C15.28 10.33 15.19 9.9 15 9.5C14.85 9.12 14.62 8.78 14.32 8.5C12.87 7.16 10.18 7.35 8.95 8.87C7.66 10.54 7.63 13.46 8.94 15.13C10.15 16.62 12.8 16.83 14.24 15.5C14.55 15.25 14.8 14.94 15 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.5C13.5 13.64 13.43 13.83 13.34 14C13.25 14.19 13.13 14.34 13 14.47C12.67 14.73 12.28 14.87 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.5 10.5 14.27 10.38 14C9.88 13.1 9.96 11.85 10.08 10.86M12 2C6.5 2 2 6.5 2 12C2.53 25.27 21.5 25.26 22 12C22 6.5 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12C4.44 1.39 19.56 1.39 20 12C20 16.41 16.41 20 12 20Z" /></svg>',C='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>',L='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>',y='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>',w='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>',E='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>',H='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1H6M5 8H19V19H5V7M11 9V14H13V9H11M11 16V18H13V16H11Z" /></svg>',A='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" /></svg>',q='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z" /></svg>',M='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>',k='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" /></svg>',V='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>',S='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4,4H20V20H4V4M6,8V18H18V8H6Z" /></svg>',N='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20,14H4V10H20" /></svg>';function T(){const e=document.createElement("div");e.classList.add("home","flex-c");const t=document.createElement("div");e.appendChild(t);const n=document.createElement("h1");n.classList.add("home-header"),n.textContent="Welcome to";const a=document.createElement("h1");a.textContent="Quester",a.classList.add("home-header-unique"),t.append(n,a);const r=document.createElement("div");r.classList.add("body-wrapper"),e.appendChild(r);const o=document.createElement("p");return o.innerHTML="Quester is a #todo web app to manage your todo items. \n    To put a small spin on it, they're called <b>quests</b> and are assigned to \n    <b>boards</b>. Don't worry -- it's simply todo items grouped by categories.\n    <br><br>Quester makes it easy to change up todos with full \n    editing functionality and see everything in a clean view!<br><br>\n    This is your Home. You can see all your quests from all your active boards here.\n    <br><br>It looks like you don't have any quests added yet. Try adding a new board \n    and add your first one!",r.appendChild(o),e}function B(){const e=document.createElement("input");e.setAttribute("type","date"),e.setAttribute("onkeydown","return false"),e.required=!0;const t=new Date;var n=t.getMonth()+1,a=t.getDate();n<10&&(n="0"+n.toString()),a<10&&(a="0"+a.toString());const r=t.getFullYear()+"-"+n+"-"+a;return e.setAttribute("min",r),e}function O(){const e=document.createElement("select"),t=document.createElement("option");t.setAttribute("value","Low"),t.selected=!0,t.textContent="Low",e.appendChild(t);const n=document.createElement("option");n.setAttribute("value","Medium"),n.textContent="Medium",e.appendChild(n);const a=document.createElement("option");return a.setAttribute("value","High"),a.textContent="High",e.appendChild(a),e}function I(e){let t=JSON.parse(localStorage.getItem(e.getAttribute("data-board")))||[];const n=e.getAttribute("data-quest"),a=t.find((e=>e["quest-name"]===n));if(a&&confirm("Are you sure you want to delete this quest?")){const n=t.indexOf(a);t.splice(n,1),localStorage.setItem(e.getAttribute("data-board"),JSON.stringify(t)),e.remove()}}function Z(e){const t=e.querySelector(".quest-desc-wrapper"),n=e.querySelector(".minmax-box");t&&!n.classList.contains("edit-mode")&&(t.classList.toggle("shown"),t.classList.contains("shown")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight="0px",n.classList.toggle("drop-active"),n.classList.contains("drop-active")?n.innerHTML=N:n.innerHTML=S)}function z(e){const t=JSON.parse(localStorage.getItem(e.getAttribute("data-board")))||[],n=e.getAttribute("data-quest"),a=t.find((e=>e["quest-name"]===n)),r=e.querySelector(".minmax-box"),o=e.querySelector(".edit-icon");if(o.classList.contains("check-icon")){const n=e.querySelector(".title-edit"),i=e.querySelector(".desc-edit"),s=e.querySelector(".quest-due"),d=e.querySelector(".priority-edit"),c=e.querySelector(".undo-icon");if(n.value.length>2&&n.value.length<51&&i.value.length>0&&i.value.length<501&&s.value.length>0){if(confirm("Are you sure you want to save your changes?")){o.innerHTML=q,c.remove(),o.classList.remove("check-icon"),r.classList.remove("edit-mode");const l=document.createElement("h3");l.textContent=n.value;const u=document.createElement("p");u.classList.add("quest-desc"),u.textContent=i.value;const p=document.createElement("p");p.textContent=s.value,p.classList.add("quest-due");const m=e.querySelector(".side-color");m.className="side-color","Low"==d.value?(m.classList.add("p-low"),m.setAttribute("data-priority","Low")):"Medium"==d.value?(m.classList.add("p-med"),m.setAttribute("data-priority","Medium")):(m.classList.add("p-high"),m.setAttribute("data-priority","High")),n.parentNode.replaceChild(l,n),i.parentNode.replaceChild(u,i),s.parentNode.replaceChild(p,s);const h=(new Date).toLocaleDateString("en-CA");p.textContent<h?(p.parentElement.classList.add("overdue"),p.parentElement.firstChild.innerHTML=H):p.textContent>h?p.parentElement.firstChild.innerHTML=A:p.parentElement.firstChild.innerHTML=E,d.remove(),e.setAttribute("data-quest",n.value);const b=t.indexOf(a),g={"date-picker":p.textContent,"quest-board":e.getAttribute("data-board"),"quest-desc":u.textContent,"quest-name":l.textContent,"quest-priority":m.getAttribute("data-priority")};t.splice(b,1,g),localStorage.setItem(e.getAttribute("data-board"),JSON.stringify(t));const f=e.querySelector(".quest-desc-wrapper");f.style.maxHeight=f.scrollHeight+"px"}}else alert("Please make sure your quest entry is valid!\n\n- Title has 3 to 50 characters\n- Description has 1 to 500 characters")}else{var i=e.cloneNode(!0);r.classList.add("edit-mode"),o.innerHTML=M,o.classList.add("check-icon");const t=document.createElement("div");t.innerHTML=k,t.classList.add("quest-action","undo-icon"),t.addEventListener("click",(function(){confirm("Undo all changes?")&&(e.parentNode.replaceChild(i,e),e=null,i.querySelector(".minmax-box").addEventListener("click",(function(e){Z(e.currentTarget.parentElement.parentElement)})),i.querySelector(".close-box").addEventListener("click",(function(e){I(e.currentTarget.parentElement.parentElement)})),i.querySelector(".edit-icon").addEventListener("click",(function(e){z(e.currentTarget.parentElement.parentElement.parentElement.parentElement)})))})),o.parentNode.insertBefore(t,o);const n=e.querySelector("h3"),a=e.querySelector("p.quest-desc"),s=e.querySelector("p.quest-due"),d=e.querySelector(".side-color").getAttribute("data-priority"),c=e.querySelector(".quest-desc-wrapper"),l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("value",n.textContent),l.setAttribute("minlength","3"),l.setAttribute("maxlength","50"),l.classList.add("title-edit");const u=document.createElement("textarea");u.classList.add("desc-edit"),u.setAttribute("rows","5"),u.setAttribute("cols","32"),u.value=a.textContent;const p=B();p.classList.add("quest-due"),p.value=s.textContent;const m=O();m.classList.add("priority-edit"),"Medium"==d?m.querySelectorAll("option")[1].selected=!0:"High"==d&&(m.querySelectorAll("option")[2].selected=!0),n.parentNode.replaceChild(l,n),a.parentNode.replaceChild(u,a),s.parentNode.replaceChild(p,s),u.parentNode.insertBefore(m,u.nextSibling),c.style.maxHeight="100%"}}function D(){const e=document.getElementsByClassName("main")[0];try{for(;e.firstChild;)e.removeChild(e.lastChild)}catch{}const t=e.getAttribute("data-board"),n=document.createElement("div");n.classList.add("quest-wrapper"),e.append(n);var a=Q(t);let r=(new Date).toLocaleDateString("en-CA");for(let e=0;e<a.length;e++){const t=document.createElement("div");t.classList.add("quest-container"),t.setAttribute("data-quest",a[e]["quest-name"]),t.setAttribute("data-board",a[e]["quest-board"]);const o=document.createElement("h3");o.textContent=a[e]["quest-name"];const i=document.createElement("div");i.classList.add("header-actions");const s=document.createElement("div");s.classList.add("minmax-box"),s.innerHTML=S,s.addEventListener("click",(function(e){Z(e.currentTarget.parentElement.parentElement)}));const d=document.createElement("div");d.classList.add("close-box"),d.innerHTML=V,d.addEventListener("click",(function(e){I(e.currentTarget.parentElement.parentElement)})),i.append(s,d);const c=document.createElement("div");c.classList.add("side-color"),"Low"==a[e]["quest-priority"]?(c.classList.add("p-low"),c.setAttribute("data-priority","Low")):"Medium"==a[e]["quest-priority"]?(c.classList.add("p-med"),c.setAttribute("data-priority","Medium")):"High"==a[e]["quest-priority"]&&(c.classList.add("p-high"),c.setAttribute("data-priority","High"));const l=document.createElement("div");l.classList.add("inline-wrapper","fg-5");const u=document.createElement("span"),p=document.createElement("p");p.textContent=a[e]["date-picker"],p.classList.add("quest-due"),p.textContent<r?(l.classList.add("overdue"),u.innerHTML=H):p.textContent>r?u.innerHTML=A:u.innerHTML=E,l.append(u,p);const m=document.createElement("div");m.classList.add("quest-desc-wrapper");const h=document.createElement("p");h.classList.add("quest-desc"),h.textContent=a[e]["quest-desc"];const b=document.createElement("div");b.classList.add("pb-wrapper");const g=document.createElement("p");g.textContent=a[e]["quest-board"];const f=document.createElement("div");f.classList.add("editbar","flex-r","ma-l","fg-5");const x=document.createElement("div");x.innerHTML=q,x.classList.add("quest-action","edit-icon"),x.addEventListener("click",(function(e){z(e.currentTarget.parentElement.parentElement.parentElement.parentElement)})),f.appendChild(x),b.append(g,f),m.append(h,b),t.append(i,c,o,l,m),n.appendChild(t)}}function J(e){const t=document.getElementsByClassName("main")[0],n=t.getAttribute("data-board"),a=document.getElementsByClassName("new-func")[0];try{for(;t.firstChild;)t.removeChild(t.lastChild)}catch{}const r=document.getElementsByClassName("sidebar-item");for(let e=0;e<r.length;e++)r[e].classList.remove("active");if(e?e.currentTarget.classList.add("active"):r[0].classList.add("active"),"home"==n){a.classList.add("disabled");const e=Q(n);e.length<1||e.every((e=>null===e))?t.appendChild(T()):D()}else a.classList.remove("disabled"),D()}function Q(e){var t=[];if("home"==e){const e=JSON.parse(localStorage.getItem("boards"))||[];for(let n=0;n<e.length;n++)t=t.concat(JSON.parse(localStorage.getItem(e[n])))}else t=JSON.parse(localStorage.getItem(e))||[];return(t=t.filter((e=>e))).sort(((e,t)=>e["date-picker"]>t["date-picker"]?1:-1)),t}function j(e){const t=e||JSON.parse(localStorage.getItem("boards"))||[],n=document.getElementsByClassName("sidebar-item");for(let e=n.length-1;e>=1;e--)n[e].remove();const a=document.getElementsByClassName("sidebar-wrapper")[0];for(let e=0;e<t.length;e++)a.appendChild(F(g,t[e],`${t[e]}`))}function F(e,t,n,a){const r=document.createElement("div");r.classList.add("sidebar-item");const o=document.createElement("span");o.innerHTML=e;const i=document.createElement("span");i.innerHTML=`${t}`,r.setAttribute("data-item",n),a&&r.classList.add("active");const s=function(e){document.getElementsByClassName("main")[0].setAttribute("data-board",r.getAttribute("data-item")),J(e),e.currentTarget.parentElement.parentElement.classList.remove("mobile-active")};if(r.addEventListener("click",s),r.append(o,i),!a){const e=document.createElement("span");e.innerHTML=w,e.classList.add("item-del"),e.addEventListener("click",(function(e){if(confirm("Deleting this board will also delete all associated quests.\n\nReally delete this board? This action cannot be undone!")){let n;n="path"==e.target.tagName?e.target.parentElement.parentElement.parentElement:e.target.parentElement.parentElement,n.removeEventListener("click",s);var t=JSON.parse(localStorage.getItem("boards"))||[];const a=t.indexOf(n.getAttribute("data-item"));a>-1&&t.splice(a,1),localStorage.setItem("boards",JSON.stringify(t)),document.getElementsByClassName("main")[0].setAttribute("data-board","home"),J(),j(t)}})),r.appendChild(e)}return r}function P(){const e=document.createElement("div");e.classList.add("modal");const t=document.createElement("div");return t.innerHTML=w,t.classList.add("close-btn"),t.addEventListener("click",(function(){e.remove()})),e.appendChild(t),e}function Y(){document.getElementsByClassName("container")[0].appendChild(function(){const e=P(),t=document.createElement("div");t.classList.add("quest-modal","flex-c"),e.appendChild(t);const n=document.createElement("h2");t.appendChild(n),n.textContent="New Quest",n.classList.add("ctr","mtb-10");const a=document.createElement("form");a.setAttribute("id","new-quest"),t.appendChild(a);const r=document.createElement("div");a.appendChild(r),r.classList.add("input-wrapper","flex-c");const o=document.createElement("label");o.textContent="Quest Name",o.setAttribute("for","quest-name");const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","quest-name"),i.setAttribute("name","quest-name"),i.setAttribute("minlength","3"),i.setAttribute("maxlength","50"),i.required=!0,r.append(o,i);const s=document.createElement("div");a.appendChild(s),s.classList.add("input-wrapper","flex-c");const d=document.createElement("label");d.textContent="Description",d.setAttribute("for","quest-desc");const c=document.createElement("textarea");c.setAttribute("rows","5"),c.setAttribute("cols","40"),c.setAttribute("id","quest-desc"),c.setAttribute("name","quest-desc"),c.setAttribute("minlength","1"),c.setAttribute("maxlength","500"),c.required=!0,s.append(d,c);const l=document.createElement("div");l.classList.add("flex-r","fg-40"),a.appendChild(l);const u=document.createElement("div");l.appendChild(u),u.classList.add("input-wrapper","flex-c");const p=document.createElement("label");p.textContent="Due Date",p.setAttribute("for","date-picker");const m=B();m.setAttribute("id","date-picker"),m.setAttribute("name","date-picker"),u.append(p,m);const h=document.createElement("div");l.appendChild(h),h.classList.add("input-wrapper","flex-c");const b=document.createElement("label");b.textContent="Priority",b.setAttribute("for","quest-priority");const g=O();g.setAttribute("id","quest-priority"),g.setAttribute("name","quest-priority"),g.classList.add("ma-0"),h.append(b,g);const f=document.createElement("div");a.appendChild(f),f.classList.add("input-wrapper","flex-c");const x=document.createElement("label");x.textContent="Assigned Board",x.setAttribute("for","quest-board");const v=document.createElement("select");v.setAttribute("id","quest-board");const C=document.getElementsByClassName("main")[0].getAttribute("data-board"),L=document.createElement("option");L.setAttribute("value",C),v.setAttribute("name","quest-board"),L.selected=!0,L.textContent=C,v.appendChild(L),f.append(x,v);const y=document.createElement("input");return t.appendChild(y),y.classList.add("modal-btn"),y.setAttribute("type","submit"),y.setAttribute("form","new-quest"),y.setAttribute("value","Add Quest"),a.addEventListener("submit",(function(t){var n=JSON.parse(localStorage.getItem(C))||[];t.preventDefault();const a=Object.fromEntries(new FormData(t.target).entries());console.log(a);let r=n.find((e=>e["quest-name"]===a["quest-name"]));n.indexOf(r)<0?(n.push(a),localStorage.setItem(C,JSON.stringify(n)),e.remove(),D()):alert("A quest with that name already exists on this board!")})),e}())}function R(){document.getElementsByClassName("container")[0].appendChild(function(){const e=P(),t=document.createElement("div");t.classList.add("board-modal","flex-c"),e.appendChild(t);const n=document.createElement("h2");t.appendChild(n),n.textContent="New Adventure Board",n.classList.add("ctr","mtb-10");const a=document.createElement("form");a.setAttribute("id","new-board"),t.appendChild(a);const r=document.createElement("div");a.appendChild(r),r.classList.add("input-wrapper","flex-c");const o=document.createElement("label");o.textContent="Board Name",o.setAttribute("for","board-name");const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","board-name"),i.setAttribute("name","board-name"),i.setAttribute("minlength","1"),i.setAttribute("maxlength","20"),i.required=!0,r.append(o,i);const s=document.createElement("input");return t.appendChild(s),s.classList.add("modal-btn"),s.setAttribute("type","submit"),s.setAttribute("form","new-board"),s.setAttribute("value","Add Board"),a.addEventListener("submit",(function(t){var n=JSON.parse(localStorage.getItem("boards"))||[];t.preventDefault();const a=Object.fromEntries(new FormData(t.target).entries()),r=n.indexOf(a["board-name"]);"home"==a["board-name"].toLowerCase()?alert("Well that's awkward... you can't add your home board!"):r<0?(n.push(a["board-name"]),localStorage.setItem("boards",JSON.stringify(n)),e.remove(),j(n)):alert("That board already exists!")})),e}())}document.getElementsByTagName("body")[0].appendChild(function(){const e=document.createElement("div");e.classList.add("container"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar","flex-c","nos");const t=document.createElement("div");t.innerHTML=y,t.classList.add("mobile-menu"),t.addEventListener("click",(function(e){e.currentTarget.parentElement.classList.toggle("mobile-active")})),e.appendChild(t);const n=document.createElement("h1");n.textContent="Quester";const a=document.createElement("h5");a.textContent="For all your #todo items";const r=document.createElement("div");r.classList.add("sidebar-header"),r.appendChild(n),r.appendChild(a),e.appendChild(r);const o=document.createElement("div");o.classList.add("add-function");const i=document.createElement("div");i.innerHTML=f+"New Quest",i.addEventListener("click",Y),i.classList.add("new-func","disabled"),o.appendChild(i);const s=document.createElement("div");s.innerHTML=x+"New Board",s.addEventListener("click",R),s.classList.add("new-func"),o.appendChild(s),e.appendChild(o);const d=document.createElement("div");d.classList.add("sidebar-wrapper","flex-c"),e.appendChild(d);const c=document.createElement("div");c.classList.add("credit"),c.innerHTML=v+"2022 zeka-mashi<a href='https://github.com/zeka-mashi/quester'>"+C+"</a><a href='https://davidthe.dev/'>"+L+"</a>",e.appendChild(c),d.appendChild(F(b,"Home","home",!0));var l=JSON.parse(localStorage.getItem("boards"))||[];for(let e=0;e<l.length;e++)d.appendChild(F(g,l[e],`${l[e]}`));return e}());const t=document.createElement("div");return t.classList.add("main"),t.setAttribute("data-board","home"),e.appendChild(t),t.appendChild(T()),e}()),J()})()})();