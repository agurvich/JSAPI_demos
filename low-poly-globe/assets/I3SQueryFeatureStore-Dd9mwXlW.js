function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/geometryEngine-H_C2JNnV.js","assets/geometryEngineBase-Dfu--tgq.js","assets/index-BqO8XNEn.js","assets/index-rovX6Grx.css","assets/hydrated-Ck9twRRn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{e as c,y as p,c as q,b$ as P,S as U,bn as ye,_ as he,iJ as ge,an as fe,ke as me,bv as z,$ as Z,ct as Ee,cu as H,kf as Se,kg as we,dw as _e,ay as be,kh as Ie,iv as ve,bD as ie,aO as Re,aP as Fe,fI as xe,df as $e,a4 as Oe,az as Qe,dV as C,gz as T,dX as D,Z as N,a3 as L,af as je,u as Me,aU as ke,a as X,bG as Ce,iO as Te,dE as De,iw as Y,dd as K,c3 as Ne,bt as Ge,fN as Ae,ki as Pe}from"./index-BqO8XNEn.js";import{a as Q,n as ee,b as te}from"./TemporalSceneLayerView--vLLsUBw.js";import{x as Je}from"./WhereClause-CzNw9rAv.js";import{a as A}from"./RenderTexture-CJVw6otE.js";import{d as Ve}from"./FeatureFilter-CloPhsRR.js";import{$ as Be}from"./QueryEngine-DvE3z-Lx.js";import{n as Le}from"./optimizedFeatureQueryEngineAdapter-DTm3GyFo.js";import{o as k}from"./I3SMeshView3D-D914seCN.js";const oe="esri.views.3d.layers.i3s.I3SMeshViewFilter",j=()=>Oe.getLogger(oe);let g=class extends U{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){ye(()=>{var e;return((e=this.viewFilter)==null?void 0:e.geometry)||this.layerFilter!=null}).then(()=>this.loadAsyncModule(he(()=>import("./geometryEngine-H_C2JNnV.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>{this.destroyed||(this._geometryEngine=e)})))}get sortedObjectIds(){var t;if(((t=this.viewFilter)==null?void 0:t.objectIds)==null)return null;const e=ge(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){var t;const e=(t=this.viewFilter)==null?void 0:t.where;if(e==null||!e)return null;try{return Je.create(e,this.layerFieldsIndex)}catch(s){j().error(`Failed to parse filter where clause: ${s}`)}return null}addFilters(e,t,s,i){var l;const r=this.sortedObjectIds;r!=null&&e.push(y=>fe(r,!0,y)),this.addSqlFilter(e,this.parsedWhereClause),this.addTimeFilter(e,(l=this.viewFilter)==null?void 0:l.timeExtent);const o=Q(this._layerMaskGeometries),u=this._geometryEngine;if(o!=null&&this.layerFilter!=null&&u!=null){const y=this.layerFilter.spatialRelationship;e.push((d,f)=>ne(u,d,f,i,t,s,o,y))}const a=Q(this._viewMaskGeometries);if(a!=null&&this.viewFilter!=null&&u!=null){const y=this.viewFilter.spatialRelationship;e.push((d,f)=>ne(u,d,f,i,t,s,a,y))}}isMBSGeometryVisible(e,t,s){const i=Q(this._layerMaskGeometries),r=this._geometryEngine;if(i!=null&&this.layerFilter!=null&&r!=null){const u=this.layerFilter.spatialRelationship,a=i[0].spatialReference||t;return A(e,s,M,a)?re(r,M,i,a,u):(j().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const o=Q(this._viewMaskGeometries);if(o!=null&&this.viewFilter!=null&&r!=null){const u=this.viewFilter.spatialRelationship,a=o[0].spatialReference||t;return A(e,s,M,a)?re(r,M,o,a,u):(j().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=Q(this._viewMaskGeometries),t=Q(this._layerMaskGeometries);return e==null||t==null?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return e==null?null:this._geometryEngine==null?ee:e.spatialRelationship==="disjoint"?e.geometries.map(t=>({type:"polygon",rings:t.rings,spatialReference:t.spatialReference,cache:{}})):[e.geometries.reduce((t,s)=>(t.rings=[...t.rings,...s.rings],t),{type:"polygon",rings:[],spatialReference:e.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(this.viewFilter==null)return null;const{geometry:e}=this.viewFilter;if(e==null)return null;if(this.viewFilter==null||this._geometryEngine==null)return ee;const{distance:t,units:s}=this.viewFilter,i=this.viewFilter.spatialRelationship,r=e.type==="mesh"?e.extent:e;if(t==null||t===0)return G(this._geometryEngine,r,i);const o=s||me(r.spatialReference);if(r.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(r,t,o);return G(this._geometryEngine,l,i)}const u=z(r,Z.WGS84);if(u!=null){const l=z(this._geometryEngine.geodesicBuffer(u,t,o),r.spatialReference);return G(this._geometryEngine,l,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Ee().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let a=null;try{a=H(r,Z.WGS84)}catch{}if(a)try{a=H(this._geometryEngine.geodesicBuffer(a,t,o),r.spatialReference)}catch{a=null}return a||j().error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${r.spatialReference.wkid}) to WGS84.`),G(this._geometryEngine,a,i)}get updating(){return te(this._layerMaskGeometries)||te(this._viewMaskGeometries)}static checkSupport(e){return e!=null&&(!!Ke(e.spatialRelationship)||(j().warn(`Filters with spatialRelationship other than ${ae.join(", ")} are not supported for mesh scene layers`),!1))}};c([p()],g.prototype,"layerFilter",void 0),c([p({type:Ve})],g.prototype,"viewFilter",void 0),c([p()],g.prototype,"layerFieldsIndex",void 0),c([p()],g.prototype,"loadAsyncModule",void 0),c([p()],g.prototype,"addSqlFilter",void 0),c([p()],g.prototype,"addTimeFilter",void 0),c([p({readOnly:!0})],g.prototype,"sortedObjectIds",null),c([p({readOnly:!0})],g.prototype,"parsedWhereClause",null),c([p({readOnly:!0})],g.prototype,"parsedGeometry",null),c([p({readOnly:!0})],g.prototype,"_layerMaskGeometries",null),c([p({readOnly:!0})],g.prototype,"_viewMaskGeometries",null),c([p()],g.prototype,"updating",null),c([p()],g.prototype,"_projectionEngineLoaded",void 0),c([p()],g.prototype,"_geometryEngine",void 0),g=c([q(oe)],g);const ae=(n=>n)(["contains","intersects","disjoint"]);function Ke(n){return n!=null&&ae.includes(n)}var h;function G(n,e,t){if(e==null)return null;if(t==="disjoint"&&e.type==="polygon"){const s=e.rings.length,i=e.spatialReference,r=new Array(s);for(let a=0;a<s;++a){const l=Se(1/0,1/0,-1/0,-1/0);we(l,e.rings[a]),r[a]={type:"polygon",rings:[e.rings[a]],spatialReference:i,cache:{},aabr:l}}r.sort((a,l)=>a.aabr[0]-l.aabr[0]);const o=new Set,u=new Qe;for(let a=0;a<r.length;++a){const l=r[a],y=l.aabr[0];o.forEach(d=>{if(y>=d.aabr[2])return void o.delete(d);if(l.aabr[1]>d.aabr[3]||l.aabr[3]<d.aabr[1]||!n.intersects(l,d))return;l.rings=l.rings.concat(d.rings),_e(l.aabr,d.aabr,l.aabr),l.cache={},o.delete(d);const f=be(r,d,r.length,u);r.splice(f,1)}),o.add(l)}for(const a of r)a.aabr=void 0;return r}return[e]}function re(n,e,t,s,i){if(e[3]>=.5*(e[2]+Ie(s).radius))return!0;const r=le(n,e,s);return t.every(o=>ue(n,o,r,i)!==h.DISCARD)}function ne(n,e,t,s,i,r,o,u){const a=o[0].spatialReference||i.spatialReference;if(!A(t.node.serviceMbsInIndexSR,r,M,a))return void j().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const l=le(n,M,a),y=We(u,i,a,s,t.objectHandle);for(const d of o){if(e.length===0)return;switch(ue(n,d,l,u)){case h.DISCARD:return void(e.length=0);case h.KEEP:continue}ve(e,t.featureIds,f=>qe(n,d,f,y))}}(function(n){n[n.KEEP=0]="KEEP",n[n.DISCARD=1]="DISCARD",n[n.TEST=2]="TEST"})(h||(h={}));const M=ie(0,0,0,0);function We(n,e,t,s,i){const r=e.renderSpatialReference,o=new Map,u={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:t};u.rings[0][3]=u.rings[0][0];const a={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let l,y;switch(n){case"intersects":l=(d,f,b)=>d.intersects(f,b)?h.KEEP:h.TEST,y=W;break;case"contains":l=(d,f,b)=>d.contains(f,b)?h.TEST:h.DISCARD,y=W;break;default:l=(d,f,b)=>d.disjoint(f,b)?h.TEST:h.DISCARD,y=ce}return{collection:s,object:i,type:n,maskSR:t,renderSR:r,aabbCache:o,triangle:u,positions:a,triangleTest:l,geometryTest:y}}function le(n,e,t){const s={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:t},i=!Re(t)&&!Fe(t),r=Number.isNaN(e[3])?0:xe(e[3],0,2*$e.radius),o=i?n.buffer(s,r,1):n.geodesicBuffer(s,r,1);return o.type="polygon",o}function ue(n,e,t,s){switch(s){case"intersects":case"contains":return W(n,e,t);case"disjoint":return ce(n,e,t)}}function W(n,e,t){return n.intersects(e,t)?n.contains(e,t)?h.KEEP:h.TEST:h.DISCARD}function ce(n,e,t){return n.intersects(e,t)?n.contains(e,t)?h.DISCARD:h.TEST:h.KEEP}function qe(n,e,t,s){const{collection:i,object:r,renderSR:o,maskSR:u,geometryTest:a,aabbCache:l}=s;let y=l.get(t);if(!y){const I=i.getObjectTransform(r);i.getComponentAabb(r,t,_);const E=[C(_[0],_[1],0),C(_[0],_[4],0),C(_[3],_[4],0),C(_[3],_[1],0)];for(let m=0;m<4;++m)T(E[m],E[m],I.rotationScale),D(E[m],E[m],I.position),N(E[m],o,E[m],u);y={type:"polygon",rings:[E],spatialReference:u,cache:{}},y.rings[0][4]=y.rings[0][0],l.set(t,y)}switch(a(n,e,y)){case h.DISCARD:return!1;case h.KEEP:return!0}const{triangle:d,triangleTest:f,positions:b}=s,R=d.rings[0][0],F=d.rings[0][1],x=d.rings[0][2],O=i.getObjectTransform(r);i.getComponentPositions(r,t,b);const{indices:J,data:w,stride:V,startIndex:de,endIndex:pe}=b;for(let I=de;I<pe;I+=3){const E=V*J[I],m=V*J[I+1],B=V*J[I+2];switch(L(R,w[E],w[E+1],w[E+2]),L(F,w[m],w[m+1],w[m+2]),L(x,w[B],w[B+1],w[B+2]),T(R,R,O.rotationScale),T(F,F,O.rotationScale),T(x,x,O.rotationScale),D(R,R,O.position),D(F,F,O.position),D(x,x,O.position),N(R,o,R,u),N(F,o,F,u),N(x,o,x,u),f(n,e,d)){case h.DISCARD:return!1;case h.KEEP:return!0}}return s.type!=="intersects"}const _=P(),Ue=Be;let v=class extends U{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new je({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e)}initialize(){this.addHandles(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=Me(this._dataQueryEngineInstance),this._set("layerView",null)}async executeQueryForCount(e,t){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:s,extent:i}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:s,extent:ke.fromJSON(i)}}async executeQueryForIds(e,t){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const s=this._ensureQueryJSON(e);if(s.returnGeometry)throw new X("unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(s.returnCentroid)throw new X("unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const i=await this._dataQueryEngine.executeQuery(s,t),r=Ce.fromJSON(i);return r.features.forEach(o=>o.geometry=null),r}_ensureQueryJSON(e){return e==null?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var a;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||Te,t="esriGeometryPolygon",s=((a=this.layer.fieldsIndex)==null?void 0:a.toJSON())||new De([]),i=this.layerView.view.resourceController.scheduler,r=this.spatialReference.toJSON(),o=this.priority,u=this.spatialIndex;return this._dataQueryEngineInstance=new Ue({hasZ:!0,hasM:!1,geometryType:t,fieldsIndex:s,timeInfo:null,spatialReference:r,objectIdField:e,featureStore:u,scheduler:i,priority:o}),this._dataQueryEngineInstance}};c([p({constructOnly:!0})],v.prototype,"layerView",void 0),c([p({constructOnly:!0})],v.prototype,"priority",void 0),c([p({constructOnly:!0})],v.prototype,"spatialIndex",void 0),c([p()],v.prototype,"spatialReference",null),c([p()],v.prototype,"layer",null),c([p()],v.prototype,"defaultQueryJSON",null),v=c([q("esri.views.3d.layers.i3s.I3SQueryEngine")],v);class lt{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){var o;const{meta:t,index:s}=e,i={};this._objectIdField&&(i[this._objectIdField]=e.id);const r=(o=t.attributeInfo)==null?void 0:o.attributeData;if(r!=null)for(const u of Object.keys(r))i[u]=Y(r[u],s);return i}getAttribute(e,t){var o;if(t===this._objectIdField)return e.id;const{meta:s,index:i}=e,r=(o=s.attributeInfo)==null?void 0:o.attributeData;return r!=null?Y(r[t],i):null}getGeometry(e){if(e.geometry)return e.geometry;const[t,s,i,r,o]=this._getFeatureExtent(e,se);return new K([5],[t,s,i,r,s,i,r,o,i,t,o,i,t,s,i])}getCentroid(e,t){if(e.geometry)return Le(new K,e.geometry,t.hasZ,t.hasM);const[s,i,r,o,u,a]=this._getFeatureExtent(e,se);return new K([0],[(s+o)/2,(i+u)/2,(r+a)/2])}cloneWithGeometry(e,t){const{id:s,index:i,meta:r}=e;return{id:s,index:i,meta:r,geometry:t}}}const se=P(),ze=P();let $=class extends U{constructor(n){super(n),this.events=new Ge}forEach(n){this.forAllFeatures(e=>(n(e),k.CONTINUE))}forEachBounds(n,e){const t=this.getFeatureExtent;for(const s of n)e(t(s,ze))}forEachInBounds(n,e){this.forAllFeatures(t=>{const s=this.getFeatureExtent(t,Ze);return Ae(n,Pe(s,He))&&e(t),k.CONTINUE},t=>{if(A(t.node.serviceMbsInIndexSR,this.sourceSpatialReference,S,this.viewSpatialReference),S[0]>=n[0]&&S[2]<=n[2]&&S[1]>=n[1]&&S[3]<=n[3])return k.CONTINUE;const s=Math.max(n[0],Math.min(S[0],n[2])),i=Math.max(n[1],Math.min(S[1],n[3])),r=S[0]-s,o=S[1]-i;return r*r+o*o<=S[3]*S[3]?k.CONTINUE:k.SKIP})}};c([p({constructOnly:!0})],$.prototype,"featureAdapter",void 0),c([p({constructOnly:!0})],$.prototype,"forAllFeatures",void 0),c([p({constructOnly:!0})],$.prototype,"getFeatureExtent",void 0),c([p({constructOnly:!0})],$.prototype,"sourceSpatialReference",void 0),c([p({constructOnly:!0})],$.prototype,"viewSpatialReference",void 0),$=c([q("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],$);const S=ie(0,0,0,0),Ze=P(),He=Ne();export{g as P,v as d,$ as h,lt as o};
