import{i as a,S as y}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function v(i,r,t){const n=i.map(({webformatURL:e,largeImageURL:o,tags:s,likes:p,views:f,comments:h,downloads:g})=>`
            <li class="gallery-items">
                <a class="gallery-link" href="${o}">
                    <img
                        class="gallery-image"
                        src="${e}"
                        alt="${s}"
                    />
                </a>
                <div class="info">
                    <div class="info-item">
                        <h3>Likes</h3>
                        <p>${p}</p>
                    </div>

                    <div class="info-item">
                        <h3>Views</h3>
                        <p>${f}</p>
                    </div>

                    <div class="info-item">
                        <h3>Comments</h3>
                        <p>${h}</p>
                    </div>

                    <div class="info-item">
                        <h3>Downloads</h3>
                        <p>${g}</p>
                    </div>
                </div>
            </li>
        `).join("");r.insertAdjacentHTML("beforeend",n),t.refresh()}async function L(i){const r=new URLSearchParams({key:"47628462-4a8006828a6d084475c3078e6",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=await fetch(`https://pixabay.com/api/?${r}`);if(!t.ok)throw new Error(t.status);return await t.json()}const d=document.querySelector(".search-form"),w=d.querySelector("#searchInput"),c=document.querySelector(".gallery"),m=document.querySelector(".loader");function S(){m.classList.add("active")}function l(){m.classList.remove("active")}d.addEventListener("submit",i=>{i.preventDefault(),S();const r=w.value;if(c.innerHTML="",r.trim()===""){console.log("Input is empty"),a.info({message:"Input is empty",messageSize:"16px",position:"topRight"}),l();return}L(r).then(t=>{if(console.log(t),t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"}),c.innerHTML="";return}v(t.hits,c,u)}).catch(t=>{console.log(t),a.error({message:t.message,theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"}),l()}).finally(()=>{l(),i.target.reset()})});let u=new y(".gallery .gallery-link",{captionsData:"alt",captionsDelay:250});u.on("show.simplelightbox",function(){});u.on("error.simplelightbox",function(i){console.log(i)});
//# sourceMappingURL=index.js.map
