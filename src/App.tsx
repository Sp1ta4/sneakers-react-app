import Header from './components/Header';
import Drawer from './components/Drawer/Drawer';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false);
  return (
    <div className="wrapper">
      <Drawer
        onClose={() => {
          setIsCartOpened(false);
          document.body.style.overflow = 'auto';
        }}
        isCartOpened={isCartOpened}
      />
      <Header
        onCartOpen={() => {
          setIsCartOpened(true);
          document.body.style.overflow = 'hidden';
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
