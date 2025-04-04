import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/MainPage';
import { SmallSidebar, BigSidebar, Navbar } from '../components';
import { useContext, createContext, useState } from 'react';
import { checkDefaultTheme } from '../App';

const MainContext = createContext();

const MainLayout = ({}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <MainContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
export default MainLayout;
