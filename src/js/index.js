// import { fetchCatByBreed } from './cat-api';
// import { refs } from './refs';
// import { createCatInfoMarkup } from './cat-markup';

// refs.breedSelector.addEventListener('change', onSearch);
// refs.breedSelector.style.display = 'none';
// refs.loader.style.display = 'block';
// refs.error.style.display = 'none';
// refs.catContainer.style.display = 'none';

// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key =
//   'live_ds7IOLf26S1PWwqgPFrJeWA3DKWOVsAilq9eQpOhrh5ZJrNWtWQLnqoUn19c2yKi';

// fetchBreeds()
//   .then(renderBreedsCollection)
//   .catch(error => {
//     refs.error.style.display = 'block';
//     console.log(error);
//   });

// function onSearch() {
//   const breedId = refs.breedSelector.value;
//   fetchCatByBreed(breedId)
//     .then(renderCatCard)
//     .catch(error => {
//       refs.error.style.display = 'block';
//       console.log(error);
//       refs.catContainer.innerHTML = '';
//     });
// }

// function fetchBreeds() {
//   refs.catContainer.style.display = 'none';
//   refs.loader.style.display = 'block';
//   return fetch(url, {
//     headers: {
//       'x-api-key': api_key,
//     },
//   }).then(response => {
//     return response.json();
//   });
// }

// function renderCatCard(data) {
//   refs.error.style.display = 'none';
//   refs.loader.style.display = 'none';
//   refs.catContainer.style.display = 'block';

//   const breeds = data[0].breeds;
//   const catImage = data[0].url;
//   const { name, description, temperament } = breeds[0];

//   refs.catContainer.innerHTML = createCatInfoMarkup({
//     catImage,
//     name,
//     description,
//     temperament,
//   });
// }

// function renderBreedsCollection(data) {
//   refs.breedSelector.style.display = 'block';
//   refs.loader.style.display = 'none';

//   data.map(catBreed => {
//     const breedsSelect = `<option value='${catBreed.id}'>${catBreed.name}</option>`;
//     refs.breedSelector.insertAdjacentHTML('beforeend', breedsSelect);
//   });
// }

// refactoring

import { fetchCatByBreed } from './cat-api';
import { refs } from './refs';
import { createCatInfoMarkup } from './cat-markup';
import { apiInstance } from './api';

refs.breedSelector.addEventListener('change', onSearch);
refs.breedSelector.style.display = 'none';
refs.loader.style.display = 'block';
refs.error.style.display = 'none';
refs.catContainer.style.display = 'none';

fetchBreeds()
  .then(renderBreedsCollection)
  .catch(error => {
    refs.error.style.display = 'block';
    console.log(error);
  });

function onSearch() {
  const breedId = refs.breedSelector.value;
  fetchCatByBreed(breedId)
    .then(renderCatCard)
    .catch(error => {
      refs.error.style.display = 'block';
      console.log(error);
      refs.catContainer.innerHTML = '';
    });
}

function fetchBreeds() {
  refs.catContainer.style.display = 'none';
  refs.loader.style.display = 'block';

  return apiInstance.get(`/v1/breeds`).then(result => result.data);
}

function renderCatCard(data) {
  refs.error.style.display = 'none';
  refs.loader.style.display = 'none';
  refs.catContainer.style.display = 'block';

  const breeds = data[0].breeds;
  const catImage = data[0].url;
  const { name, description, temperament } = breeds[0];

  refs.catContainer.innerHTML = createCatInfoMarkup({
    catImage,
    name,
    description,
    temperament,
  });
}

function renderBreedsCollection(data) {
  refs.breedSelector.style.display = 'block';
  refs.loader.style.display = 'none';

  data.map(catBreed => {
    const breedsSelect = `<option value='${catBreed.id}'>${catBreed.name}</option>`;
    refs.breedSelector.insertAdjacentHTML('beforeend', breedsSelect);
  });
}
