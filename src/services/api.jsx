const baseUrl = 'https://api.themoviedb.org/3/';
const KEY_API = 'a19b1687fe9e52121952a921faf7bb58';

export const getTrending = async () => {
  console.log(getTrending);
  const response = await fetch(`
${baseUrl}trending/movie/day?api_key=${KEY_API}`);

  const listMovies = await response.json('');

  return listMovies;
};

// export const getSearchMovies = async query => {
//   const response = await fetch(`
//        ${baseUrl}search/movie?api_key=${KEY_API}&language=en-US&query=${query}&page=1&include_adult=false
//     `);
//   if (response.ok) {
//     const query = await response.json('');
//     return query;
//   }
//   return Promise.reject(new Error(`error`));
// };

// export const getDetails = async movieId => {
//   const response = await fetch(
//     `${baseUrl}movie/${movieId}?api_key=${KEY_API}&language=en-US`
//   );
//   if (response.ok) {
//     const movieId = await response.json('');
//     return movieId;
//   }
//   return Promise.reject(new Error(`error`));
// };

// export const getСredits = async movieId => {
//   const responnse = await fetch(`
// ${baseUrl}movie/${movieId}/credits?api_key=${KEY_API}&language=en-US
//     `);
//   if (responnse.ok) {
//     const movieId = await responnse.json('');
//     return movieId;
//   }
//   return Promise.reject(new Error(`error`));
// };

// export const getReviews = async movieId => {
//   const responnse = await fetch(`
// ${baseUrl}movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US
//     `);
//   if (responnse.ok) {
//     const movieId = await responnse.json('');
//     return movieId;
//   }
//   return Promise.reject(new Error(`error`));
// };
