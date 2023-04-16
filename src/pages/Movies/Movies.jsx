import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchTitle } from 'services/api';
// import { getSearchMovies } from 'services/api';
import { SearchInput, Button } from 'pages/Movies/Movies.styled';
import { Item, Text, List } from 'pages/Movies/Movies.styled';
import { nanoid } from 'nanoid';

const Movies = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  console.log();

  useEffect(() => {
    if (query === '') {
      return;
    }
    getSearchTitle(query)
      .then(listMovies => {
        if (listMovies.results.length === 0) {
          setValue(true);
          return;
        }
        setMovies(listMovies.results);
        setValue(false);
      })
      .catch(error => console.log(error.message));
  }, [query]);

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: name });
    setName('');
    setMovies([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="off">
        <SearchInput
          placeholder="Search movies..."
          type="text"
          value={name}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
      {movies.length > 0 && (
        // <ul>
        //   {movies.map(({ title, id }) => {
        //     return (
        //       <List key={id}>
        //         <Item to={`/movies/${id}`} state={{ from: location }}>
        //           {title}
        //         </Item>
        //       </List>
        //     );
        //   })}
        // </ul>
        <ul>
          {movies.map(({ kinopoisk_id, info: { rus } }) => {
            return (
              <List key={nanoid()}>
                <Item to={`/movies/${kinopoisk_id}`} state={{ from: location }}>
                  {rus}
                </Item>
              </List>
            );
          })}
        </ul>
      )}
      {value && (
        <Text>There is no movies on your query! Please try again!</Text>
      )}
    </>
  );
};

export default Movies;
