import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import { List, Div } from 'components/Cast/Cast.styled';
import image from 'image/image.png';

const Cast = () => {
  const [movieCasts, setMovieCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(casts => setMovieCasts(casts.cast))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <List>
      {movieCasts.map(({ name, character, profile_path, id }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : `${image}`
              }
              alt="poster"
              width="200"
              loading="lazy"
            />
            <Div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </Div>
          </li>
        );
      })}
    </List>
  );
};

export default Cast;
