import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useMainContext } from '../pages/MainLayout';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { toggleSidebar } = useMainContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text"></h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
