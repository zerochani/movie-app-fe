# 🎥 나의 영화 앱 (Movie App Frontend)

Spring Boot로 제작된 백엔드 API와 연동하여 영화 정보를 보여주고 리뷰를 작성할 수 있는 React 기반의 웹 애플리케이션입니다. Vercel을 통해 배포되었습니다.

---

## ✨ 라이브 데모 바로가기 (Live Demo) ✨
🔗 https://my-movie-emyttigf1-zerochanis-projects.vercel.app

---

## 📸 프로젝트 미리보기 (Preview)
- 메인 페이지 (영화 갤러리)
- 상세 페이지 (예고편 및 리뷰)

---

## 🚀 주요 기능
- **영화 갤러리:** 백엔드 API로부터 받아온 영화 목록을 반응형 그리드 레이아웃으로 표시
- **상세 정보 페이지:** 각 영화의 포스터, 배경, 장르, 개봉일 등 상세 정보 제공
- **동적 라우팅:** react-router-dom을 사용하여 각 영화의 imdbId에 따라 고유한 URL을 가진 상세 페이지 생성
- **예고편 재생:** react-player를 활용하여 영화 상세 페이지에서 유튜브 예고편 재생
- **리뷰 기능:** 별도의 리뷰 페이지에서 해당 영화의 리뷰 목록을 보고 새로운 리뷰를 작성 및 제출

---

## 🛠️ 기술 스택
| 구분     | 기술            | 설명                                 |
|----------|-----------------|--------------------------------------|
| 핵심     | React           | 컴포넌트 기반 UI 구축                |
| 상태 관리| useState, useEffect | React Hooks를 이용한 상태 관리   |
| API 통신 | Axios           | 백엔드 API와의 비동기 HTTP 통신      |
| 라우팅   | React Router DOM| 페이지 이동 및 동적 URL 처리         |
| 미디어   | React Player    | 유튜브 영상 임베드 및 재생           |
| 배포     | Vercel          | GitHub 연동을 통한 자동 CI/CD 및 호스팅 |

---

## 🧩 향후 개발 로드맵 (Future Development Roadmap)
- [ ] 반응형 웹 디자인: 미디어 쿼리(Media Query) 적용, 다양한 디바이스 최적화
- [ ] 검색 및 필터링: 영화 제목 검색, 장르별 필터링 기능 추가
- [ ] 무한 스크롤: 스크롤 시 영화 목록 동적 로딩
- [ ] UI/UX 개선: 로딩 스켈레톤, 애니메이션 효과 등 사용자 경험 향상

---

## ⚙️ 시작하기 (Getting Started)
### 1. 전제 조건
- Node.js 및 npm
- 로컬 환경에 백엔드 서버가 실행 중이거나, 배포된 백엔드 서버 주소

### 2. 로컬 환경에서 실행하기
```bash
# 1. 저장소를 클론합니다.
git clone https://github.com/[사용자이름]/[프론트엔드-저장소-이름].git
cd [프론트엔드-저장소-이름]

# 2. 의존성 패키지를 설치합니다.
npm install

# 3. .env 파일을 생성하고 API 서버 주소를 입력합니다.
# (루트 디렉토리에 .env 파일을 만드세요)
# 로컬 백엔드 서버를 사용하는 경우:
REACT_APP_API_BASE_URL=http://localhost:8080

# 4. 개발 서버를 실행합니다.
npm start
```
브라우저에서 http://localhost:3000 주소로 접속하여 확인할 수 있습니다.

---

## 🔗 관련 링크
- **백엔드 API 저장소:** [movie-app-backend](https://github.com/zerochani/movie-app-be)
- **라이브 백엔드 서버:** https://my-movie-app-okv0.onrender.com

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
