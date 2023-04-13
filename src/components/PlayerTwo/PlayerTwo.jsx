import { useState, useEffect } from 'react';
import { getSearchTitle } from 'services/api';
import Iframe from 'react-iframe';

const PlayerTwo = ({ title }) => {
  const [listMivies, setListMovies] = useState([]);

  useEffect(() => {
    if (!title) {
      return;
    }
    getSearchTitle(title)
      .then(movieQuery => movieQuery.results)
      .then(moviesLists =>
        setListMovies(
          moviesLists.find(
            listMivie =>
              listMivie.info.rus ||
              listMivie.info.alter ||
              listMivie.info.ukr ||
              listMivie.info.orig.includes(title) === title
          )
        )
      )
      .catch(error => console.log(error.message));
  }, [title]);
  const { link } = listMivies ?? '';

  return (
    <>
      <Iframe
        url={link}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </>
  );
};

export default PlayerTwo;
