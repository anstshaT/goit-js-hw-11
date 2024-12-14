export function renderPhotos(arr, photoList, gallery) {
    const markup = arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `
            <li class="gallery-items">
                <a class="gallery-link" href="${largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${webformatURL}"
                        alt="${tags}"
                    />
                </a>
                <div class="info">
                    <div class="info-item">
                        <h3>Likes</h3>
                        <p>${likes}</p>
                    </div>

                    <div class="info-item">
                        <h3>Views</h3>
                        <p>${views}</p>
                    </div>

                    <div class="info-item">
                        <h3>Comments</h3>
                        <p>${comments}</p>
                    </div>

                    <div class="info-item">
                        <h3>Downloads</h3>
                        <p>${downloads}</p>
                    </div>
                </div>
            </li>
        `
    }).join("");

    photoList.innerHTML = "";

    photoList.insertAdjacentHTML("beforeend", markup);

    gallery.refresh();

}