import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';

const Reviews = () => {
  const [movieReviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(reviews => setReviews(reviews.results))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return movieReviews.length !== 0 ? (
    <ul>
      {movieReviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We dont have any reviews for this movie</p>
  );
};

export default Reviews;
