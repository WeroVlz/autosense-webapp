import { useState } from 'react';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);

  const logoutUser = () => {
    console.log('logout');
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
