import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getTrending } from 'services/api';
import { Title, List, Item } from './Home.styled';
import image from 'image/image.png';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [nameItem, setNameItem] = useState([]);
  // console.log(movies);

  useEffect(() => {
    getTrending()
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
        {movies.map(({ title, id, poster_path }) => {
          return (
            <List key={nanoid()}>
              <Item to={`/films/${id}`}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300${poster_path}`
                      : `${image}`
                  }
                  alt="poster"
                  width="200"
                  loading="lazy"
                />
                {title}
              </Item>
            </List>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
