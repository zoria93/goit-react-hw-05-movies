import Iframe from 'react-iframe';
import { useEffect, useState } from 'react';
// import { getSearchTitle } from 'services/api';
import { getDetails } from 'services/api';
import { useParams } from 'react-router-dom';

const Player = () => {
  // console.log(title);
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getDetails(movieId)
      .then(movieDetails => setMovies(movieDetails))
      .catch(error => console.log(error.message));
  }, [movieId]);

  const { title } = movies ?? '';

  return (
    <>
      <Iframe
        url={`https://v1681499138.bazon.site/embed?search=${title}`}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
      {/* <iframe
        src={`https://v1681499138.bazon.site/embed?search=${title}`}
        frameborder="0"
        allowfullscreen=""
        referrerpolicy="origin"
        width="800"
        height="452"
        title="iframe"
      ></iframe> */}
    </>
  );
};

export default Player;
