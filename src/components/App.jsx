import { Link, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/movies">Movies</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
      </Routes>
    </>
  );
};
