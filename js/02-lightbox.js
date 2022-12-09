import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", stopDefaultActions);

function makeGalleryMarkUp(images) {
  return images.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`,
    ""
  );
}

galleryRef.insertAdjacentHTML("beforeend", makeGalleryMarkUp(galleryItems));

function stopDefaultActions(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  fadeSpeed: 400,
});
