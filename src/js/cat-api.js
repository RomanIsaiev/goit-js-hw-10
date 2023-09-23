import { refs } from './refs';

const api_key =
  'live_ds7IOLf26S1PWwqgPFrJeWA3DKWOVsAilq9eQpOhrh5ZJrNWtWQLnqoUn19c2yKi';

export function fetchCatByBreed(breedId) {
  refs.catContainer.style.display = 'none';
  refs.loader.style.display = 'block';
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        'x-api-key': api_key,
      },
    }
  ).then(response => {
    return response.json();
  });
}
