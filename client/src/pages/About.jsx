import Wrapper from '../assets/wrappers/About';
import edgar from '../assets/images/edgar.jpg';
import ivan from '../assets/images/ivan.jpg';
import beto from '../assets/images/beto.jpg';
import { SiSeat } from 'react-icons/si';
import { SiMazda } from 'react-icons/si';
import { FaWalking } from 'react-icons/fa';

const About = () => {
  return (
    <Wrapper>
      <div className="about-us">
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={edgar} alt="Student 1" className="profile-img" />
              <h3>Edgar Velazquez</h3>
              <div className="car-box">
                <p>Mazda Mazda3</p>
                <SiMazda className="car-icon" />
              </div>
              <div className="stats">
                <div className="stat-row">
                  <p>Avg speed:</p>
                  <p>61.2 km/h</p>
                </div>
                <div className="stat-row">
                  <p>Tickets:</p>
                  <p>6</p>
                </div>
                <div className="stat-row">
                  <p>Crashes</p>
                  <p>0</p>
                </div>
                <div className="stat-row">
                  <p>Warzone K/D</p>
                  <p>1.23</p>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={beto} alt="Student 2" className="profile-img" />
              <h3>Alberto Morales</h3>
              <div className="car-box">
                <p>Walking</p>
                <FaWalking className="car-icon" />
              </div>
              <div className="stats">
                <div className="stat-row">
                  <p>Avg speed:</p>
                  <p>4.4 km/h</p>
                </div>
                <div className="stat-row">
                  <p>Tickets:</p>
                  <p>0</p>
                </div>
                <div className="stat-row">
                  <p>Crashes</p>
                  <p>0</p>
                </div>
                <div className="stat-row">
                  <p>Warzone K/D</p>
                  <p>1.65</p>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={ivan} alt="Student 3" className="profile-img" />
              <h3>Ivan Andrade</h3>
              <div className="car-box">
                <p>Seat Ibiza</p>
                <SiSeat className="car-icon" />
              </div>
              <div className="stats">
                <div className="stat-row">
                  <p>Avg speed:</p>
                  <p>67.8 km/h</p>
                </div>
                <div className="stat-row">
                  <p>Tickets:</p>
                  <p>4</p>
                </div>
                <div className="stat-row">
                  <p>Crashes</p>
                  <p>6</p>
                </div>
                <div className="stat-row">
                  <p>Warzone K/D</p>
                  <p>0.64</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
