webpackJsonp([1],{154:function(e,t,o){"use strict";var n,r=o(69),i=(n=r)&&n.__esModule?n:{default:n};var a={},c=[],s=i.default,u=s.title;function d(e){return new Promise(function(t,o){chrome.bookmarks.search({title:e},function(o){o.length?(function(e){var t=e[0].id;a=Object.assign({},e[0]),e.shift(),e.forEach(function(e){chrome.bookmarks.getChildren(e.id,function(o){o.forEach(function(e){chrome.bookmarks.move(e.id,{parentId:t})}),chrome.bookmarks.remove(e.id)})})}(o),t(a)):chrome.bookmarks.create({title:e},function(e){t(e)})})})}function m(e){chrome.bookmarks.getChildren(e.id,function(e){c=e}),f()}function f(){if(!a.id)return chrome.browserAction.setBadgeText({text:"0"}),!1;chrome.bookmarks.getChildren(a.id,function(e){var t;t=e?e.length:0,chrome.browserAction.setBadgeText({text:t>99?"+"+t:""+t})})}function h(e,t){chrome.notifications.create({iconUrl:"./icons/icon_128.png",type:"basic",title:e,message:t})}function l(){chrome.tabs.query({active:!0,currentWindow:!0},function(e){if(1!==e.length)throw"add post ERROR";var t=e[0];!function(e,t){var o={parentId:a.id,title:e,url:t},n=!0,r=!0,i=!1,s=void 0;try{for(var u,d=c[Symbol.iterator]();!(r=(u=d.next()).done);r=!0)u.value.url===t&&(n=!1)}catch(e){i=!0,s=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw s}}if(!n)return h("warning","you has the same post."),!1;chrome.bookmarks.create(o,function(e){m(a),h("success","add a read later post.")})}(t.title,t.url),f()})}d(u).then(function(e){a=e,m(e),f()}),chrome.contextMenus.create({title:"read later",contexts:["page"],onclick:l}),chrome.runtime.onMessage.addListener(function(e){var t=e.type,o=e.data;!function(e,t){var o;"remove"===e&&(o=t,c.forEach(function(e,t){e.id===o&&c.splice(t,1)}),chrome.bookmarks.remove(o,function(){m(a),h("success","remove post.")})),"clear"===e&&(chrome.bookmarks.removeTree(a.id),d(u).then(function(e){a=e,m(e),f()})),"get_data"===e&&chrome.runtime.sendMessage({type:"return_data",data:a}),"get_settings"===e&&chrome.runtime.sendMessage({type:"return_settings",data:s}),"reset_settings"!==e&&"save_settings"!==e||function(e,t){var o=void 0;t&&t.title!==u&&(o=!0),s="reset_settings"===e?i.default:t,o&&(u=s.title,chrome.bookmarks.update(a.id,{title:u}))}(e,t)}(t,o)}),chrome.commands.onCommand.addListener(function(e){"add-new-post"===e&&l()})}},[154]);