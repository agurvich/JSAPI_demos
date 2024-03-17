function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/streamLayerUtils-CxCboc6_.js","assets/utils-DwyBPDBM.js","assets/index-BqO8XNEn.js","assets/index-rovX6Grx.css","assets/createConnection-C59rIBdh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{e as t,y as s,c as I,bg as P,d2 as F,d4 as E,d3 as A,cT as O,cU as D,cV as k,cW as U,dj as C,cR as N,$ as x,w as V,a as p,cZ as L,h1 as f,hr as G,a4 as J,hs as M,_ as g,ee as m,D as z,g0 as W,af as q,aQ as Q,dv as Z,bd as K,cK as Y,g7 as B,aU as H,h2 as X,h3 as ee,h4 as te,d7 as ie,du as v,ht as se,hu as re,g9 as oe,ga as ne,h6 as ae,g8 as le,ba as w,aE as de,h7 as pe,d1 as ce,gb as ue,ac as he}from"./index-BqO8XNEn.js";import{p as me}from"./FeatureEffectLayer-DHOk4lQg.js";import{c as ye}from"./FeatureReductionLayer-CPWtJrdt.js";import{f as fe}from"./TemporalLayer-B1YThOMg.js";import{A as u}from"./interfaces-CL2NbQte.js";import"./FeatureEffect-BuwKmeTs.js";import"./FeatureFilter-CloPhsRR.js";var y;let d=y=class extends P{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([s({type:Number,json:{write:!0}})],d.prototype,"age",void 0),t([s({type:Number,json:{write:!0}})],d.prototype,"ageReceived",void 0),t([s({type:Number,json:{write:!0}})],d.prototype,"displayCount",void 0),t([s({type:Number,json:{write:!0}})],d.prototype,"maxObservations",void 0),d=y=t([I("esri.layers.support.PurgeOptions")],d);const R=d,b=ue();function S(e,r){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let i=class extends ye(me(F(fe(E(A(O(D(k(U(C(N(he)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new R,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=x.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=V(async(r,o,a)=>{const{save:n,saveAs:l}=await g(()=>import("./streamLayerUtils-CxCboc6_.js"),__vite__mapDeps([0,1,2,3]));switch(r){case u.SAVE:return n(this,o);case u.SAVE_AS:return l(this,a,o)}})}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(L).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,o){var n;r=r.layerDefinition||r;const a=(n=r.drawingInfo)==null?void 0:n.renderer;if(a){const l=G(a,r,o)||void 0;return l||J.getLogger(this).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),l}return M(r,o)}async connect(e){const[{createConnection:r}]=await Promise.all([g(()=>import("./createConnection-C59rIBdh.js"),__vite__mapDeps([4,2,3])),this.load()]),o=this.geometryType?m.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:l=null,maxReconnectionAttempts:$=0,maxReconnectionInterval:j=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),c=r(this.parsedUrl,this.spatialReference,T,o,n,l,$,j,a??void 0),_=z([this.on("send-message-to-socket",h=>c.sendMessageToSocket(h)),this.on("send-message-to-client",h=>c.sendMessageToClient(h))]);return c.once("destroy",_.remove),c}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return W(this,e)}createQuery(){const e=new q;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===e&&(o=a.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(u.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(u.SAVE_AS,r,e)}write(e,r){const o=r==null?void 0:r.messages;return this.webSocketUrl?(o==null||o.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,r):(o==null||o.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var r,o,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await Q(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((r=this.timeInfo)!=null&&r.trackIdField))throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(o=this.fields.find(l=>l.type==="oid"))==null?void 0:o.name;if(!n)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new Z({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),K(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),Y(this,{origin:"service"})}};t([s({type:String})],i.prototype,"copyright",void 0),t([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([s({type:String})],i.prototype,"displayField",void 0),t([s({type:B})],i.prototype,"elevationInfo",void 0),t([s({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([s(b.fields)],i.prototype,"fields",void 0),t([s(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([s({type:H,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([s({type:m.apiValues,json:{read:{reader:m.read}}})],i.prototype,"geometryType",void 0),t([s(X)],i.prototype,"labelsVisible",void 0),t([s({type:[ee],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:te},write:!0}})],i.prototype,"labelingInfo",void 0),t([s(ie)],i.prototype,"legendEnabled",void 0),t([s({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([s({type:v})],i.prototype,"maxReconnectionAttempts",void 0),t([s({type:v})],i.prototype,"maxReconnectionInterval",void 0),t([s(se)],i.prototype,"maxScale",void 0),t([s(re)],i.prototype,"minScale",void 0),t([s({type:String})],i.prototype,"objectIdField",void 0),t([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],i.prototype,"outFields",void 0),t([s(oe)],i.prototype,"popupEnabled",void 0),t([s({type:ne,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([s({type:R})],i.prototype,"purgeOptions",void 0),t([s({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([s({types:ae,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:le,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([w("service","renderer",["drawingInfo.renderer","defaultSymbol"]),w("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([s((()=>{const e=de(pe);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([s()],i.prototype,"sourceJSON",void 0),t([s({type:x,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([s({json:{read:!1}})],i.prototype,"type",void 0),t([s(ce)],i.prototype,"url",void 0),t([s({type:Number})],i.prototype,"updateInterval",void 0),t([s({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([s({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const Re=i;export{Re as default};
