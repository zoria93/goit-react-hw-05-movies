import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { Title, Text } from 'components/Reviews/Reviews.styled';

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
            <Title>Author: {author}</Title>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <Text>We dont have any reviews for this movie</Text>
  );
};

export default Reviews;
