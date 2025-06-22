import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchSingleMovie, postReview } from '../api/movieApi';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';
import './ReviewsPage.css';

const ReviewsPage = () => {
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { imdbId } = useParams();

    useEffect(() => {
        const getMovieData = async () => {
            try {
                setLoading(true);
                const movieData = await fetchSingleMovie(imdbId);
                setMovie(movieData);
                setReviews(movieData.reviews || []);
            } catch (error) {
                console.error("영화 정보를 가져오는 데 실패했습니다.", error);
            } finally {
                setLoading(false);
            }
        };
        getMovieData();
    }, [imdbId]);

    const handleReviewSubmit = async (reviewBody, imdbId) => {
        setIsSubmitting(true);
        try {
            const newReview = await postReview(reviewBody, imdbId);
            setReviews(prevReviews => [newReview, ...prevReviews]);
        } catch (error) {
            alert("리뷰 제출에 실패했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <p className="status-message">리뷰를 불러오는 중...</p>;
    if (!movie) return <p className="status-message error">해당 영화 정보를 찾을 수 없습니다.</p>;

    return (
        <div className="reviews-page-container">
            <Link to={`/movie/${imdbId}`} className="back-to-detail-link">
                &larr; 영화 정보로 돌아가기
            </Link>
            <h1>{movie.title} - 리뷰</h1>
            <ReviewForm
                imdbId={imdbId}
                onReviewSubmit={handleReviewSubmit}
                isSubmitting={isSubmitting}
            />
            <hr className="divider" />
            <Reviews reviews={reviews} />
        </div>
    );
};

export default ReviewsPage;
