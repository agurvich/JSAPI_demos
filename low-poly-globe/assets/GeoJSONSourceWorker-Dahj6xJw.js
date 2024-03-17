import{dI as _,dE as R,a as I,dD as Q,eI as C,eg as v,b6 as G,m as Z,a9 as A,a4 as P,T as M,dH as N,dG as z,aQ as J,ey as O,eJ as L,eK as B,eL as H}from"./index-O3Mu8AMX.js";import{m as U}from"./FeatureStore-CgyuIkqo.js";import{$ as K,x as E,j as b}from"./QueryEngine-PNZsNToZ.js";import{I as V,N as W,E as Y}from"./geojson-BUMepOzW.js";import{o as X,a as ee,i as te}from"./clientSideDefaults-CLavYq3M.js";import{j as se,p as T,d as w,f as F,y as k}from"./sourceUtils-DogzJRQs.js";import"./BoundsStore-Crj31uaQ.js";import"./PooledRBush-BaGLuwa_.js";import"./quickselect-GuQm3B0S.js";import"./optimizedFeatureQueryEngineAdapter-C_PmEkYY.js";import"./WhereClause-CCygtHvR.js";import"./TimeOnly-B4e_dNOM.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-6vCjTrDF.js";import"./utils-Bi1l44LZ.js";import"./utils-CTIKZLAs.js";import"./ClassBreaksDefinition-DUnLJxly.js";import"./date-M6n_RqpC.js";const ie={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class we{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(t==null?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),i=V(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],d=e.hasZ!=null?e.hasZ:i.hasZ,p=i.geometryType;let y=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const m=e.spatialReference||_;let r=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const l=new R(o);let u=l.get(y);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1,y=u.name):(u={alias:y,name:y,type:i.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(u));const h={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!Q.jsonValues.includes(a.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==u.name){const g=C(a);g!==void 0&&(h[a.name]=g)}a.length==null&&(a.length=v(a))}if(r){if(r.startTimeField){const a=l.get(r.startTimeField);a?(r.startTimeField=a.name,a.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const a=l.get(r.endTimeField);a?(r.endTimeField=a.name,a.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const a=l.get(r.trackIdField);a?r.trackIdField=a.name:(r.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}const c=p?X(p):void 0,j=l.dateFields.length?{timeZoneIANA:G}:null,f={warnings:n,featureErrors:[],layerDefinition:{...ie,drawingInfo:c??void 0,templates:ee(h),extent:void 0,geometryType:p,objectIdField:y,fields:o,hasZ:!!d,timeInfo:r,dateFieldsTimeReference:j}};this._queryEngine=new K({fieldsIndex:R.fromLayerJSON({fields:o,timeInfo:r,dateFieldsTimeReference:j}),geometryType:p,hasM:!1,hasZ:d,objectIdField:y,spatialReference:m,timeInfo:r,featureStore:new U({geometryType:p,hasM:!1,hasZ:d}),cacheSpatialQueries:!0});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(u);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=te(h,y);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const D=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(D);const{fullExtent:$,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=$,S){const{start:a,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[a,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([se(t,n),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var s;this._loadOptions.customParameters=e,(s=this._snapshotTask)==null||s.abort(),this._snapshotTask=Z(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const o=this._normalizeFeatures(i);o&&this._queryEngine.featureStore.addMany(o)},i=>{this._queryEngine.featureStore.clear(),A(i)||P.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=W(e,{geometryType:t,hasZ:n,objectIdField:s});if(!M(this._queryEngine.spatialReference,_))for(const o of i)o.geometry!=null&&(o.geometry=N(b(z(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,s=(await J(t,{responseType:"json",query:{...n},signal:e})).data;return Y(s),s}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const o of e){const d=this._createDefaultAttributes(),p=T(s,d,o.attributes,!0);p?t==null||t.push(p):(this._assignObjectId(d,o.attributes,!0),o.attributes=d,o.objectId=d[n],i.push(o))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t!=null&&t.length&&this._applyAddEdits(i,t),n!=null&&n.length&&this._applyUpdateEdits(i,n),s==null?void 0:s.length){for(const p of s)i.deleteResults.push(w(p));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:o,timeExtent:d}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:d,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:o,objectIdField:d,spatialReference:p,featureStore:y,fieldsIndex:m}=this._queryEngine,r=[];for(const l of t){if(l.geometry&&s!==O(l.geometry)){n.push(F("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),h=T(m,u,l.attributes);if(h)n.push(h);else{if(this._assignObjectId(u,l.attributes),l.attributes=u,l.uid!=null){const c=l.attributes[d];e.uidToObjectId[l.uid]=c}if(l.geometry!=null){const c=l.geometry.spatialReference??p;l.geometry=b(k(l.geometry,c),c,p)}r.push(l),n.push(w(l.attributes[d]))}}y.addMany(L([],r,s,o,i,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:s,hasZ:i,objectIdField:o,spatialReference:d,featureStore:p,fieldsIndex:y}=this._queryEngine;for(const m of t){const{attributes:r,geometry:l}=m,u=r==null?void 0:r[o];if(u==null){e.push(F(`Identifier field ${o} missing`));continue}if(!p.has(u)){e.push(F(`Feature with object id ${u} missing`));continue}const h=B(p.getFeature(u),n,i,s);if(l!=null){if(n!==O(l)){e.push(F("Incorrect geometry type."));continue}const c=l.spatialReference??d;h.geometry=b(k(l,c),c,d)}if(r){const c=T(y,h.attributes,r);if(c){e.push(c);continue}}p.add(H(h,n,i,s,o)),e.push(w(u))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if(n.type==="esriFieldTypeString")return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,n=!1){const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await E(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{we as default};