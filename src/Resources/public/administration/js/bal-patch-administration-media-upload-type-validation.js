!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/bundles/balpatchadministrationmediauploadtypevalidation/",r(r.s="KJSk")}({"2sr3":function(e,t){function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,l=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw l}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Shopware.Component.override("sw-media-upload-v2",{methods:{checkFileType:function(e){if(!this.fileAccept||"*/*"===this.fileAccept)return!0;var t,n=r(this.fileAccept.split(","));try{for(n.s();!(t=n.n()).done;){var i=t.value,o=(null==e?void 0:e.type)||(null==e?void 0:e.mimeType)||"";if("."===i.substring(0,1)||0===o.length){var l=fileReader.getNameAndExtensionFromFile(e),a=".".concat((null==l?void 0:l.extension)||"");this.isCorrectFileType=i===a}else{var u=o.split("/"),c=i.split("/");if(c[0]!==u[0]){this.isCorrectFileType=!1;continue}if("*"===c[1]){this.isCorrectFileType=!0;break}this.isCorrectFileType=c[1]===u[1]}if(this.isCorrectFileType)break}}catch(e){n.e(e)}finally{n.f()}return!!this.isCorrectFileType||(this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-media-upload-v2.notification.invalidFileType.message",0,{name:e.name||e.fileName,supportedTypes:this.fileAccept})}),!1)},handleFileCheck:function(e){var t=this,r=e.filter((function(e){return t.checkFileSize(e)&&t.checkFileType(e)}));0!==r.length&&(this.useFileData?(this.preview=this.multiSelect?null:r[0],this.$emit("media-upload-add-file",r)):this.handleUpload(r))}}})},KJSk:function(e,t,r){"use strict";r.r(t);r("2sr3")}});