// import Iframe from 'react-iframe';
import { useEffect, useState } from 'react';
// import { getSearchTitle } from 'services/api';
import { getDetailsFilms, getSearchTitle } from 'services/api';
import { useParams } from 'react-router-dom';

const Films = () => {
  const [movies, setMovies] = useState([]);
  const [nameTitle, setNameTitle] = useState([]);
  console.log(nameTitle);

  const { movieId } = useParams();

  useEffect(() => {
    getDetailsFilms(movieId)
      .then(movieDetails => setMovies(movieDetails))
      .catch(error => console.log(error.message));
  }, [movieId]);

  const { original_title, title } = movies ?? '';

  useEffect(() => {
    if (!original_title) {
      return;
    }
    if (nameTitle.length !== 0) {
      getSearchTitle(original_title)
        .then(movieDetails => setNameTitle(movieDetails.results[0]))

        .catch(error => console.log(error.message));
    }
    if (nameTitle.length === 0) {
      getSearchTitle(title)
        .then(movieDetails => setNameTitle(movieDetails.results[0]))

        .catch(error => console.log(error.message));
    }
  }, [movies.length, nameTitle.length, original_title, title]);

  const { link } = nameTitle ?? '';

  return (
    <>
      {/* <Iframe
        src={link}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      /> */}
      <iframe
        src={link}
        width="640"
        height="360"
        allow="autoplay; encrypted-media"
        title="iframe"
      ></iframe>
    </>
  );
};

export default Films;
