function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{uE as $,uF as O,uG as b,J as l,uH as p,uI as S,uJ as A,uK as x,uL as C,uM as u,oB as E,uN as D,uO as c,uP as w,_ as N,uQ as R,s7 as y,e as i,uR as o,jT as m,uS as V,uT as M,uU as L,uV as F,uW as U,uX as j,uY as B,uZ as z,u_ as G,u$ as W,v0 as H,v1 as k,v2 as J,v3 as Q,v4 as q,j2 as f,v5 as g,v6 as K,v7 as X,v8 as Y,v9 as Z,va as ee,u1 as te,vb as se,vc as ae,k6 as re,vd as ie}from"./index-O3Mu8AMX.js";function T(s){const e=new $,{vertex:t,fragment:a}=e;return O(t,s),e.include(b,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(p`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(S,s),e.include(A,s),a.uniforms.add(new x("tex",n=>n.texture),new C("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.output===u.Alpha?a.code.add(p`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${p.float(E)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(D),a.code.add(p`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${p.float(E)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===c.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));class _ extends V{initializeProgram(e){return new M(e.rctx,_.shader.get().build(this.configuration),I)}_setPipelineState(e,t){const a=this.configuration,n=e===c.NONE,d=e===c.FrontFace;return L({blending:a.output!==u.Color&&a.output!==u.Alpha||!a.transparent?null:n?ne:F(e),culling:U(a.cullFace),depthTest:{func:j(e)},depthWrite:n?a.writeDepth?B:null:z(e),colorWrite:G,stencilWrite:a.hasOccludees?W:null,stencilTest:a.hasOccludees?t?H:k:null,polygonOffset:n||d?null:J(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new w(oe,()=>N(()=>Promise.resolve().then(()=>ce),void 0));const ne=R(y.ONE,y.ONE_MINUS_SRC_ALPHA);class r extends Q{constructor(){super(...arguments),this.output=u.Color,this.cullFace=m.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:u.COUNT})],r.prototype,"output",void 0),i([o({count:m.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:c.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const I=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class he extends q{constructor(e){super(e,new pe),this.supportsEdges=!0,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>t===u.Highlight||g(t)&&!this.parameters.transparent],[f.TRANSPARENT_MATERIAL,t=>g(t)&&this.parameters.transparent&&this.parameters.writeDepth],[f.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>g(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>K(t)]]),this._vertexAttributeLocations=I,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<X,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=Y.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new ue(e)}}class le extends Z{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==u.Color&&this._output!==u.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ue extends ee{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const v=a.attributes.get(h);if(v)if(h===l.PERSPECTIVEDIVIDE){te(v.size===1);const P=n.getField(h,se);P&&ae(v,P,d)}else re(h,v,e,t,n,d)}}}class pe extends ie{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=m.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ce=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{he as T};
