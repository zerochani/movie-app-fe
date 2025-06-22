import React from 'react';
import ReactPlayer from 'react-player/youtube'; // 유튜브에 최적화된 플레이어를 직접 import 합니다.
import './Trailer.css';

const Trailer = ({ url }) => {
  return (
    <div className="react-player-container">
      {url ? (
        <ReactPlayer
          className="react-player" // CSS 선택을 위한 클래스 이름 추가
          controls={true}
          playing={true}
          url={url}
          width='100%'
          height='100%'
          config={{
            youtube: {
              playerVars: { 
                showinfo: 0,
                modestbranding: 1, // 유튜브 로고를 조금 더 작게
                rel: 0 // 관련 동영상 표시 안함
              }
            }
          }}
        />
      ) : (
        <div className="no-trailer">
            <p>이 영화는 제공되는 예고편이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default Trailer;