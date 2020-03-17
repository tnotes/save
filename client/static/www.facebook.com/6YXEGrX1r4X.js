if (self.CavalryLogger) { CavalryLogger.start_js(["Pfvat"]); }

__d("FollowButtonFollowMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"ActorSubscribeData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"subscribe_status",args:null,storageKey:null},e=[c,d];d=[d];return{kind:"Request",fragment:{kind:"Fragment",name:"FollowButtonFollowMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"actor_subscribe",storageKey:null,args:b,concreteType:"ActorSubscribeResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"subscribee",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"User",selections:e},{kind:"InlineFragment",type:"Page",selections:e}]}]}]},operation:{kind:"Operation",name:"FollowButtonFollowMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"actor_subscribe",storageKey:null,args:b,concreteType:"ActorSubscribeResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"subscribee",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},c,{kind:"InlineFragment",type:"User",selections:d},{kind:"InlineFragment",type:"Page",selections:d}]}]}]},params:{operationKind:"mutation",name:"FollowButtonFollowMutation",id:"1851758158185548",text:null,metadata:{}}}}();e.exports=a}),null);
__d("FollowButtonQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"profileID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"profileID"}],c=[{kind:"ScalarField",alias:null,name:"subscribe_status",args:null,storageKey:null}];return{kind:"Request",fragment:{kind:"Fragment",name:"FollowButtonQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:"user",name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"FragmentSpread",name:"FollowButtonRelay_profile",args:null}]}]},operation:{kind:"Operation",name:"FollowButtonQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:"user",name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"InlineFragment",type:"User",selections:c},{kind:"InlineFragment",type:"Page",selections:c}]}]},params:{operationKind:"query",name:"FollowButtonQuery",id:"1693221084121863",text:null,metadata:{}}}}();e.exports=a}),null);
__d("FollowButtonUnfollowMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"ActorUnsubscribeData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"subscribe_status",args:null,storageKey:null},e=[c,d];d=[d];return{kind:"Request",fragment:{kind:"Fragment",name:"FollowButtonUnfollowMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"actor_unsubscribe",storageKey:null,args:b,concreteType:"ActorUnsubscribeResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"unsubscribee",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"User",selections:e},{kind:"InlineFragment",type:"Page",selections:e}]}]}]},operation:{kind:"Operation",name:"FollowButtonUnfollowMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"actor_unsubscribe",storageKey:null,args:b,concreteType:"ActorUnsubscribeResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"unsubscribee",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},c,{kind:"InlineFragment",type:"User",selections:d},{kind:"InlineFragment",type:"Page",selections:d}]}]}]},params:{operationKind:"mutation",name:"FollowButtonUnfollowMutation",id:"1751883261520756",text:null,metadata:{}}}}();e.exports=a}),null);
__d("VideoHomeLiveComponentWithUpNextQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"section_type",value:"WWW_LIVE_HERO"}],b={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},h={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"Request",fragment:{kind:"Fragment",name:"VideoHomeLiveComponentWithUpNextQuery",type:"Query",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"video_home_section",storageKey:'video_home_section(section_type:"WWW_LIVE_HERO")',args:a,concreteType:"VideoHomeSection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"section_components",storageKey:null,args:null,concreteType:"VideoHomeSectionComponentsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"InlineFragment",type:"VideoHomeFeedUnitSectionComponent",selections:[{kind:"LinkedField",alias:null,name:"feed_unit",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Story",selections:[{kind:"LinkedField",alias:null,name:"attachments",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"media",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Video",selections:[b,{kind:"FragmentSpread",name:"CometTahoeUpNextOverlay_video",args:null}]}]}]}]}]}]}]}]}]}]},operation:{kind:"Operation",name:"VideoHomeLiveComponentWithUpNextQuery",argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"video_home_section",storageKey:'video_home_section(section_type:"WWW_LIVE_HERO")',args:a,concreteType:"VideoHomeSection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"section_components",storageKey:null,args:null,concreteType:"VideoHomeSectionComponentsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:null,plural:!0,selections:[c,{kind:"InlineFragment",type:"VideoHomeFeedUnitSectionComponent",selections:[{kind:"LinkedField",alias:null,name:"feed_unit",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,b,{kind:"InlineFragment",type:"Story",selections:[{kind:"LinkedField",alias:null,name:"attachments",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"media",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,b,{kind:"InlineFragment",type:"Video",selections:[{kind:"ScalarField",alias:null,name:"is_live_streaming",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"playable_duration",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"preferred_thumbnail",storageKey:null,args:null,concreteType:"VideoThumbnail",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image",storageKey:'image(height:145,sizing:"cover-fill-cropped",width:257)',args:[{kind:"Literal",name:"height",value:145},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:257}],concreteType:"Image",plural:!1,selections:[d]},b]},{kind:"LinkedField",alias:null,name:"title",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image_ranges",storageKey:null,args:null,concreteType:"ImageAtRange",plural:!0,selections:[e,f,{kind:"LinkedField",alias:null,name:"entity_with_image",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scale",args:null,storageKey:null},d,{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null}]},b]}]},{kind:"LinkedField",alias:null,name:"inline_style_ranges",storageKey:null,args:null,concreteType:"InlineStyleAtRange",plural:!0,selections:[e,f,{kind:"ScalarField",alias:null,name:"inline_style",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:[e,f,{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"sample_entities",storageKey:null,args:null,concreteType:null,plural:!0,selections:[c,b,{kind:"InlineFragment",type:"User",selections:[g]}]}]},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,b,{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"ScalarField",alias:"profile_url",name:"url",args:null,storageKey:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"category_type",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[h]},{kind:"InlineFragment",type:"Group",selections:[h,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]},e,f]},{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,g,b,{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"verification_status",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[{kind:"ScalarField",alias:null,name:"is_verified",args:null,storageKey:null}]}]},{kind:"ScalarField",alias:null,name:"breaking_status",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_premiere",args:null,storageKey:null}]}]}]}]}]}]}]}]},b]}]},params:{operationKind:"query",name:"VideoHomeLiveComponentWithUpNextQuery",id:"2764599316968684",text:null,metadata:{}}}}();e.exports=a}),null);
__d("VideoHomeLiveHeroPlayerOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null};return{kind:"Fragment",name:"VideoHomeLiveHeroPlayerOverlay_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"broadcast_status",args:null,storageKey:null},a,{kind:"LinkedField",alias:null,name:"savable_description",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"LinkedField",alias:null,name:"profile_picture",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"is_verified",args:null,storageKey:null}]}]},{kind:"ScalarField",alias:null,name:"live_rewind_enabled",args:null,storageKey:null},{kind:"FragmentSpread",name:"VideoHomeVideoOwnerLink_video",args:null}]}}();e.exports=a}),null);
__d("VideoHomeLiveHeroPlayer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Fragment",name:"VideoHomeLiveHeroPlayer_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[a,{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"video_channel",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a]},{kind:"LinkedField",alias:null,name:"live_video_config",storageKey:null,args:null,concreteType:"LiveVideoConfig",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"clipping_config",storageKey:'clipping_config(params_to_expose:["is_enabled","creation_source"])',args:[{kind:"Literal",name:"params_to_expose",value:["is_enabled","creation_source"]}],concreteType:"LiveVideoClippingConfig",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_enabled",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"creation_source",args:null,storageKey:null}]}]},{kind:"ScalarField",alias:null,name:"live_rewind_enabled",args:null,storageKey:null},{kind:"FragmentSpread",name:"VideoHomeLiveHeroPlayerOverlay_video",args:null}]}}();e.exports=a}),null);
__d("VideoHomeVideoOwnerLink_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"VideoHomeVideoOwnerLink_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"uri_token",args:null,storageKey:null}]}]}]};e.exports=a}),null);
__d("CometVideoHomeLiveContext",["React"],(function(a,b,c,d,e,f){"use strict";function a(){}c=b("React").createContext({hasInjectedVideo:!1,heroVideoID:null,hotswapVideoID:null,setHeroVideoID:a,setHotswapVideoID:a,setVideoMuted:a,updateVisibleVideoIDs:a,videoMuted:!0,visibleVideoIDs:{}});e.exports=c}),null);
__d("Button.react",["cx","AbstractButton.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.use||"default",c=this.props.size||"medium";c="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(c==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return b("React").jsx(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,c)}))};return c}(b("React").Component);a.propTypes={use:b("prop-types").oneOf(["special","confirm","default"]),size:b("prop-types").oneOf(["medium","large"]),suppressed:b("prop-types").bool};e.exports=a}),null);
__d("GamesVideoStreamerDashboardUtils",["React","WebStorage"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useCallback,i=b("React").useLayoutEffect,j=b("React").useState;function k(a,b){a=a.reduce(function(a,c,d){c=b[c];c&&a.push(d);return a},[]);var c=a[a.length-1];a.push(c!=null?c+1:0);return a}function a(a,b,c,d,e){a=[].concat(a);b=[].concat(b);e=k(b,e);c=a.splice(c.index,1)[0];b.splice(e[d.index],0,c);return[a,b]}function c(a,b,c){a=[].concat(a);b=a.splice(b,1)[0];a.splice(c,0,b);return a}function d(a,c){__p&&__p();c=j(c);var d=c[0],e=c[1];i(function(){if(a==null)return;var c=(g||(g=b("WebStorage"))).getLocalStorage();if(c!=null){c=c.getItem(a);c!=null&&c!==""&&e(JSON.parse(c))}},[a]);c=h(function(c){if(a!=null){var d=(g||(g=b("WebStorage"))).getLocalStorage();if(d!=null)try{var f=JSON.stringify(c);f!=null&&d.setItem(a,f)}catch(a){a.code===22&&d.clear()}}e(c)},[a]);return[d,c]}e.exports={move:a,reorder:c,useStateMaybeWithLocalStorage:d}}),null);
__d("GamesVideoStreamerXUICard.react",["cx","React","XUIBlock","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;a.background;var c=a.children,d=a.className,e=a.innerRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["background","children","className","innerRef"]);d=b("joinClasses")(d,"_4-u2",b("XUIBlock").getBackgroundClass(this.props));return b("React").jsx("div",babelHelpers["extends"]({ref:e},a,{className:d,children:c}))};return c}(b("React").PureComponent);a.propTypes=b("XUIBlock").propTypes;a.defaultProps=babelHelpers["extends"]({},b("XUIBlock").getDefaultProps(),{background:"white"});e.exports=a}),null);
__d("GamesVideoStreamerCard.react",["cx","ErrorBoundary.react","FBLogger","GamesVideoStreamerDashboardLoggerHelper","GamesVideoStreamerDashboardUtils","GamesVideoStreamerXUICard.react","Image.react","React","XUICardHeader.react","XUICardHeaderTitle.react","XUICardSection.react","joinClasses","react-beautiful-dnd"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("GamesVideoStreamerDashboardUtils").useStateMaybeWithLocalStorage,i=b("react-beautiful-dnd").Draggable;function j(a){var c,d=a.dragHandleProps,e=a.headerExtra,f=a.headerIcon,g=a.headerRef,h=a.headerTitle,i=a.isCollapsed,j=a.isCollapsible;a=a.onToggleCollapse;return(c=b("React")).jsx("div",babelHelpers["extends"]({},d,{children:c.jsx(b("XUICardHeader.react"),{className:"_25zr",ref:g,type:"primary",children:c.jsxs(b("XUICardHeaderTitle.react"),{className:"_25zt",children:[c.jsx("div",{className:"_25zu",children:c.jsx(b("Image.react"),{src:f})}),c.jsx("div",{className:"_25zv",children:h}),c.jsxs("div",{className:"_6v3r",children:[e,j!==!1&&b("React").jsx("div",{className:"_3xvi",onClick:a,role:"button",tabIndex:"0",children:b("React").jsx("div",{className:"_69zw"+(i?"":" _69zx")})})]})]})})}))}function a(a){var c=a.children,d=a.className,e=a.draggableConfig,f=a.headerExtra,g=a.headerIcon,l=a.headerTitle,m=a.headerRef,n=a.height,o=a.isCollapsible;a=a.startCollapsed;var p=b("joinClasses")("_25zq",d);d=h(e==null?void 0:e.id,a||!1);var q=d[0],r=d[1],s=function(){return r(!q)},t=q?null:{height:n};return e==null?b("React").jsx(k,{children:b("React").jsxs(b("GamesVideoStreamerXUICard.react"),{className:p,style:t,children:[b("React").jsx(j,{headerExtra:f,headerIcon:g,headerRef:m,headerTitle:l,isCollapsed:q,isCollapsible:o,onToggleCollapse:s}),o!==!1&&q?null:c]})}):b("React").jsx(k,{moduleID:e.id,children:b("React").jsx(i,{draggableId:e.id,index:e.index,children:function(a,d){return b("React").jsxs(b("GamesVideoStreamerXUICard.react"),babelHelpers["extends"]({className:p,innerRef:a.innerRef},a.draggableProps,{style:babelHelpers["extends"]({},a.draggableProps.style,t),children:[b("React").jsx(j,{dragHandleProps:a.dragHandleProps,headerExtra:f,headerIcon:g,headerRef:m,headerTitle:l,isCollapsed:q,isCollapsible:o,onToggleCollapse:s}),o!==!1&&q?null:c]}))}})})}function k(a){var c=a.children,d=a.moduleID;return b("React").jsx(b("ErrorBoundary.react"),{onHandleError:function(a){b("GamesVideoStreamerDashboardLoggerHelper").getLogger().setModuleName(d).setEvent("streamer_dashboard_card_render_failed").addToExtraData("exception_message",a.message).addToExtraData("exception_stack_trace",a.stack).log(),b("FBLogger")("games_video_streamer_dashboard").catching(a).mustfix("Failed to streamer dash widget: %s",d)},children:c})}e.exports=b("React").memo(a)}),null);
__d("FollowButtonFollowMutation",["RelayFBEnvironment","RelayModern","FollowButtonFollowMutation.graphql"],(function(a,b,c,d,e,f){var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("FollowButtonFollowMutation.graphql");function a(a,c,d){c={input:{subscribee_id:a,subscribe_location:c}};a={actor_subscribe:{subscribee:{__typename:"User",id:a,subscribe_status:"IS_SUBSCRIBED"}}};h(b("RelayFBEnvironment"),babelHelpers["extends"]({mutation:i,optimisticResponse:a,variables:c},d))}e.exports={commit:a}}),null);
__d("FollowButtonUnfollowMutation",["RelayFBEnvironment","RelayModern","FollowButtonUnfollowMutation.graphql"],(function(a,b,c,d,e,f){var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("FollowButtonUnfollowMutation.graphql");function a(a,c,d){c={input:{unsubscribee_id:a,subscribe_location:c}};a={actor_unsubscribe:{unsubscribee:{__typename:"User",id:a,subscribe_status:"CAN_SUBSCRIBE"}}};h(b("RelayFBEnvironment"),babelHelpers["extends"]({mutation:i,optimisticResponse:a,variables:c},d))}e.exports={commit:a}}),null);
__d("FollowButton.react",["FollowButtonRelay.react","React","RelayFBEnvironment","RelayModern","FollowButtonQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var i=g!==void 0?g:g=b("FollowButtonQuery.graphql");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this,c=this.props.profileID;return b("React").jsx(h,{environment:b("RelayFBEnvironment"),query:i,render:function(c){c.error;c=c.props;if(c){c=c.user;return b("React").jsx(b("FollowButtonRelay.react"),{className:a.props.margin,followLocation:a.props.followLocation,onFollow:a.props.onFollow,profile:c})}return null},variables:{profileID:c}})};return c}(b("React").Component);e.exports=a}),null);
__d("VideoHomeLiveComponentWithClickToTahoeOrScrollTop.react",["requireCond","React","cr:1279507","VideoComponent","cr:1289297","cr:1289298","cr:1289299","cr:1289300","cr:1279508","VideoWithClickToTahoe"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){var c=new(b("VideoWithClickToTahoe"))(a,this.props.videoPermalink,this.props.videoChannelID,this.props.caller,this.props.isOfferVideo,a.getPlayerOrigin(),a.getPlayerSuborigin(),this.props.storyIdentifier,this.props.feedLocation,this.props.reactionVideoChannelType,null,this.props.externalLogID);if(b("cr:1279507")!=null&&b("cr:1279508")!=null){var d=new(b("cr:1279508"))(a,this.$1);d.disable();this.subscriptionsHandler=new(b("cr:1279507"))();this.subscriptionsHandler.addSubscriptions(a.addListener("enterWatchAndScroll",function(){c.disable(),d.enable()}),a.addListener("exitWatchAndScroll",function(){c.enable(),d.disable()}))}};d.disable=function(){var a;(a=this.subscriptionsHandler)==null?void 0:a.release()};d.$1=function(){if(!b("cr:1289300")||!b("cr:1289299")||!b("cr:1289297")||!b("cr:1289298"))return;b("cr:1289300").log({event:b("cr:1289299").CLICK,click_point:b("cr:1289297").LIVE_WNS,click_target:b("cr:1289298").VIDEO})};d.shouldComponentUpdate=function(){return!1};d.render=function(){return null};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoHomeLiveComponentWithMuteObserver.react",["CometVideoHomeLiveContext","React","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.subscriptions=new(b("SubscriptionsHandler"))(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.enable=function(a){var b=this;this.subscriptions.addSubscriptions(a.addListener("muteVideo",function(){b.context.setVideoMuted(!0)}),a.addListener("unmuteVideo",function(){b.context.setVideoMuted(!1)}))};d.disable=function(){};d.componentWillUnmount=function(){this.subscriptions.release()};d.render=function(){return null};return c}(b("React").Component);a.contextType=b("CometVideoHomeLiveContext");e.exports=a}),null);
__d("VideoHomeLiveComponentWithUpNext.react",["cx","requireDeferred","CometTahoeUpNextOverlay.react","CometVideoHomeLiveContext","React","RelayFBEnvironment","RelayModern","SubscriptionsHandler","VideoHomeVisibilityUtils","XVideoHomeLiveController","requestIdleCallback","VideoHomeLiveComponentWithUpNextQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var j=b("requireDeferred")("VideoHomeTypedLoggerLite"),k=5;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={cancelled:!1,hidden:!0,playerFinished:!1},d.subscriptions=new(b("SubscriptionsHandler"))(),d.$2=function(){d.setState({cancelled:!0})},d.$1=function(){d.vpc&&b("VideoHomeVisibilityUtils").isVisible(d.vpc)?d.setState({hidden:!1}):b("requestIdleCallback")(d.$1)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.enable=function(a){var b=this;this.vpc=a;this.subscriptions.addSubscriptions(a.addListener("stateChange",function(){var c=a.getState()==="finished";b.setState({playerFinished:c});c&&b.$1()}))};d.disable=function(){};d.componentWillUnmount=function(){this.subscriptions.release()};d.render=function(){__p&&__p();var a=this,c=this.state,d=c.cancelled,e=c.hidden;c=c.playerFinished;return!this.vpc||d||e||!c?null:b("React").jsx(i,{environment:b("RelayFBEnvironment"),query:h!==void 0?h:h=b("VideoHomeLiveComponentWithUpNextQuery.graphql"),render:function(c){__p&&__p();var d=c.error;c=c.props;if(d||c==null)return null;var e=(d=c.video_home_section.section_components)==null?void 0:(c=d.nodes)==null?void 0:(d=c[0])==null?void 0:(c=d.feed_unit)==null?void 0:(d=c.attachments)==null?void 0:(c=d[0])==null?void 0:c.media;d=b("XVideoHomeLiveController").getURIBuilder().setFBID("v",e.id).getURI();c=function(){a.context.setHotswapVideoID(e.id),j.onReady(function(a){a.log({event:"www_live_hero_up_next_chain",event_target:"video",event_target_id:e.id})})};return b("React").jsx("div",{className:"_8dj5",children:b("React").jsx("div",{className:"_8dio",children:b("React").jsx(b("CometTahoeUpNextOverlay.react"),{isMakingProgress:!0,video:e,navigateToNextVideo:c,nextVideoURL:d,onCancelCallback:a.$2,onProgressDone:c,timeoutSec:k,visible:!0})})})},variables:{}})};return c}(b("React").PureComponent);a.contextType=b("CometVideoHomeLiveContext");e.exports=a}),null);
__d("LiveVideoInteractiveAlertViewVideoComponent.react",["LiveVideoInteractiveAlertView.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={vpc:null},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.enable=function(a){this.setState({vpc:a})};d.disable=function(){this.setState({vpc:null})};d.render=function(){return this.state.vpc===null?null:b("React").jsx(b("LiveVideoInteractiveAlertView.react"),{videoID:this.props.videoID,videoPlayerController:this.state.vpc})};return c}(b("React").Component);e.exports=a}),null);
__d("VideoComponentWithMetadataOverlay.react",["React","SubscriptionsHandler","VideoMetadataOverlay.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={hidden:!1,vpc:null},d.subscriptionsHandler=new(b("SubscriptionsHandler"))(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.enable=function(a){var b=this;this.setState({vpc:a});this.subscriptionsHandler.addSubscriptions(a.addListener("enterWatchAndScroll",function(){b.setState({hidden:!0})}),a.addListener("exitWatchAndScroll",function(){b.setState({hidden:!1})}))};d.disable=function(){this.subscriptionsHandler.release()};d.render=function(){return!this.state.vpc||this.state.hidden?null:b("React").jsx(b("VideoMetadataOverlay.react"),{overlay:this.props.overlay,vpc:this.state.vpc})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("VideoHomeVideoOwnerLink.react",["Link.react","React","RelayHooks","XVideoHomeShowController","VideoHomeVideoOwnerLink_video.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("RelayHooks").graphql;var h=b("RelayHooks").useFragment;function a(a){var c,d=a.children,e=a.video;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","video"]);e=h(g!==void 0?g:g=b("VideoHomeVideoOwnerLink_video.graphql"),e);e=(e==null?void 0:(c=e.owner)==null?void 0:c.uri_token)||(e==null?void 0:(c=e.owner)==null?void 0:c.id);if(e==null)return b("React").jsx(b("React").Fragment,{children:d});c=b("XVideoHomeShowController").getURIBuilder().setString("section_id",e).getURI();return b("React").jsx(b("Link.react"),babelHelpers["extends"]({},a,{href:c,children:d}))}e.exports=a}),null);
__d("VideoHomeLiveHeroPlayerOverlay.react",["cx","fbt","Badge.react","Image.react","LineClamp.react","React","RelayHooks","VideoBroadcastStatus","VideoHomeVerifiedPageTooltip.react","VideoHomeVideoOwnerLink.react","VideoHomeLiveHeroPlayerOverlay_video.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;b("RelayHooks").graphql;var j=b("RelayHooks").useFragment;function a(a){var c,d,e;a=a.video;a=j(i!==void 0?i:i=b("VideoHomeLiveHeroPlayerOverlay_video.graphql"),a);c=a.name!=null&&a.name!==""?a.name:(c=a.savable_description)==null?void 0:c.text;d=(d=a.owner)==null?void 0:(d=d.profile_picture)==null?void 0:d.uri;e=(e=a.owner)==null?void 0:e.name;var f=a.broadcast_status===b("VideoBroadcastStatus").LIVE;return b("React").jsxs(b("React").Fragment,{children:[!f&&b("React").jsx("div",{className:"_8ts-"}),b("React").jsxs("div",{className:"_8nga"+(f?"":" _8ts_")+(f&&a.live_rewind_enabled?" _8y-i":""),children:[b("React").jsx(b("VideoHomeVideoOwnerLink.react"),{video:a,children:b("React").jsx(b("Image.react"),{className:"_8ngb",height:36,src:d,width:36})}),b("React").jsxs("div",{className:"_8ngc",children:[c!=null&&c!==""&&b("React").jsx(b("LineClamp.react"),{className:"_8ngd",lineHeight:20,lines:1,children:c}),b("React").jsxs("div",{className:"_8tt0",children:[b("React").jsx(b("VideoHomeVideoOwnerLink.react"),{className:"_8nge",video:a,children:e}),((d=a.owner)==null?void 0:d.is_verified)&&b("React").jsx(b("VideoHomeVerifiedPageTooltip.react"),{children:b("React").jsx(b("Badge.react"),{size:"xsmall",type:"verified"})}),!f&&h._("{space} was live",[h._param("space"," ")])]})]})]})]})}e.exports=a}),null);
__d("VideoHomeLiveHeroPlayer.react",["cx","requireCond","requireDeferred","CometVideoHomeLiveAutoplayContext","CometVideoHomeLiveContext","Image.react","LiveVideoInteractiveAlertViewVideoComponent.react","React","RelayHooks","VideoComponentContextMenu.react","VideoComponentDebugOverlay.react","VideoComponentEmbeddedControls.react","VideoComponentWithExternalLogger.react","VideoHomeLiveComponentWithClickToTahoeOrScrollTop.react","VideoHomeLiveComponentWithMuteObserver.react","cr:1269304","VideoHomeLoggingExternalLogIDContext","deferredLoadComponent","VideoComponentLiveVideoIndicator.react","VideoComponentPlayButton.react","VideoComponentStreamingReactionTray.react","VideoComponentWithLiveBroadcast.react","VideoComponentWithMetadataOverlay.react","VideoComponentWithTahoeExitAutoplay.react","VideoDataContainer.react","VideoHomeLiveComponentWithUpNext.react","VideoHomeLiveHeroPlayerOverlay.react","VideoPlayer.react","VideoHomeLiveHeroPlayer_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("React").useContext,j=b("React").useEffect,k=b("React").useState;b("RelayHooks").graphql;var l=b("RelayHooks").useFragment,m=b("deferredLoadComponent")(b("requireDeferred")("VideoComponentLiveEndScreen.react")),n=b("deferredLoadComponent")(b("requireDeferred")("VideoComponentLiveInterruptedScreen.react")),o=b("requireDeferred")("VideoHomeTypedLoggerLite");function a(a){__p&&__p();var c=a.reactionVideoChannelType,d=c===void 0?"video_home_www_live_hero":c;c=a.playerOrigin;c=c===void 0?"video_home":c;var e=a.playerSubOrigin;e=e===void 0?"topic_live":e;var f=l(h!==void 0?h:h=b("VideoHomeLiveHeroPlayer_video.graphql"),a.video);a=k(!0);var g=a[0],p=a[1];a=i(b("CometVideoHomeLiveAutoplayContext"));var q=i(b("CometVideoHomeLiveContext")),r=q.setHeroVideoID;q=q.videoMuted;var s=f.id;j(function(){r(s)},[r,s]);var t=i(b("VideoHomeLoggingExternalLogIDContext"));if(f==null||s==null||f.url==null)return null;var u=function(){o.onReady(function(a){a.log({event:"click",event_target:"video",event_target_id:s,event_target_info:f.url,section_video_channel_type:d})})},v="DEFAULT",w=["pages_live_tab"].includes(c);return b("React").jsx("div",{className:"_8n18",children:b("React").jsxs("div",{className:"_150c",children:[!g&&b("React").jsx(b("Image.react"),{className:"_3chq",src:(g=f.image)==null?void 0:g.uri}),b("React").jsx(b("VideoDataContainer.react"),{onVideoLoaded:function(){p(!1)},renderLoading:function(){return b("React").jsx("div",{className:"_53j5",style:{width:"100%",height:"100%"},children:b("React").jsx("i",{className:"_5l7x"})})},videoID:s,children:b("React").jsxs(b("VideoPlayer.react"),{autoplay:!!a,disableClickPlayPause:!0,onVideoClick:u,playerOrigin:c,reactionVideoChannelType:d,startMuted:q,subOrigin:e,videoData:b("VideoDataContainer.react").VIDEO_DATA_PLACEHOLDER,children:[b("React").jsx(b("VideoComponentLiveVideoIndicator.react"),{}),b("React").jsx(b("VideoComponentWithLiveBroadcast.react"),{}),b("React").jsx(n,{}),b("React").jsx(m,{}),b("React").jsx(b("VideoComponentDebugOverlay.react"),{}),b("React").jsx(b("VideoComponentContextMenu.react"),{}),b("React").jsx(b("VideoHomeLiveComponentWithClickToTahoeOrScrollTop.react"),{caller:"channel_view_from_video_home",externalLogID:t,reactionVideoChannelType:d,videoPermalink:f.url,videoChannelID:(g=f.video_channel)==null?void 0:g.id,isOfferVideo:!1}),b("React").jsx(b("VideoComponentEmbeddedControls.react"),{hideControlsOnAutoplay:!0,showFullscreenButton:b("cr:1269304")===null,unhideControlsOnHover:!0,gamesVideoCreatorClippingGK:((c=(a=f.live_video_config)==null?void 0:(u=a.clipping_config)==null?void 0:u.is_enabled)!=null?c:!1)&&((q=f.live_video_config)==null?void 0:(e=q.clipping_config)==null?void 0:e.creation_source)===v,isLiveRewindEnabled:f.live_rewind_enabled}),b("React").jsx(b("VideoComponentStreamingReactionTray.react"),{}),b("React").jsx(b("VideoComponentWithTahoeExitAutoplay.react"),{}),b("React").jsx(b("VideoComponentWithMetadataOverlay.react"),{overlay:b("React").jsx(b("VideoHomeLiveHeroPlayerOverlay.react"),{video:f})}),b("VideoHomeLiveComponentWithUpNext.react")!=null&&b("React").jsx(b("VideoHomeLiveComponentWithUpNext.react"),{}),b("React").jsx(b("VideoHomeLiveComponentWithMuteObserver.react"),{}),b("React").jsx(b("LiveVideoInteractiveAlertViewVideoComponent.react"),{videoID:s}),b("React").jsx(b("VideoComponentPlayButton.react"),{}),b("React").jsx(b("VideoComponentWithExternalLogger.react"),{externalLogID:t,playerOrigin:"video_home",playerSuborigin:"topic_live"}),!w&&b("cr:1269304")&&b("React").jsx(b("cr:1269304"),{})]})})]})})}e.exports=a}),null);