import{c3 as V,bS as A,c9 as X,aP as j,ca as S,cb as J,cc as N,cd as R,ce as $,cf as b,cg as q,ch as z,ci as B,cj as p}from"./index-BqO8XNEn.js";function K(e){return M(e,!0)}function Q(e){return M(e,!1)}function M(e,s){if(e==null)return null;const n=e.spatialReference,i=A(n),t=X(e)?e.toJSON():e;if(!i)return t;const h=j(n)?102100:4326,u=S[h].maxX,_=S[h].minX;if(J(t))return T(t,u,_);if(N(t))return t.points=t.points.map(o=>T(o,u,_)),t;if(R(t))return D(t,i);if($(t)||b(t)){const o=q(F,t),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=p(r.xmin,_)*(2*u),m=x===0?t:z(t,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?L(m,u,s):r.xmin<_?L(m,_,s):m}return t}function D(e,s){if(!s)return e;const n=E(e,s).map(i=>i.extent);return n.length<2?n[0]||e:n.length>2?(e.xmin=s.valid[0],e.xmax=s.valid[1],e):{rings:n.map(i=>[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]])}}function T(e,s,n){if(Array.isArray(e)){const i=e[0];if(i>s){const t=p(i,s);e[0]=i+t*(-2*s)}else if(i<n){const t=p(i,n);e[0]=i+t*(-2*n)}}else{const i=e.x;if(i>s){const t=p(i,s);e.x+=t*(-2*s)}else if(i<n){const t=p(i,n);e.x+=t*(-2*n)}}return e}function E(e,s){const n=[],{ymin:i,ymax:t,xmin:h,xmax:u}=e,_=e.xmax-e.xmin,[o,r]=s.valid,{x,frameId:m}=w(e.xmin,s),{x:a,frameId:c}=w(e.xmax,s),k=x===a&&_>0;if(_>2*r){const v={xmin:h<u?x:a,ymin:i,xmax:r,ymax:t},P={xmin:o,ymin:i,xmax:h<u?a:x,ymax:t},O={xmin:0,ymin:i,xmax:r,ymax:t},C={xmin:o,ymin:i,xmax:0,ymax:t},f=[],d=[];g(v,O)&&f.push(m),g(v,C)&&d.push(m),g(P,O)&&f.push(c),g(P,C)&&d.push(c);for(let y=m+1;y<c;y++)f.push(y),d.push(y);n.push(new l(v,[m]),new l(P,[c]),new l(O,f),new l(C,d))}else x>a||k?n.push(new l({xmin:x,ymin:i,xmax:r,ymax:t},[m]),new l({xmin:o,ymin:i,xmax:a,ymax:t},[c])):n.push(new l({xmin:x,ymin:i,xmax:a,ymax:t},[m]));return n}function w(e,s){const[n,i]=s.valid,t=2*i;let h,u=0;return e>i?(h=Math.ceil(Math.abs(e-i)/t),e-=h*t,u=h):e<n&&(h=Math.ceil(Math.abs(e-n)/t),e+=h*t,u=-h),{x:e,frameId:u}}function g(e,s){const{xmin:n,ymin:i,xmax:t,ymax:h}=s;return I(e,n,i)&&I(e,n,h)&&I(e,t,h)&&I(e,t,i)}function I(e,s,n){return s>=e.xmin&&s<=e.xmax&&n>=e.ymin&&n<=e.ymax}function L(e,s,n=!0){const i=!b(e);if(i&&B(e),n)return new G().cut(e,s);const t=i?e.rings:e.paths,h=i?4:2,u=t.length,_=-2*s;for(let o=0;o<u;o++){const r=t[o];if(r&&r.length>=h){const x=[];for(const m of r)x.push([m[0]+_,m[1]]);t.push(x)}}return i?e.rings=t:e.paths=t,e}class l{constructor(s,n){this.extent=s,this.frameIds=n}}const F=V();class G{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,n){let i;if(this._xCut=n,s.rings)this._closed=!0,i=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,i=s.paths,this._minPts=2}for(const h of i){if(!h||h.length<this._minPts)continue;let u=!0;for(const _ of h)u?(this.moveTo(_),u=!1):this.lineTo(_);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),i=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&i.push(h);const t=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=t;i.push(h)}return this._closed?s.rings=i:s.paths=i,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const n=this._side(s[0]);if(n*this._prevSide==-1){const i=this._intersect(this._prevPt,s);this._lineTo(this._xCut,i,0),this._prevSide=0,this._lineTo(s[0],s[1],n)}else this._lineTo(s[0],s[1],n);this._prevSide=n,this._prevPt=s}close(){const s=this._firstPt,n=this._prevPt;s[0]===n[0]&&s[1]===n[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,n,i){this._closed?(this._lineIn.push([i<=0?s:this._xCut,n]),this._lineOut.push([i>=0?s:this._xCut,n])):(i<=0&&this._lineIn.push([s,n]),i>=0&&this._lineOut.push([s,n]))}_lineTo(s,n,i){this._closed?(this._addPolyVertex(this._lineIn,i<=0?s:this._xCut,n),this._addPolyVertex(this._lineOut,i>=0?s:this._xCut,n)):i<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,n])):i>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,n])):this._prevSide<0?(this._lineIn.push([s,n]),this._lineOut.push([s,n])):this._prevSide>0&&(this._lineOut.push([s,n]),this._lineIn.push([s,n]))}_addPolyVertex(s,n,i){const t=s.length;t>1&&s[t-1][0]===n&&s[t-2][0]===n?s[t-1][1]=i:s.push([n,i])}_checkClosingPt(s){const n=s.length;n>3&&s[0][0]===this._xCut&&s[n-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[n-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,n){const i=(this._xCut-s[0])/(n[0]-s[0]);return s[1]+i*(n[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}export{Q as a,K as p};
