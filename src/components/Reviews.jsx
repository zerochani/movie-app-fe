import React from 'react';
import './Reviews.css';

const Reviews = ({ reviews }) => {
    return (
        <div className="reviews-container">
            <h3>리뷰</h3>
            {reviews && reviews.length > 0 ? (
                <ul className="review-list">
                    {reviews.map((review, index) => (
                        <li key={index} className="review-item">
                            <p>{review.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>아직 작성된 리뷰가 없습니다. 첫 리뷰를 남겨주세요!</p>
            )}
        </div>
    );
};

export default Reviews;
