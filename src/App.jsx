import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './pages/MovieDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:imdbId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
