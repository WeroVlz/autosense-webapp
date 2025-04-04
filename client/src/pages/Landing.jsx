import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import main from '../assets/images/redcar.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Your <span>Car's</span> best friend
          </h1>
          <p>
            AutoSense is your go-to AI chat assistant for everything
            car-related. Whether you need maintenance tips, troubleshooting
            advice, or help choosing the perfect ride, our intelligent chatbot
            has you covered.
          </p>
          <Link to="/" className="btn register-link">
            Register
          </Link>
          <Link to="/main" className="btn">
            Demo User
          </Link>
        </div>
        <img src={main} alt="car main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
