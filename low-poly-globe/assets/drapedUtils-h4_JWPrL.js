import{aU as x,bu as o}from"./index-BqO8XNEn.js";function u(t,s,e,a=new x){let n=0;if(e.type==="2d")n=s*(e.resolution??0);else if(e.type==="3d"){const f=e.overlayPixelSizeInMapUnits(t),l=e.basemapSpatialReference;n=l==null||l.equals(e.spatialReference)?s*f:o(l)/o(e.spatialReference)}const m=t.x-n,p=t.y-n,r=t.x+n,i=t.y+n,{spatialReference:c}=e;return a.xmin=Math.min(m,r),a.ymin=Math.min(p,i),a.xmax=Math.max(m,r),a.ymax=Math.max(p,i),a.spatialReference=c,a}new x;export{u as r};
