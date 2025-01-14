function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{wZ as Le,w_ as Ce,uL as _,w5 as m,uK as F,vn as D,uH as a,uE as he,vl as G,k2 as Me,gB as ce,J as h,n0 as de,fh as Re,uP as ue,_ as pe,uS as _e,uT as ge,uU as fe,uQ as me,s7 as A,u_ as Pe,wc as $e,a5 as o,fO as Ae,a3 as $,jR as Te,vx as Oe,pp as ze,r$ as Ie,s0 as qe,dW as be,e as f,uR as w,wl as We,qs as je,gq as H,wO as He,vO as M,a2 as T,gg as Z,i8 as ve,dY as P,dZ as b,w$ as xe,ia as Ne,t3 as Ue,a1 as Be,dX as we,qw as Fe,oH as Ge,i9 as Ze,vt as Xe,vh as ke,dV as X,ic as j,y as q,c as Qe,sZ as Ye,vu as Je,ja as k,j2 as Q,x0 as Ke,x1 as O,x2 as et,cY as Y,r5 as tt,s$ as it,x3 as nt,t0 as st,t1 as rt,t2 as at,x4 as lt,ih as J,bF as K,s_ as ee,l6 as te,x5 as ot,x6 as ht,x7 as ct,fI as dt,Z as ie,pc as ut,oO as pt,gx as _t,la as ne,x8 as gt,x9 as ft}from"./index-O3Mu8AMX.js";import{t as mt,b as Pt}from"./LineVisualElement-CFA_yiN0.js";function Ee(t,e){const i=t.fragment;i.include(Le),t.include(Ce),i.uniforms.add(new _("globalAlpha",n=>n.globalAlpha),new m("glowColor",n=>n.glowColor),new _("glowWidth",(n,s)=>n.glowWidth*s.camera.pixelRatio),new _("glowFalloff",n=>n.glowFalloff),new m("innerColor",n=>n.innerColor),new _("innerWidth",(n,s)=>n.innerWidth*s.camera.pixelRatio),new F("depthMap",(n,s)=>{var r;return(r=s.linearDepth)==null?void 0:r.getTexture()}),new D("nearFar",(n,s)=>s.camera.nearFar),new F("frameColor",(n,s)=>s.mainColor)),i.code.add(a`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(a`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(a`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(a`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),e.contrastControlEnabled?(i.uniforms.add(new _("globalAlphaContrastBoost",n=>n.globalAlphaContrastBoost!=null?n.globalAlphaContrastBoost:1)),i.code.add(a`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(a`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}function ye(t){const e=new he;e.include(Ee,t);const{vertex:i,fragment:n}=e;return i.uniforms.add(new G("modelView",(s,r)=>Me(vt,r.camera.viewMatrix,s.origin)),new G("proj",(s,r)=>r.camera.projectionMatrix),new _("glowWidth",(s,r)=>s.glowWidth*r.camera.pixelRatio),new D("pixelToNDC",(s,r)=>ce(bt,2/r.camera.fullViewport[2],2/r.camera.fullViewport[3]))),e.attributes.add(h.START,"vec3"),e.attributes.add(h.END,"vec3"),e.attributes.add(h.UP,"vec3"),e.attributes.add(h.EXTRUDE,"vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewPlane","vec4"),i.code.add(a`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),n.uniforms.add(new _("perScreenPixelRatio",(s,r)=>r.camera.perScreenPixelRatio)),n.code.add(a`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),e}const bt=de(),vt=Re(),xt=Object.freeze(Object.defineProperty({__proto__:null,build:ye},Symbol.toStringTag,{value:"Module"}));class z extends _e{initializeProgram(e){return new ge(e.rctx,z.shader.get().build(this.configuration),Ve)}initializePipeline(){return fe({blending:me(A.ONE,A.ONE_MINUS_SRC_ALPHA),colorWrite:Pe})}}z.shader=new ue(xt,()=>pe(()=>Promise.resolve().then(()=>Tt),void 0));const Ve=new Map([[h.START,0],[h.END,1],[h.UP,2],[h.EXTRUDE,3]]);class se{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=o(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const i=Ae(3*e.length);let n=0;for(const s of e)i[n++]=s[0],i[n++]=s[1],i[n++]=s[2];this.buffers=[i]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const i=this._buffers[0],n=3*Math.floor(i.length/3/2);$(this._origin,i[n],i[n+1],i[n+2])}else $(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const i=this._ensureVAO(e);i!=null&&(e.bindVAO(i),e.drawArrays(Te.TRIANGLES,0,this._count))}dispose(){this._vao!=null&&this._vao.dispose()}_ensureVAO(e){return this._buffers==null?null:(this._vao==null&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,i){const n=this._createDataBuffer(i);return this._dirty=!1,new Oe(e,Ve,{data:ze(ae)},{data:Ie.createVertex(e,qe.STATIC_DRAW,n)})}_ensureVertexData(e,i){var s;if(!this._dirty)return;const n=this._createDataBuffer(i);(s=e.vertexBuffers.data)==null||s.setData(n),this._dirty=!1}_numberOfRenderVertices(e){return 3*(2*(e.length/3-1))}_createDataBuffer(e){const i=e.reduce((u,c)=>u+this._numberOfRenderVertices(c),0);this._count=i;const n=ae.createBuffer(i),s=this._origin;let r=0,l=0;for(const u of e){for(let c=0;c<u.length;c+=3){const C=$(re,u[c],u[c+1],u[c+2]);c===0?l=this._renderCoordsHelper.getAltitude(C):this._renderCoordsHelper.setAltitude(C,l);const x=this._renderCoordsHelper.worldUpAtPosition(C,wt),d=r+2*c,B=be(re,C,s);if(c<u.length-3){n.up.setVec(d,x),n.up.setVec(d+3,x),n.up.setVec(d+5,x);for(let v=0;v<6;v++)n.start.setVec(d+v,B);n.extrude.setValues(d,0,-1),n.extrude.setValues(d+1,1,-1),n.extrude.setValues(d+2,1,1),n.extrude.setValues(d+3,0,-1),n.extrude.setValues(d+4,1,1),n.extrude.setValues(d+5,0,1)}if(c>0){n.up.setVec(d-2,x),n.up.setVec(d-4,x),n.up.setVec(d-5,x);for(let v=-6;v<0;v++)n.end.setVec(d+v,B)}}r+=this._numberOfRenderVertices(u)}return n.buffer}}const wt=o(),re=o(),ae=$e().vec3f(h.START).vec3f(h.END).vec3f(h.UP).vec2f(h.EXTRUDE);class N extends We{constructor(){super(...arguments),this.contrastControlEnabled=!1}}f([w()],N.prototype,"contrastControlEnabled",void 0);const U=H(6);function De(t){const e=new he;e.include(He),e.include(Ee,t);const i=e.fragment;if(t.lineVerticalPlaneEnabled||t.heightManifoldEnabled)if(i.uniforms.add(new _("maxPixelDistance",(n,s)=>t.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(n.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(n.lineVerticalPlaneSegment.origin))),i.code.add(a`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.spherical){const n=(r,l,u)=>P(r,l.heightManifoldTarget,u.camera.viewMatrix),s=(r,l)=>P(r,[0,0,0],l.camera.viewMatrix);i.uniforms.add(new M("heightManifoldOrigin",(r,l)=>(n(g,r,l),s(E,l),be(E,E,g),T(p,E),p[3]=Z(E),p)),new m("globalOrigin",(r,l)=>s(g,l)),new _("cosSphericalAngleThreshold",(r,l)=>1-Math.max(2,ve(l.camera.eye,r.heightManifoldTarget)*l.camera.perRenderPixelRatio)/Z(r.heightManifoldTarget))),i.code.add(a`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(a`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(t.pointDistanceEnabled&&(i.uniforms.add(new _("maxPixelDistance",(n,s)=>2*s.camera.computeScreenPixelSizeAt(n.pointDistanceTarget))),i.code.add(a`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),t.intersectsLineEnabled&&(i.uniforms.add(new _("perScreenPixelRatio",(n,s)=>s.camera.perScreenPixelRatio)),i.code.add(a`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(t.lineVerticalPlaneEnabled||t.intersectsLineEnabled)&&i.code.add(a`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(a`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),t.heightManifoldEnabled){i.uniforms.add(new D("angleCutoff",s=>R(s)),new M("heightPlane",(s,r)=>Se(s.heightManifoldTarget,s.renderCoordsHelper.worldUpAtPosition(s.heightManifoldTarget,g),r.camera.viewMatrix)));const n=t.spherical?a`normalize(globalOrigin - pos)`:a`heightPlane.xyz`;i.code.add(a`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${n})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return t.pointDistanceEnabled&&(i.uniforms.add(new D("angleCutoff",n=>R(n)),new M("pointDistanceSphere",(n,s)=>Et(n,s))),i.code.add(a`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),t.lineVerticalPlaneEnabled&&(i.uniforms.add(new D("angleCutoff",n=>R(n)),new M("lineVerticalPlane",(n,s)=>yt(n,s)),new m("lineVerticalStart",(n,s)=>Vt(n,s)),new m("lineVerticalEnd",(n,s)=>Dt(n,s))),i.code.add(a`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),t.intersectsLineEnabled&&(i.uniforms.add(new D("angleCutoff",n=>R(n)),new m("intersectsLineStart",(n,s)=>P(g,n.lineStartWorld,s.camera.viewMatrix)),new m("intersectsLineEnd",(n,s)=>P(g,n.lineEndWorld,s.camera.viewMatrix)),new m("intersectsLineDirection",(n,s)=>(b(p,n.intersectsLineSegment.vector),p[3]=0,T(g,xe(p,p,s.camera.viewMatrix)))),new _("intersectsLineRadius",n=>n.intersectsLineRadius)),i.code.add(a`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(a`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),e}function R(t){return ce(St,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-H(2))))}function Et(t,e){return P(Ne(W),t.pointDistanceOrigin,e.camera.viewMatrix),W[3]=ve(t.pointDistanceOrigin,t.pointDistanceTarget),W}function yt(t,e){const i=Ue(t.lineVerticalPlaneSegment,.5,g),n=t.renderCoordsHelper.worldUpAtPosition(i,Lt),s=T(E,t.lineVerticalPlaneSegment.vector),r=Be(g,n,s);return T(r,r),Se(t.lineVerticalPlaneSegment.origin,r,e.camera.viewMatrix)}function Vt(t,e){const i=b(g,t.lineVerticalPlaneSegment.origin);return t.renderCoordsHelper.setAltitude(i,0),P(i,i,e.camera.viewMatrix)}function Dt(t,e){const i=we(g,t.lineVerticalPlaneSegment.origin,t.lineVerticalPlaneSegment.vector);return t.renderCoordsHelper.setAltitude(i,0),P(i,i,e.camera.viewMatrix)}function Se(t,e,i){return P(le,t,i),b(p,e),p[3]=0,xe(p,p,i),Fe(le,p,Ct)}const St=de(),g=o(),p=Ge(),Lt=o(),E=o(),le=o(),Ct=je(),W=Ze(),Mt=Object.freeze(Object.defineProperty({__proto__:null,build:De,defaultAngleCutoff:U},Symbol.toStringTag,{value:"Module"}));class Rt extends ke{constructor(){super(...arguments),this.innerColor=X(1,1,1),this.innerWidth=1,this.glowColor=X(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=H(6),this.pointDistanceOrigin=o(),this.pointDistanceTarget=o(),this.lineVerticalPlaneSegment=j(),this.intersectsLineSegment=j(),this.intersectsLineRadius=3,this.heightManifoldTarget=o(),this.lineStartWorld=o(),this.lineEndWorld=o()}}class I extends _e{initializeProgram(e){return new ge(e.rctx,I.shader.get().build(this.configuration),Xe)}initializePipeline(){return fe({blending:me(A.ONE,A.ONE_MINUS_SRC_ALPHA),colorWrite:Pe})}}I.shader=new ue(Mt,()=>pe(()=>Promise.resolve().then(()=>Ot),void 0));class y extends N{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}f([w()],y.prototype,"heightManifoldEnabled",void 0),f([w()],y.prototype,"pointDistanceEnabled",void 0),f([w()],y.prototype,"lineVerticalPlaneEnabled",void 0),f([w()],y.prototype,"intersectsLineEnabled",void 0),f([w()],y.prototype,"spherical",void 0);let V=class extends Je{constructor(t){super(t),this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=k.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this._passParameters=new Rt,this.produces=new Map([[Q.LASERLINES,()=>!this.contrastControlEnabled],[Q.LASERLINES_CONTRAST_CONTROL,()=>this.contrastControlEnabled]])}initialize(){this._passParameters.renderCoordsHelper=this.renderCoordsHelper}consumes(){return Ke}get isDecoration(){return this._isDecoration}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(t){this._heightManifoldEnabled!==t&&(this._heightManifoldEnabled=t,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(t){b(this._passParameters.heightManifoldTarget,t),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(t){t!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=t,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(t){b(this._passParameters.pointDistanceTarget,t),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(t){b(this._passParameters.pointDistanceOrigin,t),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(t){t!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=t,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){O(t,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(t){t!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=t,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(t){O(t,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(t){t!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=t,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){t!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=t,this._requestRender())}get viewingMode(){return this._viewingMode}set viewingMode(t){t!==this._viewingMode&&(this._viewingMode=t,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,this._pathVerticalPlaneData!=null&&this._requestRender())}set pathVerticalPlaneVertices(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new se(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=t,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new se(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=t,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(t){et(this._passParameters,t)&&this._requestRender()}initializeRenderContext(t){this._context=t,this._techniqueRepository=t.techniqueRepository,this._techniqueConfig=new y;const e=new N;e.contrastControlEnabled=this.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(z,e)}uninitializeRenderContext(){this._technique=Y(this._technique),this._pathVerticalPlaneData=tt(this._pathVerticalPlaneData),this._pathTechnique=Y(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===k.Global,this._technique=this._techniqueRepository.releaseAndAcquire(I,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}renderNode(t,e){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(t,e),this.pathVerticalPlaneEnabled&&this._renderPath(t)}_renderUnified(t,e){const i=t.rctx;this._updatePassParameters(t),i.bindTechnique(e,t.bindParameters,this._passParameters),i.screen.draw()}_renderPath(t){if(this._pathVerticalPlaneData==null||this._pathTechnique==null)return;const e=t.rctx,i=this._pathTechnique;e.bindTechnique(i,t.bindParameters,{...this._passParameters,origin:this._pathVerticalPlaneData.origin}),this._pathVerticalPlaneData.draw(t.rctx)}_updatePassParameters(t){if(!this._intersectsLineEnabled)return;const e=t.bindParameters.camera;if(this._intersectsLineInfinite){if(it(nt(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),S),S.c0=-Number.MAX_VALUE,!st(e.frustum,S))return;rt(S,this._passParameters.lineStartWorld),at(S,this._passParameters.lineEndWorld)}else b(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),we(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}get test(){return{passParameters:this._passParameters}}};f([q({constructOnly:!0})],V.prototype,"contrastControlEnabled",void 0),f([q({constructOnly:!0})],V.prototype,"_isDecoration",void 0),f([q({constructOnly:!0})],V.prototype,"renderCoordsHelper",void 0),V=f([Qe("esri.views.3d.support.LaserLineRenderer")],V);const S=Ye();class qt extends mt{constructor(e){super(e),this._angleCutoff=U,this._style={},this._heightManifoldTarget=o(),this._heightManifoldEnabled=!1,this._intersectsLine=j(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){return this._renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){e!=null?(b(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(e==null)return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(e,$t);this.intersectsLine=lt(e,i),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){e!=null?(O(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=e!=null?O(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=e!=null?{origin:J(e.origin),target:e.target?J(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||this._pointDistanceLine!=null||this._pathVerticalPlaneBuffers!=null)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){this._renderer==null&&(this._renderer=new V({renderCoordsHelper:this.view.renderCoordsHelper,contrastControlEnabled:!0,_isDecoration:this.isDecoration}),this._renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer))}_syncStyle(){this._renderer!=null&&(this._renderer.setParameters(this._style),this._style.intersectsLineRadius!=null&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){this._renderer!=null&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){this._renderer!=null&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){this._renderer!=null&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){this._renderer!=null&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){this._renderer!=null&&(this._renderer.pathVerticalPlaneEnabled=this._pathVerticalPlaneBuffers!=null&&this.visible,this._pathVerticalPlaneBuffers!=null&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){this._renderer!=null&&(this._renderer.lineVerticalPlaneEnabled=this._lineVerticalPlaneSegment!=null&&this.visible,this._lineVerticalPlaneSegment!=null&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(this._renderer==null)return;const e=this._pointDistanceLine,i=e!=null;this._renderer.pointDistanceEnabled=i&&e.target!=null&&this.visible,i&&(this._renderer.pointDistanceOrigin=e.origin,e.target!=null&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){this._renderer!=null&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const $t=o();class Wt extends Pt{constructor(e){super(e),this._material=null,this._texture=null,this._geometry=null,this._size=3,this._color=K(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=K(1,1,1,1),this._elevationInfo=null,this.applyProperties(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const i=this._preferredTextureSize;this._size=e,i<this._preferredTextureSize?this.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){ee(e,this._color)||(te(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,this.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){ee(e,this._outlineColor)||(te(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}_updateMaterial(){this._material&&this._material.setParameters(this._materialParameters)}_updateSizeAttribute(){const e=this.object;if(e==null)return;const i=e.geometries[0];if(i==null)return;const n=i.getMutableAttribute(h.SIZE).data,s=this._geometrySize;n[0]=s,n[1]=s,e.geometryVertexAttributeUpdated(e.geometries[0],h.SIZE)}get _materialParameters(){var e;return{color:this._color,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:ot(this._primitive),distanceFieldBoundingBox:At,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:(e=this._texture)==null?void 0:e.id,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled,isDecoration:this.isDecoration}}get _geometrySize(){return this._size/L}createExternalResources(){this._texture=ht(this._primitive,this._preferredTextureSize),this._material=new ct(this._materialParameters);const e=this.view._stage;this._texture.load(e.renderView.renderingContext),e.add(this._texture)}destroyExternalResources(){this._texture&&(this.view._stage.remove(this._texture),this._texture.dispose(),this._texture=null),this._material=null}createGeometries(e){const i=this._createRenderGeometry();i!=null&&e.addGeometry(i)}forEachExternalMaterial(e){this._material&&e(this._material)}get _preferredTextureSize(){return dt(2*this._geometrySize,16,128)}calculateMapBounds(e){var s;const i=(s=this.object)==null?void 0:s.geometries[0];if(!i)return!1;const n=i.attributes.get(h.POSITION).data;return ie(n,this.view.renderCoordsHelper.spatialReference,oe,this.view.spatialReference),ut(e,oe),!0}_createRenderGeometry(){const{geometry:e,_material:i}=this;if(e==null||i==null)return null;const{renderCoordsHelper:n,elevationProvider:s}=this.view,r=pt(e,s,_t.fromElevationInfo(this.elevationInfo),n),l=$(ne.get(),e.x,e.y,r),u=ne.get();ie(l,e.spatialReference,u,n.spatialReference);const c=this._geometrySize;return gt(i,null,u,null,[c,c],[0,0,0,1])}}const L=ft,At=[L/2,L/2,1-L/2,1-L/2],oe=o(),Tt=Object.freeze(Object.defineProperty({__proto__:null,build:ye},Symbol.toStringTag,{value:"Module"})),Ot=Object.freeze(Object.defineProperty({__proto__:null,build:De,defaultAngleCutoff:U},Symbol.toStringTag,{value:"Module"}));export{qt as c,Wt as x};
