import{ew as p,cF as m,aJ as F,ev as f,aQ as x,ex as E,ey as j,dp as a}from"./index-BqO8XNEn.js";const c="Layer does not support extent calculation.";function O(o,e){var u,y;const r=o.geometry,t=o.toJSON(),n=t;if(r!=null&&(n.geometry=JSON.stringify(r),n.geometryType=j(r),n.inSR=a(r.spatialReference)),(u=t.topFilter)!=null&&u.groupByFields&&(n.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(n.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(n.topFilter=JSON.stringify(n.topFilter)),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","):delete n.outFields,t.outSR?n.outSR=a(t.outSR):r&&t.returnGeometry&&(n.outSR=n.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const l=t.timeExtent,{start:s,end:i}=l;s==null&&i==null||(n.time=s===i?s:`${s??"null"},${i??"null"}`),delete t.timeExtent}return n}async function B(o,e,r,t){const n=await d(o,e,"json",t);return p(e,r,n.data),n}async function S(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",r,{returnIdsOnly:!0})}async function w(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(c);if(n.hasOwnProperty("count"))throw new Error(c);return t})}function I(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,r,t={},n={}){const u=typeof o=="string"?m(o):o,y=e.geometry?[e.geometry]:[];return t.responseType=r==="pbf"?"array-buffer":"json",F(y,null,t).then(l=>{const s=l==null?void 0:l[0];s!=null&&((e=e.clone()).geometry=s);const i=f({...u.query,f:r,...n,...O(e,n)});return x(E(u.path,"queryTopFeatures"),{...t,query:{...i,...t.query}})})}export{I as a,w as d,S as m,B as p};
