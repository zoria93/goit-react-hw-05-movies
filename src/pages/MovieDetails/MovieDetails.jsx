import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getDetails } from 'services/api';
import image from 'image/image.png';

const MoviesDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetails(movieId)
      .then(movieDetails => setMovies(movieDetails))
      .catch(error => console.log(error.message));
  }, [movieId]);
  const { title, vote_average, overview, genres, poster_path } = movies ?? '';

  return (
    <>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `${image}`
          }
          alt="poster"
          width="300"
          loading="lazy"
        />
        <h2>{title}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres?.length &&
            genres.map(({ id, name }) => <span key={id}>{name}, </span>)}
        </p>
      </div>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
