if (self.CavalryLogger) { CavalryLogger.start_js(["u9Tfb"]); }

__d("CometRelayEnvironmentProvider",["CometRelay","CometRelayEnvironment","React"],(function(a,b,c,d,e,f){"use strict";var g=b("CometRelay").RelayEnvironmentProvider;function a(a){return b("React").jsx(g,{environment:a.environment||b("CometRelayEnvironment"),children:a.children})}e.exports=a}),null);
__d("UFICommentLink.react",["cx","fbt","React","TrackingNodes","emptyFunction","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=h._("Vi\u1ebft b\u00ecnh lu\u1eadn"),c='{ "tn": "'+b("TrackingNodes").encodeTN(b("TrackingNodes").types.COMMENT_LINK)+'", "type": 24 }';return b("React").jsx("a",{className:"comment_link _5yxe","data-testid":void 0,role:"button",href:this.props.href?this.props.href:"#",title:a,ajaxify:this.props.ajaxify,rel:this.props.rel,onClick:this.props.onClick,"data-ft":c,ref:"root",children:this.props.children})};return c}(b("React").Component);a.propTypes={onClick:(c=b("prop-types")).func,href:c.string,ajaxify:c.string,rel:c.string};a.defaultProps={onClick:b("emptyFunction")};e.exports=a}),null);
__d("UFICommentLiveVideoAnnouncementImage.react",["ix","cx","CurrentUser","Image.react","React","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.$1();if(!a)return b("React").jsx("span",{});var c=b("CurrentUser").isWorkUser();return this.props.isJoinEvent?b("React").jsx("div",{className:"_15lj",children:b("React").jsx(b("Image.react"),{className:"_24l1",src:a})}):b("React").jsx("div",{className:"_15lj"+(c?"":" _z79")+(c?" _66n8":""),children:b("React").jsx(b("Image.react"),{className:"_15lk",height:20,src:a,width:20})})};d.$1=function(){__p&&__p();if(!this.props.isJoinEvent)if(b("CurrentUser").isWorkUser())return g("127093");else return g("114228");if(this.props.image)return this.props.image;switch(this.props.glyphName){case"comment":return g("114673");case"eye":return g("114860");case"bulb":return g("114492");case"like":return g("115160");default:return null}};return c}(b("React").PureComponent);e.exports=a}),null);
__d("CowatchingUFIConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({LIVE_FEED_MAX_SHOWN_COMMENTS:4,LIVE_FULLSCREEN_MAX_SHOWN_COMMENTS:50});e.exports=a}),null);
__d("useLiveFeedStoryVideoTimestampBlue",["React","UFIVideoPlayerRegistry","useInterval"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useState;a=function(a,c){__p&&__p();var d=g(0),e=d[0],f=d[1];b("useInterval")(function(){if(a==null||c.current==null)return;var d=b("UFIVideoPlayerRegistry").getAvailableVideoPlayerControllerForElement(c.current,a);if(d!=null&&d.isWatchAndScroll())return;d=b("UFIVideoPlayerRegistry").getAvailableVideoPlayerControllerTimeForElement(c.current,a);if(d==null)return;f(d)},1e3,[a,c]);return e};e.exports=a}),null);
__d("IdentityBadgeUtils",["cx","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(a){switch(a){case"tipper":case"birthday_week_tipper":case"streamer_appreciation_week_tipper":return b("gkx")("709988");case"sharer":return b("gkx")("709989");case"follower":return b("gkx")("833805");case"woodhenge_submageddon":return b("gkx")("1113070");case"original":return b("gkx")("1144561");case"top_fan":case"frequent_watcher":case"woodhenge":case"author":case"fan_funding_supporter":case"moderator":return!0;default:return!1}};a=function(a){__p&&__p();if(a==null||a.length===0)return null;a=a.filter(function(a){a=JSON.parse(a.serialized);a=a.type;return h(a)});return a.length===0?null:a.map(function(a){var b=JSON.parse(a.serialized);b=b.type;return{type:b,badge_asset:a.badge_asset,badge_color:a.badge_color,multiple_badge_asset:a.multiple_badge_asset,multiple_badge_asset_colored:a.multiple_badge_asset_colored,text:a.text,serialized:a.serialized}})};var i=(c={},c.frequent_watcher="_7wxe",c.woodhenge="_7wxf",c.top_fan="_7wxg",c),j=function(a,c){return a!=null&&a.isgamingvideo&&c&&(c.feedLocationType===131||c.isTahoeUFI===!0)&&b("gkx")("900386")};d=function(a,b,c,d){if(!a||!Array.isArray(a.identityBadges)||a.identityBadges.length===0||!a.isunseen||d===!0||!j(b,c))return null;d=a.identityBadges.map(function(a){return a.type}).filter(function(a){return a.toString()in i});return d.length===0?null:i[d[0]]};e.exports={commentColorAnimationClass:d,fromLiveVideoCommentCreateSubscription:a,isEligibleForColorComments:j,isBadgeTypeEligible:h}}),null);
__d("edgeIsInConnection",["nodeIsInConnection"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){c=c.getLinkedRecord("node");if(c==null){d&&d("Search edge has no node.");return!1}return b("nodeIsInConnection")(a,c,d)}e.exports=a}),null);
__d("TimeOffset",["DateConsts"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={timeToTimestamp:function(a){if(a<=0)return"0:00";var b=Math.floor(a/3600),c=b?b+":":"";c+=((b?"0":"")+Math.floor(a%3600/60)).slice(-2)+":";return c+("0"+a%60).slice(-2)},timestampToTime:function(a){a=a.match(/(?:(\d{1,2}):)?(?:(\d{1,2}):)?(\d{1,2})/);if(!a)return-1;var c=parseInt(a[3],10);a[1]&&!a[2]?c+=parseInt(a[1],10)*b("DateConsts").SEC_PER_MIN:a[1]&&a[2]&&(c+=parseInt(a[1],10)*b("DateConsts").SEC_PER_HOUR+parseInt(a[2],10)*b("DateConsts").SEC_PER_MIN);return c}};e.exports=a}),null);
__d("castToEnum",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=Object.keys(b);for(var e=0;e<d.length;e++)if(b[d[e]]===a)return b[d[e]];return c}e.exports=a}),null);