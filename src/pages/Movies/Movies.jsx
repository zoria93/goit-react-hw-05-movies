import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovies } from 'services/api';

const Movies = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    getSearchMovies(query)
      .then(listMovies => setMovies(listMovies.results))
      .catch(error => console.log(error.message));
  }, [query]);

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: name });
    setName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="off">
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && (
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
