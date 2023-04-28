import { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Films = lazy(() => import('pages/Fims/Films'));
const MoviesDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Player = lazy(() => import('components/Player/Player'));
const PlayerTwo = lazy(() => import('components/PlayerTwo/PlayerTwo'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  const [nameMovie, setNameMovie] = useState('');

  const getName = name => {
    setNameMovie(name);
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route
          path="movies/:movieId"
          element={<MoviesDetails getName={getName} />}
        >
          <Route path="films/:movieId" element={<Films />} />
          <Route path="player" element={<Player title={nameMovie} />} />
          <Route path="playerTwo" element={<PlayerTwo title={nameMovie} />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
