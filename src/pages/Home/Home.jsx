import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
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
        {movies.map(({ title }) => {
          return (
            <li key={nanoid()}>
              <Link>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
