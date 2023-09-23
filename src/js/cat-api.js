const url = `https://api.thecatapi.com/v1/breeds`;

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

export default { fetchBreeds };
