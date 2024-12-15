import{i as h,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function g(i,o,t){const n=i.map(({webformatURL:e,largeImageURL:r,tags:s,likes:u,views:d,comments:f,downloads:m})=>`
            <li class="gallery-items">
                <a class="gallery-link" href="${r}">
                    <img
                        class="gallery-image"
                        src="${e}"
                        alt="${s}"
                    />
                </a>
                <div class="info">
                    <div class="info-item">
                        <h3>Likes</h3>
                        <p>${u}</p>
                    </div>

                    <div class="info-item">
                        <h3>Views</h3>
                        <p>${d}</p>
                    </div>

                    <div class="info-item">
                        <h3>Comments</h3>
                        <p>${f}</p>
                    </div>

                    <div class="info-item">
                        <h3>Downloads</h3>
                        <p>${m}</p>
                    </div>
                </div>
            </li>
        `).join("");o.innerHTML="",o.insertAdjacentHTML("beforeend",n),t.refresh()}async function y(i){const o=new URLSearchParams({key:"47628462-4a8006828a6d084475c3078e6",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=await fetch(`https://pixabay.com/api/?${o}`);if(!t.ok)throw new Error(t.status);return await t.json()}const c=document.querySelector(".search-form"),v=c.querySelector("#searchInput"),L=document.querySelector(".gallery"),l=document.querySelector(".loader");function w(){l.classList.add("active")}function b(){l.classList.remove("active")}c.addEventListener("submit",i=>{i.preventDefault(),w();const o=v.value;if(o.trim()===""){console.log("Input is empty");return}y(o).then(t=>{if(console.log(t),t.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"});return}g(t.hits,L,a)}).catch(t=>console.log(t)).finally(()=>{b(),i.target.reset()})});let a=new p(".gallery .gallery-link",{captionsData:"alt",captionsDelay:250});a.on("show.simplelightbox",function(){});a.on("error.simplelightbox",function(i){console.log(i)});
//# sourceMappingURL=index.js.map
