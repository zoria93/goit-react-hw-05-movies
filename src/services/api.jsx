const baseUrl = 'https://api.themoviedb.org/3/';
const KEY_API = 'a19b1687fe9e52121952a921faf7bb58';

const bazonUrl = `https://bazon.cc/api/`;
const KEY_BAZON = `c69778ce88918520e7adb0dc758dbe37`;

//bazon.cc/api/search?token=c69778ce88918520e7adb0dc758dbe37&title=Бетмен

//bazon.cc/api/search?token=c69778ce88918520e7adb0dc758dbe37&kp=841738

//api.themoviedb.org/3/search/keyword?api_key=c69778ce88918520e7adb0dc758dbe37&query=d&page=1

export const getTrending = async () => {
  const response = await fetch(`
${baseUrl}trending/movie/week?api_key=${KEY_API}&language=ru`);

  if (response.ok) {
    const listMovies = await response.json('');
    return listMovies;
  }
  return Promise.reject(new Error(`error`));
};

export const getSearchMovies = async query => {
  const response = await fetch(`
       ${baseUrl}search/multi?api_key=${KEY_API}&language=uk&query=${query}&page=1&include_adult=false
    `);
  if (response.ok) {
    const query = await response.json('');
    return query;
  }
  return Promise.reject(new Error(`error`));
};

// export const getDetails = async movieId => {
//   const response = await fetch(
//     `${baseUrl}movie/${movieId}?api_key=${KEY_API}&language=ru`
//   );
//   if (response.ok) {
//     const movieDetails = await response.json('');
//     return movieDetails;
//   }
//   return Promise.reject(new Error(`error`));
// };

export const getSearchTitle = async query => {
  const response = await fetch(`
       ${bazonUrl}search?token=${KEY_BAZON}&title=${query}
    `);
  if (response.ok) {
    const query = await response.json('');
    return query;
  }
  return Promise.reject(new Error(`error`));
};

export const getDetails = async movieId => {
  const response = await fetch(
    `${bazonUrl}search?token=${KEY_BAZON}&kp=${movieId}`
  );
  if (response.ok) {
    const movieDetails = await response.json('');
    return movieDetails;
  }
  return Promise.reject(new Error(`error`));
};

export const getCast = async movieId => {
  const responnse = await fetch(`
${baseUrl}movie/${movieId}/credits?api_key=${KEY_API}&language=uk
    `);
  if (responnse.ok) {
    const casts = await responnse.json('');
    return casts;
  }
  return Promise.reject(new Error(`error`));
};

export const getReviews = async movieId => {
  const responnse = await fetch(`
${baseUrl}movie/${movieId}/reviews?api_key=${KEY_API}&language=uk
    `);
  if (responnse.ok) {
    const reviews = await responnse.json('');
    return reviews;
  }
  return Promise.reject(new Error(`error`));
};
