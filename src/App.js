import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MainNav from './Components/MainNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import DetailsPage from './Components/Details/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="search" element={<Search />} />
            <Route path="/tv/:id" element={<DetailsPage />} />
            <Route path="/movie/:id" element={<DetailsPage />} />
          </Routes>
        </>
      </div>
      <MainNav />
    </BrowserRouter >
  );
}

export default App;
