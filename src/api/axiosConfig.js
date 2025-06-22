import axios from 'axios';

// 프록시를 사용하므로 baseURL을 특정할 필요가 없습니다.
// 모든 요청은 package.json의 프록시 설정을 따르게 됩니다.
const apiClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiClient;