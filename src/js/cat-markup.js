export function createCatInfoMarkup({
  catImage,
  name,
  description,
  temperament,
}) {
  return `<div class="cat-container">
        <img class="cat-image" src="${catImage}" width="450" height="350" />
        <div>
        <h2 class="cat-name">${name}</h2>
        <p class="cat-desc">${description}</p>
        <p class="cat-temp">Temperament: ${temperament}</p>
        </div>
      </div>`;
}
