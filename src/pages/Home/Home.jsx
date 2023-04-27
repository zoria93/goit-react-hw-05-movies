import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getListMovies } from 'services/api';
import { Title, List, Item } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [nameItem, setNameItem] = useState([]);
  // console.log(movies);

  useEffect(() => {
    getListMovies()
      .then(listMovies => setMovies(listMovies.results))
      .catch(error => console.log(error.message));
  }, []);

  // getSearchMovies(orig)
  //   .then(movieDetails => movieDetails.results)
  //   .then(moviesName => {
  //     setNameItem(
  //       moviesName.find(listName => {
  //         if (listName.media_type === 'tv') {
  //           return listName.original_name.includes(orig);
  //         }
  //         return listName.original_title.includes(orig);
  //       })
  //     );
  //   });

  return (
    <div>
      <Title>Trending today</Title>
      <ul>
        {movies.map(({ info: { rus }, kinopoisk_id }) => {
          return (
            <List key={nanoid()}>
              <Item to={`/movies/${kinopoisk_id}`}>{rus}</Item>
            </List>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
