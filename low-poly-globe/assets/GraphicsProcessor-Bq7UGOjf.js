import{e as n,S as g,v as b,h as f,C as m,a8 as C,a9 as w,d as p,f as S,u,aa as V,ab as v,ac as E,ad as x,ae as h,af as _,k as c,V as O,A as G,y as a,c as P,x as A,ag as j,ah as H}from"./index-BqO8XNEn.js";import{k as I,p as R,u as z,s as D,a as k}from"./Graphics3DObjectStates-DDkAjYii.js";let r=class extends g{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=b.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new f}initialize(){const{layer:e}=this,i="effectiveScaleRange"in e?e:null,l=this.scaleVisibilityEnabled&&i!=null,t=new I({owner:this,layer:this.owner.layer,preferredUpdatePolicy:m.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(s,o)=>new R({graphicsCoreOwner:this,graphicsCore:s,queryGraphicUIDsInExtent:o,elevationProvider:this.view.elevationProvider}),scaleVisibility:l?(s,o)=>new z({graphicsCoreOwner:this,layer:i,queryGraphicUIDsInExtent:o,graphicsCore:s,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:s=>new D(s)}});if(this._set("graphicsCore",t),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new k({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const s=this.owner;this._updatingHandles.add(()=>s.fullOpacity,()=>this.graphicsCore.opacityChange())}if("elevationInfo"in e){const s=e;this._updatingHandles.add(()=>s.elevationInfo,(o,y)=>{C(o,y)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())})}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if(w(e))return;throw e}this.destroyed||(this.addHandles(p(()=>this.view.clippingArea,()=>this._updateClippingExtent(),S)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",u(this.frustumVisibility)),this._set("graphicsCore",u(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var e;return(e=this.graphicsCore)==null?void 0:e.scaleVisibility}get elevationAlignment(){var e;return(e=this.graphicsCore)==null?void 0:e.elevationAlignment}get objectStates(){var e;return(e=this.graphicsCore)==null?void 0:e.objectStates}get scaleVisibilitySuspended(){return!(this.scaleVisibility==null||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return this.frustumVisibility!=null&&this.frustumVisibility.suspended}get suspended(){return this.owner.suspended??!1}get updating(){var e;return!!((e=this.graphicsCore)!=null&&e.updating||this.scaleVisibility!=null&&this.scaleVisibility.updating||this.frustumVisibility!=null&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner.fullOpacity??1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,i,l){const t=V(e,{renderer:i,arcade:l});if(t!=null&&t.color){const s=t.color;s[0]=s[0]/255,s[1]=s[1]/255,s[2]=s[2]/255}return t}getRenderingInfoAsync(e,i,l,t){return v(e,{renderer:i,arcade:l,...t})}getHit(e){if(this.owner.loadedGraphics){const i=this.owner.loadedGraphics.find(l=>l.uid===e);if(i){const l=this.layer instanceof E?this.layer:null,t=x(i,l);return{type:"graphic",graphic:t,layer:t.layer}}}return null}whenGraphicBounds(e,i){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,i):Promise.reject()}computeAttachmentOrigin(e,i){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,i):null}getSymbolLayerSize(e,i){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,i):null}maskOccludee(e){const{set:i,handle:l}=this.objectStates.acquireSet(h.MaskOccludee,null);return this.objectStates.setUid(i,e.uid),l}highlight(e){if(e instanceof _)return d;if(typeof e=="number")return this.highlight([e]);if(e instanceof c)return this.highlight([e]);if(e instanceof O&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof c){const i=e.map(s=>s.uid),{set:l,handle:t}=this.objectStates.acquireSet(h.Highlight,null);return this.objectStates.setUids(l,i),t}if(typeof e[0]=="number"){const i=e,{set:l,handle:t}=this.objectStates.acquireSet(h.Highlight,null);return this.objectStates.setObjectIds(l,i),t}}return d}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:i}=this;if(e==null&&i==null)return;const l=({computedExtent:t,extentPadding:s})=>{this._suspendResumeExtent=j(t,this._suspendResumeExtent,H,s),e!=null&&e.setExtent(this._suspendResumeExtent),i!=null&&i.setExtent(this._suspendResumeExtent)};this.addHandles(p(()=>{var t,s;return{computedExtent:(t=this.graphicsCore)==null?void 0:t.computedExtent,extentPadding:(s=this.graphicsCore)==null?void 0:s.extentPadding}},t=>l(t),G))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};n([a()],r.prototype,"type",void 0),n([a({constructOnly:!0})],r.prototype,"owner",void 0),n([a()],r.prototype,"layer",null),n([a()],r.prototype,"view",null),n([a({constructOnly:!0})],r.prototype,"graphicsCore",void 0),n([a()],r.prototype,"scaleVisibility",null),n([a({constructOnly:!0})],r.prototype,"frustumVisibility",void 0),n([a()],r.prototype,"elevationAlignment",null),n([a()],r.prototype,"objectStates",null),n([a()],r.prototype,"scaleVisibilitySuspended",null),n([a({readOnly:!0})],r.prototype,"frustumVisibilitySuspended",null),n([a()],r.prototype,"suspended",null),n([a({readOnly:!0})],r.prototype,"updating",null),n([a()],r.prototype,"loadedGraphics",null),n([a()],r.prototype,"fullOpacity",null),n([a()],r.prototype,"slicePlaneEnabled",null),n([a()],r.prototype,"drapeSourceType",void 0),n([a()],r.prototype,"updatePolicy",null),n([a({constructOnly:!0})],r.prototype,"scaleVisibilityEnabled",void 0),n([a({constructOnly:!0})],r.prototype,"frustumVisibilityEnabled",void 0),n([a()],r.prototype,"initializePromise",void 0),r=n([P("esri.views.3d.layers.graphics.GraphicsProcessor")],r);const d=A();export{r as O};
