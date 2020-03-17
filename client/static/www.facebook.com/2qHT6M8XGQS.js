if (self.CavalryLogger) { CavalryLogger.start_js(["jSsPI"]); }

__d("XCometHomeControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/",Object.freeze({}),void 0);e.exports=a}),null);
__d("CometContentArea.react",["CometSection.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.children;a=a.verticalAlign;a=a===void 0?"top":a;return b("React").jsx("div",{className:"dp1hu0rb d2edcug0 taijpn5t j83agx80 gs1a9yip",children:b("React").jsx(b("CometSection.react"),{className:"k4urcfbm dp1hu0rb d2edcug0 cbu4d94t j83agx80 bp9cbjyn"+(a==="middle"?" taijpn5t":""),role:"main",children:c})})}e.exports=a}),null);
__d("NullState404FailedLoading",["IconSource"],(function(a,b,c,d,e,f){"use strict";a={dark:new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/404/404_failed_loading_dark_mode.svg",112),"default":new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/404/404_failed_loading_gray_wash.svg",112)};e.exports=a}),null);
__d("NullStatePermissions",["IconSource"],(function(a,b,c,d,e,f){"use strict";a={dark:new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/permissions/permissions_dark_mode.svg",112),"default":new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/permissions/permissions_gray_wash.svg",112)};e.exports=a}),null);
__d("CometErrorRoot.react",["fbt","CometContentArea.react","CometInteractionTracingMetrics","CometLink.react","NullState404FailedLoading","NullStateGeneral","NullStatePermissions","React","TetraButton.react","TetraNullState.react","TetraText.react","URI","XCometHomeControllerRouteBuilder","clearTimeout","setTimeout","stylex","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("React").useCallback,j=b("React").useEffect,k=b("React").useState,l=8460,m=6e3;function n(){var a=0,b=0;while(a===0)a=Math.random();while(b===0)b=Math.random();return Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*b)}function a(a){__p&&__p();var c,d,e=b("NullStateGeneral");(a==null?void 0:(c=a.routeProps)==null?void 0:c.privacy)&&(e=b("NullStatePermissions"));(a==null?void 0:(c=a.routeProps)==null?void 0:c.fourZerofour)&&(e=b("NullState404FailedLoading"));c=b("XCometHomeControllerRouteBuilder").buildURL({});var f=b("useCometRouterDispatcher")(),o=i(function(){f&&f.goBack&&f.goBack()},[f]);b("CometInteractionTracingMetrics").currentInteractionLogger().addMetadata("isError",1);var p=b("React").jsx(b("TetraButton.react"),{label:g._("T\u1ea3i l\u1ea1i trang"),onPress:function(){return window.location.reload(!0)},padding:"wide",size:"large"}),q;if((a==null?void 0:(d=a.routeProps)==null?void 0:d.fourZerofour)||(a==null?void 0:(d=a.routeProps)==null?void 0:d.privacy)){p=(d=b("React")).jsx(b("TetraButton.react"),{label:g._("\u0110i t\u1edbi B\u1ea3ng tin"),linkProps:{url:c},padding:"wide",size:"large"});q=d.jsxs("div",{className:"sv5sfqaa cbu4d94t j83agx80 bp9cbjyn",children:[d.jsx(b("CometLink.react"),{onClick:o,target:"_blank",children:d.jsx(b("TetraText.react"),{color:"blueLink",type:"bodyLink2",children:g._("Quay l\u1ea1i")})}),d.jsx("div",{className:"tr9rh885",children:d.jsx(b("CometLink.react"),{href:new(h||(h=b("URI")))("/help").getQualifiedURI().toString(),target:"_blank",children:b("React").jsx(b("TetraText.react"),{color:"blueLink",type:"bodyLink2",children:g._("Truy c\u1eadp Trung t\u00e2m tr\u1ee3 gi\u00fap")})})})]})}c=k(null);o=c[0];var r=c[1],s=a==null?void 0:(d=a.routeProps)==null?void 0:d.isBOC;j(function(){if(s===!0){var a=Math.abs(l+n()*m),c=b("setTimeout")(function(){r(b("React").jsx("iframe",{className:"ttbfdpzt do00u71z sk4xxmp2 agehan2d n8ej3o3l rt8b4zig"}))},a);return function(){return b("clearTimeout")(c)}}},[s]);return b("React").jsx(b("CometContentArea.react"),{verticalAlign:"middle",children:b("React").jsxs("div",{className:"oh7imozk cbu4d94t j83agx80 bp9cbjyn","data-testid":void 0,children:[b("React").jsx(b("TetraNullState.react"),{action:p,body:((c=a.routeProps)==null?void 0:c.body)||g._("\u0110\u00e2y c\u00f3 th\u1ec3 l\u00e0 do l\u1ed7i k\u1ef9 thu\u1eadt m\u00e0 ch\u00fang t\u00f4i \u0111ang n\u1ed7 l\u1ef1c kh\u1eafc ph\u1ee5c. H\u00e3y th\u1eed t\u1ea3i l\u1ea1i trang n\u00e0y."),headline:((d=a.routeProps)==null?void 0:d.title)||g._("Trang n\u00e0y hi\u1ec7n kh\u00f4ng t\u1ed3n t\u1ea1i"),icon:e}),q,o]})})}e.exports=a}),null);
__d("CometResponsiveColumns.react",["BaseRow.react","BaseRowItem.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useContext,i={container:{maxWidth:"d2edcug0",width:"k4urcfbm"},content:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"btwxx1t3",flexWrap:"lhclo0ds",justifyContent:"taijpn5t"},defaultWidth:{width:"tn7ubyq0"},reverse:{flexWrap:"kbz25j0m"}},j={16:{marginTop:"sv5sfqaa",marginEnd:"o22cckgh",marginBottom:"obtkqiv7",marginStart:"fop5sh7t"}},k=b("React").createContext(16);function a(a){var c=a.children,d=a.containerWidth,e=a.gutterWidth;e=e===void 0?"16":e;var f=a.reverseColumns;f=f===void 0?!1:f;var h=a.testid;h=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","containerWidth","gutterWidth","reverseColumns","testid","xstyle"]);return b("React").jsx("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(i.container,d==="DEFAULT"&&i.defaultWidth,h),"data-testid":void 0,children:b("React").jsx(b("BaseRow.react"),{xstyle:[i.content,f&&i.reverse,j[e]],children:b("React").jsx(k.Provider,{value:e,children:c})})}))}var l={FEED:{flexBasis:"gile2uim",maxWidth:"qmfd67dx"},FULL:{flexBasis:"dxtxif39",maxWidth:"gderk4og"},SECONDARY:{flexBasis:"o387gat7",maxWidth:"qmfd67dx"}},m={16:{marginTop:"aov4n071",marginEnd:"oi9244e8",marginBottom:"bi6gxh9e",marginStart:"h676nmdw"}};function c(a){var c=a.children,d=a.columnType,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","columnType","xstyle"]);var f=h(k);return b("React").jsx(b("BaseRowItem.react"),babelHelpers["extends"]({},a,{expanding:!0,xstyle:[d==="FEED"&&l.FEED,d==="FULL"&&l.FULL,d==="SECONDARY"&&l.SECONDARY,e,m[f]],children:c}))}e.exports={Column:c,Container:a}}),null);
__d("CometPageVerificationIcon.react",["ix","React","TetraIcon.react","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.isInverted,d=a.size;a=a.verificationBadge;var e=null,f=b("fbicon")._(g("498144"),12),h=12;d==="large"&&(h=16,f=b("fbicon")._(g("498145"),16));if(c===!0)e=b("React").jsx(b("TetraIcon.react"),{color:"white",icon:f,size:h});else switch(a){case"BLUE_VERIFIED":e=b("React").jsx(b("TetraIcon.react"),{color:"highlight",icon:f,size:h});break;case"GRAY_VERIFIED":e=b("React").jsx(b("TetraIcon.react"),{color:"secondary",icon:f,size:h});break}return e!=null?b("React").jsx("span",{className:"hrs1iv20 pq6dq46d",children:e}):null}e.exports=a}),null);
__d("generateChainingSessionID",["Random"],(function(a,b,c,d,e,f){"use strict";function a(){return"f"+(b("Random").random()*(1<<30)).toString(16).replace(".","")}e.exports=a}),null);
__d("useCometTahoeChainingDepth",["React","generateChainingSessionID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=(a=b("React")).createContext;var g=a.useContext,h=a.useMemo,i=a.useReducer,j=a.useState,k=c({chainingDepthDispatch:null,chainingDepthState:0,chainingSessionID:null});d=function(){__p&&__p();var a=0,c=function(a,b){switch(b.type){case"INCREMENT":return a+1;default:return a}};c=i(c,a);var d=c[0],e=c[1];a=j(function(){return b("generateChainingSessionID")()});var f=a[0];a[1];return h(function(){return{chainingDepthDispatch:e,chainingDepthState:d,chainingSessionID:f}},[e,d,f])};f=function(){return g(k)};a=function(a){var c=a.children;a=a.value;return b("React").jsx(k.Provider,{value:a,children:c})};e.exports={CometTahoeChainingDepthContextProvider:a,useChainingDepth:d,useChainingDepthContext:f}}),null);
__d("CometVideoHomeHeroVideoGlimmer.react",["BaseGlimmer.react","React","gkx","stylex"],(function(a,b,c,d,e,f){"use strict";var g;function a(){return b("React").jsx("div",{className:(g||(g=b("stylex"))).dedupe({"background-color-1":"cddn0xzi","display-1":"j83agx80","justify-content-1":"taijpn5t","margin-top-1":"trrkgow7","margin-end-1":"tci0nj69","margin-bottom-1":"oygrvhab","margin-start-1":"id8gkqje","overflow-x-1":"ni8dbmo4","overflow-y-1":"stjgntxs","padding-top-1":"jb3vyjys","padding-end-1":"rz4wbd8a","padding-bottom-1":"qt6c0cv9","padding-start-1":"a8nywdso","width-1":"k4urcfbm"},b("gkx")("708253")?{"height-1":"cxj30y35"}:{"height-1":"lccpc8tu"}),children:b("React").jsx("div",{className:"d2edcug0 nwf6jgls taijpn5t j83agx80",children:b("React").jsx(b("BaseGlimmer.react"),{className:"k4urcfbm nwf6jgls",index:0})})})}e.exports=a}),null);
__d("VideoHomeLoggingExternalLogIDContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("VideoPlayerLoggingExternalLogContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({externalLogID:null,externalLogType:null});e.exports=a}),null);
__d("VideoHomeVisibilityUtils",["getViewportDimensions","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=42,h=.5;function a(a){__p&&__p();if(a.isState("destroyed"))return!1;if(a.isFullscreen())return!0;if(b("gkx")("1250684")&&a.hasDialog()&&!a.isTahoe())return!1;var c=b("getViewportDimensions")(),d=c.width;c=c.height;a=a.getDOMPosition();if(a.height===0)return!1;var e=a.y-g+(1-h)*a.height,f=a.y+h*a.height,i=a.x+(1-h)*a.width;a=a.x+h*a.width;return e>=0&&f<c&&i>=0&&a<d}e.exports={isVisible:a,VISIBLE_THRESHOLD:h}}),null);
__d("VideoWithExternalLogger",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){function a(a){this.$1=a.external_log_id,this.$2=a.external_log_type}var b=a.prototype;b.enable=function(a){this.$3=a;this.$3.setLogEntryPropertyGetters((a={},a.external_log_id=this.$1,a.external_log_type=this.$2,a))};b.disable=function(){this.$3=null};return a}();e.exports=a}),null);
__d("VideoPlayerFairplayLicenseHandler",["EventEmitter","EventListener","URI","VideoPlayerWindowUtils","XHRRequest","unrecoverableViolation"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){var g;g=a.call(this)||this;g.$VideoPlayerFairplayLicenseHandler1=d;g.$VideoPlayerFairplayLicenseHandler2=c;g.$VideoPlayerFairplayLicenseHandler3=e;g.$VideoPlayerFairplayLicenseHandler4=f;b("EventListener").listen(d,"webkitneedkey",g.$VideoPlayerFairplayLicenseHandler5.bind(babelHelpers.assertThisInitialized(g)));return g}var d=c.prototype;d.$VideoPlayerFairplayLicenseHandler5=function(a){__p&&__p();var c=this;a=a.initData;var d=new Uint16Array(a.buffer);d=String.fromCharCode.apply(null,d).substring(8);var e,f=this.$VideoPlayerFairplayLicenseHandler1;if(f.webkitKeys==null){var g=b("VideoPlayerWindowUtils").WebKitMediaKeys;if(g!=null&&g.isTypeSupported("com.apple.fps.1_0","video/mp4"))e="com.apple.fps.1_0";else throw b("unrecoverableViolation")("Key System not supported","FairplayLicenseHandler");this.$VideoPlayerFairplayLicenseHandler1.webkitSetMediaKeys(new g(e))}if(f.webkitKeys==null)throw b("unrecoverableViolation")("Could not create MediaKeys","FairplayLicenseHandler");g=this.concatInitDataIdAndCertificate(a,d);e=this.$VideoPlayerFairplayLicenseHandler1.webkitKeys.createSession("video/mp4",g);if(!e)throw b("unrecoverableViolation")("Could not create key session",e);e.contentId=d;b("EventListener").listen(e,"webkitkeymessage",this.$VideoPlayerFairplayLicenseHandler6.bind(this));b("EventListener").listen(e,"webkitkeyerror",function(a){c.emit("error",{error:"webkitkeyerror"})})};d.concatInitDataIdAndCertificate=function(a,b){__p&&__p();var c=new Uint16Array(new ArrayBuffer(b.length*2));for(var d=0,e=b.length;d<e;d++)c[d]=b.charCodeAt(d);b=window.atob(this.$VideoPlayerFairplayLicenseHandler2);d=new Uint8Array(new ArrayBuffer(b.length));for(var e=0;e<b.length;e++)d[e]=b.charCodeAt(e);e=0;b=new ArrayBuffer(a.byteLength+4+c.byteLength+4+d.byteLength);var f=new DataView(b),g=new Uint8Array(b,e,a.byteLength);g.set(a);e+=a.byteLength;f.setUint32(e,c.byteLength,!0);e+=4;g=new Uint16Array(b,e,c.byteLength/2);g.set(c);e+=g.byteLength;f.setUint32(e,d.byteLength,!0);e+=4;a=new Uint8Array(b,e,d.byteLength);a.set(d);return new Uint8Array(b,0,b.byteLength)};d.$VideoPlayerFairplayLicenseHandler6=function(a){var c=this,d=a.target;a=a.message;a=window.btoa(String.fromCharCode.apply(null,new Uint8Array(a)));var e=this.$VideoPlayerFairplayLicenseHandler4[d.contentId];new(b("XHRRequest"))(new(g||(g=b("URI")))(e)).setMethod("POST").setRawData(a).setResponseType("text").setResponseHandler(function(a){c.$VideoPlayerFairplayLicenseHandler7(a,d)}).setRequestHeader("Content-type","application/x-www-form-urlencoded").setErrorHandler(function(){c.$VideoPlayerFairplayLicenseHandler8()}).send()};d.$VideoPlayerFairplayLicenseHandler7=function(a,b){a=window.atob(a);var c=new Uint8Array(new ArrayBuffer(a.length*2));for(var d=0,e=a.length;d<e;d++)c[d]=a.charCodeAt(d);b.update(c)};d.$VideoPlayerFairplayLicenseHandler8=function(){this.emit("error",{error:"Fairplay License fetch failed"})};return c}(b("EventEmitter"));e.exports=a}),null);
__d("VideoComponentWithExternalLogger.react",["React","VideoComponent","VideoWithExternalLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){this.$1=new(b("VideoWithExternalLogger"))({external_log_id:this.props.externalLogID,external_log_type:this.getExternalLogType()}),this.$1.enable(a)};d.disable=function(){var a;(a=this.$1)==null?void 0:a.disable()};d.render=function(){return null};d.getExternalLogType=function(){var a=this.props,b=a.playerOrigin,c=a.playerSuborigin;a=a.upstreamPlayerSource;if(b==="video_home"&&c==="entry_point"&&a==="search")return"search_results_session_id";return b==="video_home"&&c==="topic_live"?"search_results_session_id":null};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoChannelType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({A_PLACE_FOR_EURO_LIVE:"a_place_for_euro_live",ALL_FROM_YOUR_SUBSCRIPTIONS:"all_from_your_subscriptions",BEST_FROM_YOUR_CHANNELS:"best_from_your_channels",BEST_RECENT_LIVE_VIDEOS:"best_recent_live_videos",BLIZZARD:"blizzard",CONNECTED_ACTIVE_LIVE_VIDEOS:"connected_active_live_videos",CONNECTED_LIVE_VIDEOS:"connected_live_videos",CONNECTED_NON_FRIEND:"connected_non_friend",CONTENT_COLLECTION:"content_collection",CREATOR_SPACE_PUBLISHER_OWNED:"creator_space_publisher_owned",CREATOR_360_VIDEOS:"creator_360_videos",CREATOR_NON_360_VIDEOS:"creator_non_360_videos",CREATORS_TO_WATCH:"creators_to_watch",CREATOR_CHANNEL:"creator_channel",CURRENT_LIVE_STREAMS:"current_live_streams",DEMOGRAPHIC_POPULAR:"demographic_popular",DIGRAPH_MFCF:"digraph_mfcf",DISCOVER_LANGUAGE:"discover_language",EM_TOPIC_ANIMALS:"em_topic_animals",EM_TOPIC_BUSINESS:"em_topic_business",EM_TOPIC_COMEDY:"em_topic_comedy",EM_TOPIC_EDUCATION:"em_topic_education",EM_TOPIC_EMOTIONAL:"em_topic_emotional",EM_TOPIC_ENTERTAINMENT:"em_topic_entertainment",EM_TOPIC_FASHION:"em_topic_fashion",EM_TOPIC_FOOD:"em_topic_food",EM_TOPIC_GAMING:"em_topic_gaming",EM_TOPIC_HEALTH:"em_topic_health",EM_TOPIC_MUSIC:"em_topic_music",EM_TOPIC_NEWS:"em_topic_news",EM_TOPIC_SCIENCE:"em_topic_science",EM_TOPIC_SPORTS:"em_topic_sports",EM_TOPIC_TRAVEL:"em_topic_travel",EM_TOPIC_LIFESTYLE:"em_topic_lifestyle",EM_VIDEO_HOME_TOPIC:"em_video_home_topic",ENGAGED_BY_YOUR_FRIENDS:"engaged_by_your_friends",EPISODES:"episodes",FOLLOW_THIS_CREATOR_PIVOT:"follow_this_creator_pivot",LIVE_NOW_CREATOR_PIVOT:"live_now_creator_pivot",TARGETED_EPISODES:"targeted_episodes",NON_SEASON_EPISODES:"non_season_episodes",NEAREST_EPISODES:"nearest_episodes",RELATED_EPISODES:"related_episodes",FAN_SUBMISSIONS_TOPIC_VIDEOS:"fan_submissions_topic_videos",FB_CURATED:"fb_curated_videos",FEATURED_LIVE_STREAMS:"featured_live_streams",FREE_VIDEOS:"free_videos",FRIENDS_UPLOAD:"friends_upload",FRIENDS_ENJOYING_LIVE_VIDEOS:"friends_enjoying_live_videos",GAME_ROOM:"game_room",GAME_ROOM_BY_GAME:"game_room_by_game",GAME_ROOM_OTHER:"game_room_other",GENERIC_CONNECTED_VIDEO_FEED:"connected_generic_feed",GENERIC_UNCONNECTED_VIDEO_FEED:"unconnected_generic_feed",GROUP:"group",GROUPS:"groups",INDIA_POPULAR_CRICKET:"india_popular_cricket",LATEST_FROM_YOUR_CHANNELS:"latest_from_your_channels",LIVE_BROADCAST:"live_broadcast",LIVE_MOMENTS:"live_moments",TOPICAL_LIVE_VIDEOS:"topical_live_videos",MENTIONS_PUBLIC_FIGURE_LIVE_FEED:"mentions_public_figure_live_feed",NEW_FROM_YOUR_SUBSCRIPTIONS:"new_from_your_subscriptions",PAID_VIDEOS:"paid_videos",PAGE:"page",POPULAR_LIVE_IN_THE_WORLD:"popular_live_in_world",POPULAR_VIDEOS:"popular_videos",POPULAR_VIDEOS_BACKED_BY_LASER:"popular_videos_backed_by_laser",POPULAR_360_VIDEOS:"popular_360_videos",PRANKS:"pranks",VH_COMBINED_SINGLE_LIVE_FEED:"combined_single_live_feed",VH_COMBINED_SINGLE_UNCONNECTED_LIVE_FEED:"combined_single_unconnected_live_feed",VH_GROUPABLE_SINGLE_LIVE_FEED:"groupable_single_live_feed",VH_PV_COMBINED_SINGLE_LIVE_FEED:"pv_combined_single_live_feed",VH_SHOWS_SINGLE_LIVE_FEED:"shows_single_live_feed",VH_SHOWS_SINGLE_LIVE_LITE_FEED:"shows_single_live_lite_feed",PERSONALIZED_IS_LIVE:"personalized_is_live",PROFILE_VIDEO_GALLERY:"profile_video_gallery",PUBLISHER_LIVE_VIDEO_STREAMS:"publisher_live_video_streams",PUBLISHER_RECENT_LIVE_VIDEO_STREAMS:"publisher_recent_live_video_streams",PUBLISHER_HIGHLIGHTED_VIDEO_STREAMS:"publisher_highlighted_video_streams",PUBLISHER_TOP_DRIVERS:"publisher_top_drivers",RECENT_LIVE_STREAMS:"recent_live_streams",RECOMMENDATION_VOD_FEED_STREAM:"recommendation_vod_feed_stream",RECOMMENDED_ACTIVE_LIVE_VIDEOS:"recommended_active_live_videos",RECOMMENDED_WAS_LIVE:"recommended_was_live",REGION_GENDER_POPULAR:"region_gender_popular",PLAYLIST_VIDEOS:"playlist_videos",RELATED_VIDEOS:"related_videos",RELATED_VIDEOS_COLLECTION:"related_videos_collection",RELATED_VIDEOS_FEEDBUILDER:"related_videos_feedbuilder",RESHARED:"reshared",RESHARED_BY_FRIENDS:"reshared_by_friends",SAVE_LIST:"save_list",SAVED_VIDEOS:"saved_videos",SAVED_360_VIDEOS:"saved_360_videos",SEARCH:"search",SHARED_BY_ME:"shared_by_me",SHARED_WITH_YOU:"shared_with_you",SOCIALLY_RECOMMENDED_VIDEOS:"socially_recommended_videos",SPECIAL_EVENT_LIVE_VIDEOS:"special_event_live_videos",SUBSCRIBED_ACTIVE_LIVE_VIDEOS:"subscribed_active_live_videos",SUBSCRIBED_LIVE_VIDEOS:"subscribed_live_videos",SUBSCRIBED_NON_ACTIVE_LIVE_VIDEOS:"subscribed_non_active_live_videos",TEST_VIDEOS_FROM_TEST_BROADCASTERS:"test_videos_from_test_broadcasters",TEST_CHANNEL:"test_channel",TIMELINE_360_VIDEOS:"timeline_360_videos",TOP_PARTNERS_VIDEOS:"top_partner_videos",TOP_LIVE:"top_live",TOP_LIVE_BACKED_BY_VIDEO:"top_live_backed_by_video",SCHEDULED_LIVE:"scheduled_live",PERSONALIZED_LIVE:"personalized_live",TOP_VIDEOS:"top_videos",TOPIC_FEED:"topic_feed_videos",TOPICAL:"topical",TOPICAL_LIVE:"topical_live",TRENDING_VIDEOS:"trending_videos",TRENDING_DEMOGRAPHICS_POPULAR_LIVE:"trending_demographics_popular_live",TV_GUIDE_TOPIC:"tv_guide_topic",UPLOADED_BY_YOUR_FRIENDS:"uploaded_by_your_friends",USER:"user",VIDEO_ADS_FOR_COMMERCIAL_BREAK:"video_ads_for_commercial_break",VIDEO_FALLBACK_FEED:"video_fallback_feed",VIDEO_HOME_CREATOR:"video_home_creator",VIDEO_HOME_DAILY_LAUGH_CATEGORY:"video_home_daily_laugh_category",VIDEO_HOME_FEATURED_VIDEO:"video_home_featured_video",VIDEO_HOME_ARLTW_FEED:"video_home_arltw_feed",VIDEO_HOME_ARLTW_FEED_FROM_LIVE:"video_home_arltw_feed_from_live",VIDEO_HOME_CUSTOM_ADS:"video_home_custom_feed",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_FEED_FBLITE:"video_home_feed_fblite",VIDEO_HOME_FEED_MSITE:"video_home_feed_msite",VIDEO_HOME_FEED_WWW:"video_home_feed_www",VIDEO_HOME_FOLLOWED_SHOWS:"video_home_followed_shows",VIDEO_HOME_INTERESTS_DESTINATION_CUE:"video_home_interests_destination_cue",VIDEO_HOME_NEWS:"video_home_news",VIDEO_HOME_TOPIC_SPRINGBOARD:"video_home_topic_springboard",VIDEO_HOME_SHOWS_CATALOG_CONTINUE_WATCHING:"video_home_shows_catalog_continue_watching",VIDEO_HOME_SHOWS_CATALOG_ENTRY_POINT:"video_home_shows_catalog_entry_point",VIDEO_HOME_SHOWS_CATALOG_FOLLOWING:"video_home_shows_catalog_following",VIDEO_HOME_SHOWS_CATALOG_NAVBAR:"video_home_shows_catalog_navbar",VIDEO_HOME_SHOWS_CATALOG_ORIGINALS:"video_home_shows_catalog_originals",VIDEO_HOME_SHOWS_CATALOG_SHOWS_FRIENDS_FOLLOWING:"video_home_shows_catalog_shows_friends_following",VIDEO_HOME_ORIGINALS_ENTRYPOINT_GRID:"video_home_originals_entrypoint_grid",VIDEO_HOME_SHOWS_CATALOG_WELCOME_MAT:"video_home_shows_catalog_welcome_mat",VIDEO_HOME_SHOWS_HAHA:"video_home_haha",VIDEO_HOME_SHOWS_ANGRY:"video_home_angry",VIDEO_HOME_SHOWS_LOVE:"video_home_love",VIDEO_HOME_SHOWS_TOP_OF_WATCHLISTS:"video_home_top_of_watchlists",VIDEO_HOME_SHOWS_TRENDING:"video_home_trending",VIDEO_HOME_SHOWS_WEEKLY_TOP:"video_home_weekly_top",VIDEO_HOME_SHOWS_SIT_BACK:"video_home_sit_back",VIDEO_HOME_SHOWS_FRIENDS_WATCHED:"video_home_friends_watched",VIDEO_HOME_SHOWS_FRIENDS_ENGAGED:"video_home_friends_engaged",VIDEO_HOME_HERO:"video_home_hero",VIDEO_HOME_HERO_SV:"video_home_hero_sv",VIDEO_HOME_HIGHLIGHTED:"video_home_highlighted",VIDEO_HOME_GENERIC_FEED:"video_home_generic_feed",VIDEO_HOME_LANGUAGE:"video_home_language",VIDEO_HOME_LIVE_NOTIFICATIONS:"video_home_live_notifications",VIDEO_HOME_PINNED_TOPICS:"video_home_pinned_topics",VIDEO_HOME_PINNED_TOPICS_LIVE:"video_home_pinned_topics_live",VIDEO_HOME_QUEUE:"video_home_queue",VIDEO_HOME_SAVED_QUEUE:"video_home_saved_queue",VIDEO_HOME_UNWATCHED_QUEUE:"video_home_unwatched_queue",VIDEO_HOME_UNWATCHED_RHC_QUEUE:"video_home_unwatched_rhc_queue",VIDEO_HOME_UPCOMING_QUEUE:"video_home_upcoming_queue",VIDEO_HOME_UNFOLLOWED_QUEUE:"video_home_unfollowed_queue",VIDEO_HOME_SPOTLIGHT:"video_home_spotlight",VIDEO_HOME_SYSTEM_NOTIFICATIONS:"video_home_system_notifications",VIDEO_HOME_PREVIEW_SHOWS_YOU_ADMIN:"video_home_preview_shows_you_admin",VIDEO_HOME_SUGGESTED_SHOWS_SECTION:"video_home_suggested_shows_section",VIDEO_HOME_CHILD_SHOWS_FROM_FOLLOWED_PAGES:"video_home_child_shows_from_followed_pages",BECAUSE_CONNECTED_SHOW:"because_connected_show",VIDEO_LIST:"video_list",VIDEO_PLAYLIST:"video_playlist",VIDEOLIST_SHOW:"videolist_show",WATCHED_RECOMMENDATIONS:"watched_video_recommendations",WATCHED_VIDEOS:"watched_videos",WATCHED_VIDEOS_EXPERIMENTAL:"watched_videos_experimental",WEAKLYENGAGED_BY_YOUR_FRIENDS:"weaklyengaged_by_your_friends",WATCH_QUEUE:"watch_queue",AUTODOWNLOADABLE_VIDEOS:"autodownloadable_videos",FRIEND_STORIES:"friend_stories",GROUPED_WATCH_QUEUE:"grouped_watch_queue",COMMERCE_LIVE_FEED:"commerce_live_feed",COMMERCE_LIVE_VIDEOS:"commerce_live_videos",LOCAL_NEWS:"local_news",SHOW_COVER:"show_cover",SHOW_ALL_EPISODES:"all_episodes",SHOW_NON_EPISODES:"show_non_episodes",LIVE_SPORTS:"live_sports",CHILD_SHOW_EPISODES:"child_show_episodes",TALENT_SHOW_PROMO_UNIT:"talent_show_promo_unit",TOPIC:"topic",TOPIC_GRID:"topic_grid",OLD_PROMOTIONS:"old_promotions",HERO_PERSONALIZED:"hero_personalized",CONTINUE_WATCHING:"continue_watching",WATCH_NEXT:"watch_next",UPCOMING_MOVIE_TRAILERS:"upcoming_movie_trailers",LIVE_CHALLENGE:"live_challenge",LIVE_DISCOVERY_HERO:"live_discovery_hero",LIVE_DISCOVERY_TOP_LIVE:"live_discovery_top_live",LIVE_DISCOVERY_GLOBAL:"live_discovery_global",LIVE_DISCOVERY_SCHEDULED_LIVE:"live_discovery_scheduled_live",LIVE_DISCOVERY_GAMING:"live_discovery_gaming",LIVE_DISCOVERY_RECENT_LIVE:"live_discovery_recent_live",LIVE_DISCOVERY_SUGGESTED:"live_discovery_suggested",LIVE_DISCOVERY_PERSONALIZED_TOP_LIVE:"live_discovery_personalized_top_live",TV_TOPIC:"tv_topic",CONTINUE_WATCHING_ALL_VIDEOS:"continue_watching_all_videos",SEARCH_IS_LIVE:"search_is_live",EPISODES_FROM_SHOWX:"episodes_from_showx",CHAINING_RELEVANT_LIVE:"chaining_relevant_live",CHAINING_RELEVANT_LIVE_V2:"chaining_relevant_live_v2",CHAINING_RELEVANT_LIVE_V2_COLLECTION:"chaining_relevant_live_v2_collection",CHAINING_RELEVANT_LIVE_MUSIC:"chaining_relevant_live_music",MARKERPLACE_LIVE_VIDEOS:"marketplace_live_videos",FOLLOWED_SHOWS_EXPLODED:"followed_shows_exploded",VIDEO_HOME_SPECIAL_EVENT:"video_home_special_event",EPISODES_FROM_SHOW:"episodes_from_show",NATIVE_TEMPLATE:"native_template",VIDEO_HOME_CHEAP_FEED:"video_home_cheap_feed",VIDEO_HOME_PERSONALIZED_CHEAP_FEED:"video_home_personalized_cheap_feed",VIDEO_HOME_SMART_PREFETCH_FEED:"video_home_smart_prefetch_feed",FEED_PAGES_YOU_WATCH:"feed_pages_you_watch",VIDEO_HOME_COACHELLA_HASHTAGS:"video_home_coachella_hashtags",VIDEO_HOME_SUGGESTED_AGGREGATION_FEED:"video_home_suggested_aggregation_feed",VIDEO_HOME_NATIVE_TOPIC_NEWS_RECOMMENDED_FOR_YOU:"video_home_native_topic_news_recommended_for_you",VIDEO_HOME_NATIVE_TOPIC_SPORTS_RECOMMENDED_FOR_YOU:"video_home_native_topic_sports_recommended_for_you",VIDEO_HOME_NATIVE_TOPIC_ANIMALS_RECOMMENDED_FEED:"video_home_native_topic_animals_recommended_feed",VIDEO_HOME_NATIVE_TOPIC_BEAUTY_RECOMMENDED_FEED:"video_home_native_topic_beauty_recommended_feed",VIDEO_HOME_NATIVE_TOPIC_FOOD_RECOMMENDED_FEED:"video_home_native_topic_food_recommended_feed",VIDEO_HOME_NATIVE_TOPIC_LIVE_RECOMMENDED_FEED:"video_home_native_topic_live_recommended_feed",VIDEO_HOME_NATIVE_TOPIC_MUSIC_RECOMMENDED_FEED:"video_home_native_topic_music_recommended_feed",VIDEO_HOME_NATIVE_TOPIC_SHOWS_RECOMMENDED_FEED:"video_home_native_topic_shows_recommended_feed",VIDEO_HOME_NT_BADGED_TOAST:"video_home_nt_badged_toast",VIDEO_HOME_NT_CONTINUE_WATCHING:"video_home_nt_continue_watching",VIDEO_HOME_NT_COWATCHING_CONTENT:"video_home_nt_cowatching_content",VIDEO_HOME_NT_COWATCHING_HERO:"video_home_nt_cowatching_hero",VIDEO_HOME_NT_LIVE_MUSIC_DESTINATION:"video_home_nt_live_music_destination",VIDEO_HOME_NT_CULTURAL_MOMENTS:"video_home_nt_cultural_moments",VIDEO_HOME_NT_FEATURED_EVENT_MODULE:"video_home_nt_featured_event_module",VIDEO_HOME_NT_GAMING_TOPIC:"video_home_nt_gaming_topic",VIDEO_HOME_NT_INTERESTS_FIXED_ENTRYPOINT:"video_home_nt_interests_fixed_entrypoint",VIDEO_HOME_NT_LASSO_PROMO:"video_home_nt_lasso_promo",VIDEO_HOME_NT_LIVE_EVENTS_MODULE:"video_home_nt_live_events_module",VIDEO_HOME_NT_NEW_USERS_WELCOME_MAT:"video_home_nt_new_users_welcome_mat",VIDEO_HOME_NT_POPULAR_THIS_WEEK_LOVE:"video_home_nt_popular_this_week_love",VIDEO_HOME_NT_POPULAR_THIS_WEEK_HAHA:"video_home_nt_popular_this_week_haha",VIDEO_HOME_NT_POPULAR_THIS_WEEK_RESHARE:"video_home_nt_popular_this_week_reshare",VIDEO_HOME_NT_PROMOTIONS:"video_home_nt_promotions",VIDEO_HOME_NT_PROMOTIONS_SHOWS:"video_home_nt_promotions_shows",VIDEO_HOME_NT_PROMOTIONS_SHOWS_IN_FEED:"video_home_nt_promotions_shows_in_feed",VIDEO_HOME_NT_SHOWS_GENERAL_PROMOTION:"video_home_nt_shows_general_promotion",VIDEO_HOME_NT_PROMOTIONS_SOTTO_CATALOG:"video_home_nt_promotions_sotto_catalog",VIDEO_HOME_NT_SHOWS_ONLY_FEED:"video_home_nt_shows_only_feed",VIDEO_HOME_NT_SOCIAL_DISCOVERY:"video_home_nt_social_discovery",VIDEO_HOME_NT_RECOMMENDED_SUBTOPIC:"video_home_nt_recommended_subtopic",VIDEO_HOME_NT_RECIPE_CHANNEL:"video_home_nt_reipe_channel",VIDEO_HOME_NT_PREMIUM_SPORTS:"vidfeo_home_nt_premium_sports",VIDEO_HOME_NT_START_LIVING_ROOM_CTA:"video_home_nt_start_living_room_cta",VIDEO_HOME_REACTED_BY_FRIENDS:"video_home_reacted_by_friends",VIDEO_HOME_SOTTO_SUBSCRIPTIONS:"video_home_sotto_subscriptions",VIDEO_HOME_SUGGESTED_PAGES_QP:"video_home_suggested_pages_qp",VIDEO_HOME_PREMIUM_CONTENT_QP:"video_home_premium_content_qp",VIDEO_HOME_ORIGINALS_QP:"video_home_originals_qp",VIDEO_HOME_NEWSFEED_QP:"video_home_newsfeed_qp",VIDEO_HOME_RAINBOW_QP:"video_home_rainbow_qp",VIDEO_HOME_EMMYS_QP:"video_home_emmys_qp",VIDEO_HOME_TOP_VIDEOS_QP:"video_home_top_videos_qp",VIDEO_HOME_TOPIC_VIDEOS_QP:"video_home_topic_videos_qp",VIDEO_HOME_TOPIC_ANIMALS_RECOMMENDED_FEED:"video_home_topic_animals_recommended_feed",VIDEO_HOME_TOPIC_PILLS:"video_home_topic_pills",VIDEO_HOME_TOPIC_PILLS_NATIVE:"video_home_topic_pills_native",VIDEO_HOME_TOPIC_BEAUTY_FEATURED_CREATORS:"video_home_topic_beauty_featured_creators",VIDEO_HOME_TOPIC_BEAUTY_RECOMMENDED_FEED:"video_home_topic_beauty_recommended_feed",VIDEO_HOME_TOPIC_FOOD_RECOMMENDED_FEED:"video_home_topic_food_recommended_feed",VIDEO_HOME_TOPIC_MUSIC_RECOMMENDED_FEED:"video_home_topic_music_recommended_feed",VIDEO_HOME_TOPIC_NEWS_DAILY_BRIEFING:"video_home_topic_news_daily_briefing",VIDEO_HOME_TOPIC_NEWS_DAILY_SHOWS:"video_home_topic_news_daily_shows",VIDEO_HOME_TOPIC_NEWS_FOLLOWED_NEWS:"video_home_topic_news_followed_news",VIDEO_HOME_TOPIC_NEWS_FUNDED_CONTENT:"video_home_topic_news_funded_content",VIDEO_HOME_TOPIC_NEWS_LIVE_NOW:"video_home_topic_news_live_now",VIDEO_HOME_TOPIC_NEWS_LOCAL_NEWS:"video_home_topic_news_local_news",VIDEO_HOME_TOPIC_NEWS_PROMO_UNIT:"video_home_topic_news_promo_unit",VIDEO_HOME_TOPIC_NEWS_PUBLISHERS:"video_home_topic_news_publishers",VIDEO_HOME_TOPIC_NEWS_RECOMMENDED:"video_home_topic_news_recommended",VIDEO_HOME_TOPIC_NEWS_WEEKLY_SHOWS:"video_home_topic_news_weekly_shows",VIDEO_HOME_TOPIC_SHOWS_HERO:"video_home_topic_shows_hero",VIDEO_HOME_TOPIC_SHOWS_MOST_POPULAR:"video_home_topic_shows_most_popular",VIDEO_HOME_TOPIC_SHOWS_REAL_STORIES:"video_home_topic_shows_real_stories",VIDEO_HOME_TOPIC_SHOWS_SHOWS_YOU_WATCH:"video_home_topic_shows_shows_you_watch",VIDEO_HOME_SHOWS_ONLY_HSCROLL:"video_home_shows_only_hscroll",VIDEO_HOME_TOPIC_SPORTS_FEATURED_EVENT:"video_home_topic_sports_featured_event",VIDEO_HOME_TOPIC_SPORTS_GAMETIME_SCORES:"video_home_topic_sports_gametime_scores",VIDEO_HOME_TOPIC_SPORTS_HIGHLIGHTS:"video_home_topic_sports_highlights",VIDEO_HOME_TOPIC_SPORTS_LEAGUES:"video_home_topic_sports_leagues",VIDEO_HOME_TOPIC_SPORTS_LIVE:"video_home_topic_sports_live",VIDEO_HOME_TOPIC_SPORTS_PAGES_YOU_FOLLOW_VIDEOS:"video_home_topic_sports_pages_you_follow_videos",VIDEO_HOME_TOPIC_SPORTS_SHOWS:"video_home_topic_sports_shows",VIDEO_HOME_TOPIC_SPORTS_TOPIC_PILLS:"video_home_topic_sports_topic_pills",VIDEO_HOME_TOPIC_SPORTS_TEAMS_YOU_FOLLOW:"video_home_topic_sports_teams_you_follow",VIDEO_HOME_TOPIC_LIVE_RECOMMENDED_FEED:"video_home_topic_live_recommended_feed",VIDEO_HOME_WATCH_FEED_BRANDING_NUX:"video_home_watch_feed_branding_nux",GVC_VIDEO_CHANNEL:"gvc_video_channel",GAMES_VIDEO_CHANNEL:"games_video_channel",GAMES_VIDEO_LIVE_HERO:"games_video_live_hero",GAMES_VIDEO_LIVE_NOW:"games_video_live_now",GAMES_VIDEO_LIVE_NOW_WITH_GAME_REWARDS:"games_video_live_now_with_game_rewards",GAMES_VIDEO_GAME_TITLES:"games_video_game_titles",GAMES_VIDEO_POPULAR_STREAMERS:"games_video_popular_streamers",GAMES_VIDEO_PREVIOUS_LIVE:"games_video_previous_live",GAMES_VIDEO_WATCHED_BY_FRIENDS:"games_video_watched_by_friends",GAMES_VIDEO_SINGLE_GAME_HERO:"games_video_single_game_hero",GAMES_VIDEO_SINGLE_GAME_LIVE_NOW:"games_video_single_game_live_now",GAMES_VIDEO_SINGLE_GAME_TOP_STREAMER:"games_video_single_game_top_streamer",GAMES_VIDEO_SINGLE_GAME_VOD:"games_video_single_game_vod",GAMES_VIDEO_SINGLE_GAME_PREVIOUS_LIVE:"games_video_single_game_previous_live",GAMES_VIDEO_STREAMER_EVENTS:"games_video_streamer_events",GAMES_VIDEO_TOP_WEEKLY_CLIPS_ALL:"games_video_top_weekly_clips_all",GAMES_VIDEO_TOP_WEEKLY_CLIPS_STREAMER:"games_video_top_weekly_clips_streamer",GAMES_VIDEO_TOP_WEEKLY_CLIPS_GAME:"games_video_top_weekly_clips_game",VIDEO_HOME_WORLD_CUP:"video_home_world_cup",VIDEO_HOME_WORLD_CUP_WWW:"video_home_world_cup_www",VIDEO_HOME_NT_PAGES_YOU_WATCH:"video_home_nt_pages_you_watch",VIDEO_HOME_NT_WATCHLIST_TODAY:"video_home_nt_watchlist_today",VIDEO_HOME_NT_WATCHLIST_THIS_WEEK:"video_home_nt_watchlist_this_week",VIDEO_HOME_NT_WATCHLIST_EARLIER:"video_home_nt_watchlist_earlier",VIDEO_HOME_NT_WATCHLIST_UPDATES:"video_home_nt_watchlist_updates",VIDEO_HOME_WWW_CATALOG_ALL_SHOWS:"video_home_www_catalog_all_shows",VIDEO_HOME_WWW_CATALOG_CONTINUE_WATCHING:"video_home_www_catalog_continue_watching",VIDEO_HOME_WWW_CATALOG_FEATURED_CONTENT:"video_home_www_catalog_featured_content",VIDEO_HOME_WWW_CATALOG_FOLLOWED_SHOWS:"video_home_www_catalog_followed_shows",VIDEO_HOME_WWW_CATALOG_MORE_FACEBOOK_ORIGINALS:"video_home_www_catalog_more_facebook_originals",VIDEO_HOME_WWW_CATALOG_SHOWS_FRIENDS_FOLLOWING:"video_home_www_catalog_shows_friends_following",VIDEO_HOME_WWW_LATEST_VIDEOS:"video_home_www_latest_videos",VIDEO_HOME_WWW_LIVE_GAMING:"video_home_www_live_gaming",VIDEO_HOME_WWW_LIVE_HERO:"video_home_www_live_hero",VIDEO_HOME_WWW_LIVE_MUSIC:"video_home_www_live_music",VIDEO_HOME_WWW_LIVE_NEWS:"video_home_www_live_news",VIDEO_HOME_WWW_LIVE_PAGES_YOU_FOLLOW:"video_home_www_live_pages_you_follow",VIDEO_HOME_WWW_LIVE_SHOPPING:"video_home_www_live_shopping",VIDEO_HOME_WWW_LIVE_SPORTS:"video_home_www_live_sports",VIDEO_HOME_WWW_LIVE_TOP_LIVES:"video_home_www_live_top_lives",VIDEO_HOME_WWW_LIVE_UPCOMING_LIVES:"video_home_www_live_upcoming_lives",VIDEO_HOME_WWW_LIVE_WAS_LIVES:"video_home_www_live_was_lives",VIDEO_HOME_WWW_SAVED_VIDEOS:"video_home_www_saved_videos",VIDEO_HOME_WWW_WATCHLIST_NEW:"video_home_www_watchlist_new",VIDEO_HOME_WWW_SOTTO_CATALOG_CONTINUE_WATCHING:"video_home_www_sotto_catalog_continue_watching",VIDEO_HOME_WWW_SOTTO_CATALOG_FEATURED_CONTENT:"video_home_www_sotto_catalog_featured_content",VIDEO_HOME_WWW_SOTTO_CATALOG_FOLLOWING:"video_home_www_sotto_catalog_following",VIDEO_HOME_WWW_SOTTO_CATALOG_FRIENDS_FOLLOWING:"video_home_www_sotto_catalog_friends_following",VIDEO_HOME_WWW_SOTTO_CATALOG_LIVE_FEED:"video_home_www_sotto_catalog_live_feed",VIDEO_HOME_WWW_SOTTO_CATALOG_HEADER:"video_home_www_sotto_catalog_header",VIDEO_HOME_WWW_SOTTO_CATALOG_MOVIES:"video_home_www_sotto_catalog_movies",VIDEO_HOME_WWW_SOTTO_CATALOG_SERIES:"video_home_www_sotto_catalog_series",VIDEO_HOME_WWW_SOTTO_PLAYLIST_NON_SUBSCRIBER_UPSELL:"video_home_www_sotto_playlist_non_subscriber_upsell",VIDEO_HOME_WWW_SPORTS_HIGHLIGHTS:"video_home_www_sports_highlights",VIDEO_HOME_WWW_PLAYLIST_ABOUT:"video_home_www_playlist_about",VIDEO_HOME_WWW_PLAYLIST_CONTINUE_WATCHING:"video_home_www_playlist_continue_watching",VIDEO_HOME_WWW_PLAYLIST_MOVIE:"video_home_www_playlist_movie",VIDEO_HOME_WWW_PLAYLIST_VIDEO_LIST:"video_home_www_playlist_video_list",VIDEO_HOME_WWW_SHOWS_COMEDIES:"video_home_www_shows_comedies",VIDEO_HOME_WWW_SHOWS_DOCUMENTARIES:"video_home_www_shows_documentaries",VIDEO_HOME_WWW_SHOWS_DRAMA:"video_home_www_shows_drama",VIDEO_HOME_WWW_SHOWS_FEATURED:"video_home_www_shows_featured",VIDEO_HOME_WWW_SHOWS_NEWS:"video_home_www_shows_news",VIDEO_HOME_WWW_SHOWS_REALITY:"video_home_www_shows_reality",VIDEO_HOME_WWW_SHOWS_SPORTS:"video_home_www_shows_sports",VIDEO_HOME_WWW_SHOWS_TALK_SHOWS:"video_home_www_shows_talk_shows",VIDEO_HOME_WWW_SHOWS_PROMOTION:"video_home_www_shows_promotion",VIDEO_HOME_WWW_SUBTOPIC:"video_home_www_subtopic",VIDEO_HOME_WWW_TOPIC:"video_home_www_topic",VIDEO_HOME_WWW_WATCHLIST_SETTINGS:"video_home_www_watchlist_settings",SINGING_TALENT_SHOW:"singing_talent_show",HASH_TAG:"hashtag",VIDEO_HOME_TOPIC_VIDEOS:"video_home_topic_videos",VIDEO_HOME_SUBTOPIC_VIDEOS:"video_home_subtopic_videos",VIDEO_HOME_NT_FEED:"video_home_nt_feed",VIDEO_HOME_NT_PIVOT:"video_home_nt_pivot",VIDEO_HOME_NT_EXPLICIT_NOTIF_PIVOT:"video_home_nt_explicit_notif_pivot",VIDEO_HOME_NT_FOLLOW_AND_NOTIFICATION_PIVOT:"video_home_nt_follow_and_notification_pivot",VIDEO_HOME_NT_SPC_PIVOT:"video_home_nt_spc_pivot",VIDEO_HOME_NT_GAMING_VIDEOS_PIVOT:"video_home_nt_gaming_videos_pivot",VIDEO_HOME_NT_GYSJ_INLINE_PIVOT:"video_home_nt_gysj_inline_pivot",VIDEO_HOME_GYSJ_INLINE_PIVOT:"video_home_gysj_inline_pivot",VIDEO_HOME_NT_GYSJ_HSCROLL_PIVOT:"video_home_nt_gysj_hscroll_pivot",VIDEO_HOME_NT_PLAYLIST_VIDEOS_HSCROLL_PIVOT:"video_home_nt_playlist_videos_hscroll_pivot",VIDEO_HOME_NT_VIDEO_RECOMMENDATION_FEEDBACK_PIVOT:"video_home_nt_video_recommendation_feedback_pivot",VIDEO_HOME_NT_VIDEOLIST_VIDEOS_INLINE_PIVOT:"video_home_nt_videolist_videos_inline_pivot",VIDEO_HOME_NT_INLINE_COMMENT_BUBBLE_PIVOT:"video_home_nt_inline_comment_bubble_pivot",VIDEO_HOME_NT_TOPIC_PIVOT:"video_home_nt_topic_pivot",VIDEO_HOME_SHARE_PROMPT_PIVOT:"video_home_share_prompt_pivot",VIDEO_HOME_INJECTED_STORY_PIVOT:"video_home_injected_story_pivot",SAMPLE_COLLECTION:"sample_collection",VIDEO_HOME_VIDEOS_FROM_WATCHLIST:"video_home_videos_from_watchlist",VIDEO_HOME_VIDEOS_FROM_WATCHLIST_CHRONOLOGICAL:"video_home_videos_from_watchlist_chronological",VIDEOLIST_COLLECTION:"videolist_collection",VIDEO_HOME_SOTTO_CATALOG_WELCOME_MAT:"video_home_sotto_catalog_welcome_mat",VIDEO_HOME_SOTTO_CATALOG_CONTINUE_WATCHING:"video_home_sotto_catalog_continue_watching",VIDEO_HOME_SOTTO_CATALOG_COWATCHING:"video_home_sotto_catalog_cowatching",VIDEO_HOME_SOTTO_CATALOG_ENTRY_POINT:"video_home_sotto_catalog_entry_point",VIDEO_HOME_SOTTO_CATALOG_FBTV:"video_home_sotto_catalog_fbtv",VIDEO_HOME_SOTTO_CATALOG_SERIES:"video_home_sotto_catalog_series",VIDEO_HOME_SOTTO_CATALOG_LIVE_FEED:"video_home_sotto_catalog_live_feed",VIDEO_HOME_SOTTO_CATALOG_MOVIES:"video_home_sotto_catalog_movies",VIDEO_HOME_SOTTO_CATALOG_FOOTER:"video_home_sotto_catalog_footer",VIDEO_HOME_SOTTO_CATALOG_NAVBAR:"video_home_sotto_catalog_navbar",VIDEO_HOME_SOTTO_CATALOG_FOLLOWING:"video_home_sotto_catalog_following",VIDEO_HOME_SOTTO_CATALOG_SHOWS_FRIENDS_ARE_FOLLOWING:"video_home_sotto_catalog_shows_friends_are_following",VIDEO_HOME_VIDEO_LIST_AGGREGATION_FOOTER:"video_home_video_list_aggregation_footer",VIDEO_HOME_VIDEO_LIST_AGGREGATION_HEADER:"video_home_video_list_aggregation_header",VIDEO_HOME_VIDEO_LIST_AGGREGATION_MOVIE:"video_home_video_list_aggregation_movie",VIDEO_HOME_VIDEO_LIST_AGGREGATION_NAV_BAR:"video_home_video_list_aggregation_navbar",VIDEO_HOME_VIDEO_LIST_AGGREGATION_PLAYLIST:"video_home_video_list_aggregation_playlist",VIDEO_HOME_VIDEO_LIST_AGGREGATION_PLAYLIST_HEADER:"video_home_video_list_aggregation_playlist_header",VIDEO_HOME_VIDEO_LIST_AGGREGATION_SHOW:"video_home_video_list_aggregation_show",VIDEO_HOME_VIDEO_LIST_AGGREGATION_CONTINUE_WATCHING:"video_home_video_list_aggregation_continue_watching",GVC_OWNER_COLLECTION:"gvc_owner_collection",VIDEO_HOME_TRENDING_VIDEOS:"video_home_trending_videos",VIDEO_HOME_NT_UPDATES_SURFACE_FEED:"video_home_nt_updates_surface_feed",VIDEO_HOME_VIDEOS_FROM_WATCHLIST_BADGING:"video_home_videos_from_watchlist_badging",VIDEO_HOME_NT_GROUP_VIDEOS_AGGREGATION:"video_home_nt_group_videos_aggregation",VIDEO_HOME_CRICKET_WORLD_CUP_2019:"video_home_cricket_world_cup_2019",NEWSFEED:"newsfeed",VIDEO_HOME_INJECTED_VIDEO_CHANNEL:"video_home_injected_video_channel",PREMIUM_MUSIC_VIDEO:"premium_music_video",LIVE_LINEAR_VIDEO_CHANNELS:"live_linear_video_channels",VIDEO_HOME_NOTIF_HUB:"video_home_notif_hub",VIDEO_HOME_FESTIVALS_PROMOTION:"video_home_festivals_promotion",PREMIUM_MUSIC_MOOD_VIDEO:"premium_music_mood_video",CURATED_CATS:"curated_cats",PARTNER_CURATED:"partner_curated",PREMIUM_MUSIC_ARTIST_VIDEO:"premium_music_artist_video",LIVE_SIMILAR_VIDEO_CHANNEL:"live_similar",WATCH_FALLBACK_FEED:"watch_fallback_feed",WATCH_PERSONALIZED_PROMO:"watch_personalized_promo",PREMIUM_MUSIC_POPULAR_VIDEOS:"premium_music_popular_videos",PREMIUM_MUSIC_NEW_RELEASES:"premium_music_new_releases",PREMIUM_MUSIC_VIDEOS_BY_LANGUAGE:"premium_music_videos_by_language",PREMIUM_MUSIC_VIDEO_LANGUAGE_AGGREGATION:"premium_music_video_language_aggregation",PREMIUM_MUSIC_VIDEO_REWATCH:"premium_music_video_rewatch",PREMIUM_MUSIC_SOCIAL:"premium_music_video_social",VIDEO_HOME_NT_STATIONS_ENTRYPOINT:"video_home_nt_stations_entrypoint",VIDEO_RANKING:"video_ranking",VIDEO_HOME_MULTI_PAGE_CHANNEL:"video_home_multi_page_channel",VIDEO_HOME_CRICKET_MATCH:"video_home_cricket_match"})}),null);
__d("XVideoHomeLiveController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/watch/live/",{v:{type:"FBID"},ref:{type:"String"},external_log_id:{type:"String"}})}),null);