import Header from './components/Header';
import Drawer from './components/Drawer/Drawer';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import HamburgerMenu from './components/BurgerMenu';
import Profile from './components/Profile';

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const onCartOpen = () => {
    setIsCartOpened(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <div className="wrapper">
      <HamburgerMenu onCartOpen={onCartOpen} isOpenMenu={isOpenMenu} />
      <Drawer
        onClose={() => {
          setIsCartOpened(false);
          document.body.style.overflow = 'auto';
        }}
        isCartOpened={isCartOpened}
      />
      <Header
        isOpenMenu={isOpenMenu}
        onCartOpen={onCartOpen}
        setOpenMenu={setOpenMenu}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
