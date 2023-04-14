import Iframe from 'react-iframe';
import { useEffect, useState } from 'react';
import { getDetails } from 'services/api';
import { useParams } from 'react-router-dom';

const Player = () => {
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
        url={`https://v1681494159.bazon.site/embed?search=${title}`}
        src={`https://v1681494159.bazon.site/embed?search=${title}`}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </>
  );
};

export default Player;
