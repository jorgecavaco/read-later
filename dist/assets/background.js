!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=60)}({25:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={title:"__read_later__",favicon_api:"http://www.google.com/s2/favicons?domain=",img_timeout:3e3,img_default:"./icons/icon_48.png"}},60:function(e,t,o){"use strict";var r,n=o(25),i=(r=n)&&r.__esModule?r:{default:r};var c={},a=[],s=i.default,u=s.title;function d(e){return new Promise(function(t,o){chrome.bookmarks.search({title:e},function(o){o.length?(function(e){var t=e[0].id;c=Object.assign({},e[0]),e.shift(),e.forEach(function(e){chrome.bookmarks.getChildren(e.id,function(o){o.forEach(function(e){chrome.bookmarks.move(e.id,{parentId:t})}),chrome.bookmarks.remove(e.id)})})}(o),t(c)):chrome.bookmarks.create({title:e},function(e){t(e)})})})}function f(e){chrome.bookmarks.getChildren(e.id,function(e){a=e}),l()}function l(){if(!c.id)return chrome.browserAction.setBadgeText({text:"0"}),!1;chrome.bookmarks.getChildren(c.id,function(e){var t;t=e?e.length:0,chrome.browserAction.setBadgeText({text:t>99?"+"+t:""+t})})}function m(e,t){chrome.notifications.create({iconUrl:"./icons/icon_128.png",type:"basic",title:e,message:t})}function h(){chrome.tabs.query({active:!0,currentWindow:!0},function(e){if(1!==e.length)throw"add post ERROR";var t=e[0];!function(e,t){var o={parentId:c.id,title:e,url:t},r=!0,n=!0,i=!1,s=void 0;try{for(var u,d=a[Symbol.iterator]();!(n=(u=d.next()).done);n=!0)u.value.url===t&&(r=!1)}catch(e){i=!0,s=e}finally{try{!n&&d.return&&d.return()}finally{if(i)throw s}}if(!r)return m("warning","you has the same post."),!1;chrome.bookmarks.create(o,function(e){f(c),m("success","add a read later post.")})}(t.title,t.url),l()})}d(u).then(function(e){c=e,f(e),l()}),chrome.browserAction.setBadgeBackgroundColor({color:"#4779ED"}),chrome.contextMenus.create({title:"read later",contexts:["page"],onclick:h}),chrome.runtime.onMessage.addListener(function(e){var t=e.type,o=e.data;!function(e,t){var o;"remove"===e&&(o=t,a.forEach(function(e,t){e.id===o&&a.splice(t,1)}),chrome.bookmarks.remove(o,function(){f(c),m("success","remove post.")})),"clear"===e&&(chrome.bookmarks.removeTree(c.id),d(u).then(function(e){c=e,f(e),l()})),"get_data"===e&&chrome.runtime.sendMessage({type:"return_data",data:c}),"get_settings"===e&&chrome.runtime.sendMessage({type:"return_settings",data:s}),"reset_settings"!==e&&"save_settings"!==e||function(e,t){var o=void 0;t&&t.title!==u&&(o=!0),s="reset_settings"===e?i.default:t,o&&(u=s.title,chrome.bookmarks.update(c.id,{title:u}))}(e,t)}(t,o)}),chrome.commands.onCommand.addListener(function(e){"add-new-post"===e&&h()})}});