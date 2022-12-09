import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", handleImageClick);

function makeGalleryMarkUp(images) {
  return images
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
    )
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", makeGalleryMarkUp(galleryItems));

function handleImageClick(event) {
  stopDefaultActions(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src='${event.target.dataset.source}' width='800', height ='600'>`
  );
  instance.show();

  galleryRef.addEventListener("keydown", handleModalWindowCloseOnEscape);

  function handleModalWindowCloseOnEscape(event) {
    if (event.code === "Escape") {
      instance.close();
      galleryRef.removeEventListener("keydown", handleModalWindowCloseOnEscape);
    }
  }
}

function stopDefaultActions(event) {
  event.preventDefault();
}
