if (self.CavalryLogger) { CavalryLogger.start_js(["J\/sNI"]); }

__d("ImageUtils",["UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();a={hasLoaded:function(a){__p&&__p();if(a.naturalWidth!==void 0)return a.complete&&a.width!==0;else if(a.height==20&&a.width==20&&a.complete)return!1;else if(a.complete===void 0&&b("UserAgent_DEPRECATED").webkit()<500){var c=new Image();c.src=a.src;return c.complete}return a.complete}};e.exports=a}),null);
__d("PhotoLogger",["Banzai","BanzaiScuba","Event","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2={}}var c=a.prototype;c.log=function(a,c,d,e){b("Banzai").post("profile_photos_view",{photo_fbid:c,source:d,profile_id:e}),this.$2[a]||(this.$3(a),this.$2[a]=!0)};c.$3=function(a){this.$4("loading",{uri:a});var c=new(b("SubscriptionsHandler"))(),d=new Image();c.addSubscriptions(b("Event").listen(d,"load",function(){this.$4("loaded",{uri:a}),c.release()}.bind(this)),b("Event").listen(d,"error",function(){this.$4("error",{uri:a}),c.release()}.bind(this)),b("Event").listen(d,"abort",function(){this.$4("abort",{uri:a}),c.release()}.bind(this)));d.src=a};c.logEvent=function(a){this.$4(a)};c.$4=function(a,c){var d=new(b("BanzaiScuba"))("photos_client_loading",null,{addBrowserFields:!0});d.addNormal("event",a);d.addNormal("viewer",this.$1);for(var e in c)d.addNormal(e,c[e]);d.post()};return a}();e.exports=a}),null);
__d("PhotosConst",[],(function(a,b,c,d,e,f){a={VIEWER_PERMALINK:0,VIEWER_SNOWLIFT:6,VIEWER_VAULTBOX:8,VIEWER_SNOWFLAKE:14,VIEWER_COMPOSER:16,VIEWER_CAROUSEL:19,VIEWER_SPHERICAL:20,VIEWER_PERMALINK_STRING:"permalink",VIEWER_SNOWLIFT_STRING:"snowlift",VIEWER_VAULTBOX_STRING:"vaultbox",VIEWER_CAROUSEL_STRING:"carousel",BULK_EDITOR:3,BULK_EDITOR_REACT:15,EDITOR_MODAL:17,FLASH_UPLOADER:4,HTML5_UPLOADER:10,SIZE_NORMAL:"n",PIC_NORMAL_FBX_SIZE:180,ALBUM_NAME_MAXLEN:65};e.exports=a}),null);
__d("PhotosUtils",["Vector"],(function(a,b,c,d,e,f){__p&&__p();function a(){}Object.assign(a,{getNearestBox:function(a,b){var c=Infinity,d=null;for(var e in a){var f=a[e];if(f.contains(b)){f=b.distanceTo(f.getCenter());f<c&&(c=f,d=e)}}return d},absoluteToNormalizedPosition:function(a,c){var d=b("Vector").getElementPosition(a);a=b("Vector").getElementDimensions(a);c=c.sub(d).mul(100/a.x,100/a.y);c.domain="pure";return c},normalizedToAbsolutePosition:function(a,c){var d=b("Vector").getElementPosition(a);a=b("Vector").getElementDimensions(a);c=c.mul(a.x/100,a.y/100).add(d);c.domain="document";return c},isFacebox:function(a){return a.match(/^face:/)},isTag:function(a){return a.match(/^tag:/)}});e.exports=a}),null);
__d("SphericalMediaActionNamespaces",[],(function(a,b,c,d,e,f){"use strict";e.exports={BASE:"BASE",CORE:"CORE",PHOTO:"PHOTO",PHOTO_EDIT:"PHOTO_EDIT",VIEW:"VIEW"}}),null);
__d("SphericalMediaActions",[],(function(a,b,c,d,e,f){"use strict";e.exports={TURN_ON:"TURN_ON",TURN_OFF:"TURN_OFF",ENABLE_SPHERICAL:"ENABLE_SPHERICAL",DISABLE_SPHERICAL:"DISABLE_SPHERICAL",REQUEST_PHOTO_FAILED:"REQUEST_PHOTO_FAILED",REQUEST_PHOTO:"REQUEST_PHOTO",RECEIVE_PHOTO:"RECEIVE_PHOTO",UPDATE_BASE:"UPDATE_BASE",DRAG_START:"DRAG_START",GYRO_START:"GYRO_START",ZOOM_START:"ZOOM_START",SIGNIFICANT_MOVE:"SIGNIFICANT_MOVE",MOUSE_ANIMATION_START:"MOUSE_ANIMATION_START",MOUSE_ENTER:"MOUSE_ENTER",TAP_HEADING_INDICATOR:"TAP_HEADING_INDICATOR",VIEWPORT_CLICKED:"VIEWPORT_CLICKED",VISIBILITY_CHANGED:"VISIBILITY_CHANGED",UPDATE_DIMENSION:"UPDATE_DIMENSION",UPDATE_INITIAL_FOV:"UPDATE_INITIAL_FOV",UPDATE_INITIAL_VIEWPORT:"UPDATE_INITIAL_VIEWPORT",SETUP_RENDERER:"SETUP_RENDERER",WEBGL_CONTEXT_LOST:"WEBGL_CONTEXT_LOST",WEBGL_INIT_FAILED:"WEBGL_INIT_FAILED",WEBGL_RENDER_FAILED:"WEBGL_RENDER_FAILED",SOURCE_ONLOAD:"SOURCE_ONLOAD",REPLACE_BASE_STATE:"REPLACE_BASE_STATE",UPDATE_CTR_ELEM:"UPDATE_CTR_ELEM",SHOW_FALLBACK:"SHOW_FALLBACK",FALLBACK_MOUSE_OVER:"FALLBACK_MOUSE_OVER",FALLBACK_MOUSE_OUT:"FALLBACK_MOUSE_OUT",FALLBACK_INDICATOR_MOUSE_OVER:"FALLBACK_INDICATOR_MOUSE_OVER",FALLBACK_INDICATOR_MOUSE_OUT:"FALLBACK_INDICATOR_MOUSE_OUT",UPDATE_PARTIAL_LIMITS:"UPDATE_PARTIAL_LIMITS",USE_FALLBACK:"USE_FALLBACK",UPDATE_VIEW:"UPDATE_VIEW",UPDATE_VIEWPORT:"UPDATE_VIEWPORT",UPDATE_FOV:"UPDATE_FOV",UPDATE_YAW:"UPDATE_YAW",UPDATE_VIEWPORT_AND_FOV:"UPDATE_VIEWPORT_AND_FOV",START_ANIMATING:"START_ANIMATING",STOP_ANIMATING:"STOP_ANIMATING",UPDATE_FEED_ROOT_ELEMENT:"UPDATE_FEED_ROOT_ELEMENT",UPDATE_PHOTO_EDIT:"UPDATE_PHOTO_EDIT",CANCEL_EDITING:"CANCEL_EDITING",START_EDITING:"START_EDITING",STOP_EDITING:"STOP_EDITING",UPDATE_PHOTO:"UPDATE_PHOTO",UPDATE_PHOTO_FAILED:"UPDATE_PHOTO_FAILED",UPDATE_PHOTO_DONE:"UPDATE_PHOTO_DONE",UPDATE_RENDERER_PROJECTION_TYPE:108,UPDATE_RENDERER_PROJECTION_TYPE_FAILED:109,UPDATE_RENDERER_PROJECTION_TYPE_DONE:110,RESET_MOUSE_ANIMATION:"RESET_MOUSE_ANIMATION",START_MOUSE_ANIMATION:"START_MOUSE_ANIMATION",STOP_MOUSE_ANIMATION:"STOP_MOUSE_ANIMATION",DISABLE_SPHERICAL_ON_SAVE:"DISABLE_SPHERICAL_ON_SAVE",ENABLE_SPHERICAL_ON_SAVE:"ENABLE_SPHERICAL_ON_SAVE",ENABLE_EDITING:"ENABLE_EDITING",DISABLE_EDITING:"DISABLE_EDITING",TAKE_STATE_SNAPSHOT:"TAKE_STATE_SNAPSHOT",RESTORE_EDIT_STATE_FROM_SNAPSHOT:"RESTORE_EDIT_STATE_FROM_SNAPSHOT",RESTORE_TAGS_STATE_FROM_SNAPSHOT:"RESTORE_TAGS_STATE_FROM_SNAPSHOT",REMOVE_STATE_SNAPSHOT:"REMOVE_STATE_SNAPSHOT",PHOTO_REMOVED:"PHOTO_REMOVED",UPDATE_FILE_URL:"UPDATE_FILE_URL",SET_VR_IS_PRESENTING:"SET_VR_IS_PRESENTING",SET_VR_DEVICE:"SET_VR_DEVICE",SET_VR_RENDERING_SUPPORTED:"SET_VR_RENDERING_SUPPORTED",SET_VR_RENDERER_IS_READY:"SET_VR_RENDERER_IS_READY",CANVAS_RESIZE_START:"CANVAS_RESIZE_START",CANVAS_RESIZE_IMG_LOADED:"CANVAS_RESIZE_IMG_LOADED",CANVAS_RESIZE_SUCCESS:"CANVAS_RESIZE_SUCCESS",CANVAS_RESIZE_FAILED:"CANVAS_RESIZE_FAILED",OPEN_TAG_DIALOG:"OPEN_TAG_DIALOG",CLOSE_TAG_DIALOG:"CLOSE_TAG_DIALOG",SAVE_DIALOG_TAGS:"SAVE_DIALOG_TAGS",CANCEL_DIALOG_TAG_CHANGES:"CANCEL_DIALOG_TAG_CHANGES",PHOTO_RENDERER_STATS:"PHOTO_RENDERER_STATS",ENABLE_TAGGING:"ENABLE_TAGGING",DISABLE_TAGGING:"DISABLE_TAGGING",UPDATE_SPATIAL_TAGS:"UPDATE_SPATIAL_TAGS",UPDATE_SPATIAL_TAGS_FROM_COMPOSER:"UPDATE_SPATIAL_TAGS_FROM_COMPOSER",UPDATE_TAG_UNDER_MOUSE:"UPDATE_TAG_UNDER_MOUSE",TAGGING_START:"TAGGING_START",TAGGING_STOP:"TAGGING_STOP",UPDATE_TAG_CLICKED:"UPDATE_TAG_CLICKED",UPDATE_TAGGER:"UPDATE_TAGGER",ENTER_TAGGING_MODE:"ENTER_TAGGING_MODE",EXIT_TAGGING_MODE:"EXIT_TAGGING_MODE",UPDATE_TARGETED_TAG:"UPDATE_TARGETED_TAG",REDIRECT_FROM_CLICKED_TAG:"REDIRECT_FROM_CLICKED_TAG",DELETED_SPATIAL_TAG:"DELETED_SPATIAL_TAG",ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER:"ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER"}}),null);
__d("SphericalMediaBaseActions",["SphericalMediaActionNamespaces","SphericalMediaActions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={updateBase:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_BASE,data:a}},dragStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").DRAG_START}},gyroStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").GYRO_START}},mouseAnimationStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").MOUSE_ANIMATION_START}},mouseEnter:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").MOUSE_ENTER}},tapHeadingIndicator:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").TAP_HEADING_INDICATOR}},significantMove:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").SIGNIFICANT_MOVE,data:{view:a}}},viewportClicked:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").VIEWPORT_CLICKED}},visibilityChanged:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").VISIBILITY_CHANGED,data:a}},zoomStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").ZOOM_START}},updateDimension:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_DIMENSION,data:{width:a,height:c}}},updateInitialViewport:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_INITIAL_VIEWPORT,data:{initialYaw:a,initialPitch:c}}},updateInitialFOV:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_INITIAL_FOV,data:{initialFov:a}}},setupRenderer:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").SETUP_RENDERER,data:{renderer:a,dt:c}}},webGlInitFailed:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").WEBGL_INIT_FAILED,data:{error:a}}},webGlRenderFailed:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").WEBGL_RENDER_FAILED,data:{error:a,view:c}}},webGlContextLost:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").WEBGL_CONTEXT_LOST}},sourceOnLoad:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").SOURCE_ONLOAD}},replaceBaseState:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").REPLACE_BASE_STATE,data:a}},updateSpatialTags:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_SPATIAL_TAGS,data:a}},updateSpatialTagsFromComposer:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_SPATIAL_TAGS_FROM_COMPOSER,data:a}},updateTagUnderMouse:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_TAG_UNDER_MOUSE,data:a}},updateFileURL:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_FILE_URL,data:a}},canvasResizeStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").CANVAS_RESIZE_START}},canvasResizeImgLoaded:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").CANVAS_RESIZE_IMG_LOADED,data:{width:a,height:c}}},canvasResizeSuccess:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").CANVAS_RESIZE_SUCCESS,data:a}},canvasResizeFailed:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").CANVAS_RESIZE_FAILED,data:a}},enableTagging:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").ENABLE_TAGGING}},disableTagging:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").DISABLE_TAGGING}},taggingStart:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").TAGGING_START}},taggingStop:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").TAGGING_STOP}},updateTagClicked:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_TAG_CLICKED,data:a}},updateTagger:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_TAGGER,data:a}},enterTaggingMode:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").ENTER_TAGGING_MODE}},exitTaggingMode:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").EXIT_TAGGING_MODE}},updateTargetedTag:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_TARGETED_TAG,data:a}},redirectFromClickedTag:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").REDIRECT_FROM_CLICKED_TAG}},deletedSpatialTag:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").DELETED_SPATIAL_TAG}},addSpatialTagFromPhotoTagger:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER}},updateCtrElem:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_CTR_ELEM,data:{element:a}}},showFallbackUI:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").SHOW_FALLBACK}},requestPhoto:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").REQUEST_PHOTO}},requestPhotoFailed:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").REQUEST_PHOTO_FAILED,data:{id:a,error:c}}},receivePhoto:function(a,c){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").RECEIVE_PHOTO,data:c}},updatePartialLimits:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_PARTIAL_LIMITS,data:a}},useFallbackUI:function(){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").USE_FALLBACK}},updateFeedRootElement:function(a){return{namespace:b("SphericalMediaActionNamespaces").BASE,type:b("SphericalMediaActions").UPDATE_FEED_ROOT_ELEMENT,data:a}}}}),null);
__d("SphericalPhotoPlaceHolderWithGyroOverlay.react",["cx","BackgroundImage.react","Image.react","React","SphericalMediaGyroOverlay.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsxs("div",{className:"_5nxw _1c1o",children:[this.props.showNewRenderer?b("React").jsx(b("BackgroundImage.react"),{backgroundSize:"contain",height:this.props.height,src:this.props.placeholderImageURL,width:this.props.width}):b("React").jsx(b("Image.react"),{className:"_1c1p",height:this.props.height,src:this.props.placeholderImageURL,width:this.props.width}),b("React").jsx(b("SphericalMediaGyroOverlay.react"),{className:"_1c1q",isActive:!0})]})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("SphericalPhotoViewerLoggerUtil",["Bootloader","CSS","FullScreen","ProfileTabUtils","SphericalPhotoViewerTypedLogger","URI","SphericalMediaConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="timelineLayout",i=b("SphericalMediaConstants").LOGGER_SURFACES,j=function(a){__p&&__p();if(b("FullScreen").isFullScreen())return i.fullpage;var c=(g||(g=b("URI"))).getMostRecentURI();if(Object.prototype.hasOwnProperty.call(c.getQueryData(),"theater"))return i.snowlift;if(c.getPath()==="/"||c.getPath()==="/home.php")return i.newsfeed;var d=a.getTabKeyFromURI(c);a=a.getVanityFromURI(c);return a&&b("ProfileTabUtils").isTimelineTab(d)&&document.body&&b("CSS").hasClass(document.body,h)?i.timeline:i.other},k={logTapHeadingIndicator:function(a){a===void 0&&(a={}),k._log("spherical_photo_tap_heading_indicator",a)},logDragStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_drag_start",a)},logMouseOverStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_mouseover_start",a)},logWWWGyroStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_gyro_start",a)},logZoomStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_zoom_start",a)},logDragMouseAnimation:function(a){a===void 0&&(a={}),k._log("spherical_photo_drag_mouse_animation",a)},logEnterSnowlift:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_enter_snowlift",a)},logExitSnowlift:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_exit_snowlift",a)},logEnterFullScreen:function(a){a===void 0&&(a={}),k._log("spherical_photo_tap_feed_to_fullscreen",a)},logExitFullScreen:function(a){a===void 0&&(a={}),k._log("spherical_photo_fullscreen_exited",a)},logSignificantMovement:function(a){a===void 0&&(a={}),k._log("spherical_photo_significant_movement",a)},logIVSOpen:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_open",a)},logIVSCancel:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_cancel",a)},logIVSEnableSphericalOnSave:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_enable_on_save",a)},logIVSDisableSphericalOnSave:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_disable_on_save",a)},logToggleOn:function(a){a===void 0&&(a={}),k._log("spherical_photo_toggle_on",a)},logToggleOff:function(a){a===void 0&&(a={}),k._log("spherical_photo_toggle_off",a)},logIVSRequestStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_request_start",a)},logIVSRequestFailed:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_request_failed",a)},logIVSRequestDone:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_request_done",a)},logIVSUpdateStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_update_start",a)},logIVSUpdateFailed:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_update_failed",a)},logIVSUpdateDone:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_update_done",a)},logWebGlInitFailed:function(a,b){a===void 0&&(a={}),b===void 0&&(b={}),k._log("spherical_photo_webgl_init_failure",a,b)},logWebGlRenderFailed:function(a,b){a===void 0&&(a={}),b===void 0&&(b={}),k._log("spherical_photo_webgl_render_failure",a,b)},logWebGlContextLost:function(a){a===void 0&&(a={}),k._log("spherical_photo_webgl_context_lost",a)},logNumberOfSphericalPhoto:function(a){a===void 0&&(a={}),k._log("spherical_photo_post_event",a)},logRendererSetup:function(a,b){a===void 0&&(a={}),a.renderMethod=b?"tiled":"cubestrip",k._log("spherical_photo_renderer_setup",a)},logRendererStats:function(a,b){a===void 0&&(a={}),b===void 0&&(b={}),k._log("spherical_photo_renderer_stats",a,b)},_log:function(a,c,d){d===void 0&&(d={});if(!c.surface){b("Bootloader").loadModules(["TimelineURI"],function(b){c.surface=j(b),k._logWithSurface(a,c,d)},"SphericalPhotoViewerLoggerUtil");return}k._logWithSurface(a,c,d)},_logWithSurface:function(a,c,d){d===void 0&&(d={}),new(b("SphericalPhotoViewerTypedLogger"))().setComposerSessionID(c.composerSessionID).setDt(c.dt).setErrorMessage(c.errorMessage).setName(a).setNumberOfSphericalPhoto(c.numberOfSphericalPhoto).setPhotoID(c.photoID).setPitch(c.pitch).setRenderMethod(c.renderMethod||"").setSphericalPhotoSessionID(c.sessionID).setSurface(c.surface).setVfov(c.vfov).setViewportHeight(c.viewportHeight).setViewportWidth(c.viewportWidth).setYaw(c.yaw).updateData(d).log()}};e.exports=k}),null);
__d("PhotoSnowliftViewableSphericalPhoto",["cx","Arbiter","Bootloader","CSS","DOM","DOMQuery","EventProfiler","PhotoSnowliftViewable","React","ReactDOM","SphericalMediaActions","SphericalMediaBaseActions","SphericalMediaBootloaded.react","SphericalMediaConstants","SphericalPhotoPlaceHolderWithGyroOverlay.react","SphericalPhotoTypedConfig","SphericalPhotoViewerLoggerUtil","SubscriptionsHandler","Vector","getViewportDimensions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=(a=b("SphericalMediaBaseActions")).deletedSpatialTag,i=a.enterTaggingMode,j=a.exitTaggingMode,k=a.taggingStop,l=a.updateDimension,m=a.updateFeedRootElement,n=a.updateSpatialTags,o=a.updateTagger,p=a.updateTargetedTag,q=b("SphericalMediaConstants").COMP_PHOTO_VIEWER,r=b("SphericalMediaConstants").LOGGER_SURFACES,s=b("SphericalMediaConstants").UNTAGGED_FACEBOX,t=(c=b("SphericalPhotoViewerLoggerUtil")).logEnterFullScreen,u=c.logEnterSnowlift,v=c.logExitFullScreen,w=c.logExitSnowlift,x=2e3*16,y=360;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,g,q,r,t,v,w,y,z,A,B,C){__p&&__p();var D;t===void 0&&(t=!1);D=a.call(this,x)||this;D.$PhotoSnowliftViewableSphericalPhoto32=function(a){var b=a.dispatch;a.getState;b(m(D.$PhotoSnowliftViewableSphericalPhoto5));return function(a){return function(b){return a(b)}}};D.$PhotoSnowliftViewableSphericalPhoto33=function(a){__p&&__p();var c=a.dispatch,d=a.getState;D.$PhotoSnowliftViewableSphericalPhoto15.getTagger()?c(o(D.$PhotoSnowliftViewableSphericalPhoto15.getTagger())):D.$PhotoSnowliftViewableSphericalPhoto19.addSubscriptions(b("Arbiter").subscribe(D.$PhotoSnowliftViewableSphericalPhoto15.getEventString("TAGGER_READY"),function(a,b){c(o(D.$PhotoSnowliftViewableSphericalPhoto15.getTagger()))}));D.$PhotoSnowliftViewableSphericalPhoto19.addSubscriptions(b("Arbiter").subscribe("PhotoTagger.START_TAGGING",function(a,b){D.$PhotoSnowliftViewableSphericalPhoto22=!0,c(i())}),b("Arbiter").subscribe("PhotoTagger.STOP_TAGGING",function(a,b){c(j()),D.$PhotoSnowliftViewableSphericalPhoto22=!1}),b("Arbiter").subscribe("PhotoTags.SHOWTAG",function(a,e){b("Bootloader").loadModules(["SphericalMediaTaggingUtils"],function(a){a=a.getSpatialTagFromFBID;a=a(e,d().base.tags);c(p(a))},"PhotoSnowliftViewableSphericalPhoto")}),b("Arbiter").subscribe("PhotoTags.HIDETAG",function(a,b){c(p(null))}),b("Arbiter").subscribe(D.$PhotoSnowliftViewableSphericalPhoto15.getEventString("EXTRA_DATA_CHANGE"),function(a,b){__p&&__p();a=b?b.spatialTags:null;if(a&&Array.isArray(a)){c(n(a));c(k());var d=0;a.forEach(function(a){a.type!==s&&d++});if(D.$PhotoSnowliftViewableSphericalPhoto13&&D.$PhotoSnowliftViewableSphericalPhoto13>d){b=D.$PhotoSnowliftViewableSphericalPhoto13-d;for(var a=0;a<b;a++)c(h())}D.$PhotoSnowliftViewableSphericalPhoto13=d}}));return function(a){return function(b){return a(b)}}};D.$PhotoSnowliftViewableSphericalPhoto31=function(a){__p&&__p();a.getState;return function(a){return function(c){if(c.type===b("SphericalMediaActions").SHOW_FALLBACK){D.$PhotoSnowliftViewableSphericalPhoto11=!0;b("CSS").hide(D.$PhotoSnowliftViewableSphericalPhoto4);var d=b("DOMQuery").scry(D.$PhotoSnowliftViewableSphericalPhoto15.stageWrapper,".fbPhotosPhotoActionsTag.tagButton");d.length>0&&b("CSS").hide(d[0])}return a(c)}}};D.$PhotoSnowliftViewableSphericalPhoto28=function(){return function(a){return function(c){c.type===b("SphericalMediaActions").SETUP_RENDERER&&(D.$PhotoSnowliftViewableSphericalPhoto11=!0,b("CSS").hide(D.$PhotoSnowliftViewableSphericalPhoto4),D.$PhotoSnowliftViewableSphericalPhoto15.adjustStageSize());return a(c)}}};D.$PhotoSnowliftViewableSphericalPhoto29=function(a){var c=a.dispatch;return function(a){return function(d){if(d.type===b("SphericalMediaActions").SETUP_RENDERER){var e=D.$PhotoSnowliftViewableSphericalPhoto15.getTagger();e&&e.taggingMode!=D.$PhotoSnowliftViewableSphericalPhoto22&&(D.$PhotoSnowliftViewableSphericalPhoto22=e.taggingMode,c(e.taggingMode?i():j()))}return a(d)}}};D.$PhotoSnowliftViewableSphericalPhoto30=function(a){__p&&__p();a.getState;var c=a.dispatch;return function(a){return function(d){if(d.type===b("SphericalMediaActions").TURN_ON||d.type===b("SphericalMediaActions").SHOW_FALLBACK){var e=function(){var a=D.$PhotoSnowliftViewableSphericalPhoto27();c(l(a.x,a.y))};D.$PhotoSnowliftViewableSphericalPhoto18.addSubscriptions(D.addListener("onEnterFullScreen",e),D.addListener("onExitFullScreen",e),D.addListener("onSetDimensions",e));e()}return a(d)}}};b("EventProfiler").tagCurrentActiveInteractionsAs("PSVSphericalPhoto");D.$PhotoSnowliftViewableSphericalPhoto1=C;D.$PhotoSnowliftViewableSphericalPhoto2=e;D.$PhotoSnowliftViewableSphericalPhoto3=v;D.$PhotoSnowliftViewableSphericalPhoto6=B;D.$PhotoSnowliftViewableSphericalPhoto7=y;D.$PhotoSnowliftViewableSphericalPhoto8=!1;D.$PhotoSnowliftViewableSphericalPhoto9=t;D.$PhotoSnowliftViewableSphericalPhoto10=!1;D.$PhotoSnowliftViewableSphericalPhoto11=!1;D.$PhotoSnowliftViewableSphericalPhoto14=w;D.$PhotoSnowliftViewableSphericalPhoto15=z;D.$PhotoSnowliftViewableSphericalPhoto16=A;D.$PhotoSnowliftViewableSphericalPhoto17=d;D.$PhotoSnowliftViewableSphericalPhoto18=new(b("SubscriptionsHandler"))();D.$PhotoSnowliftViewableSphericalPhoto20=f;D.$PhotoSnowliftViewableSphericalPhoto21=c;D.$PhotoSnowliftViewableSphericalPhoto5=b("DOM").create("div",{className:"_zq_ _5nxw"});D.$PhotoSnowliftViewableSphericalPhoto4=b("DOM").create("div",{className:"_zr0 _5nxw"});D.getElement().appendChild(D.$PhotoSnowliftViewableSphericalPhoto5);D.getElement().appendChild(D.$PhotoSnowliftViewableSphericalPhoto4);b("CSS").addClass(D.getElement(),"_zr1");D.$PhotoSnowliftViewableSphericalPhoto12={fov:g,pitch:q,yaw:r};D.$PhotoSnowliftViewableSphericalPhoto19=new(b("SubscriptionsHandler"))();b("CSS").addClass(D.$PhotoSnowliftViewableSphericalPhoto15.stage,"_1ziy");D.$PhotoSnowliftViewableSphericalPhoto23();u(D.$PhotoSnowliftViewableSphericalPhoto24());return D}var d=c.prototype;d.$PhotoSnowliftViewableSphericalPhoto24=function(){return{photoID:this.$PhotoSnowliftViewableSphericalPhoto7,surface:r.snowlift}};d.$PhotoSnowliftViewableSphericalPhoto25=function(a){this.$PhotoSnowliftViewableSphericalPhoto20.useTiledRenderer&&b("SphericalPhotoTypedConfig").show_new_renderer?b("ReactDOM").render(b("React").jsx(b("SphericalPhotoPlaceHolderWithGyroOverlay.react"),{placeholderImageURL:this.$PhotoSnowliftViewableSphericalPhoto26(),showNewRenderer:!0,width:a.x,height:a.y}),this.$PhotoSnowliftViewableSphericalPhoto4):b("ReactDOM").render(b("React").jsx(b("SphericalPhotoPlaceHolderWithGyroOverlay.react"),{placeholderImageURL:this.$PhotoSnowliftViewableSphericalPhoto26()}),this.$PhotoSnowliftViewableSphericalPhoto4)};d.$PhotoSnowliftViewableSphericalPhoto23=function(){var a=this.$PhotoSnowliftViewableSphericalPhoto27(),c=[this.$PhotoSnowliftViewableSphericalPhoto28,this.$PhotoSnowliftViewableSphericalPhoto29,this.$PhotoSnowliftViewableSphericalPhoto30,this.$PhotoSnowliftViewableSphericalPhoto31,this.$PhotoSnowliftViewableSphericalPhoto32];b("SphericalPhotoTypedConfig").www_can_viewer_tag&&c.push(this.$PhotoSnowliftViewableSphericalPhoto33);this.$PhotoSnowliftViewableSphericalPhoto25(a);b("ReactDOM").render(b("React").jsx(b("SphericalMediaBootloaded.react"),{ambientAudio:this.$PhotoSnowliftViewableSphericalPhoto1,componentName:q,canvasNamespace:"Snowlift",cubeImageURI:this.$PhotoSnowliftViewableSphericalPhoto2,fallback:this.$PhotoSnowliftViewableSphericalPhoto6,enableGyro:!0,enableZoom:!0,enableTagging:!0,enableRubberBanding:!0,height:a.y,initialView:this.$PhotoSnowliftViewableSphericalPhoto12,photoID:this.$PhotoSnowliftViewableSphericalPhoto7,partialLimits:this.$PhotoSnowliftViewableSphericalPhoto14,photoSphereMetadata:this.$PhotoSnowliftViewableSphericalPhoto16,surface:r.snowlift,tiledSphericalConfig:this.$PhotoSnowliftViewableSphericalPhoto20,middlewares:c,useLargeVolumeIcon:!0,width:a.x}),this.$PhotoSnowliftViewableSphericalPhoto5);this.$PhotoSnowliftViewableSphericalPhoto10=!0;this.emit("ready")};d.$PhotoSnowliftViewableSphericalPhoto34=function(){this.$PhotoSnowliftViewableSphericalPhoto19.release(),this.$PhotoSnowliftViewableSphericalPhoto18.release(),b("ReactDOM").unmountComponentAtNode(this.$PhotoSnowliftViewableSphericalPhoto4),b("ReactDOM").unmountComponentAtNode(this.$PhotoSnowliftViewableSphericalPhoto5)};d.suspend=function(){this.$PhotoSnowliftViewableSphericalPhoto34()};d.resume=function(){this.$PhotoSnowliftViewableSphericalPhoto23()};d.reload=function(){this.$PhotoSnowliftViewableSphericalPhoto23()};d.hide=function(){b("CSS").shown(this.getElement())&&w(this.$PhotoSnowliftViewableSphericalPhoto24()),a.prototype.hide.call(this),this.$PhotoSnowliftViewableSphericalPhoto34()};d.getDimensions=function(){var a=b("getViewportDimensions")(),c=a.width;a=a.height;b("SphericalPhotoTypedConfig").should_snowlift_fit_to_screen?(this.$PhotoSnowliftViewableSphericalPhoto8||(c-=y),this.isRenderReady()||(c=a=Math.min(c,a))):c=a=Math.min(c,a);return b("Vector").from(c,a)};d.$PhotoSnowliftViewableSphericalPhoto27=function(){var a=b("Vector").getElementDimensions(this.getElement());return a.x===0||a.y===0?this.$PhotoSnowliftViewableSphericalPhoto3||a:a};d.$PhotoSnowliftViewableSphericalPhoto35=function(a){var c=this.getElement().parentElement;a=new(b("Vector"))(a.x,a.y);if(c&&c instanceof HTMLElement){c=b("Vector").getElementDimensions(c);var d=b("Vector").getElementDimensions(this.getElement());(c.x!==d.x||a.x<c.x||a.y<c.y)&&(a.x=c.x,a.y=c.y)}return a};d.isReady=function(){return this.$PhotoSnowliftViewableSphericalPhoto10};d.isRenderReady=function(){return this.$PhotoSnowliftViewableSphericalPhoto11};d.setDimensions=function(c){a.prototype.setDimensions.call(this,this.$PhotoSnowliftViewableSphericalPhoto35(c));if(this.$PhotoSnowliftViewableSphericalPhoto20.useTiledRenderer&&b("SphericalPhotoTypedConfig").show_new_renderer){c=this.$PhotoSnowliftViewableSphericalPhoto27();!this.$PhotoSnowliftViewableSphericalPhoto11&&(!this.$PhotoSnowliftViewableSphericalPhoto3||this.$PhotoSnowliftViewableSphericalPhoto3.x!==c.x||this.$PhotoSnowliftViewableSphericalPhoto3.y!==c.y)&&this.$PhotoSnowliftViewableSphericalPhoto25(c);this.$PhotoSnowliftViewableSphericalPhoto3=c}this.emit("onSetDimensions")};d.onToggleIntoFullScreen=function(){};d.onEnterFullScreen=function(){if(this.$PhotoSnowliftViewableSphericalPhoto8)return;this.$PhotoSnowliftViewableSphericalPhoto8=!0;this.emit("onEnterFullScreen");t(this.$PhotoSnowliftViewableSphericalPhoto24());b("CSS").addClass(this.getElement(),"_tz-")};d.onExitFullScreen=function(){if(!this.$PhotoSnowliftViewableSphericalPhoto8)return;this.$PhotoSnowliftViewableSphericalPhoto8=!1;this.emit("onExitFullScreen");v(this.$PhotoSnowliftViewableSphericalPhoto24());b("CSS").removeClass(this.getElement(),"_tz-")};d.$PhotoSnowliftViewableSphericalPhoto26=function(){return this.$PhotoSnowliftViewableSphericalPhoto9?this.$PhotoSnowliftViewableSphericalPhoto21:this.$PhotoSnowliftViewableSphericalPhoto17||this.$PhotoSnowliftViewableSphericalPhoto21};return c}(b("PhotoSnowliftViewable"));e.exports=d}),null);
__d("UFI2DOMAttachmentEventEmitter",["EventEmitter"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("EventEmitter"))}),null);
__d("SnowliftVideoPivotsCarouselController",[],(function(a,b,c,d,e,f){a={setPivotsCarousel:function(a,b){this._pivotsCarousel=a,this.adjustCarousel(b)},adjustCarousel:function(a){this._pivotsCarousel&&this._pivotsCarousel.pageTo(a)},adjustCarouselOnAutoPlay:function(){this._pivotsCarousel&&this._pivotsCarousel.page()}};e.exports=a}),null);
__d("DisableContextMenuMixin",["Event","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("emptyFunction");c={getContextMenuContainer:a,_contextMenuEventHandler:null,disableContextMenu:function(){if(this._contextMenuEventHandler)return;this._contextMenuEventHandler=b("Event").listen(this.getContextMenuContainer(),"contextmenu",function(a){a.preventDefault(),a.stopPropagation()})},enableContextMenu:function(){this._contextMenuEventHandler&&(this._contextMenuEventHandler.remove(),this._contextMenuEventHandler=null)}};e.exports=c}),null);
__d("ReactComponentRenderer",["React","ReactDOM","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b){this.klass=a,this.container=b,this.props={},this.component=null}var c=a.prototype;c.replaceProps=function(a,b){this.props={},this.setProps(a,b)};c.setProps=function(a,c){if(this.klass==null)return;Object.assign(this.props,a);a=b("React").createElement(this.klass,this.props);var d=this;b("ReactDOM").render(a,this.container,function(){d.component=this,c&&c.call(this)})};c.unmount=function(){b("ReactDOM").unmountComponentAtNode(this.container),this.klass=null};return a}();e.exports=a}),null);
__d("XPhotosetSearchPivotController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/search-pivot/photoset/",{fbid:{type:"Int",required:!0},tags:{type:"IntToIntMap"}})}),null);