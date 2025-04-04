import { useState } from 'react';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LogoutContainer = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem('chatMessages');
    localStorage.removeItem('chatInput');
    localStorage.removeItem('selectedCar');
    navigate('/');
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        Demo
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn">
          Profile
        </button>
        <button
          type="button"
          className="dropdown-btn"
          onClick={() => logoutUser()}
        >
          Log Out
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
