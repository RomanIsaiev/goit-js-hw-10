// import axios from 'axios';

const refs = {
  breedSelector: document.querySelector('.breed-select'),
  catContainer: document.querySelector('.cat-info'),

  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

refs.breedSelector.addEventListener('change', fetchBreeds);

refs.breedSelector.style.display = 'none';
refs.loader.style.display = 'block';
refs.error.style.display = 'none';
refs.catContainer.style.display = 'none';

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key =
  'live_ds7IOLf26S1PWwqgPFrJeWA3DKWOVsAilq9eQpOhrh5ZJrNWtWQLnqoUn19c2yKi';

fetchBreeds();
// .then(data => {
//   renderBreedsCollection(data);
//   const breedId = refs.breedSelector.value;
//   console.log(breedId);
//   fetchCatByBreed(breedId)
//     .then(renderCatCard)
//     .catch(error => {
//       refs.error.style.display = 'block';
//       console.log(error);
//     });
// })
// .catch(error => {
//   refs.error.style.display = 'block';
//   console.log(error);
// });

function fetchBreeds() {
  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      refs.catContainer.style.display = 'none';
      refs.loader.style.display = 'block';
      return response.json();
    })
    .then(data => {
      renderBreedsCollection(data);
      const breedId = refs.breedSelector.value;
      fetchCatByBreed(breedId)
        .then(renderCatCard)
        .catch(error => {
          refs.error.style.display = 'block';
          console.log(error);
        });
    })
    .catch(error => {
      refs.error.style.display = 'block';
      console.log(error);
    });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        'x-api-key': api_key,
      },
    }
  ).then(response => {
    refs.catContainer.style.display = 'none';
    refs.loader.style.display = 'block';
    return response.json();
  });
}

function renderCatCard(data) {
  refs.loader.style.display = 'none';
  refs.catContainer.style.display = 'block';
  const breeds = data[0].breeds;
  const catName = breeds[0].name;
  const catDesc = breeds[0].description;
  const catTemp = breeds[0].temperament;
  const catImage = data[0].url;

  const markup = `<div class="cat-container">
        <img class="cat-image" src="${catImage}" width="450" height="350" />
        <div>
        <h2 class="cat-name">${catName}</h2>
        <p class="cat-desc">${catDesc}</p>
        <p class="cat-temp">Temperament: ${catTemp}</p>
        </div>
      </div>`;

  refs.catContainer.innerHTML = markup;
}

function renderBreedsCollection(data) {
  let storedBreeds = [];
  refs.breedSelector.style.display = 'block';
  refs.loader.style.display = 'none';

  storedBreeds = data;
  for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
    option.value = `${breed.id}`;
    option.innerHTML = `${breed.name}`;

    document.querySelector('.breed-select').appendChild(option);
  }
}
