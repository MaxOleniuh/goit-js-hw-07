import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join("");
}

gallery.addEventListener("click", pictureClickHandler);

function pictureClickHandler(e) {   
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
        return;
    }
  const instance = basicLightbox.create(`
         <img width="1400" height="900" src="${e.target.dataset.source}">
`, {
         onClose: (instance) => {
            document.removeEventListener('keydown', pressedEscKeyHandler);
        }
});
    instance.show();
    document.addEventListener('keydown', pressedEscKeyHandler);
        function pressedEscKeyHandler(e) {
    if (e.code === 'Escape') {
        instance.close();
    }
}
}
