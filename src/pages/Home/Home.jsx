import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(listMovies => setMovies(listMovies.results))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
