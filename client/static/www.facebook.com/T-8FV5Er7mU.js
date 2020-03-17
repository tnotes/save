if (self.CavalryLogger) { CavalryLogger.start_js(["1a6v2"]); }

__d("CometEventTimings",["performanceNavigationStart","performanceNow"],(function(a,b,c,d,e,f){"use strict";var g;a={getCurrentQueueTime:function(a){var c=(g||(g=b("performanceNow")))(),d=null,e=document.createEvent("MouseEvent").timeStamp<b("performanceNavigationStart")();e&&a!=null&&a<c&&(d=c-a,c=a);return[c,d]}};e.exports=a}),null);
__d("CometPrerenderer.react",["HiddenSubtreeContextProvider.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var c=a.children;a=a.prerenderingProps;a=a===void 0?{}:a;var d=a.isVisible;d=d===void 0?!0:d;a=a.shouldPrerender;a=a===void 0?!1:a;return d||a?b("React").jsx(b("HiddenSubtreeContextProvider.react"),{isHidden:!d&&a,children:c({hidden:!d&&a})}):null}e.exports=a}),null);
__d("BasePopoverTrigger.react",["requireCond","BaseButtonPopoverContext","BaseContextualLayer.react","BaseScrollableAreaContext","CometErrorBoundary.react","CometEventTimings","CometHeroInteractionContextPassthrough.react","CometHeroInteractionWithDiv.react","CometHeroLogging","CometHideLayerOnEscape.react","cr:1075529","CometMenuContext","CometOnOutsideClick.react","CometPlaceholder.react","CometPrerenderer.react","React","clearTimeout","setTimeout","useCometPrerenderer","useLayoutEffect_SAFE_FOR_SSR","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(c=b("React")).useCallback,h=c.useContext,i=c.useEffect,j=c.useMemo,k=c.useRef,l=c.useState;function a(a){__p&&__p();var c=a.children,d=a.fallback,e=a.interactionTracker,f=a.onHighIntentPreload,m=a.onVisibilityChange,n=a.popover,o=a.popoverPreloadResource,p=a.popoverProps,q=a.popoverType,r=q===void 0?"dialog":q;q=a.preloadTrigger;a.tracePolicy;var s=a.visibleOnLoad,t=s===void 0?!1:s,u=babelHelpers.objectWithoutPropertiesLoose(a,["children","fallback","interactionTracker","onHighIntentPreload","onVisibilityChange","popover","popoverPreloadResource","popoverProps","popoverType","preloadTrigger","tracePolicy","visibleOnLoad"]),v=k(!1);s=l(!1);var w=s[0],x=s[1];a=l(null);var y=a[0],z=a[1],A=k(null),B=g(function(a){x(a),m&&m(a)},[m]),C=g(function(){B(!1),z(null)},[B]),D=g(function(a){if(!w)if(e==null)B(!0);else{a=b("CometEventTimings").getCurrentQueueTime(a==null?void 0:a.timeStamp);var c=a[0];a=a[1];e(function(a){B(!0),z(b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(a.getTraceId()))},c,a)}},[w,e,B]),E=g(function(a){b("cr:1075529")&&a!=null&&y!=null&&b("cr:1075529").addMutationRootForTraceId(y,a)},[y]),F=k(null);s=b("useCometPrerenderer")(q,w,o,f);a=s[0];q=s[1];f=s[2];var G=s[3];s=s[4];b("useLayoutEffect_SAFE_FOR_SSR")(function(){t===!0&&v.current===!1&&(v.current=!0,D())},[D,t]);var H=h(b("BaseScrollableAreaContext")),I=b("useVisibilityObserver")({onHidden:g(function(a){a=a.hiddenReason;if(a==="COMPONENT_UNMOUNTED")return;a=H[H.length-1];a!=null&&C()},[C,H])}),J=j(function(){return{expanded:w,haspopup:r}},[w,r]),K=g(function(a){A.current=a,I(a)},[I]),L=k(!1);i(function(){var a=null;w?a=b("setTimeout")(function(){L.current=!0},150):L.current=!1;return function(){a&&b("clearTimeout")(a)}},[w]);var M=g(function(){L.current&&C()},[C]);return b("React").jsxs(b("React").Fragment,{children:[b("React").jsx(b("BaseButtonPopoverContext").Provider,{value:J,children:c(K,D,C,q,f,G,s)}),b("React").jsx(b("CometErrorBoundary.react"),{fallback:null,children:b("React").jsx(b("CometPrerenderer.react"),{prerenderingProps:a,children:function(a){return A.current==null?null:b("React").jsx(b("BaseContextualLayer.react"),babelHelpers["extends"]({},a,u,{containFocus:!0,context:A.current,layerRef:E,ref:F,children:b("React").jsx(b("CometHideLayerOnEscape.react"),{onHide:C,children:b("React").jsx(b("CometMenuContext").Provider,{value:{onClose:C},children:b("React").jsx(b("CometOnOutsideClick.react"),{onOutsideClick:M,children:function(a){return b("React").jsx(b("CometHeroInteractionContextPassthrough.react"),{clear:!0,children:b("React").jsx(b("CometHeroInteractionWithDiv.react"),{interactionDesc:"popover_"+(o!=null?o.getModuleId():"Unknown"),interactionUUID:y,ref:a,children:b("React").jsx(b("CometPlaceholder.react"),{fallback:(a=d)!=null?a:null,children:b("React").jsx(n,babelHelpers["extends"]({},p,{onClose:C}))})})})}})})})}))}})})]})}e.exports=a}),null);
__d("CometPerfLogger",["QuickPerformanceLogger","performance","performanceNavigationStart"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("performanceNavigationStart")(),i=/^((server_)?adp_|Relay_)(?!CometModernHomeFeed)/,j=10,k=(a={},a[29818881]=53542916,a[29818882]=53608451,a),l=new Set(["hidden","scrollY","visuallyComplete","FP","TTFB","vcWithoutImage","INTERACTION_1_start","cancelType","height","unsupportedFeedUnit","feedUnitError","tracePolicy","navSequence","revisit","refresh","maintained","ScrollToTop","mediaVC","traceStart","navigation_source"]);function m(a,c,d){d===void 0&&(d=0),b("QuickPerformanceLogger").annotateMarkerInt(a,"numReactCommit",c.size,d)}function n(a,c,d,e){b("QuickPerformanceLogger").annotateMarkerString(a,c,d,e),k[a]&&l.has(c)&&b("QuickPerformanceLogger").annotateMarkerString(k[a],c,d,e)}function o(a,c,d,e){b("QuickPerformanceLogger").annotateMarkerInt(a,c,d,e),k[a]&&l.has(c)&&b("QuickPerformanceLogger").annotateMarkerInt(k[a],c,d,e)}function p(a,c,d,e){b("QuickPerformanceLogger").annotateMarkerStringArray(a,c,d,e),k[a]&&l.has(c)&&b("QuickPerformanceLogger").annotateMarkerStringArray(k[a],c,d,e)}function q(a,c,d,e,f){b("QuickPerformanceLogger").markerPoint(a,c,d,e,f),k[a]&&l.has(c)&&b("QuickPerformanceLogger").markerPoint(k[a],c,d,e,f)}function r(a,b,c){c===void 0&&(c=0);for(var d in b.metadata){var e=b.metadata[d];typeof e==="string"?n(a,d,e,c):typeof e==="number"&&o(a,d,e,c)}for(var f in b.tagSet){e=Array.from(b.tagSet[f]);p(a,f,e,c)}}function s(a,b,c){c===void 0&&(c=0);for(var d in b){var e=b[d],f=e.data,g=e.timestamp;e=e.type;if(e==="HeroTracing"||i.exec(d))continue;q(a,d,f&&Object.keys(f).length?JSON.stringify(f):void 0,c,g+h)}}function t(a,b,c){__p&&__p();c===void 0&&(c=0);for(var d in b){if(i.exec(d))continue;for(var e=0;e<b[d].length;e++){var f=b[d][e],g=f.data,k=f.end,l=f.start;f=f.type;if(f==="HeroTracing")continue;f=b[d].length===1?d:d+"_"+(e>=j?"MAX":e+1);q(a,f+"_start",void 0,c,l+h);q(a,f+"_end",Object.keys(g).length?JSON.stringify(g):void 0,c,k+h)}}}c={initQPL:function(a,c,d){b("QuickPerformanceLogger").markerStart(a,d,c+h),k[a]&&b("QuickPerformanceLogger").markerStart(k[a],d,c+h)},logQPL:function(a,c,d){m(a,c.commitSet,d);r(a,c,d);s(a,c.markerPoints,d);t(a,c.subSpans,d);var e=c.metadata.isError?87:c.wasCanceled?4:2;b("QuickPerformanceLogger").markerEnd(a,e,d,c.completed+h);k[a]&&b("QuickPerformanceLogger").markerEnd(k[a],e,d,c.completed+h);return e},logServerTimings:function(a,c,d){__p&&__p();var e=typeof window.qpl_inl==="function"?window.qpl_inl():{};e=e[c+"-server"];if(e){c=((g||(g=b("performance")))==null?void 0:(g||(g=b("performance"))).timing)||{};var f=h;c.requestStart&&c.responseStart&&e.htmlStart&&(f=(c.requestStart+c.responseStart-e.htmlStart)/2);b("QuickPerformanceLogger").markerStart(a,0,f);r(a,d);c=0;for(var i in e)c=Math.max(c,e[i]),b("QuickPerformanceLogger").markerPoint(a,i,void 0,0,e[i]+f);b("QuickPerformanceLogger").markerEnd(a,2,0,c+f)}}};e.exports=c}),null);
__d("JSTraceListener",["CometInteractionTracingMetrics","ErrorGuard","removeFromArray"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=!1;function i(){if(h)return;h=!0;b("CometInteractionTracingMetrics").listen(l)}var j={};function k(a,c){h||i();Object.prototype.hasOwnProperty.call(j,a)||(j[a]=[]);j[a].push(c);return function(){j[a]&&(b("removeFromArray")(j[a],c),j[a].length||delete j[a])}}function l(a){if(Object.prototype.hasOwnProperty.call(j,a.name)){var c=a.name;c=j[c];c.length&&c.slice().forEach(function(c){(g||(g=b("ErrorGuard"))).applyWithGuard(c,null,[a],{name:"JSTraceListener"})})}}function a(a){__p&&__p();var c={onComplete:function(d){var e=b("CometInteractionTracingMetrics").get(a);if(e&&e.completed!=null){d(e.completed,e);return c}var f=k(a,function(a){a.__type==="complete"&&(d(a.timestamp,a.interaction),f())});return c}};return c}e.exports=a}),null);
__d("CometInteractionTracing",["CometInteractionTracingMetrics","CometPerfLogger","CurrentLocale","JSScheduler","JSTraceListener","JSTracing","Locale","Run","SiteData","VisibilityListener","gkx","performanceNow","performanceNavigationStart","requireCond","uuid","cr:683059","cr:1075529","cr:942783","cr:1284971"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("performanceNavigationStart")(),i=new Set(),j=null,k="comet.app",l=new Set(),m=1,n=null;if(b("gkx")("926112")&&window.location.href.contains("browserLabTag=")){a=new URLSearchParams(window.location.search);n=a.get("browserLabTag")}function o(a){if(typeof window.qpl_tag==="function"){a.tagSet.CometTags||(a.tagSet.CometTags=new Set());var c=a.type==="INITIAL_LOAD"||a.type==="NAVIGATION",d=a.tagSet.CometTags;a=window.qpl_tag();a&&a.length&&a.forEach(function(a){a&&a.length&&a.forEach(function(a){d.add(a),c&&b("cr:683059")&&b("cr:683059").addTag("CometTags",a)})})}}function p(a,c,d,e,f){__p&&__p();var g=c+h,i=d+h;c=b("VisibilityListener").getHiddenTimings(g,i);if(c!=null&&c.length>0){var j=[],k=null;c.filter(function(a){return a.key>=g&&a.key<=i}).forEach(function(a){a.value&&k==null?k=a.key:!a.value&&k!=null&&(j.push({end:a.key-h,start:k-h}),k=null)});k!=null&&j.push({end:d,start:k-h});b("CometInteractionTracingMetrics").addHiddenTiming(a,j);j.length>0&&b("CometInteractionTracingMetrics").addMarkerPoint(a,"backgrounded","AppTiming",j[0].start)}if(e.metadata.hidden===void 0&&e.completed!=null){c=b("VisibilityListener").getHiddenTime(e.start+h,e.completed+h);d=c!=null&&c>0?1:0;f.addMetadata("hidden",d)}}function q(a,c){__p&&__p();var d;c.interactionClass&&a.addMetadata("interactionClass",c.interactionClass);n!=null&&n!==""&&a.addMetadata("browserLabTag",n);var e=c.start;d=(d=c.completed)!=null?d:(g||(g=b("performanceNow")))();p(c.traceId,e,d,c,a);a.addMetadata("locale",b("CurrentLocale").get());a.addMetadata("client_revision",b("SiteData").client_revision);b("SiteData").server_revision!=null&&a.addMetadata("server_revision",b("SiteData").server_revision);a.addMetadata("isRTL",Number(b("Locale").isRTL()))}c={checkAndMarkRevisit:function(a){if(a==null)return!1;var b=l.has(a);l.add(a);return b},setCurrentTracePolicy:function(a){j=a},trace:function(a){function b(b,c,d,e,f,g,h,i){return a.apply(this,arguments)}b.toString=function(){return a.toString()};return b}(function(a,c,d,e,f,h,l,n){__p&&__p();h===void 0&&(h=b("uuid")());l===void 0&&(l=(g||(g=b("performanceNow")))());n===void 0&&(n=null);var p=j,r=m++,s=f,t,u;if(s!=null&&b("cr:942783")){f=b("cr:942783").maybeStartTraceForInteraction(h,d,a,s,l);t=f==null?void 0:f.traceReferenceId;u=f==null?void 0:f.loomProviders}b("CometPerfLogger").initQPL(a,l,r);var v=[],w={addGlobalMetadata:function(a,c){b("CometInteractionTracingMetrics").addGlobalMetadata(h,a,c)},addMarkerPoint:function(a,c,d){d===void 0&&(d=(g||(g=b("performanceNow")))()),b("CometInteractionTracingMetrics").addMarkerPoint(h,a,c,d)},addMetadata:function(a,c){b("CometInteractionTracingMetrics").addMetadata(h,a,c)},addTag:function(a,c){b("CometInteractionTracingMetrics").addTag(h,a,c)},getTraceId:function(){return h},observeMutation:function(a){b("cr:1075529")&&b("cr:1075529").observeMutation(h,a)},onComplete:function(a){v.push(a)},setTracePolicy:function(c){s=c;if(b("cr:942783")&&t==null){c=b("cr:942783").maybeStartTraceForInteraction(h,d,a,s,l);t=c==null?void 0:c.traceReferenceId;u=c==null?void 0:c.loomProviders}},trackLoadingState:function(a){b("cr:1075529")&&b("cr:1075529").observeLoadingState(h,a)}},x=null;b("cr:683059")&&(x=b("cr:683059").addTracedInteraction(e,h,a));var y;b("JSTraceListener")(h).onComplete(function(c,d){__p&&__p();if(d==null)return;e!=="INITIAL_LOAD"&&e!=="NAVIGATION"&&i["delete"](h);b("JSScheduler").scheduleLoggingPriCallback(function(){__p&&__p();var c;w.addMetadata("tracePolicy",(c=s)!=null?c:k);p!=null&&w.addMetadata("referrer",p);w.addMetadata("interactionId",h);q(w,d);b("cr:683059")&&x!=null&&x();var f=function(){__p&&__p();o(d);v.forEach(function(a){a(d)});t!=null&&w.addMetadata("loomRefId",t);u!=null&&u.forEach(function(a){return w.addTag("loomProviders",a)});var c=function(){var c=b("CometPerfLogger").logQPL(a,d,r);y&&y.remove&&y.remove();b("cr:942783")&&t!=null&&b("cr:942783").endTraceForInteraction(d,c);delete d.vcTracker;b("cr:1284971")&&b("cr:1284971").markInteraction(d,e)},f=d.vcTracker;f&&!d.hasVcReport?(f.onComplete(function(){c()}),f.unlock(h)):(d.type==="INITIAL_LOAD"||d.type==="NAVIGATION")&&b("cr:683059")&&!d.hasVcReport?(b("cr:683059").onComplete(function(){c()}),b("cr:683059").resumeTrigger(h)):c()};d.type==="INITIAL_LOAD"&&document.readyState==="loading"?document.addEventListener("DOMContentLoaded",function(){f()}):f()})});b("JSTracing").trace(h,function(){__p&&__p();y=b("Run").onBeforeUnload(function(){__p&&__p();var c=b("CometInteractionTracingMetrics").get(h);if(c){var d;v.forEach(function(a){a(c)});w.addMetadata("tracePolicy",(d=s)!=null?d:k);q(w,c);o(c);c.hasVcReport||((c.type==="INITIAL_LOAD"||c.type==="NAVIGATION")&&b("cr:683059")?b("cr:683059").logIncompleteVC(c,"unload"):(c.vcTracker&&c.vcTracker.forceInstrumentation(),w.addMetadata("cancelType","unload"),c.wasCanceled=!0));c.completed==null&&(c.completed=(g||(g=b("performanceNow")))());b("CometPerfLogger").logQPL(a,c,r);y.remove()}},!1),e==="NAVIGATION"?i.forEach(function(a){a=b("CometInteractionTracingMetrics").get(a);a&&!a.hasVcReport&&(a.wasCanceled=!0,a.metadata.cancelType="navigation")}):e!=="INITIAL_LOAD"&&i.add(h),b("CometInteractionTracingMetrics").setInteractionType(h,d,e,a),b("cr:1075529")&&b("cr:1075529").startVisualCompletionTrace(h),c(w)},l);if(n!=null){f=l;b("CometInteractionTracingMetrics").addSubspan(h,"EventQueued","DOMEventTiming",f,f+n,{})}})};e.exports=c}),null);
__d("useCometInteractionTracing",["CometInteractionTracing","React","useCometRouteTracePolicy","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback;function a(a,c,d,e){var f=(e=e)!=null?e:b("useCometRouteTracePolicy")();return g(function(e,g,h,i){var j=b("uuid")(),k=(i=i)!=null?i:f;b("CometInteractionTracing").trace(a,function(a){var c=b("CometInteractionTracing").checkAndMarkRevisit(k);a.addMetadata("revisit",c?1:0);e(a)},c,d,k,j,g,h)},[a,c,d,f])}e.exports=a}),null);
__d("useIsMountedRef",["React","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useRef;function a(){var a=g(!1);b("useLayoutEffect_SAFE_FOR_SSR")(function(){a.current=!0;return function(){a.current=!1}},[]);return a}e.exports=a}),null);
__d("CometTransientDialogProvider.react",["fbt","BaseModal.react","CometDialogContext","CometErrorBoundary.react","CometHeroLogging","FBLogger","React","cometPushToast","useCometInteractionTracing","useIsMountedRef"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=(c=b("React")).useCallback,i=c.useEffect,j=c.useRef,k=c.useState,l=b("cometPushToast").cometPushErrorToast;function m(a){__p&&__p();var c=a.dialogConfig,d=a.removeDialogConfig,e=j(null);i(function(){return function(){e.current!=null&&window.cancelAnimationFrame(e.current)}},[]);a=c.dialog;var f=c.dialogProps,m=k(!1),n=m[0];m=m[1];var o=h(function(){for(var a=arguments.length,b=new Array(a),f=0;f<a;f++)b[f]=arguments[f];e.current!=null&&window.cancelAnimationFrame(e.current);e.current=window.requestAnimationFrame(function(){d(c,b),e.current=null})},[c,d]),p=h(function(){o(),l({message:g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i. Vi\u1ec7c n\u00e0y c\u00f3 th\u1ec3 l\u00e0 do l\u1ed7i k\u1ef9 thu\u1eadt v\u00e0 ch\u00fang t\u00f4i \u0111ang kh\u1eafc ph\u1ee5c r\u1ed3i.")})},[o]);return b("React").jsx(b("CometErrorBoundary.react"),{fallback:null,onError:p,children:b("React").jsx(b("BaseModal.react"),{hidden:n,interactionDesc:c.interactionDesc,interactionUUID:c.interactionUUID,children:b("React").jsx(a,babelHelpers["extends"]({},f,{onClose:o,onHide:m}))})})}function a(a){__p&&__p();var c=k([]),d=c[0],e=c[1],f=b("useCometInteractionTracing")(30605361,"fluid","INTERACTION");c=h(function(a,c,d,g){f(function(f){var g=b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(f.getTraceId()),h="Dialog";e(function(b){return b.concat({dialog:a,dialogProps:c,interactionDesc:h,interactionUUID:g,onClose:d})})},void 0,void 0,g)},[f]);var g=b("useIsMountedRef")(),i=h(function(a,c){__p&&__p();if(!g.current)return;e(function(c){var d=c.indexOf(a);if(d<0){b("FBLogger")("CometTransientDialogProvider").mustfix("Attempting to close a dialog that does not exist anymore.");return c}return c.slice(0,d)});a.onClose&&a.onClose.apply(a,c)},[g]);return b("React").jsxs(b("CometDialogContext").Provider,{value:c,children:[a.children,d.map(function(a,c){return b("React").jsx(m,{dialogConfig:a,removeDialogConfig:i},c)})]})}e.exports=a}),null);
__d("CometRelayPerfStore",["ExecutionEnvironment","performanceNow","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={};function a(a){__p&&__p();if(!b("ExecutionEnvironment").canUseDOM)return;if(a.name==="execute.start")h[a.transactionID]={flushes:[],name:a.params.name,start:(g||(g=b("performanceNow")))()};else if(a.name==="execute.next"){var c=h[a.transactionID];if(c){var d=a.response,e=function(a){c.flushes.push({label:(a=a.label)!=null?a:"root",time:(g||(g=b("performanceNow")))()})};d instanceof Array?d.forEach(e):e(d)}}else if(a.name==="execute.complete"){e=h[a.transactionID];e&&(e.end=(g||(g=b("performanceNow")))());b("setTimeout")(function(){delete h[a.transactionID]},6e4)}}e.exports={log:a}}),null);
__d("CometNotificationsThinClientConnectionHandler",["relay-runtime","unrecoverableViolation","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("relay-runtime").ConnectionInterface,h=b("relay-runtime").generateClientID,i=b("relay-runtime").getRelayHandleKey,j="comet_notifications_thin_client",k="__connection_next_edge_index";function a(a,c){__p&&__p();var d,e=a.get(c.dataID);if(!e)return;var f=g.get(),i=f.EDGES,j=f.END_CURSOR,p=f.HAS_NEXT_PAGE,q=f.HAS_PREV_PAGE,r=f.PAGE_INFO,s=f.PAGE_INFO_TYPE;f=f.START_CURSOR;var t=e.getLinkedRecord(c.fieldKey),u=t&&t.getLinkedRecord(r);if(!t){e.setValue(null,c.handleKey);return}var v=h(e.getDataID(),c.handleKey),w=e.getLinkedRecord(c.handleKey);d=(d=w)!=null?d:a.get(v);var x=d&&d.getLinkedRecord(r);if(!d){var y=a.create(v,t.getType());y.setValue(0,k);y.copyFieldsFrom(t);v=t.getLinkedRecords(i);v&&(v=v.map(function(b){return l(a,y,b)}),y.setLinkedRecords(v,i));e.setLinkedRecord(y,c.handleKey);x=a.create(h(y.getDataID(),r),s);x.setValue(!1,p);x.setValue(!1,q);x.setValue(null,j);x.setValue(null,f);u&&x.copyFieldsFrom(u);y.setLinkedRecord(x,r)}else{w==null&&e.setLinkedRecord(d,c.handleKey);var z=d;v=t.getLinkedRecords(i);v&&(v=v.map(function(b){return l(a,z,b)}));s=z.getLinkedRecords(i);w=z.getLinkedRecord(r);z.copyFieldsFrom(t);s&&z.setLinkedRecords(s,i);w&&z.setLinkedRecord(w,r);e=[];d=c.args;if(s&&v)if(d.after!=null)if(x&&d.after===x.getValue(j)){t=new Set();m(s,e,t);m(v,e,t)}else{b("warning")(!1,"Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",d.after,x&&x.getValue(j));return}else if(d.before!=null)if(x&&d.before===x.getValue(f)){w=new Set();m(v,e,w);m(s,e,w)}else{b("warning")(!1,"Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",d.before,x&&x.getValue(f));return}else{r=n(s);c=new Set();o(v,e,r,c)}else v?e=v:e=s;e!=null&&e!==s&&z.setLinkedRecords(e,i);if(x&&u)if(d.after==null&&d.before==null)x.copyFieldsFrom(u);else if(d.before!=null||d.after==null&&d.last){x.setValue(!!u.getValue(q),q);t=u.getValue(f);typeof t==="string"&&x.setValue(t,f)}else if(d.after!=null||d.before==null&&d.first){x.setValue(!!u.getValue(p),p);w=u.getValue(j);typeof w==="string"&&x.setValue(w,j)}}}function c(a,b,c){b=i(j,b,null);return a.getLinkedRecord(b,c)}function l(a,c,d){__p&&__p();if(d==null)return d;var e=g.get();e=e.EDGES;var f=c.getValue(k);if(!(typeof f==="number"))throw b("unrecoverableViolation")("CometNotificationsThinClientConnectionHandler: Expected edgeIndex to be a number","Notifications");e=h(c.getDataID(),e,f);a=a.create(e,d.getType());a.copyFieldsFrom(d);c.setValue(f+1,k);return a}function m(a,b,c){__p&&__p();var d=g.get();d=d.NODE;for(var e=0;e<a.length;e++){var f=a[e];if(!f)continue;var h=f.getLinkedRecord(d);h=h&&h.getDataID();if(h!=null){if(c.has(h))continue;c.add(h)}b.push(f)}}function n(a){__p&&__p();var b={},c=g.get();c=c.NODE;for(var d=0;d<a.length;d++){var e=a[d];if(!e)continue;e=e.getLinkedRecord(c);var f=e&&e.getType();if(f==="NotifPageNotificationRow"){f=e==null?void 0:(f=e.getLinkedRecord("notif"))==null?void 0:f.getValue("id");typeof f==="string"&&(b[f]=e)}}return b}function o(a,b,c,d){__p&&__p();var e=g.get();e=e.NODE;for(var f=0;f<a.length;f++){var h,i=a[f];if(!i)continue;var j=i.getLinkedRecord(e),k=j&&j.getDataID();if(k!=null){if(d.has(k))continue;d.add(k)}k=j==null?void 0:j.getType();h=j==null?void 0:(h=j.getLinkedRecord("notif"))==null?void 0:h.getValue("id");if(j&&k==="NotifPageCachedNotificationRow"&&typeof h==="string"){k=c[h];k&&(j.copyFieldsFrom(k),i.setLinkedRecord(k,e))}b.push(i)}}e.exports={buildConnectionEdge:l,getConnection:c,update:a}}),null);
__d("CometNewsFeedConnectionHandler",["RelayFBConnectionHandler_UNSTABLE","relay-runtime","unrecoverableViolation","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=(g=b("relay-runtime")).ConnectionHandler,i=g.ConnectionInterface,j=g.generateClientID,k=g.getRelayHandleKey,l="comet_news_feed",m="__connection_next_edge_index",n="received_edges_count";function a(a,c){__p&&__p();var d,e=a.get(c.dataID);if(!e)return;var f=i.get(),g=f.EDGES,k=f.END_CURSOR,l=f.HAS_NEXT_PAGE,r=f.HAS_PREV_PAGE,s=f.PAGE_INFO,t=f.PAGE_INFO_TYPE;f=f.START_CURSOR;var u=e.getLinkedRecord(c.fieldKey),v=u&&u.getLinkedRecord(s);if(!u){e.setValue(null,c.handleKey);return}var w=j(e.getDataID(),c.handleKey),x=e.getLinkedRecord(c.handleKey);d=(d=x)!=null?d:a.get(w);var y=d&&d.getLinkedRecord(s);if(!d){var z=a.create(w,u.getType());z.setValue(0,m);z.copyFieldsFrom(u);w=u.getLinkedRecords(g);w&&(w=w.map(function(b){return h.buildConnectionEdge(a,z,b)}),z.setLinkedRecords(w,g),z.setValue(w.length,n));e.setLinkedRecord(z,c.handleKey);y=a.create(j(z.getDataID(),s),t);y.setValue(!1,l);y.setValue(!1,r);y.setValue(null,k);y.setValue(null,f);v&&(y.copyFieldsFrom(v),o(w,y,v),p(w,y,v));z.setLinkedRecord(y,s)}else{x==null&&e.setLinkedRecord(d,c.handleKey);var A=d;t=u.getLinkedRecords(g);t&&(t=t.map(function(b){return h.buildConnectionEdge(a,A,b)}),A.setValue(t.length,n));w=A.getLinkedRecords(g);x=A.getLinkedRecord(s);A.copyFieldsFrom(u);w&&A.setLinkedRecords(w,g);x&&A.setLinkedRecord(x,s);e=[];d=c.args;if(w&&t)if(d.after!=null)if(y&&d.after===y.getValue(k)){u=new Set();q(w,e,u);q(t,e,u)}else{b("warning")(!1,"Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",d.after,y&&y.getValue(k));return}else if(d.before!=null)if(y&&d.before===y.getValue(f)){x=new Set();q(t,e,x);q(w,e,x)}else{b("warning")(!1,"Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",d.before,y&&y.getValue(f));return}else e=t;else t?e=t:e=w;e!=null&&e!==w&&A.setLinkedRecords(e,g);y&&v&&(d.after==null&&d.before==null?(y.copyFieldsFrom(v),o(e,y,v),p(e,y,v)):d.before!=null||d.after==null&&d.last?(y.setValue(!!v.getValue(r),r),o(e,y,v)):(d.after!=null||d.before==null&&d.first)&&(y.setValue(!!v.getValue(l),l),p(e,y,v)))}}function o(a,b,c){var d=i.get();d=d.START_CURSOR;a=a!=null?a[0]:null;var e=null;a!=null&&(e=a.getValue("cursor"));a=c.getValue(d);typeof a==="string"?typeof e==="string"&&a!==e?b.setValue(e,d):b.setValue(a,d):typeof e==="string"&&b.setValue(e,d)}function p(a,b,c){var d=i.get();d=d.END_CURSOR;a=a!=null?a[a.length-1]:null;var e=null;a!=null&&(e=a.getValue("cursor"));a=c.getValue(d);typeof a==="string"?typeof e==="string"&&a!==e?b.setValue(e,d):b.setValue(a,d):typeof e==="string"&&b.setValue(e,d)}function c(a,b,c){b=k(l,b,null);return a.getLinkedRecord(b,c)}function d(a,c,d){return b("RelayFBConnectionHandler_UNSTABLE").unstable_getAllConnectionsWithKey(a,c,d,l)}function q(a,b,c){__p&&__p();var d=i.get();d=d.NODE;for(var e=0;e<a.length;e++){var f=a[e];if(!f)continue;var g=f.getLinkedRecord(d);g=g&&g.getDataID();if(g!=null){if(c.has(g))continue;c.add(g)}b.push(f)}}function f(a,c,d,e){__p&&__p();if(d==null)return d;var f=i.get();f=f.EDGES;var g=c.getValue(m);if(!(typeof g==="number"))throw b("unrecoverableViolation")("CometNewsFeedConnectionHandler: Expected edgeIndex to be a number","comet_feed");e=(e=e)!=null?e:j(c.getDataID(),f,g);f=a.create(e,d.getType());f.copyFieldsFrom(d);c.setValue(g+1,m);return f}e.exports={buildConnectionEdge:f,getConnection:c,insertEdgeBefore:h.insertEdgeBefore,unstable_getAllConnectionsWithKey:d,update:a}}),null);
__d("createRelayFBLocalEnvironment",["RelayFBHandlerProvider","RelayFBOperationLoader","RelayRuntime","getRelayFBMissingFieldHandlers","relayFBGetDataID","resolveImmediate"],(function(a,b,c,d,e,f){"use strict";var g=b("RelayRuntime").Environment,h=b("RelayRuntime").RecordSource,i=b("RelayRuntime").Store,j={execute:function(a){throw new Error("RelayFBLocalEnvironment: Network requests are not allowed in the local environment, got: "+a.name)}};function a(a){var c=a.handlerProvider,d=a.missingFieldHandlers,e=a.scheduler,f=a.store,k=a.configName,l=a.log,m=a.operationTracker;a=a.UNSTABLE_DO_NOT_USE_getDataID;c=new g({configName:(k=k)!=null?k:"RelayFBLocalEnvironment",handlerProvider:(k=c)!=null?k:b("RelayFBHandlerProvider"),missingFieldHandlers:(c=d)!=null?c:b("getRelayFBMissingFieldHandlers")(),operationLoader:b("RelayFBOperationLoader"),scheduler:e,store:(k=f)!=null?k:new i(new h(),{UNSTABLE_DO_NOT_USE_getDataID:b("relayFBGetDataID"),gcReleaseBufferSize:10,gcScheduler:b("resolveImmediate"),operationLoader:b("RelayFBOperationLoader")}),network:j,operationTracker:m,log:l,UNSTABLE_DO_NOT_USE_getDataID:(d=a)!=null?d:b("relayFBGetDataID"),options:{isLocal:!0}});return c}e.exports=a}),null);
__d("CometRelayEnvironmentFactory",["requireCond","ActorURIConfig","CometNewsFeedConnectionHandler","CometNotificationsThinClientConnectionHandler","CometRelayConfig","CometRelayPerfStore","JSTracing","PinnedCommentEventsConnectionHandler","RelayAPIConfig","RelayFBEnvironmentDefinitions","RelayFBOperationLoader","UFI2CommentsConnectionHandler","VideoDashPrefetchCache","VideoTimestampedCommentsConnectionHandler","cr:1121434","createRelayFBLocalEnvironment","createRelayFBNetwork","createRelayFBNetworkFetch","createRelayFBSubscribeFunction","getRelayFBMissingFieldHandlers","gkx","cr:1345926","relay-runtime","relayFBGetDataID","resolveImmediate","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("RelayFBEnvironmentDefinitions").createEnvironmentFactory;var g=(d=b("relay-runtime")).ConnectionHandler,h=d.Observable,i=d.RecordSource,j=d.ROOT_TYPE,k=d.Store,l=d.__internal.OperationTracker,m=d.getStorageKey,n=b("gkx")("1151941");function o(a){switch(a){case"connection":return g;case"video_timestamped_comments":return b("VideoTimestampedCommentsConnectionHandler");case"pinned_comment_events":return b("PinnedCommentEventsConnectionHandler");case"ufi2_comments":return b("UFI2CommentsConnectionHandler");case"comet_news_feed":return b("CometNewsFeedConnectionHandler");case"comet_notifications_thin_client":return b("CometNotificationsThinClientConnectionHandler")}throw b("unrecoverableViolation")("RelayCometEnvironment: No handler defined for `"+a+"`.","comet_ui")}function p(a){__p&&__p();return h.create(function(c){__p&&__p();var d=b("JSTracing").wrap(function(a){a&&a()}),e=b("JSTracing").wrap(function(a){d(),a&&a()});return a.subscribe({complete:function(){for(var a=arguments.length,b=new Array(a),d=0;d<a;d++)b[d]=arguments[d];e(function(){c.complete.apply(c,b)})},error:function(){for(var a=arguments.length,b=new Array(a),d=0;d<a;d++)b[d]=arguments[d];e(function(){c.error.apply(c,b)})},next:function(){for(var a=arguments.length,b=new Array(a),e=0;e<a;e++)b[e]=arguments[e];d(function(){c.next.apply(c,b)})},unsubscribe:function(){e()}})})}function q(){__p&&__p();if(!b("cr:1345926"))return p;else return function(a){__p&&__p();var c=p(a);a=h.create(function(a){return c.subscribe({complete:a.complete,error:function(c){var d=c==null?void 0:c.source;d=d||{};var e=d.error,f=d.errorDescription;d=d.errorSummary;e&&d&&f&&b("cr:1345926")(e,d,f);return a.error(c)},next:a.next})});return a}}var r=[].concat(b("getRelayFBMissingFieldHandlers")(),[{handle:function(a,c,d,e){__p&&__p();if(c!=null&&c.__typename===j&&a.name==="user"&&Object.prototype.hasOwnProperty.call(d,"id"))return d.id;if(c!=null&&c.__typename===j&&a.name==="story"&&Object.prototype.hasOwnProperty.call(d,"story_id"))return d.story_id;if(c!=null&&c.__typename==="Story"&&a.name==="comet_sections"&&c[m(a,{renderLocation:"homepage_stream"})]!=null){var f=c[m(a,{renderLocation:"homepage_stream"})];if(f!=null&&typeof f==="object"&&Object.prototype.hasOwnProperty.call(f,"__ref")&&typeof f.__ref==="string")return f.__ref}if(c!=null&&typeof c.id==="string"&&c.__typename==="Feedback"&&a.name.startsWith("__UFI2CommentsProvider_feedback_display_comments_ufi2_comments")){f=e.get(c.id);if(!f)return null;f=b("UFI2CommentsConnectionHandler").getConnection(f,"UFI2CommentsProvider_feedback_display_comments",{feedback_source:1});return!f?null:f.getDataID()}if(c!=null&&typeof c.id==="string"&&c.__typename==="Feedback"&&a.name==="display_comments"){f=e.get(c.id);if(!f)return null;e=f.getLinkedRecord("display_comments",d);if(e)return e.getDataID();e=f.getLinkedRecord("display_comments");if(e)return e.getDataID();Object.prototype.hasOwnProperty.call(d,"is_initial_fetch")&&(e=f.getLinkedRecord("display_comments",babelHelpers["extends"]({},d,{is_initial_fetch:!d.is_initial_fetch})));return e?e.getDataID():null}return c!=null&&a.name==="video"&&Object.prototype.hasOwnProperty.call(d,"id")?d.id:null},kind:"linked"}]);function s(){var a=new i();a=new k(a,{UNSTABLE_DO_NOT_USE_getDataID:b("relayFBGetDataID"),gcReleaseBufferSize:b("CometRelayConfig").gc_release_buffer_size,gcScheduler:b("resolveImmediate"),operationLoader:b("RelayFBOperationLoader")});n||a.holdGC();return a}f=c(function(a){var c=b("createRelayFBNetwork")(b("createRelayFBNetworkFetch")({actorID:a,getAdditionalData:function(){var c;return a==null?{}:(c={},c[b("ActorURIConfig").PARAMETER_ACTOR]=a,c)},wrapObservableFn:q()}),b("createRelayFBSubscribeFunction")({}),function(a){if(window.__comet_ssr_is_server_env_DO_NOT_USE===!0)return;a.forEach(function(a){b("VideoDashPrefetchCache").loadVideo(a)})}),d=b("cr:1121434")!=null?b("cr:1121434")():null;return{UNSTABLE_DO_NOT_USE_getDataID:b("relayFBGetDataID"),UNSTABLE_defaultRenderPolicy:"partial",actorID:a,configName:"CometRelayEnvironment",handlerProvider:o,log:function(a){d&&d(a),b("CometRelayPerfStore").log(a)},missingFieldHandlers:r,network:c,operationLoader:b("RelayFBOperationLoader"),operationTracker:new l(),scheduler:null,store:s()}});d=f.getForActorID(b("RelayAPIConfig").actorID);function a(){var a=b("createRelayFBLocalEnvironment")({configName:"CometRelayLocalEnvironment",handlerProvider:o,missingFieldHandlers:r,scheduler:null,store:s()});return a}e.exports={createLocalEnvironment:a,"default":d,getForActorID:f.getForActorID}}),null);
__d("PagesLikeFollowNotifDispatcher",["Arbiter","ExplicitRegistrationReactDispatcher","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;c=new(b("SubscriptionsHandler"))();c.addSubscriptions(b("Arbiter").subscribe("liked",function(a,b){return d.dispatchLike(b.profile_id)}),b("Arbiter").subscribe("unliked",function(a,b){return d.dispatchUnlike(b.profile_id)}));return d}var d=c.prototype;d.dispatchLike=function(a){this.dispatch({type:"like",data:{pageID:a,likeStatus:!0}})};d.dispatchUnlike=function(a){this.dispatch({type:"unlike",data:{pageID:a,likeStatus:!1}})};return c}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("PagesFollowStore",["FluxReduceStore","PagesLikeFollowNotifDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return{}};c.reduce=function(a,b){var c=babelHelpers["extends"]({},a);switch(b.type){case"init_data":if(b.data.pageID in a)return a;c[b.data.pageID]=b.data.followStatus;return c;case"follow_changed":c[b.data.pageID]=b.data.followStatus;return c}return a};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("PagesLikeFollowNotifDispatcher"))}),null);