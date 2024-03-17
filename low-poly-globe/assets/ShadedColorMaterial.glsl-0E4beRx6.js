function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{ic as xe,lF as Ie,qs as Ne,aR as N,vW as We,fh as k,a5 as $,nO as D,bt as ke,lM as Le,mE as Ve,x as He,kX as Be,sT as ae,vX as Ge,dX as W,lG as Ue,i0 as qe,lJ as q,j$ as ne,gz as oe,qw as re,lK as le,dY as F,vY as Ye,id as ce,la as E,mG as K,vZ as he,dZ as ue,iI as Je,nw as Xe,v_ as Ze,tk as Qe,kY as Ke,C as et,H as tt,u as it,qN as st,nJ as at,v$ as nt,kW as Y,sW as A,kZ as ot,a3 as ee,dW as Re,w0 as rt,py as de,kh as lt,w1 as ct,w2 as ht,gq as pe,sY as ut,R as dt,w3 as pt,uL as _e,uH as m,uE as _t,uM as w,uG as gt,uI as ft,uN as vt,uF as bt,vO as ge,J as d,w4 as mt,uJ as yt,w5 as St,w6 as wt,uO as C,oH as Et,uP as $t,_ as Tt,e as l,uR as S,jT as z,uS as Ot,uT as At,uU as Lt,w7 as Rt,uV as jt,uW as Mt,j4 as J,uY as Ft,uZ as Pt,u_ as Ct,w8 as zt,v3 as Dt,w9 as xt,j2 as X,wa as Z,wb as fe,vQ as It,vd as Nt,bF as ve,a2 as te,wc as Wt,wd as kt,u1 as Vt,jJ as Ht,we as Bt,r0 as Gt,wf as Ut,wg as qt,a1 as je,wh as Yt,wi as Jt,l7 as Xt,k$ as Zt,aE as Qt,V as Kt,y as f,c as Me,S as ei,wj as L,aD as ti,a4 as ii,d as Fe,A as Pe,fS as si,m as ai,bn as ni,jg as oi}from"./index-O3Mu8AMX.js";class Li{constructor(e){var i;this.metadata=void 0,this._camera=new We,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=new Array,this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=k(),this._worldFrame=null,this._renderLocation=$(),this._renderLocationDirty=!0,this._location=new N({x:0,y:0,z:0}),this._elevationAlignedLocation=new N,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.consumesClicks=!0,this.cursor=null,this.grabCursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=D.None,this._focused=!1,this.events=new ke.EventEmitter,this._screenLocation={screenPointArray:Le(),renderScreenPointArray:Ve(),pixelSize:0},this._screenLocationDirty=!0,this._engineResourcesAddedToStage=!1,this._attached=!1,this._location.spatialReference=e.view.spatialReference,Object.assign(this,e);const t=(i=this.view.state)==null?void 0:i.camera;t&&this._camera.copyFrom(t)}destroy(){this._applyObjectTransform=ui,this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this._camera=null}get _stage(){var e;return(e=this.view)==null?void 0:e._stage}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,this._noDisplayCount===1&&this._updateEngineObject(),He(()=>{this._noDisplayCount--,this._noDisplayCount===0&&this._updateEngineObject()})}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){be(e)&&(this._screenLocationDirty=!0),Be(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=k()),ri(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){ae(e,this._location),this._notifyLocationChanged()}_notifyLocationChanged(){this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){ae(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){const e=this._elevation.override!=null?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y,this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=Ge(this.location.spatialReference),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:e===!0?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;this._screenLocation.pixelSize=this._camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1;let e;if(be(this._modelTransform)){const t=this._calculateModelTransformOffset(hi);e=W(t,t,this.renderLocation)}else e=this.renderLocation;this._camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this._camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}get attached(){return this._attached}intersectionDistance(e,t){if(!this.available)return null;const i=Ue(e,li),a=this._getCollisionRadius(t),n=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if(Qe(this.screenLocation.screenPointArray,i)<a*a)return this.screenLocation.renderScreenPointArray[2]+n;break;case"line":{const o=this.collisionType.paths,r=this._getWorldToScreenObjectScale(),v=this._calculateObjectTransform(r,x),u=a*this.screenLocation.pixelSize,p=q(this._camera,i,Q);if(p==null)return null;for(const _ of o){if(_.length===0)continue;const c=F(P,_[0],v);for(let b=1;b<_.length;b++){const g=F(Se,_[b],v),T=Ze(ce(c,g,me),p);if(T!=null&&T<u*u){const O=W(E.get(),c,g);K(O,O,.5);const M=he(E.get());return this._camera.projectToRenderScreen(O,M),M[2]+n}ue(c,g)}}break}case"disc":{const o=this.collisionType.direction,r=this.collisionType.offset??Je,v=this._getWorldToScreenObjectScale(),u=this._calculateObjectTransform(v,x),p=a*this.screenLocation.pixelSize,_=q(this._camera,i,Q);if(_==null)return null;const c=ne(ye,u),b=oe(Ee,o,c),g=F($e,r,u);re(g,b,I);const T=we;if(le(I,_,T)&&Xe(T,g)<p*p)return this.screenLocation.renderScreenPointArray[2]+n;break}case"ribbon":{const{paths:o,direction:r}=this.collisionType,v=this._getWorldToScreenObjectScale(),u=this._calculateObjectTransform(v,x),p=a*this._camera.computeScreenPixelSizeAt(this.renderLocation),_=q(this._camera,i,Q);if(_==null)return null;const c=ne(ye,u),b=oe(Ee,r,c),g=this._calculateModelTransformPosition($e);re(g,b,I);const T=we;if(!le(I,_,T))break;for(const O of o){if(O.length===0)continue;const M=F(P,O[0],u);for(let B=1;B<O.length;B++){const G=F(Se,O[B],u),ie=Ye(ce(M,G,me),T);if(ie!=null&&ie<p*p){const U=W(E.get(),M,G);K(U,U,.5);const se=he(E.get());return this._camera.projectToRenderScreen(U,se),se[2]+n}ue(M,G)}}break}default:qe(this.collisionType)}return null}attach(e={manipulator3D:{}}){const t=this._stage;if(!t)return;const i=e.manipulator3D;i.engineLayerId==null?(this._engineLayer=new Ke(t,{pickable:!1,updatePolicy:et.SYNC}),i.engineLayerId=this._engineLayer.id):t!=null&&t.getObject&&(this._engineLayer=t.getObject(i.engineLayerId)),i.engineLayerReferences=(i.engineLayerReferences||0)+1,this._materialIdReferences=i.materialIdReferences,this._materialIdReferences==null&&(this._materialIdReferences=new Map,i.materialIdReferences=this._materialIdReferences),this._camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),tt(this._location.spatialReference,this.view.spatialReference)||(this.location=new N({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(e={manipulator3D:{}}){const t=e.manipulator3D;t.engineLayerReferences--;const i=t.engineLayerReferences===0;this._removeResourcesFromStage(),i&&(t.engineLayerId=null,it(this._engineLayer)),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this._camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){st(this.location,Te,e.spatialReference)&&at(e.extent,Te)&&this._notifyLocationChanged()}_evaluateElevationAlignment(){if(this.elevationInfo==null)return;let e=null,t=0;const i=nt(this.elevationInfo,this.location.spatialReference??this.view.elevationProvider.spatialReference);switch(this.elevationInfo.mode){case"on-the-ground":e=Y(this.view.elevationProvider,this.location,"ground")??0;break;case"relative-to-ground":t=(Y(this.view.elevationProvider,this.location,"ground")??0)+i;break;case"relative-to-scene":t=(Y(this.view.elevationProvider,this.location,"scene")??0)+i;break;case"absolute-height":t=i}return t!==this._elevation.offset||e!==this._elevation.override?(this._elevation.offset=t,void(this._elevation.override=e)):void 0}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),t=x;if(this.autoScaleRenderObjects===!0){const o=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(o,t)}else this._calculateObjectTransform(e,t);const{objectsByState:i}=this._ensureEngineResources(),a=(this.focused?A.Focused:A.Unfocused)|(this.selected?A.Selected:A.Unselected),n=this._noDisplayCount>0;for(const{stateMask:o,objects:r}of i){if(n){for(const c of r)c.visible=!1;continue}const v=(o&A.All)!==A.None,u=(o&D.All)!==D.None,p=!v||(a&o)==(o&A.All),_=!u||(this.state&o)==(o&D.All);if(p&&_)for(const c of r)c.visible=!0,c.transformation=t;else for(const c of r)c.visible=!1}}_ensureEngineResources(){if(this._engineResources==null){const e=this._engineLayer,t=[],i=new Set;this.renderObjects.forEach(({geometry:{material:o}})=>{i.has(o)||(t.push(o),i.add(o))});const a=new Map;this._renderObjects.forEach(o=>{const r=new ot({castShadow:!1,geometries:[o.geometry]}),v=a.get(o.stateMask)||[];v.push(r),a.set(o.stateMask,v)});const n=[];a.forEach((o,r)=>n.push({stateMask:r,objects:o})),this._engineResources={objectsByState:n,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){const e=this._stage;if(this._engineResourcesAddedToStage||this._engineResources==null||!e)return;const{objectsByState:t,layer:i,materials:a}=this._engineResources;a.forEach(n=>{const o=this._materialIdReferences,r=o.get(n.id)||0;r===0&&e.add(n),o.set(n.id,r+1)}),t.forEach(({objects:n})=>{i.addMany(n),e.addMany(n)}),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(){const e=this._stage;if(!this._engineResourcesAddedToStage||this._engineResources==null||!e)return;const{objectsByState:t,layer:i,materials:a}=this._engineResources;t.forEach(({objects:n})=>{i.removeMany(n),e.removeMany(n)}),a.forEach(n=>{const o=this._materialIdReferences,r=o.get(n.id);r===1?(e.remove(n),o.delete(n.id)):o.set(n.id,r-1)}),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*(e==="touch"?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,ci);return ee(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return Re(e,t,this.renderLocation)}_calculateObjectTransform(e,t){return rt(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&de(t,t,this._worldFrame),de(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,this._applyObjectTransform!=null&&this._applyObjectTransform(t),t}get test(){let e=!1;if(this._engineResources!=null)for(const t of this._engineResources.objectsByState){for(const i of t.objects)if(i.visible){e=!0;break}if(e)break}return{areAnyResourcesVisible:e}}}function be(s){return s[12]!==0||s[13]!==0||s[14]!==0}function ri(s,e,t){switch(s.viewingMode){case"local":return ut(t),!0;case"global":{const i=lt(s.renderCoordsHelper.spatialReference);return ct(e,0,P,0,i.radius),ht(pe(P[0]),pe(P[1]),t),!0}}}const li=Le(),me=xe(),Q=Ie(),ye=dt(),ci=k(),x=k(),I=Ne(),P=$(),Se=$(),we=$(),Ee=$(),$e=$(),hi=$(),Te=new N({x:0,y:0,z:0,spatialReference:null}),ui=()=>{};function di(s,e){if(!e.screenSizeEnabled)return;const t=s.vertex;pt(t,e),t.uniforms.add(new _e("perScreenPixelRatio",(i,a)=>a.camera.perScreenPixelRatio),new _e("screenSizeScale",i=>i.screenSizeScale)),t.code.add(m`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function Ce(s){const e=new _t,t=s.multipassEnabled&&(s.output===w.Color||s.output===w.Alpha);e.include(gt,s),e.include(di,s),e.include(ft,s);const{vertex:i,fragment:a}=e;return a.include(vt),bt(i,s),a.uniforms.add(new ge("uColor",n=>n.color)),e.attributes.add(d.POSITION,"vec3"),e.varyings.add("vWorldPosition","vec3"),t&&e.varyings.add("depth","float"),s.screenSizeEnabled&&e.attributes.add(d.OFFSET,"vec3"),s.shadingEnabled&&(mt(i),e.attributes.add(d.NORMAL,"vec3"),e.varyings.add("vViewNormal","vec3")),i.code.add(m`
    void main(void) {
      vWorldPosition = ${s.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),s.shadingEnabled&&i.code.add(m`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),i.code.add(m`
    ${t?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),t&&e.include(yt,s),a.code.add(m`
    void main() {
      discardBySlice(vWorldPosition);
      ${t?"terrainDepthTest(depth);":""}
    `),s.shadingEnabled?(a.uniforms.add(new St("shadingDirection",n=>n.shadingDirection)),a.uniforms.add(new ge("shadedColor",n=>pi(n.shadingTint,n.color))),a.code.add(m`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):a.code.add(m`vec4 finalColor = uColor;`),a.code.add(m`
      ${s.output===w.ObjectAndLayerIdColor?m`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${m.float(wt)}) {
        discard;
      }
      ${s.output===w.Alpha?m`fragColor = vec4(finalColor.a);`:""}

      ${s.output===w.Color?m`fragColor = highlightSlice(finalColor, vWorldPosition); ${s.transparencyPassType===C.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    }
    `),e}function pi(s,e){const t=1-s[3],i=s[3]+e[3]*t;return i===0?(R[3]=i,R):(R[0]=(s[0]*s[3]+e[0]*e[3]*t)/i,R[1]=(s[1]*s[3]+e[1]*e[3]*t)/i,R[2]=(s[2]*s[3]+e[2]*e[3]*t)/i,R[3]=e[3],R)}const R=Et(),_i=Object.freeze(Object.defineProperty({__proto__:null,build:Ce},Symbol.toStringTag,{value:"Module"}));class H extends Ot{initializeProgram(e){return new At(e.rctx,H.shader.get().build(this.configuration),ze)}_setPipelineState(e){const t=this.configuration,i=e===C.NONE,a=e===C.FrontFace;return Lt({blending:t.output!==w.Color&&t.output!==w.Alpha||!t.transparent?null:i?Rt:jt(e),culling:Mt(t.cullFace),depthTest:{func:a?J.LESS:t.shadingEnabled?J.LEQUAL:J.LESS},depthWrite:i?t.writeDepth?Ft:null:Pt(e),colorWrite:Ct,polygonOffset:i||a?null:zt})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}H.shader=new $t(_i,()=>Tt(()=>Promise.resolve().then(()=>Oi),void 0));let y=class extends Dt{constructor(){super(...arguments),this.output=w.Color,this.cullFace=z.None,this.transparencyPassType=C.NONE,this.hasSlicePlane=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.multipassEnabled=!1,this.cullAboveGround=!1}};l([S({count:w.COUNT})],y.prototype,"output",void 0),l([S({count:z.COUNT})],y.prototype,"cullFace",void 0),l([S({count:C.COUNT})],y.prototype,"transparencyPassType",void 0),l([S()],y.prototype,"hasSlicePlane",void 0),l([S()],y.prototype,"transparent",void 0),l([S()],y.prototype,"writeDepth",void 0),l([S()],y.prototype,"screenSizeEnabled",void 0),l([S()],y.prototype,"shadingEnabled",void 0),l([S()],y.prototype,"multipassEnabled",void 0),l([S()],y.prototype,"cullAboveGround",void 0),l([S({constValue:!1})],y.prototype,"occlusionPass",void 0);const ze=new Map([[d.POSITION,0],[d.NORMAL,1],[d.OFFSET,2]]);let gi=class extends xt{constructor(e){super(e,new vi),this.supportsEdges=!0,this.produces=new Map([[X.OPAQUE_MATERIAL,t=>t===w.Highlight||Z(t)&&!this._isTransparent],[X.TRANSPARENT_MATERIAL,t=>Z(t)&&this._isTransparent&&this.parameters.writeDepth],[X.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>Z(t)&&this._isTransparent&&!this.parameters.writeDepth]]),this._configuration=new y,this._vertexAttributeLocations=ze}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.screenSizeEnabled=this.parameters.screenSizeEnabled,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,a,n,o){if(this.parameters.screenSizeEnabled){const r=e.attributes.get(d.OFFSET);fe(e,i,a,n,{applyToVertex:(u,p,_,c)=>{const b=ee(Oe,r.data[3*c],r.data[3*c+1],r.data[3*c+2]),g=ee(mi,u,p,_);return K(b,b,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(b)),W(g,g,b),[g[0],g[1],g[2]]},applyToAabb:u=>{const p=Gt(u,Oe);return Ut(u,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(p))}},o)}else fe(e,i,a,n,void 0,o)}createGLMaterial(e){return new fi(e)}createBufferWriter(){return new bi(this.parameters.screenSizeEnabled)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}},fi=class extends It{beginSlot(e){return this.ensureTechnique(H,e)}},vi=class extends Nt{constructor(){super(...arguments),this.color=ve(1,1,1,1),this.shadingTint=ve(0,0,0,.25),this.shadingDirection=te($(),[.5,-.5,-.5]),this.screenSizeScale=14,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=z.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}};class bi{constructor(e){this.screenSizeEnabled=e;const t=Wt().vec3f(d.POSITION).vec3f(d.NORMAL);this.screenSizeEnabled&&t.vec3f(d.OFFSET),this.vertexBufferLayout=t}elementCount(e){return e.attributes.get(d.POSITION).indices.length}write(e,t,i,a,n){if(kt(i,this.vertexBufferLayout,e,t,a,n),this.screenSizeEnabled){if(!i.attributes.has(d.OFFSET))throw new Error(`${d.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const o=i.attributes.get(d.OFFSET);Vt(o.size===3);const r=a.getField(d.OFFSET,Ht);if(!r)throw new Error("unable to acquire view for "+d.OFFSET);Bt(o,t,r,n)}}}}const Oe=$(),mi=$();function Pi(s,e=Zt.OccludeAndTransparent,t=!0){const i=Jt(s),a=!(s[3]<1);return t?new gi({color:i,writeDepth:a,cullFace:z.Back,renderOccluded:e,isDecoration:!0}):new Xt({color:i,writeDepth:a,cullFace:z.Back,renderOccluded:e,isDecoration:!0})}const Ci=Object.freeze({calloutLength:40,calloutWidth:1,discRadius:27,focusMultiplier:1.1}),zi=Object.freeze({autoScaleRenderObjects:!1,worldSized:!0});function Di(s,e,t,i){const a=Re(E.get(),s,t),n=yi(a,je(E.get(),i,a),t,qt.get());Yt(n,n);const o=F(E.get(),e,n);return Math.atan2(o[1],o[0])}function yi(s,e,t,i){const a=te(E.get(),s),n=te(E.get(),e),o=je(E.get(),a,n);return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=0,i[4]=n[0],i[5]=n[1],i[6]=n[2],i[7]=0,i[8]=o[0],i[9]=o[1],i[10]=o[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}class xi{constructor(e,t=A.None){this.geometry=e,this.stateMask=t}}function Si(s,e){let t=null,i=null;return a=>{if(a.action==="cancel")return void(i!=null&&(i.execute({action:"cancel"}),t=null,i=null));const n={action:a.action,screenStart:a.start,screenEnd:a.screenPoint};a.action==="start"&&t==null&&(t=new V,i=new V,e(s,t,i,a.pointerType,n)),t!=null&&t.execute(n),a.action==="end"&&t!=null&&(t=null,i=null)}}function Ii(s,e){return s.events.on("drag",Si(s,e))}function Ni(s,e){const t=new Map;for(const i of e)t.set(i,Qt(s[i]));return i=>(t.forEach((a,n)=>{s[n]=a}),i)}const wi=()=>{};class V{constructor(){this.execute=wi}next(e,t=new V){return e!=null&&(this.execute=i=>{const a=e(i);a!=null&&t.execute(a)}),t}}var j;(function(s){s[s.WhenToolEditable=0]="WhenToolEditable",s[s.WhenToolNotEditable=1]="WhenToolNotEditable",s[s.Always=2]="Always"})(j||(j={}));class Ei{constructor(){this._isToolEditable=!0,this._manipulators=new Kt,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(e){this._isToolEditable=e}get length(){return this._manipulators.length}add(e,t=j.WhenToolEditable){this.addMany([e],t)}addMany(e,t=j.WhenToolEditable){for(const i of e){const a={manipulator:i,visibilityPredicate:t,attached:!1};this._manipulators.add(a),this._attached&&this._updateManipulatorAttachment(a)}}remove(e){for(let t=0;t<this._manipulators.length;t++)if(this._manipulators.at(t).manipulator===e){const i=this._manipulators.splice(t,1)[0];this._detachManipulator(i);break}}removeAll(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._manipulators.removeAll()}attach(){this._manipulators.forEach(e=>{this._updateManipulatorAttachment(e)}),this._attached=!0}detach(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach(({manipulator:e})=>e.destroy()),this._manipulators.destroy(),this._resourceContexts=null}on(e,t){return this._manipulators.on(e,i=>{t(i)})}forEach(e){for(const t of this._manipulators.items)e(t)}some(e){return this._manipulators.items.some(e)}toArray(){const e=[];return this.forEach(t=>e.push(t.manipulator)),e}intersect(e,t){let i=null,a=Number.MAX_VALUE;return this._manipulators.forEach(({manipulator:n,attached:o})=>{if(!o||!n.interactive)return;const r=n.intersectionDistance(e,t);r!=null&&r<a&&(a=r,i=n)}),i}_updateManipulatorAttachment(e){this._isManipulatorItemVisible(e)?this._attachManipulator(e):this._detachManipulator(e)}_attachManipulator(e){e.attached||(e.manipulator.attach&&e.manipulator.attach(this._resourceContexts),e.attached=!0)}_detachManipulator(e){if(!e.attached)return;const t=e.manipulator;t.grabbing=!1,t.dragging=!1,t.hovering=!1,t.selected=!1,t.detach&&t.detach(this._resourceContexts),e.attached=!1}_isManipulatorItemVisible(e){return e.visibilityPredicate===j.Always||(this._isToolEditable?e.visibilityPredicate===j.WhenToolEditable:e.visibilityPredicate===j.WhenToolNotEditable)}}let h=class extends ei{constructor(e){super(e),this.manipulators=new Ei,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[L.MANAGER,!0],[L.USER,!0]]),this._creationFinishedResolver=ti()}get active(){return this.view!=null&&this.view.activeTool===this}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this._syncVisible())}get editable(){return this.getEditableFlag(L.USER)}set editable(e){this.setEditableFlag(L.USER,e)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){this.view!=null?(this.view.focus(),this.onActivate()):ii.getLogger(this).error("Can't activate tool if view is not defined.")}deactivate(){this.onDeactivate()}handleInputEvent(e){this.onInputEvent(e)}handleInputEventAfter(e){this.onInputEventAfter(e)}setEditableFlag(e,t){this._editableFlags.set(e,t),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),e===L.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(e){return this._editableFlags.get(e)??!1}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(e){}onInputEventAfter(e){}get internallyEditable(){return this.getEditableFlag(L.USER)&&this.getEditableFlag(L.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized){if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};l([f({constructOnly:!0})],h.prototype,"view",void 0),l([f({readOnly:!0})],h.prototype,"active",null),l([f({value:!0})],h.prototype,"visible",null),l([f({value:!0})],h.prototype,"editable",null),l([f({readOnly:!0})],h.prototype,"manipulators",void 0),l([f({readOnly:!0})],h.prototype,"updating",null),l([f()],h.prototype,"cursor",null),l([f({readOnly:!0})],h.prototype,"automaticManipulatorSelection",void 0),l([f()],h.prototype,"hasFocusedManipulators",null),l([f()],h.prototype,"hasGrabbedManipulators",void 0),l([f()],h.prototype,"hasHoveredManipulators",void 0),l([f()],h.prototype,"firstGrabbedManipulator",void 0),l([f({readOnly:!0})],h.prototype,"created",void 0),l([f({readOnly:!0})],h.prototype,"removeIncompleteOnCancel",void 0),h=l([Me("esri.views.interactive.InteractiveToolBase")],h);let Ae=class extends h{constructor(s){super(s)}initialize(){this.addHandles(Fe(()=>this.analysisViewData.visible,s=>this.visible=s,Pe))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};Ae=l([Me("esri.views.interactive.AnalysisToolBase")],Ae);function ki(s,e){s.interactive=!0;const{tool:t,view:i}=s;i.activeTool=t;let a=si(e,()=>{i.activeTool===t&&(i.activeTool=null)});return ai(async n=>{await ni(()=>t==null||!t.active,n),a=oi(a)},e)}function Vi(s,e){return Fe(()=>s.interactive,()=>$i(s,e),Pe)}function $i(s,e){s.interactive?Ti(s,e):De(s)}function Ti(s,e){De(s);const{view:t,analysis:i}=s,a=new e({view:t,analysis:i,analysisViewData:s});return s.tool=a,t.tools.add(a),a}function De(s){const{view:e,tool:t}=s;t!=null&&(e.tools.remove(t),s.tool=null)}const Oi=Object.freeze(Object.defineProperty({__proto__:null,build:Ce},Symbol.toStringTag,{value:"Module"}));export{Ni as M,V as Y,xi as a,Vi as b,Di as c,Pi as d,Li as e,gi as f,Ci as h,zi as j,ki as l,Ae as o,De as v,yi as w,Ii as x};