import React, { useState, useEffect } from 'react';
// Link는 a 태그처럼 페이지를 이동시키지만, 새로고침 없이 이동하게 해줍니다.
import { Link } from 'react-router-dom';
import { fetchAllMovies } from '../api/movieApi';
import './MovieList.css'; // 이전에 만들었던 CSS를 그대로 사용합니다.

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                setLoading(true);
                const data = await fetchAllMovies();
                setMovies(data);
            } catch (err) {
                setError('영화 목록을 가져올 수 없습니다. API 서버가 켜져있는지 확인해주세요.');
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    if (loading) return <p className="status-message">영화 목록을 불러오는 중...</p>;
    if (error) return <p className="status-message error">{error}</p>;

    return (
        <div className="movie-grid">
            {movies.map(movie => (
                // 각 카드를 Link로 감싸서 클릭 가능하게 만듭니다.
                // to 속성에 이동할 경로를 지정해줍니다. (예: /movie/tt8093700)
                <Link to={`/movie/${movie.imdbId}`} key={movie.imdbId} className="movie-card-link">
                    <div className="movie-card">
                        <img src={movie.poster} alt={`${movie.title} poster`} className="movie-poster" />
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.title}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;