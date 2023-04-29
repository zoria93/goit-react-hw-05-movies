// import Iframe from 'react-iframe';
import { useEffect, useState } from 'react';
// import { getSearchTitle } from 'services/api';
import { getDetailsFilms, getSearchTitle } from 'services/api';
import { useParams } from 'react-router-dom';

const Films = () => {
  const [movies, setMovies] = useState([]);
  const [nameTitle, setNameTitle] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  console.log(loading);

  useEffect(() => {
    getDetailsFilms(movieId)
      .then(movieDetails => setMovies(movieDetails))
      .catch(error => console.log(error.message));
  }, [movieId]);

  const { original_title, title } = movies ?? '';

  useEffect(() => {
    if (movies.length === 0) {
      return;
    }
    getSearchTitle(loading ? title : original_title)
      .then(movieDetails => {
        if (movieDetails.results[0]) {
          console.log(movieDetails.results[0]);
          setLoading(false);
        }
        return setNameTitle(movieDetails.results[0]);
      })

      .catch(error => console.log(error.message));
  }, [loading, movies.length, nameTitle.length, original_title, title]);
  const { link } = nameTitle ?? '';

  return (
    <>
      {/* <Iframe
        url={`https://v1681499138.bazon.site/embed?search=${title}`}
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
