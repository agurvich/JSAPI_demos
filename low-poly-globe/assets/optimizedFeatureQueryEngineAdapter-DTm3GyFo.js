import{dM as A,dd as G}from"./index-BqO8XNEn.js";function _(t,e){return t?e?4:3:e?3:2}function O(t,e,o,N){if(!(e!=null&&e.lengths.length))return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const r=t.coords,n=[],s=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:l,coords:c}=e,b=_(o,N);let h=0;for(const I of l){const u=P(s,c,h,I,o,N);u&&n.push(u),h+=I*b}if(n.sort((I,u)=>{let T=I[2]-u[2];return T===0&&o&&(T=I[4]-u[4]),T}),n.length){let I=6*n[0][2];r[0]=n[0][0]/I,r[1]=n[0][1]/I,o&&(I=6*n[0][4],r[2]=I!==0?n[0][3]/I:0),(r[0]<s[0]||r[0]>s[1]||r[1]<s[2]||r[1]>s[3]||o&&(r[2]<s[4]||r[2]>s[5]))&&(r.length=0)}if(!r.length){const I=e.lengths[0]?S(c,0,l[0],o,N):null;if(!I)return null;r[0]=I[0],r[1]=I[1],o&&I.length>2&&(r[2]=I[2])}return t}function P(t,e,o,N,r,n){const s=_(r,n);let l=o,c=o+s,b=0,h=0,I=0,u=0,T=0;for(let F=0,Y=N-1;F<Y;F++,l+=s,c+=s){const i=e[l],g=e[l+1],E=e[l+2],f=e[c],m=e[c+1],a=e[c+2];let V=i*m-f*g;u+=V,b+=(i+f)*V,h+=(g+m)*V,r&&(V=i*a-f*E,I+=(E+a)*V,T+=V),i<t[0]&&(t[0]=i),i>t[1]&&(t[1]=i),g<t[2]&&(t[2]=g),g>t[3]&&(t[3]=g),r&&(E<t[4]&&(t[4]=E),E>t[5]&&(t[5]=E))}if(u>0&&(u*=-1),T>0&&(T*=-1),!u)return null;const d=[b,h,.5*u];return r&&(d[3]=I,d[4]=.5*T),d}function S(t,e,o,N,r){const n=_(N,r);let s=e,l=e+n,c=0,b=0,h=0,I=0;for(let u=0,T=o-1;u<T;u++,s+=n,l+=n){const d=t[s],F=t[s+1],Y=t[s+2],i=t[l],g=t[l+1],E=t[l+2],f=N?M(d,F,Y,i,g,E):y(d,F,i,g);if(f)if(c+=f,N){const m=p(d,F,Y,i,g,E);b+=f*m[0],h+=f*m[1],I+=f*m[2]}else{const m=j(d,F,i,g);b+=f*m[0],h+=f*m[1]}}return c>0?N?[b/c,h/c,I/c]:[b/c,h/c]:o>0?N?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function y(t,e,o,N){const r=o-t,n=N-e;return Math.sqrt(r*r+n*n)}function M(t,e,o,N,r,n){const s=N-t,l=r-e,c=n-o;return Math.sqrt(s*s+l*l+c*c)}function j(t,e,o,N){return[t+.5*(o-t),e+.5*(N-e)]}function p(t,e,o,N,r,n){return[t+.5*(N-t),e+.5*(r-e),o+.5*(n-o)]}const q={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new A(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid==null&&(t.centroid=O(new G,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{O as n,q as o};
