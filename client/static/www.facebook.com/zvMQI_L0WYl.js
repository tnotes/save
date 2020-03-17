if (self.CavalryLogger) { CavalryLogger.start_js(["BqZq5"]); }

__d("CometRouteURL",["ConstUriUtils","React","useCurrentRoute"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useMemo;function h(a){if(a!=null){a=b("ConstUriUtils").getUri(a);return a!=null?a.getPath():""}return""}function i(a){if(a!=null){a=b("ConstUriUtils").getUri(a);return a!=null?Object.fromEntries(a.getQueryParams()):{}}return{}}function a(){var a,c=b("useCurrentRoute")();a=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return a||""}function c(){var a,c=b("useCurrentRoute")(),d=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return g(function(){return h(d)},[d])}function d(){var a,c=b("useCurrentRoute")(),d=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return g(function(){return i(d)},[d])}e.exports={useRouteURL:a,useRouteURLParams:d,useRouteURLPath:c}}),null);
__d("useCometRelayEntrypointContextualEnvironmentProvider",["CometRelay","CometRelayEnvironmentFactory","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useMemo;function a(){var a=b("CometRelay").useRelayEnvironment();return g(function(){return{getEnvironment:function(c){c=c==null?void 0:c.actorID;return c==null?a:b("CometRelayEnvironmentFactory").getForActorID(String(c))}}},[a])}e.exports=a}),null);
__d("CometEntryPointPopoverTrigger.react",["BasePopoverTrigger.react","CometPopoverLoadingState.react","CometRelay","React","useCometPopoverInteractionTracing","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometRelay").LazyLoadEntryPointContainer_DEPRECATED,h=b("React").useCallback,i=b("React").useMemo;function j(a){var c=a.entryPoint,d=a.entryPointParams,e=a.otherProps,f=babelHelpers.objectWithoutPropertiesLoose(a,["entryPoint","entryPointParams","otherProps"]);a=i(function(){return babelHelpers["extends"]({},e,f)},[e,f]);var h=b("useCometRelayEntrypointContextualEnvironmentProvider")();return b("React").jsx(g,{entryPoint:c,entryPointParams:d,environmentProvider:h,props:a})}function a(a){__p&&__p();var c=a.fallback;c=c===void 0?b("React").jsx(b("CometPopoverLoadingState.react"),{withArrow:!0}):c;var d=a.popoverEntryPoint,e=a.entryPointParams,f=a.otherProps,g=a.preloadTrigger,k=a.tracePolicy;a=babelHelpers.objectWithoutPropertiesLoose(a,["fallback","popoverEntryPoint","entryPointParams","otherProps","preloadTrigger","tracePolicy"]);k=b("useCometPopoverInteractionTracing")(k);var l=b("useCometRelayEntrypointContextualEnvironmentProvider")(),m=i(function(){return{entryPoint:d,entryPointParams:e,otherProps:f}},[e,f,d]);return b("React").jsx(b("BasePopoverTrigger.react"),babelHelpers["extends"]({fallback:c,interactionTracker:k,onHighIntentPreload:h(function(){var a=d;if(e==null||a==null)return;b("CometRelay").prepareEntryPoint(l,a,e)},[d,e,l]),popover:j,popoverPreloadResource:d.root,popoverProps:m,preloadTrigger:g},a))}e.exports=a}),null);
__d("useCometEntryPointDialog",["CometDialogContext","CometRelay","CometSuspendedDialogImpl.react","React","recoverableViolation","stableStringify","useCometPrerenderer","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometRelay").EntryPointContainer,h=b("CometRelay").prepareEntryPoint,i=b("React").useCallback,j=b("React").useContext,k=b("React").useRef;function l(a){var c=a.onClose,d=a.otherProps;a=a.preloadedEntryPoint;d=babelHelpers["extends"]({},d,{onClose:c});return b("React").jsx(g,{entryPointReference:a,props:d})}function a(a,c,d,e){__p&&__p();var f=k(null),g=b("stableStringify")(c),m=i(function(){f.current=null},[]),n=b("useCometRelayEntrypointContextualEnvironmentProvider")(),o=i(function(){var b;if(c==null)return;(f.current==null||f.current.dialogEntryPoint!==a||f.current.preloadParamsHash!==g)&&(f.current={dialogEntryPoint:a,preloadParamsHash:g,preloadedEntryPoint:h(n,a,c)});return(b=f.current)==null?void 0:b.preloadedEntryPoint},[a,g]);d=b("useCometPrerenderer")(d,!1,a.root,o,m);d[0];var p=d[1],q=d[2];d=d[3];var r=k(null),s=j(b("CometDialogContext")),t=i(function(a,c,d){var f=o();if(f==null){b("recoverableViolation")("Unable to present comet EntryPoint dialog, preloadParams not set","comet_ui");return}m();var g=l;s(b("CometSuspendedDialogImpl.react"),{dialog:g,dialogProps:{otherProps:a,preloadedEntryPoint:f},fallback:e},c,d)},[s,e,o,m]);return[t,r,p,q,d]}e.exports=a}),null);
__d("CometRefineRef",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b){if(a==null)return;typeof a==="function"?a(b):typeof a==="object"&&(a.current=b)}}e.exports=a}),null);
__d("VideoHomeTypedLoggerLite",["Banzai","generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:VideoHomeLoggerConfig")}),null);
__d("VideoHomeCometErrorBoundary.react",["CometErrorBoundary.react","React","VideoHomeTypedLoggerLite"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useCallback;function a(a){var c=g(function(c){b("VideoHomeTypedLoggerLite").log({event:"js_error",exception:c.message,exception_trace:c.componentStack,module_class:a.moduleClass,unit_position:a.unitPosition})},[a.moduleClass,a.unitPosition]);return b("React").jsx(b("CometErrorBoundary.react"),{fallback:a.fallback,onError:c,project:"www_watch",children:a.children})}e.exports=a}),null);
__d("VideoPlayerLoggingSuboriginContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("mayHaveConnectedCharacters",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.match(/[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1A20-\u1AAF\u1B00-\u1B7F\u1B80-\u1BBF\u1BC0-\u1BFF\u1C00-\u1C4F\u1CC0-\u1CCF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA8E0-\uA8FF\uA930-\uA95F\uA980-\uA9DF\uA9E0-\uA9FF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAAE0-\uAAFF\uABC0-\uABFF\u0600-\u06FF\u0750–\u077F\u08A0–\u08FF\uFB50–\uFDFF\uFE70–\uFEFF\u4e00-\u9faf\u0D80-\u0DFF\u0E80-\u0EFF]/)!=null}e.exports=a}),null);