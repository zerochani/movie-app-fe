import apiClient from './axiosConfig'; // 1번 파일에서 만든 인스턴스를 가져옵니다.

/**
 * 백엔드에서 모든 영화 목록을 가져오는 함수
 */
export const fetchAllMovies = async () => {
    try {
        // apiClient를 사용해 API를 호출합니다.
        const response = await apiClient.get('/api/v1/movies');
        return response.data; // 성공 시 데이터 반환
    } catch (error) {
        // 에러 발생 시 콘솔에 로그를 남기고 에러를 다시 던집니다.
        console.error("영화 데이터를 불러오는 중 에러 발생:", error);
        throw error;
    }
};

export const fetchSingleMovie = async (imdbId) => {
    try {
        const response = await apiClient.get(`/api/v1/movies/${imdbId}`);
        return response.data;
    } catch (error) {
        console.error(`ID(${imdbId}) 영화 데이터를 불러오는 중 에러 발생:`, error);
        throw error;
    }
}

export const postReview = async (reviewBody, imdbId) => {
    try {
        const payload = { reviewBody, imdbId };
        const response = await apiClient.post('/api/v1/reviews', payload);
        return response.data;
    } catch (error) {
        console.error("리뷰를 제출하는 중 에러 발생:", error);
        throw error;
    }
};


