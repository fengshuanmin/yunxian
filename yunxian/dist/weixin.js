!function(e){function n(t){if(i[t])return i[t].exports;var module=i[t]={exports:{},id:t,loaded:!1};return e[t].call(module.exports,module,module.exports,n),module.loaded=!0,module.exports}var i={};return n.m=e,n.c=i,n.p="",n(0)}({0:function(module,exports,e){module.exports=e(884)},884:function(module,exports,e){var n;try{(function(){"use strict";!function(i,t){n=function(){return t(i)}.call(exports,e,exports,module),!(void 0!==n&&(module.exports=n))}(void 0,function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(i),function(e){c(n,e,t)}):d(n,t)}function t(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)}):t?d(n,t):d(n,i)}function o(e){return e=e||{},e.appId=W.appId,e.verifyAppId=W.appId,e.verifySignType="sha1",e.verifyTimestamp=W.timestamp+"",e.verifyNonceStr=W.nonceStr,e.verifySignature=W.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,n,i){var t,o,r;switch(delete n.err_code,delete n.err_desc,delete n.err_detail,t=n.errMsg,t||(t=n.err_msg,delete n.err_msg,t=a(e,t),n.errMsg=t),i=i||{},i._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",W.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n)),o=t.indexOf(":"),r=t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function a(e,n){var i,t,o=e,r=g[o];return r&&(o=r),i="ok",n&&(t=n.indexOf(":"),i=n.substring(t+1),"confirm"==i&&(i="ok"),"failed"==i&&(i="fail"),-1!=i.indexOf("failed_")&&(i=i.substring(7)),-1!=i.indexOf("fail_")&&(i=i.substring(5)),i=i.replace(/_/g," "),i=i.toLowerCase(),("access denied"==i||"no permission to execute"==i)&&(i="permission denied"),"config"==o&&"function not exist"==i&&(i="ok"),""==i&&(i="fail")),n=o+":"+i}function s(e){var n,i,t,o;if(e){for(n=0,i=e.length;i>n;++n)t=e[n],o=m[t],o&&(e[n]=o);return e}}function d(e,n){if(!(!W.debug||n&&n.isInnerInvoke)){var i=g[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function u(){0!=P.preVerifyState&&(I||T||W.debug||"6.0.2">M||P.systemType<0||V||(V=!0,P.appId=W.appId,P.initTime=L.initEndTime-L.initStartTime,P.preVerifyTime=L.preVerifyEndTime-L.preVerifyStartTime,J.getNetworkType({isInnerInvoke:!0,success:function(e){var n,i;P.networkType=e.networkType,n="http://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.preVerifyState+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url,i=new Image,i.src=n}})))}function l(){return(new Date).getTime()}function p(n){v&&(e.WeixinJSBridge?n():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",n,!1))}function f(){J.invoke||(J.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(i),t)},J.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}var m,g,h,y,S,w,I,T,v,k,x,M,V,b,L,P,W,A,C,J;if(!e.jWeixin)return m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},g=function(){var e,n={};for(e in m)n[m[e]]=e;return n}(),h=e.document,y=h.title,S=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),I=!(!w.match("mac")&&!w.match("win")),T=-1!=S.indexOf("wxdebugger"),v=-1!=S.indexOf("micromessenger"),k=-1!=S.indexOf("android"),x=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),M=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),V=!1,b=!1,L={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",preVerifyState:1,systemType:x?1:k?2:-1,clientVersion:M,url:encodeURIComponent(location.href)},W={},A={_completes:[]},C={state:0,data:{}},p(function(){L.initEndTime=l()}),J={config:function(e){W=e,d("config",e);var n=W.check!==!1;p(function(){var e,t,o;if(n)i(m.config,{verifyJsApiList:s(W.jsApiList)},function(){A._complete=function(e){L.preVerifyEndTime=l(),C.state=1,C.data=e},A.success=function(){P.preVerifyState=0},A.fail=function(e){A._fail?A._fail(e):C.state=-1};var e=A._completes;return e.push(function(){u()}),A.complete=function(){for(var n=0,i=e.length;i>n;++n)e[n]();A._completes=[]},A}()),L.preVerifyStartTime=l();else{for(C.state=1,e=A._completes,t=0,o=e.length;o>t;++t)e[t]();A._completes=[]}}),W.beta&&f()},ready:function(e){0!=C.state?e():(A._completes.push(e),!v&&W.debug&&e())},error:function(e){"6.0.2">M||b||(b=!0,-1==C.state?e(C.data):A._fail=e)},checkJsApi:function(e){var n=function e(n){var i,t,e=n.checkResult;for(i in e)t=g[i],t&&(e[t]=e[i],delete e[i]);return n};i("checkJsApi",{jsApiList:s(e.jsApiList)},function(){return e._complete=function(e){if(k){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e}())},onMenuShareTimeline:function(e){t(m.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){t(m.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(m.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(m.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(m.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(k){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e}())},previewImage:function(e){i(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getNetworkType:function(e){var n=function e(n){var i,t,o,e=n.errMsg;if(n.errMsg="getNetworkType:ok",i=n.subtype,delete n.subtype,i)n.networkType=i;else switch(t=e.indexOf(":"),o=e.substring(t+1)){case"wifi":case"edge":case"wwan":n.networkType=o;break;default:n.errMsg="getNetworkType:fail"}return n};i("getNetworkType",{},function(){return e._complete=function(e){e=n(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(m.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){var n,i;x&&(n=e.resultStr,n&&(i=JSON.parse(n),e.resultStr=i&&i.scan_code&&i.scan_code.scan_result))},e}())},openProductSpecificView:function(e){i(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){var n,t,o,r,c=e.cardList,a=[];for(n=0,t=c.length;t>n;++n)o=c[n],r={card_id:o.cardId,card_ext:o.cardExt},a.push(r);i(m.addCard,{card_list:a},function(){return e._complete=function(e){var n,i,t,o=e.card_list;if(o){for(o=JSON.parse(o),n=0,i=o.length;i>n;++n)t=o[n],t.cardId=t.card_id,t.cardExt=t.card_ext,t.isSuccess=!!t.is_succ,delete t.card_id,delete t.card_ext,delete t.is_succ;e.cardList=o,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:W.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){var n,t,o,r,c=e.cardList,a=[];for(n=0,t=c.length;t>n;++n)o=c[n],r={card_id:o.cardId,code:o.code},a.push(r);i(m.openCard,{card_list:a},e)},chooseWXPay:function(e){i(m.chooseWXPay,r(e),e)}},n&&(e.wx=e.jWeixin=J),J})}).call(this)}finally{}}});