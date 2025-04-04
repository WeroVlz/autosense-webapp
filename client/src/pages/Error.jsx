import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import notfound from '../assets/images/not_found.svg';
import notfoundDark from '../assets/images/not_found_dark.svg';
import { checkDefaultTheme } from '../App';
import { useState, useEffect } from 'react';

const Error = () => {
  const error = useRouteError();
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkTheme(checkDefaultTheme());
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  if (error.status == 404) {
    return (
      <Wrapper>
        <div>
          <img src={isDarkTheme ? notfound : notfoundDark} alt="not found" />
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
