import{bk as h,e as i,y as s,bg as R,af as w,aE as r,bl as S,b8 as b,c as v}from"./index-O3Mu8AMX.js";var y;const u=new h({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),d=new h({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let e=y=class extends R{constructor(t){super(t),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(t={}){const{where:n,geometry:l,spatialRelationship:a,timeExtent:o,objectIds:p,units:c,distance:m}=this;return new w({geometry:r(l),objectIds:r(p),spatialRelationship:a,timeExtent:r(o),where:n,units:c,distance:m,...t})}clone(){const{where:t,geometry:n,spatialRelationship:l,timeExtent:a,objectIds:o,units:p,distance:c}=this;return new y({geometry:r(n),objectIds:r(o),spatialRelationship:l,timeExtent:r(a),where:t,units:p,distance:c})}};i([s({type:String,json:{write:!0}})],e.prototype,"where",void 0),i([s({types:S,json:{write:!0}})],e.prototype,"geometry",void 0),i([s({type:u.apiValues,json:{name:"spatialRel",read:{reader:u.read},write:{allowNull:!1,writer:u.write,overridePolicy(){return{enabled:this.geometry!=null}}}}})],e.prototype,"spatialRelationship",void 0),i([s({type:Number,json:{write:{overridePolicy(t){return{enabled:t!=null&&this.geometry!=null}}}}})],e.prototype,"distance",void 0),i([s({type:[Number],json:{write:!0}})],e.prototype,"objectIds",void 0),i([s({type:d.apiValues,json:{read:d.read,write:{writer:d.write,overridePolicy(t){return{enabled:t!=null&&this.geometry!=null}}}}})],e.prototype,"units",void 0),i([s({type:b,json:{write:!0}})],e.prototype,"timeExtent",void 0),e=y=i([v("esri.layers.support.FeatureFilter")],e);const g=e;export{g as d};