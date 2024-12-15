import { renderPhotos } from "./js/render-function";
import { fetchFunction } from "./js/pixabay-api";

// Повідомлення
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Модальне вікно
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const form = document.querySelector('.search-form');
const input = form.querySelector('#searchInput');
const photoList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');


function showLoader() {
    loader.classList.add('active')
}

function hideLoader() {
    loader.classList.remove('active')
}


form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        showLoader();
        const query = input.value;
    
        if(query.trim() === "") {
            console.log("Input is empty");
            
            return;
        }
    
        fetchFunction(query)
        .then((photos) => {
            console.log(photos);
            if (photos.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    theme: "dark",
                    backgroundColor: "red",
                    messageColor: "white",
                    messageSize: "16px",
                    position: "topRight"
                });
                return;
            }

            renderPhotos(photos.hits, photoList, gallery);
            })
        .catch((error) => console.log(error))
        .finally(() => {
            hideLoader()
            evt.target.reset()
        })
})

let gallery = new SimpleLightbox('.gallery .gallery-link', {
        captionsData: 'alt',
        captionsDelay: 250
    });
    gallery.on('show.simplelightbox', function () { 
    });
    
    gallery.on('error.simplelightbox', function (e) {
        console.log(e); 
});