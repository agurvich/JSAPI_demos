import{e as t,y as l,c as m,S as h}from"./index-BqO8XNEn.js";const b={visible:"visibleSublayers"};let s=class extends h{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",r=>this.notifyChange(b[r.propertyName]))],"layer"))}get layers(){return this.visibleSublayers.filter(({name:e})=>e).map(({name:e})=>e).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,a=e==null?void 0:e.sublayers,i=[],o=n=>{const{minScale:y,maxScale:p,sublayers:u,visible:c}=n;c&&(r===0||(y===0||r<=y)&&(p===0||r>=p))&&(u?u.forEach(o):i.push(n))};return a==null||a.forEach(o),i}toJSON(){const{layer:e,layers:r}=this,{imageFormat:a,imageTransparency:i,version:o}=e;return{format:a,request:"GetMap",service:"WMS",styles:"",transparent:i?"TRUE":"FALSE",version:o,layers:r}}};t([l()],s.prototype,"layer",null),t([l({readOnly:!0})],s.prototype,"layers",null),t([l({type:Number})],s.prototype,"scale",void 0),t([l({readOnly:!0})],s.prototype,"version",null),t([l({readOnly:!0})],s.prototype,"visibleSublayers",null),s=t([m("esri.layers.support.ExportWMSImageParameters")],s);export{s as a};
