import React, { useEffect, useState } from 'react';
// Link를 import 해야 합니다.
import { useParams, Link } from 'react-router-dom';
import { fetchSingleMovie } from '../api/movieApi';
import Trailer from '../components/Trailer';
import './MovieDetail.css'; // 이전과 동일한 CSS 사용

const MovieDetail = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { imdbId } = useParams();

    useEffect(() => {
        const getMovie = async () => {
            try {
                setLoading(true);
                const data = await fetchSingleMovie(imdbId);
                setMovie(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getMovie();
    }, [imdbId]);

    if (loading) return <p className="status-message">상세 정보를 불러오는 중...</p>;
    if (!movie) return <p className="status-message error">영화를 찾을 수 없습니다.</p>;

    return (
        <div className="movie-detail-container">
            <div className="movie-detail-backdrop" style={{ backgroundImage: `url(${movie.backdrops[0]})` }}>
                <div className="movie-detail-content">
                    <div className="movie-detail-poster">
                        <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="movie-detail-info">
                        <h1 className="movie-detail-title">{movie.title}</h1>
                        <div className="genres">
                            {movie.genres.map(genre => <span key={genre} className="genre-tag">{genre}</span>)}
                        </div>
                        <p className="release-date">개봉일: {movie.releaseDate}</p>
                        
                        {/* 리뷰 페이지로 이동하는 버튼 추가 */}
                        <Link to={`/movie/${imdbId}/reviews`} className="reviews-button">
                            리뷰 보러가기 ({movie.reviews ? movie.reviews.length : 0}개)
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="trailer-section">
                <h2>예고편</h2>
                <Trailer url={movie.trailerLink} />
            </div>
        </div>
    );
};

export default MovieDetail;