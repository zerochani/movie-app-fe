import React, { useState } from 'react';
import './ReviewForm.css'; // 스타일 파일은 그대로 사용합니다.

// isSubmitting prop을 새로 받습니다.
const ReviewForm = ({ imdbId, onReviewSubmit, isSubmitting }) => {
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 내용이 없거나, 이미 제출 중일 때는 함수를 중단시킵니다.
        if (!reviewText.trim() || isSubmitting) return; 
        
        // 부모 컴포넌트(MovieDetail)로부터 받은 onReviewSubmit 함수를 실행합니다.
        await onReviewSubmit(reviewText, imdbId); 
        
        // 제출이 성공적으로 끝나면 입력창을 비웁니다.
        setReviewText('');
    };

    return (
        <div className="review-form-container">
            <h3>리뷰 남기기</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="review-textarea"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="이 영화에 대한 감상을 남겨주세요..."
                    rows="5"
                    disabled={isSubmitting} // API 호출 중에는 입력창을 비활성화합니다.
                />
                <button type="submit" className="review-submit-button" disabled={isSubmitting}>
                    {/* isSubmitting 상태에 따라 버튼 텍스트를 변경합니다. */}
                    {isSubmitting ? '제출 중...' : '리뷰 제출'}
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;