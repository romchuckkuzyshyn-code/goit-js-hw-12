import{a as p,S,i}from"./assets/vendor--6n4cVRZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const P="54643656-39fbeee4a4754ff685e869119",q="https://pixabay.com/api";p.defaults.baseURL=q;async function f(r="",s){return(await p.get("/",{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const x=new S(".gallery a",{captionsData:"alt",captionDelay:250}),y=document.querySelector(".loader"),g=document.querySelector(".gallery"),m=document.querySelector(".js-load-btn");function B({likes:r,tags:s,views:t,downloads:o,comments:e,webformatURL:a,largeImageURL:n}){return`
        <li class= "gallery-item">
          <a href="${n}"
            ><img src="${a}" alt="${s}" />
            <div class="gallery-info">
              <div class="gallery-info-box">
                <span class="gallery-label">Likes</span>
                <span class="gallery-value">${r}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Views</span>
                <span class="gallery-value">${t}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Comments</span>
                <span class="gallery-value">${e}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Downloads</span>
                <span class="gallery-value">${o}</span>
              </div>
            </div>
          </a
          >
          </li>`}function h(r){const s=r.map(t=>B(t)).join("");g.insertAdjacentHTML("beforeend",s),x.refresh()}function M(){g.innerHTML="",u()}function b(){y.classList.remove("hidden")}function v(){y.classList.add("hidden")}function R(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}const L=document.querySelector(".form"),E=document.querySelector(".js-load-btn");let c="",l=1,d=0;const w=15;L.addEventListener("submit",$);E.addEventListener("click",O);async function $(r){if(r.preventDefault(),c=r.target.elements["search-text"].value.trim(),c.length===0){i.error({message:"Please enter a search query!",position:"topRight"});return}l=1,d=0,M(),u(),b();try{const t=await f(c,l);if(d=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d>w&&R(),h(t.hits)}catch{i.error({message:"Sorry, we have a problem. Please try again!",position:"topRight"})}finally{v()}L.reset()}async function O(){l+=1,b();try{const r=await f(c,l);h(r.hits);const s=Math.ceil(d/w);l>=s&&(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}));const t=document.querySelector(".gallery-item");if(t){const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*4,behavior:"smooth"})}}catch{i.error({message:"Sorry, we have a problem. Please try again!",position:"topRight"})}finally{v()}}
//# sourceMappingURL=index.js.map
