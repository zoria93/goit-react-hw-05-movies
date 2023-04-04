import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';
import { Title, List, Item } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(listMovies => setMovies(listMovies.results))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <List key={id}>
              <Item to={`/movies/${id}`}>{title}</Item>
            </List>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
