import{gc as y,gd as O,ge as H,gf as a,T as M,gg as z,df as C,gh as g,bt as A,S as F,gi as j,gj as G,gk as L,a3 as P,a4 as B,bC as S,c4 as b,fg as T,dY as W,dw as I,e as p,y as m,c as q,fh as D,bD as k,a5 as _}from"./index-BqO8XNEn.js";import{a as K}from"./RenderTexture-CJVw6otE.js";function Q(e,n,t,s){if(n==null||s==null)return!1;const i=y(n,O),r=y(s,H);if(i===r&&i!==a.UNKNOWN||M(n,s))return t[0]=1,t[1]=1,t[2]=1,!0;if(i===a.SPHERICAL_ECEF){const c=z(e),u=c/Math.sqrt(e[0]*e[0]+e[1]*e[1]),d=c/C.radius;if(r===a.WEB_MERCATOR)return t[0]=u*d,t[1]=u*d,t[2]=1,!0;if(r===a.WGS84||r===a.CGCS2000){const o=g;return t[0]=o*u*d,t[1]=o*d,t[2]=1,!0}}else if(i===a.PLATE_CARREE){if(r===a.WGS84||r===a.CGCS2000)return t[0]=g,t[1]=g,t[2]=1,!0;if(r===a.WEB_MERCATOR){const c=e[1]/C.radius;return t[0]=1,t[1]=1/Math.cos(c),t[2]=1,!0}}return!1}let h=class extends A.EventedMixin(F){constructor(e){super(e),this._tmpEvent=new j,this._renderCoordsHelper=e.view.renderCoordsHelper,this._renderSR=this._renderCoordsHelper.spatialReference,this._layerElevationSource=e.layerElevationSource}initialize(){this._intersector=G(this.view.state.viewingMode),this._intersector.options.store=L.MIN,this._tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"}get spatialReference(){var e,n;return(n=(e=this.view)==null?void 0:e.elevationProvider)==null?void 0:n.spatialReference}getElevation(e,n,t,s){const i=this._renderCoordsHelper,r=P(l,e,n,t);if(!i.toRenderCoords(r,s,r))return B.getLogger(this).error("could not project point to compute elevation"),null;const{layerElevationSource:c,_intersector:u,intersectionHandler:d}=this,o=c.fullExtent,f=o!=null&&Number.isFinite(o.xmin)&&Number.isFinite(o.xmax)&&Number.isFinite(o.ymin)&&Number.isFinite(o.ymax)&&Number.isFinite(o.zmin)&&Number.isFinite(o.zmax)?new S(o.zmin,o.zmax):c.elevationRange;if(f==null)return null;const R=c.elevationOffset,w=f.elevationRangeMin+R,N=f.elevationRangeMax+R,x=i.setAltitude(U,N,r),E=i.setAltitude(Y,w,r);return u.reset(x,E,null),d.intersect(u,null,x,E,null,!0),u.results.min.getIntersectionPoint(r)?i.getAltitude(r):null}getSphereElevationBounds(e,n){return K(e,n,$,this._renderSR),this._layerElevationSource.getElevationRange($)}getRootElevationBounds(){const e=this.layerElevationSource.fullExtent;return e!=null&&e.hasZ?new S(e.zmin,e.zmax):null}objectsChanged(e){this.spatialReference&&(this._computeLayerExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}objectChanged(e){this.spatialReference&&(this._computeObjectExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}_computeObjectExtent(e,n){b(n),this._expandExtent(e,n)}_computeLayerExtent(e,n){b(n);for(const t of e)this._expandExtent(t,n)}_expandExtent(e,n){const t=this.spatialReference;if(t==null||e==null)return;T(v,e.quaternion),v[12]=e.center[0],v[13]=e.center[1],v[14]=e.center[2];const s=e.halfSize;for(let i=0;i<8;++i)l[0]=1&i?s[0]:-s[0],l[1]=2&i?s[1]:-s[1],l[2]=4&i?s[2]:-s[2],W(l,l,v),this._renderCoordsHelper.fromRenderCoords(l,l,t),I(n,l,n)}};p([m({constructOnly:!0})],h.prototype,"layerElevationSource",void 0),p([m({constructOnly:!0})],h.prototype,"intersectionHandler",void 0),p([m({constructOnly:!0})],h.prototype,"view",void 0),p([m()],h.prototype,"spatialReference",null),h=p([q("esri.views.3d.layers.i3s.LayerElevationProvider")],h);const v=D(),$=k(0,0,0,0),l=_(),U=_(),Y=_();export{Q as f,h as x};
