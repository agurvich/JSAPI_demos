import{g as I,bK as Z,x as X,kA as N,eW as A,kB as E,ex as g,aQ as f,bo as u,be as Y,kC as ss,kD as es,kE as ts,aI as os,kF as as,kG as ns,kH as rs,bJ as is,kI as _,bM as x,bL as S,kJ as cs,aK as D,gV as ls,aL as us,kK as ps,kL as ms,cZ as fs,gO as ds,kM as gs,kN as hs,a4 as ws}from"./index-O3Mu8AMX.js";const k={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function h(t,e=o=>{},s){return new ys(t,e,s)}let ys=class{constructor(e,s=a=>{},o){if(this.onProgress=s,this.taskName=o,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof e=="number"){this._weights={};for(let a=0;a<e;a++){const n=a,r=1/e;this._weights[n]=r,this._progressMap.set(n,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,o]of this._progressMap.entries())e+=o*this._weights[s];if(e===1&&I("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[o,a]of this._timingsMap){const n=Math.round(a.end-a.start)/1e3,r=Math.round(n/s*100);console.log(this.taskName??"Task",{stepKey:o,stepTime:n,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),I("enable-feature:esri-3dofl-upload-timings")){const o=performance.now();this._startTime??(this._startTime=o);const a=Z(this._timingsMap,e,()=>({start:o,end:0}));s===1&&(a.end=o)}this.emitProgress()}simulate(e,s){return U(o=>this.setProgress(e,o),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}};function U(t=s=>{},e=$s){const s=performance.now();t(0);const o=setInterval(()=>{const a=performance.now()-s,n=1-Math.exp(-a/e);t(n)},ks);return X(()=>{clearInterval(o),t(1)})}function Ps(t,e=Ts){return N(E(t*B/e))}function bs(t,e=As){return N(E(t*B/e))}const Ts=10,As=10,B=8e-6,ks=A(50),$s=A(1e3),O=1e6,v=20*O,Ms=2e9,Fs=3;async function js({data:t,name:e,description:s},o,a){let n=null;try{const r=g(o,"uploads"),i=g(r,"info"),{data:c}=await f(i,{query:{f:"json"},responseType:"json"});u(a);const p=Y(o),l=c.maxUploadFileSize*O,d=p?Ms:l,T=p?Math.min(v,l):v;if(t.size>d)throw new Error("Data too large");const z=g(r,"register"),{data:$}=await f(z,{query:{f:"json",itemName:Is(e),description:s},responseType:"json",method:"post"});if(u(a),!$.success)throw new Error("Registration failed");const{itemID:H}=$.item;n=g(r,H);const G=g(n,"uploadPart"),M=Math.ceil(t.size/T),w=new Array;for(let m=0;m<M;++m)w.push(t.slice(m*T,Math.min((m+1)*T,t.size)));const y=w.slice().reverse(),F=new Array,J=h(M,a==null?void 0:a.onProgress,"uploadItem"),K=async()=>{for(;y.length!==0;){const m=w.length-y.length,P=y.pop(),b=new FormData,V=J.simulate(m,Ps(P.size));try{b.append("f","json"),b.append("file",P),b.append("partId",`${m}`);const{data:Q}=await f(G,{timeout:0,body:b,responseType:"json",method:"post"});if(u(a),!Q.success)throw new Error("Part upload failed")}finally{V.remove()}}};for(let m=0;m<Fs&&y.length!==0;++m)F.push(K());await Promise.all(F);const W=g(n,"commit"),{data:j}=await f(W,{query:{f:"json",parts:w.map((m,P)=>P).join(",")},responseType:"json",method:"post"});if(u(a),!j.success)throw new Error("Commit failed");return j.item}catch(r){if(n!=null){const i=g(n,"delete");await f(i,{query:{f:"json"},responseType:"json",method:"post"})}throw r}}function Is(t){return t.replaceAll("/","_").replaceAll("\\","_")}async function Zs(t,e,s){var n;const o=t.length;if(!o)return(n=s==null?void 0:s.onProgress)==null||n.call(s,1),[];const a=h(o,s==null?void 0:s.onProgress,"uploadAssets");return Promise.all(t.map((r,i)=>vs(r,e,{...s,onProgress:a.makeOnProgress(i)})))}async function vs(t,{layer:e,ongoingUploads:s},o){var r;const a=s.get(t);if(a)return a;if(!Js(e))throw new ss;if(Ns(t,e))return(r=o==null?void 0:o.onProgress)==null||r.call(o,1),t;const n=Es(t,e,o);s.set(t,n);try{await n}finally{s.delete(t)}return t}function Ns(t,e){const{parsedUrl:s}=e;return s!=null&&t.metadata.externalSources.some(o=>es(o,s))}async function Es(t,e,s){const{metadata:o}=t,{displaySource:a}=o,n=C(a==null?void 0:a.source,e),r=!!n,i=o.externalSources.length>0,c=r?_s(n,e,s):i?xs(t,e,s):Ss(t,e,s),p=await c;return u(s),t.addExternalSources([p]),t}async function _s(t,e,s){return{source:await L(t,e,s),original:!0}}async function xs(t,e,s){const o=R(e),{externalSources:a}=t.metadata,n=Us(a,e);if(!n)throw new ts;const r=h(k.uploadConvertibleSource,s==null?void 0:s.onProgress,"uploadConvertibleSource"),i=await L(n,e,{onProgress:r.makeOnProgress("uploadEditSource")});t.addExternalSources([{source:i,original:!0}]);const c=n.reduce((l,{asset:d})=>d instanceof File?l+d.size:l,0),p=r.simulate("serviceAssetsToGlb",bs(c));try{return{source:await zs(i,e,o)}}finally{p.remove()}}async function Ss(t,e,s){const o=h(k.uploadLocalMesh,s==null?void 0:s.onProgress,"uploadLocalMesh"),a=Ds(t,e,{...s,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await q([a],e,{...s,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:t.extent.clone(),original:!0}}async function Ds(t,e,s){const o=R(e),a=await t.load(s),n=await a.toBinaryGLTF({ignoreLocalTransform:!0});u(s);const r=await n.buffer();return u(s),{blob:new Blob([r.data],{type:r.type}),assetName:`${os()}.glb`,assetType:o}}function Us(t,e){for(const s of t){const o=C(s.source,e);if(o)return o}return null}function C(t,e){if(!t)return null;const{infoFor3D:{supportedFormats:s,editFormats:o}}=e,a=ms(t),n=new Array;let r=!1;for(let i=0;i<a.length;++i){const c=Bs(a[i],s);if(!c)return null;o.includes(c.assetType)&&(r=!0),n.push(c)}return r?n:null}function Bs(t,e){const s=as(t,e);return s?{asset:t,assetType:s}:null}async function L(t,e,s){return q(t.map(o=>Os(o,s)),e,s)}async function q(t,e,s){const o=h(k.uploadAssetBlobs,s==null?void 0:s.onProgress,"uploadAssetBlobs"),a=await Ls(t,e,{...s,onProgress:o.makeOnProgress("prepareAssetItems")});u(s);const n=a.map(({item:i})=>i),{uploadResults:r}=await qs(n,e,{...s,onProgress:o.makeOnProgress("uploadAssetItems")});return u(s),t.map((i,c)=>Rs(a[c],r[c],e))}async function Os(t,e){const{asset:s,assetType:o}=t;if(s instanceof File)return{blob:s,assetName:s.name,assetType:o};const a=await s.toBlob(e);return u(e),{blob:a,assetName:s.assetName,assetType:o}}async function Cs(t,e,s){const{blob:o,assetType:a,assetName:n}=t;let r=null;try{const i=await js({data:o,name:n},e.url,s);u(s),r={assetType:a,assetUploadId:i.itemID}}catch(i){fs(i),Ks().warnOnce(`Service ${e.url} does not support the REST Uploads API.`)}if(!r){const i=await ds(o);if(u(s),!i.isBase64)throw new gs;r={assetType:a,assetData:i.data}}if(!r)throw new hs;return{item:r,assetName:n}}function Ls(t,e,s){const o=h(t.length,s==null?void 0:s.onProgress,"prepareAssetItems");return Promise.all(t.map(async(a,n)=>{const r=Cs(await a,e,{...s,onProgress:o.makeOnProgress(n)});return u(s),r}))}async function qs(t,e,s){const o=U(s==null?void 0:s.onProgress);try{const a=await f(g(e.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(t)},method:"post",responseType:"json"});if(u(s),a.data.uploadResults.length!==t.length)throw new ns(t.length,a.data.uploadResults.length);return a.data}finally{o.remove()}}function Rs(t,e,s){const{success:o}=e;if(!o){const{error:p}=e;throw new rs(t.assetName,p)}const{assetHash:a}=e,{assetName:n,item:{assetType:r}}=t,{infoFor3D:{supportedFormats:i}}=s,c=is(r,i);if(!c)throw new _(r);return new x(n,c,[new S(`${s.parsedUrl.path}/assets/${a}`,a)])}async function zs(t,e,s){var p;const o=t.map(({assetName:l,parts:d})=>({assetName:l,assetHash:d[0].partHash})),a=(p=e.capabilities)==null?void 0:p.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:a},r=g(e.parsedUrl.path,"convert3D");let i;try{i=(await(a?Gs:Hs)(r,{query:n,responseType:"json",timeout:0})).data}catch{throw new cs}const{supportedFormats:c}=e.infoFor3D;return i.assets.map(l=>{const d=D(l.contentType,c);if(!d)throw new _(d);return new x(l.assetName,l.contentType,[new S(l.assetURL,l.assetHash)])})}function Hs(t,e){return f(t,e)}async function Gs(t,e){const s=(await f(t,e)).data.statusUrl;for(;;){const o=(await f(s,{query:{f:"json"},responseType:"json"})).data;switch(o.status){case"Completed":return f(o.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(o.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await ls(Ws)}}function Js(t){return!!t.infoFor3D&&!!t.url}function R(t){const{infoFor3D:e}=t,s=D("model/gltf-binary",e.supportedFormats)??us("glb",e.supportedFormats);if(!s)throw new ps;return s}function Ks(){return ws.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const Ws=A(1e3);export{Zs as uploadAssets};