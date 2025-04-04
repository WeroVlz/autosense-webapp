import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import notfound from '../assets/images/not_found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <Wrapper>
        <div>
          <img src={notfound} alt="not found" />
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">Back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
