import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  NavList,
  Container,
  Header,
  Link,
} from 'components/SharedLayout/SharedLayout.styled';
import { Suspense } from 'react';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            {/* <li>
              <Link to="/films">Films</Link>
            </li> */}
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
