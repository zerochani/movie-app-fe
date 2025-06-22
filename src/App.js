import React from 'react';
// react-router-dom에서 필요한 것들을 가져옵니다.
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './pages/MovieDetail';
import ReviewsPage from './pages/ReviewsPage';
import './App.css'; // App.css는 그대로 사용합니다.

function App() {
  return (
    // 전체 앱을 Router로 감싸서 페이지 이동 기능을 활성화합니다.
    <Router>
      <div className="App">
        <header className="App-header">
          {/* 헤더의 제목을 누르면 홈으로 돌아가도록 Link를 추가합니다. */}
          <Link to="/" className="header-link">
            <h1>나의 영화 앱</h1>
          </Link>
        </header>
        <main>
          {/* Routes는 URL 경로에 맞는 Route를 찾아주는 역할을 합니다. */}
          <Routes>
            {/* 기본 경로(/)에서는 영화 목록 페이지를 보여줍니다. */}
            <Route path="/" element={<MovieList />} />

            {/* /movie/영화ID 형태의 경로에서는 영화 상세 페이지를 보여줍니다. */}
            <Route path="/movie/:imdbId" element={<MovieDetail />} />
            <Route path="/movie/:imdbId/reviews" element={<ReviewsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
