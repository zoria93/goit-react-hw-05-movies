import { useState, useEffect } from 'react';
import { getSearchTitle } from 'services/api';
import { nanoid } from 'nanoid';

const Player = ({ title }) => {
  const [listMivies, setListMovies] = useState([]);
  console.log(listMivies);

  useEffect(() => {
    if (!title) {
      return;
    }
    getSearchTitle(title)
      .then(movieQuery => setListMovies(movieQuery.results[0]))
      .catch(error => console.log(error.message));
  }, [title]);
  const { link } = listMivies;

  return (
    <>
      <iframe
        src={link}
        height="300"
        width="400"
        title="Iframe Приклад"
      ></iframe>
    </>
  );
};

export default Player;
