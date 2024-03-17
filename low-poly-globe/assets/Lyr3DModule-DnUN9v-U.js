function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/lyr3DMain-CVJ214O4.js","assets/index-O3Mu8AMX.js","assets/index-rovX6Grx.css","assets/lyr3DWorker-BUi_V5aP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i,eV as r}from"./index-O3Mu8AMX.js";function _(){return new Promise(e=>i(()=>import("./lyr3DMain-CVJ214O4.js"),__vite__mapDeps([0,1,2])).then(t=>t.l).then(({default:t})=>{const n=t({locateFile:o,onRuntimeInitialized:()=>e(n)})})).catch(e=>{throw e})}function u(){return new Promise(e=>i(()=>import("./lyr3DWorker-BUi_V5aP.js"),__vite__mapDeps([3,1,2])).then(t=>t.l).then(({default:t})=>{const n=t({locateFile:o,onRuntimeInitialized:()=>e(n)})})).catch(e=>{throw e})}function o(e){return r(`esri/libs/lyr3d/${e}`)}export{u as e,_ as n};
