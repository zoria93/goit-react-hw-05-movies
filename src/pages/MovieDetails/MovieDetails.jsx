import { useEffect, useState } from 'react';
// import { Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getDetails } from 'services/api';
// import { Loader } from 'components/Loader/Loader';
import Iframe from 'react-iframe';
import {
  Wrapper,
  Div,
  // Text,
  Title,
  Button,
  TextBtn,
  // List,
  ImgDiv,
  // TextLink,
  // Item,
} from 'pages/MovieDetails/MovieDetails.styled';
// import { Link } from 'react-router-dom';
// import image from 'image/image.png';

const MoviesDetails = ({ getName }) => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(movies);

  useEffect(() => {
    getDetails(movieId)
      .then(movieDetails => setMovies(movieDetails.results[0]))
      .catch(error => console.log(error.message));
  }, [movieId]);

  // const { title, vote_average, overview, genres, poster_path } = movies ?? '';
  // const handleClik = () => {
  //   getName(title);
  // };
  const { rus, poster } = movies.info ?? '';
  const { link } = movies;
  // console.log(movies);

  return (
    <>
      <Button type="button">
        <TextBtn to={backLinkHref}>GO BACK</TextBtn>
      </Button>
      <Wrapper>
        <ImgDiv>
          <img src={poster} alt="poster" width="300" loading="lazy" />
          {/* <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `${image}`
            }
            alt="poster"
            width="300"
            loading="lazy"
          /> */}
        </ImgDiv>

        <Div>
          <Title>{rus}</Title>

          {/* <Text>User Score: {Math.round(vote_average * 10)}%</Text> */}
          {/* <h3>Overview</h3>
          <Text>{overview}</Text>
          <h3>Genres</h3>
          <Text>
            {genres?.length &&
              genres.map(({ id, name }) => <span key={id}>{name}, </span>)}
          </Text> */}
        </Div>
      </Wrapper>
      <div>
        {/* <ul>
          <li>
            <Link to={`player`} state={{ from: backLinkHref }}>
              <button type="click">Player One</button>
            </Link>
          </li>
          <li>
            <Link to={`playerTwo`} state={{ from: backLinkHref }}>
              <button onClick={handleClik} type="click">
                Player Two
              </button>
            </Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense> */}
        <Iframe
          src={link}
          width="640px"
          height="320px"
          id=""
          className=""
          display="block"
          position="relative"
        />
      </div>
      {/* <List>
        <h4>Additional information</h4>
        <li>
          <TextLink to={`cast`} state={{ from: backLinkHref }}>
            Cast
          </TextLink>
        </li>
        <Item>
          <TextLink to={`reviews`} state={{ from: backLinkHref }}>
            Reviews
          </TextLink>
        </Item>
      </List> */}
      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default MoviesDetails;
