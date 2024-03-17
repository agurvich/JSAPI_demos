function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/featureLayerUtils-BLnpoA7O.js","assets/index-O3Mu8AMX.js","assets/index-rovX6Grx.css","assets/utils-xIOXnkFg.js","assets/fetchService-oBOnmIbI.js","assets/requestPresets-piqToxCR.js","assets/FeatureLayerSource-s-oykCP4.js","assets/editingSupport-C0lgLa5s.js","assets/clientSideDefaults-CLavYq3M.js","assets/QueryEngineCapabilities-CTDe3LlQ.js","assets/editsZScale-yp68Mlru.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{f_ as U,bs as z,ew as L,bG as V,a as m,aU as H,j as K,f2 as B,g as X,a4 as T,hl as R,e as a,kj as Y,k as P,fJ as ee,y as n,c as E,V as M,S as te,hE as re,d2 as ie,d4 as se,d3 as ae,cT as oe,cU as ne,cV as le,cW as ue,dj as de,di as pe,cR as ye,$ as ce,w as he,cZ as fe,gQ as me,kk as ge,hF as be,bh as I,kl as we,km as ve,cF as _e,ex as x,h1 as G,hr as Fe,hs as Se,h8 as Q,hG as Te,cC as Ie,kn as Ee,hm as W,hH as $e,hI as De,hJ as Oe,ko as je,g0 as Ce,fj as Me,_ as A,hx as qe,c7 as Le,hK as Re,hL as Pe,hM as xe,af as Ge,hN as Ae,hO as ke,hP as Je,hQ as Ne,hR as Ve,aQ as Qe,bd as We,cK as Ze,hS as Ue,ba as y,bA as $,kp as k,aE as D,gH as ze,kq as He,kr as Ke,d6 as Be,h2 as Xe,h3 as Ye,h4 as O,ks as J,hU as et,kt as tt,d7 as rt,ku as it,g9 as st,ga as at,h6 as ot,g8 as nt,h7 as lt,bb as ut,gb as dt,ac as pt}from"./index-O3Mu8AMX.js";import{y as yt}from"./FormTemplate-CP6JI4Hs.js";import{i as ct}from"./editsZScale-yp68Mlru.js";import{p as ht}from"./FeatureEffectLayer-DhrENgLp.js";import{D as ft}from"./FeatureLayerBase-Dh_ZsCRO.js";import{c as mt}from"./FeatureReductionLayer-CFnTbrdk.js";import{c as gt}from"./OrderedLayer-CWnAb55f.js";import{f as bt}from"./TemporalLayer-DaU3mkeG.js";import{e as wt}from"./versionUtils-nYA_KIDG.js";import{S as _}from"./TopFeaturesQuery-CA3pufQA.js";import{A as F}from"./interfaces-CL2NbQte.js";import"./FeatureEffect-CEEtHmXX.js";import"./FeatureFilter-8HG2xPNt.js";let vt=0,g=class extends U.LoadableMixin(z(M)){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}get _workerGeometryType(){var t;const e=(t=this.layer)==null?void 0:t.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);L(e,this.layer.spatialReference,r);const i=V.fromJSON(r);if(!this._requiresClientGraphicMapping())return i;const s=this.layer.objectIdField;for(const l of i.features){const u=l.attributes[s],c=this._idToClientGraphic.get(u);c&&(l.geometry=c.geometry)}return i.geometryType=this.layer.geometryType,i}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new m("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return L(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:H.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _applyEdits(e){if(!this._connection)throw new m("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],s=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const l=d=>"objectId"in d&&d.objectId!=null?d.objectId:"attributes"in d&&d.attributes[t]!=null?d.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const d of e.deleteFeatures){const f=l(d);f!=null&&i.push(f)}const u=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const d of e.updateFeatures)if(s.push(this._serializeFeature(d)),u){const f=l(d);f!=null&&u.set(f,d)}}ct(r?r.features:null,s,this.layer.spatialReference);const{fullExtent:c,featureEditResults:p}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:s,deletes:i});return this.fullExtent=c,r&&r.finish(p.uidToObjectId),this._updateClientGraphicIds(u,p),this._createEditsResult(p)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const r=[];for(const{geometry:i}of e)i==null||i.type!=="mesh"||i.hasExtent||i.loaded||r.push(i.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const i=e.get(r.objectId);i!=null&&this._addIdToClientGraphic(i)}for(const r of t.deleteResults)r.success&&this._idToClientGraphic.delete(r.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let i=null;for(let l=0;l<e.length;l++){const u=e[l],c=this._serializeFeature(u);i||u.geometry==null||(i=u.geometry.type),r[l]=c,t.set(`${c.uid}`,u)}const s=this;return{features:r,inferredGeometryType:i,finish(l){const u=s.sourceJSON.objectIdField;for(const c in l){const p=l[c],d=t.get(c);d&&(d.attributes||(d.attributes={}),p===-1?delete d.attributes[u]:d.attributes[u]=p,s._addIdToClientGraphic(d))}}}}_addIdToClientGraphic(e){var i;if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=(i=e.attributes)==null?void 0:i[t];r!=null&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){var e,t;return((e=this.layer)==null?void 0:e.geometryType)??((t=this.sourceJSON)==null?void 0:t.geometryType)}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),i=(vt++).toString();return r?{uid:i,geometry:r.toJSON(),attributes:t}:{uid:i,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?K.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await B("MemorySourceWorker",{strategy:X("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:i,hasM:s,hasZ:l,timeInfo:u,dateFieldsTimeZone:c}=this.layer,p=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const d=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",w=>{T.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),w.preventDefault()}));const f={features:d.features,fields:t==null?void 0:t.map(w=>w.toJSON()),geometryType:R.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&s,hasZ:this._layerOrSourceGeometryType==="mesh"||l,objectIdField:i,spatialReference:p?null:r&&r.toJSON(),timeInfo:(u==null?void 0:u.toJSON())??null,dateFieldsTimeZone:c},b=await this._connection.invoke("load",f,{signal:e});for(const w of b.warnings)T.getLogger(this.layer).warn("#load()",`${w.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:w});b.featureErrors.length&&T.getLogger(this.layer).warn("#load()",`Encountered ${b.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:b.featureErrors});const q=b.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(d.inferredGeometryType)&&(q.geometryType=R.toJSON(d.inferredGeometryType)),this.sourceJSON=q,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),d.finish(b.assignedObjectIds)}};a([Y({Type:P,ensureType:ee(P)})],g.prototype,"itemType",void 0),a([n()],g.prototype,"type",void 0),a([n({constructOnly:!0})],g.prototype,"layer",void 0),a([n({readOnly:!0})],g.prototype,"_workerGeometryType",null),a([n()],g.prototype,"sourceJSON",void 0),g=a([E("esri.layers.graphics.sources.MemorySource")],g);let v=class extends te{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};a([n()],v.prototype,"updating",void 0),a([n()],v.prototype,"status",void 0),v=a([E("esri.layers.support.PublishingInfo")],v);const _t=v,Z="esri.layers.mixins.PublishableLayer",Ft=Symbol(Z),St=e=>{var t;let r=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const i=this._get("publishingInfo");if(i)return i;const s=new _t;return this._checkPublishingStatus(s),s}_checkPublishingStatus(i){let u=0;const c=async d=>{let f;i.updating=!0;try{f=await this.fetchPublishingStatus()}catch{f="unavailable"}f!=="published"&&f!=="unavailable"||(i.status==="publishing"&&this.refresh(),p.remove()),i.status=f,i.updating=!1,p.removed||(u=setTimeout(c,d,d+125))},p={removed:!1,remove(){this.removed=!0,clearTimeout(u)}};this.when().catch(()=>p.remove()),c(250),this.addHandles(p)}};return t=Ft,a([n({readOnly:!0,clonable:!1})],r.prototype,"publishingInfo",null),r=a([E(Z)],r),r},h="FeatureLayer";function S(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function N(e){return e&&e instanceof M}const j=dt();function C(e,t,r){const i=!!(r!=null&&r.writeLayerSchema);return{enabled:i,ignoreOrigin:i}}let o=class extends ft(mt(ht(St(re(ie(gt(bt(se(ae(oe(ne(le(ue(de(pe(ye(pt))))))))))))))))){constructor(...e){super(...e),this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=ce.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=he(async(t,r,i)=>{const{save:s,saveAs:l}=await A(()=>import("./featureLayerUtils-BLnpoA7O.js"),__vite__mapDeps([0,1,2,3,4,5]));switch(t){case F.SAVE:return s(this,r);case F.SAVE_AS:return l(this,i,r)}})}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){var i;const t=e!=null?e.signal:null;if((i=this.portalItem)!=null&&i.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(s=>this.initLayerProperties(s))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(fe).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const s=await this._fetchFirstValidLayerId(t);s!=null&&(this.layerId=s)}if(!this.url&&!this._hasMemorySource())throw new m("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>me(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}readCapabilities(e,t){return t=t.layerDefinition||t,ge(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){var e;return!(this.loaded&&!((e=this.capabilities)!=null&&e.operations.supportsEditing))&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return be(this)}readIsTable(e,t){return(t=(t==null?void 0:t.layerDefinition)??t).type==="Table"||!t.geometryType}writeIsTable(e,t,r,i){i!=null&&i.writeLayerSchema&&I(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return we(t.layerDefinition||t)}readObjectIdField(e,t){return ve(t.layerDefinition||t)}get parsedUrl(){const e=_e(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=x(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=x(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){G(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){var s;t=t.layerDefinition||t;const i=(s=t.drawingInfo)==null?void 0:s.renderer;if(i){const l=Fe(i,t,r)??void 0;return l||T.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),l}return Se(t,r)}set source(e){const t=this._get("source");t!==e&&(N(t)&&this._resetMemorySource(t),N(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof M?new g({layer:this,items:e}):e:null}readSource(e,t){const r=V.fromJSON(t.featureSet);return new g({layer:this,items:(r==null?void 0:r.features)??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r==null?void 0:r.creatorField,s=r==null?void 0:r.editorField;return e=e==null?void 0:e.map(l=>Q.fromJSON(l)),this._fixTemplates(e,i),this._fixTemplates(e,s),e}readTitle(e,t){var s,l,u;const r=((s=t.layerDefinition)==null?void 0:s.name)??t.name,i=t.title||((l=t.layerDefinition)==null?void 0:l.title);if(r){const c=(u=this.portalItem)==null?void 0:u.title;if(this.sublayerTitleMode==="item-title")return this.url?Te(this.url,r):r;let p=r;if(!p&&this.url){const d=Ie(this.url);d!=null&&(p=d.title)}return p?(this.sublayerTitleMode==="item-title-and-service-name"&&c&&c!==p&&(p=c+" - "+p),Ee(p)):void 0}if(this.sublayerTitleMode==="item-title"&&i)return i}readTitleFromWebMap(e,t){var r;return t.title||((r=t.layerDefinition)==null?void 0:r.name)}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(s=>s.name.toLowerCase()===r);i&&(r=i.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r==null?void 0:r.creatorField,s=r==null?void 0:r.editorField;return e==null?void 0:e.map(l=>(l=W.fromJSON(l),this._fixTemplates(l.templates,i),this._fixTemplates(l.templates,s),l))}readVisible(e,t){var r;return((r=t.layerDefinition)==null?void 0:r.defaultVisibility)!=null?!!t.layerDefinition.defaultVisibility:t.visibility!=null?!!t.visibility:void 0}async addAttachment(e,t){return $e(this,e,t,h)}async updateAttachment(e,t,r){return De(this,e,t,r,h)}async applyEdits(e,t){return Oe(this,e,t)}async uploadAssets(e,t){return je(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Ce(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await Me(A(()=>import("./FeatureLayerSource-s-oykCP4.js"),__vite__mapDeps([6,1,2,7,8,9,10])),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=qe(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,r=Le(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){return Re(this,e,t,h)}async fetchRecomputedExtents(e){return Pe(this,e,h)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(i==null)return null;let s=null;return r==null||r.some(l=>{const{id:u}=l;return u!=null&&(u.toString()===i.toString()&&(s=l),!!s)}),s}getFieldDomain(e,t){const r=t==null?void 0:t.feature,i=this.getFeatureType(r);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return xe(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(Ge.from(e)??r.createQuery(),t);if(i!=null&&i.features)for(const s of i.features)s.layer=s.sourceLayer=r;return i}async queryObjectIds(e,t){return Ae(this,e,t,h)}async queryFeatureCount(e,t){return ke(this,e,t,h)}async queryExtent(e,t){return Je(this,e,t,h)}async queryRelatedFeatures(e,t){return Ne(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return Ve(this,e,t,h)}async queryTopFeatures(e,t){var l;const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!((l=i==null?void 0:i.query)!=null&&l.supportsTopFeaturesQuery))throw new m(h,"Layer source does not support queryTopFeatures capability");const s=await r.queryTopFeatures(_.from(e),t);if(s!=null&&s.features)for(const u of s.features)u.layer=u.sourceLayer=this;return s}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!(i!=null&&i.query.supportsTopFeaturesQuery))throw new m(h,"Layer source does not support queryTopObjectIds capability");return r.queryTopObjectIds(_.from(e),t)}async queryTopFeaturesExtent(e,t){var s;const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!((s=i==null?void 0:i.query)!=null&&s.supportsTopFeaturesQuery))throw new m(h,"Layer source does not support queryTopExtents capability");return r.queryTopExtents(_.from(e),t)}async queryTopFeatureCount(e,t){var s;const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!((s=i==null?void 0:i.query)!=null&&s.supportsTopFeaturesQuery))throw new m(h,"Layer source does not support queryFeatureCount capability");return r.queryTopCount(_.from(e),t)}read(e,t){const r=e.featureCollection;if((r||e.type==="Feature Collection")&&(this.resourceInfo=e),r){const i=r.layers;i&&i.length===1&&(super.read(i[0],t),r.showLegend!=null&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:(t==null?void 0:t.origin)??void 0,writeLayerSchema:(t==null?void 0:t.writeLayerSchema)??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:s}=t;if(this.dynamicDataSource)return s==null||s.push(S(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if((r==="web-map"||r==="web-scene")&&i!=="tables")return s==null||s.push(S(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return s==null||s.push(S(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&(r==="web-map"||r==="web-scene")&&i==="tables")return s==null||s.push(S(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new m(h,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){var t;return!!this.loaded&&(((t=this.source)==null?void 0:t.type)==="memory"||wt(this,e))}async save(e){return this._debouncedSaveOperations(F.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,t,e)}_readEditingEnabled(e,t,r){var s;let i=(s=e.layerDefinition)==null?void 0:s.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&(r==null?void 0:r.origin)==="web-map"&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,r,i){var s,l;if(!e){const u=(l=(s=this.capabilities)==null?void 0:s.operations)!=null&&l.supportsSync?"Query,Sync":"Query";I("layerDefinition.capabilities",u,t),r&&!(i!=null&&i.writeLayerSchema)&&(t.capabilities=u)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstValidLayerId(e){return Qe(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const r=t.data;if(r)return this.findFirstValidLayerId(r)})}async initLayerProperties(e){var t;return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(t=this.portalItem)==null?void 0:t.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),G(this.renderer,this.fieldsIndex),We(this.timeInfo,this.fieldsIndex),Ze(this,{origin:"service"})}async hasDataChanged(){return Ue(this)}async fetchPublishingStatus(){const e=this.source;return e!=null&&e.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(i=>i.type==="geometry")||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(r=>{var s;const i=(s=r.prototype)==null?void 0:s.attributes;i&&t&&delete i[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new m("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new m("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this.addHandles([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};a([y("service","capabilities")],o.prototype,"readCapabilities",null),a([n({json:{origins:{"web-scene":{write:!1}},write:!0}})],o.prototype,"charts",void 0),a([n({readOnly:!0})],o.prototype,"createQueryVersion",null),a([n({json:{read:{source:"layerDefinition.copyrightText"}}})],o.prototype,"copyright",void 0),a([n({json:{read:{source:"layerDefinition.displayField"}}})],o.prototype,"displayField",void 0),a([n({types:He,readOnly:!0})],o.prototype,"defaultSymbol",void 0),a([n({type:Ke})],o.prototype,"dynamicDataSource",void 0),a([n({type:Boolean})],o.prototype,"editingEnabled",null),a([y(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],o.prototype,"readEditingEnabled",null),a([y("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],o.prototype,"readEditingEnabledFromWebMap",null),a([$(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],o.prototype,"writeEditingEnabled",null),a([$("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],o.prototype,"writeEditingEnabledToWebMap",null),a([n({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),a([n({...j.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:C}}}}})],o.prototype,"fields",void 0),a([n(j.fieldsIndex)],o.prototype,"fieldsIndex",void 0),a([n({type:yt,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"formTemplate",void 0),a([n({json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([n({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:C,writer(e,t,r){const i=e?k.toJSON(e):null;i&&I(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:k.read}}})],o.prototype,"geometryType",void 0),a([n({json:{read:{source:"layerDefinition.hasM"}}})],o.prototype,"hasM",void 0),a([n({json:{read:{source:"layerDefinition.hasZ"}}})],o.prototype,"hasZ",void 0),a([n(Be)],o.prototype,"id",void 0),a([n({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],o.prototype,"infoFor3D",void 0),a([n({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],o.prototype,"isTable",void 0),a([y("service","isTable",["type","geometryType"]),y("isTable",["layerDefinition.type","layerDefinition.geometryType"])],o.prototype,"readIsTable",null),a([$("web-map","isTable")],o.prototype,"writeIsTable",null),a([n(Xe)],o.prototype,"labelsVisible",void 0),a([n({type:[Ye],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:O,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:O,write:{enabled:!0,layerContainerTypes:J}}},name:"layerDefinition.drawingInfo.labelingInfo",read:O,write:!0}})],o.prototype,"labelingInfo",void 0),a([n((()=>{const e=D(et);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(t,r,i){I(i,tt(t),r)}}},e})())],o.prototype,"opacity",void 0),a([n(rt)],o.prototype,"legendEnabled",void 0),a([n({type:["show","hide"],json:(()=>{const e=D(it.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],o.prototype,"listMode",void 0),a([y("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdField",null),a([n({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:C}}}}})],o.prototype,"objectIdField",void 0),a([y("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdField",null),a([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),a([n(j.outFields)],o.prototype,"outFields",void 0),a([n({readOnly:!0})],o.prototype,"parsedUrl",null),a([n({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),a([n(st)],o.prototype,"popupEnabled",void 0),a([n({type:at,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),a([n({types:ot,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:nt,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:J,overridePolicy:(e,t,r)=>({ignoreOrigin:r==null?void 0:r.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r==null?void 0:r.writeLayerSchema})}}})],o.prototype,"renderer",null),a([y("service","renderer",["drawingInfo.renderer","defaultSymbol"]),y("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],o.prototype,"readRenderer",null),a([n()],o.prototype,"resourceInfo",void 0),a([n((()=>{const e=D(lt);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],o.prototype,"screenSizePerspectiveEnabled",void 0),a([n({clonable:!1})],o.prototype,"source",null),a([ze("source")],o.prototype,"castSource",null),a([y("portal-item","source",["featureSet"]),y("web-map","source",["featureSet"])],o.prototype,"readSource",null),a([n({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],o.prototype,"spatialReference",void 0),a([n({type:Number})],o.prototype,"subtypeCode",void 0),a([n({type:[Q]})],o.prototype,"templates",void 0),a([y("templates",["editFieldsInfo","creatorField","editorField","templates"])],o.prototype,"readTemplates",null),a([n({type:ut})],o.prototype,"timeInfo",void 0),a([n()],o.prototype,"title",void 0),a([y("service","title",["name"]),y("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],o.prototype,"readTitle",null),a([y("web-map","title",["layerDefinition.name","title"])],o.prototype,"readTitleFromWebMap",null),a([n({type:String})],o.prototype,"sublayerTitleMode",void 0),a([n({json:{read:!1}})],o.prototype,"type",void 0),a([n({type:String})],o.prototype,"typeIdField",void 0),a([y("service","typeIdField"),y("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([n({type:[W]})],o.prototype,"types",void 0),a([y("service","types",["types"]),y("types",["layerDefinition.types"])],o.prototype,"readTypes",null),a([n({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],o.prototype,"visible",void 0),a([y("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],o.prototype,"readVisible",null),o=a([E("esri.layers.FeatureLayer")],o);const xt=o;export{xt as default};