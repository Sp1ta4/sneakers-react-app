import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="d-flex justify-content-between align-items-center  mb-5">
          <h1 className="m-0 fs-2 fw-bold">Все кроссовки</h1>
          <div className="search-block border  d-flex justify-content-start align-items-center ps-3 pe-3 p-2">
            <img src="/img/search.svg" alt="search" width={15} height={15} />
            <input
              type="text"
              placeholder="Поиск..."
              className="fs-6 fw-normal ps-3 pe-3"
            />
          </div>
        </div>
        <div className="sneakers d-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
