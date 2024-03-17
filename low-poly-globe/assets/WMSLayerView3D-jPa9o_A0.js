import{e as o,y as h,c5 as x,c as d,u as g,a as m,bo as P,aU as v}from"./index-BqO8XNEn.js";import{N as I}from"./DynamicLayerView3D-BZnbYI2p.js";import{a as F}from"./ExportWMSImageParameters-pMFDZ4d1.js";import"./LayerView3D-Cj8MsGUI.js";import"./projectExtentUtils-D57sFASR.js";import"./ImageMaterial.glsl-C2HyFQ7J.js";import"./LayerView-CIuR0T07.js";import"./RefreshableLayerView-Cwqplzyk.js";const b=r=>{let e=class extends r{initialize(){this.exportImageParameters=new F({layer:this.layer})}destroy(){this.exportImageParameters=g(this.exportImageParameters)}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(t,i){const{layer:a}=this;if(!t)throw new m("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:n}=a;if(!n)throw new m("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n});const p=this.createFetchPopupFeaturesQuery(t);if(!p)return[];const{extent:s,width:u,height:c,x:y,y:w}=p;if(!(s&&u&&c))throw new m("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:u,height:c});const f=await a.fetchFeatureInfo(s,u,c,y,w);return P(i),f}};return o([h()],e.prototype,"exportImageParameters",void 0),o([h({readOnly:!0})],e.prototype,"exportImageVersion",null),o([h()],e.prototype,"layer",void 0),o([h(x)],e.prototype,"timeExtent",void 0),e=o([d("esri.layers.mixins.WMSLayerView")],e),e};let l=class extends b(I){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new m("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add(()=>{var r;return(r=this.exportImageParameters)==null?void 0:r.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(r){const e=this.findExtentInfoAt(r),t=e.extent,i=new v(t[0],t[1],t[2],t[3],this._spatialReference),a=e.imageSize,n=a.width,p=a.height,s=i.width/n;return{extent:i,width:n,height:p,x:Math.round((r.x-i.xmin)/s),y:Math.round((i.ymax-r.y)/s)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};l=o([d("esri.views.3d.layers.WMSLayerView3D")],l);const z=l;export{z as default};
