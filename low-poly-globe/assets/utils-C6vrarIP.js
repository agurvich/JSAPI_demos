import{bR as G,bS as R,aR as V,bT as Z,bU as z,bV as v,bW as L,bX as O,$ as U,bY as Y,bZ as j}from"./index-BqO8XNEn.js";import{Z as A}from"./utils-DHQCy5yM.js";import{c as E,B as D}from"./utils-C4xE5gKW.js";let c=null;const P=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function S(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function k(t,e,o,r){const s=G(o)?R(o):null,u=s?Math.round((s.valid[1]-s.valid[0])/e.scale[0]):null;return t.map(i=>{const a=new V(i.geometry);return Z(e,a,a,a.hasZ,a.hasM),i.geometry=s?S(a,u??0,r[0]):a,i})}function q(t,e=18,o,r,s){const u=new Float64Array(r*s);e=Math.round(Y(e));let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const M=j(o);for(const{geometry:b,attributes:N}of t){const{x,y:m}=b,$=Math.max(0,x-e),g=Math.max(0,m-e),F=Math.min(s,m+e),I=Math.min(r,x+e),h=+M(N);for(let f=g;f<F;f++)for(let d=$;d<I;d++){const y=f*r+d,w=z(d-x,f-m,e)*h,l=u[y]+=w;i=Math.min(i,l),a=Math.max(a,l)}}return{min:i,max:a}}function W(t){const e=P.exec(t);if(!e)return null;const{hh:o,mm:r,ss:s,ms:u}=e.groups;return Number(o)*v.hours+Number(r)*v.minutes+Number(s)*v.seconds+Number(u||0)}async function H(t,e,o=!0){if(!e)return[];const{field:r,field2:s,field3:u,fieldDelimiter:i,fieldInfos:a,timeZone:M}=t,b=r&&(a==null?void 0:a.find(l=>l.name.toLowerCase()===r.toLowerCase())),N=!!b&&L(b),x=!!b&&A(b),m=t.valueExpression,$=t.normalizationType,g=t.normalizationField,F=t.normalizationTotal,I=[],h=t.viewInfoParams;let f=null,d=null;if(m){if(!c){const{arcadeUtils:l}=await O();c=l}c.hasGeometryOperations(m)&&await c.enableGeometryOperations(),f=c.createFunction(m),d=h?c.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new U(h.spatialReference)}):null}const y=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const p=l.attributes;let n;if(m){const T=w?{...l,layer:w}:l,C=c.createExecContext(T,d,M);n=c.executeFunction(f,C)}else p&&(n=p[r],s?(n=`${E(n)}${i}${E(p[s])}`,u&&(n=`${n}${i}${E(p[u])}`)):typeof n=="string"&&o&&(x?n=n?new Date(n).getTime():null:N&&(n=n?W(n):null)));if($&&typeof n=="number"&&isFinite(n)){const T=p&&parseFloat(p[g]);n=D(n,$,T,F)}I.push(n)}),I}export{H as b,k as j,W as w,q as x};
