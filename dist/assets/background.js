!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=60)}({25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={title:"__read_later__",favicon_api:"http://www.google.com/s2/favicons?domain=",img_timeout:3e3,img_default:"./icons/icon_48.png"}},60:function(e,t,n){"use strict";var o,r=n(25),i=(o=r)&&o.__esModule?o:{default:o};var c={},a=[],s=i.default,u=s.title;function d(e){return new Promise(function(t,n){chrome.bookmarks.search({title:e},function(n){n.length?(function(e){var t=e[0].id;c=Object.assign({},e[0]),e.shift(),e.forEach(function(e){chrome.bookmarks.getChildren(e.id,function(n){n.forEach(function(e){chrome.bookmarks.move(e.id,{parentId:t})}),chrome.bookmarks.remove(e.id)})})}(n),t(c)):chrome.bookmarks.create({title:e},function(e){t(e)})})})}function f(e){chrome.bookmarks.getChildren(e.id,function(e){a=e}),m()}function m(){if(!c.id)return chrome.browserAction.setBadgeText({text:"0"}),!1;chrome.bookmarks.getChildren(c.id,function(e){var t;t=e?e.length:0,chrome.browserAction.setBadgeText({text:t>99?"+"+t:""+t})})}function l(e,t){chrome.notifications.create({iconUrl:"./icons/icon_128.png",type:"basic",title:e,message:t})}function h(){chrome.tabs.query({active:!0,currentWindow:!0},function(e){if(1!==e.length)throw"add post ERROR";var t=e[0];!function(e,t){var n={parentId:c.id,title:e,url:t},o=!0,r=!0,i=!1,s=void 0;try{for(var u,d=a[Symbol.iterator]();!(r=(u=d.next()).done);r=!0)u.value.url===t&&(o=!1)}catch(e){i=!0,s=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw s}}if(!o)return l("warning","you has the same post."),!1;chrome.bookmarks.create(n,function(e){f(c),l("success","add a read later post.")})}(t.title,t.url),m()})}d(u).then(function(e){c=e,f(e),m()}),chrome.contextMenus.create({title:"read later",contexts:["page"],onclick:h}),chrome.runtime.onMessage.addListener(function(e){var t=e.type,n=e.data;!function(e,t){var n;"remove"===e&&(n=t,a.forEach(function(e,t){e.id===n&&a.splice(t,1)}),chrome.bookmarks.remove(n,function(){f(c),l("success","remove post.")})),"clear"===e&&(chrome.bookmarks.removeTree(c.id),d(u).then(function(e){c=e,f(e),m()})),"get_data"===e&&chrome.runtime.sendMessage({type:"return_data",data:c}),"get_settings"===e&&chrome.runtime.sendMessage({type:"return_settings",data:s}),"reset_settings"!==e&&"save_settings"!==e||function(e,t){var n=void 0;t&&t.title!==u&&(n=!0),s="reset_settings"===e?i.default:t,n&&(u=s.title,chrome.bookmarks.update(c.id,{title:u}))}(e,t)}(t,n)}),chrome.commands.onCommand.addListener(function(e){"add-new-post"===e&&h()})}});