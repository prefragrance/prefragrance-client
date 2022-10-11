import { useEffect } from 'react';

export const useClickOutside = ({ isModalOpen, toggleModalState, formRef }) => {
  // console.log(isModalOpen, formRef);
  useEffect(() => {
    // 검색창 내외부 감지 함수
    // 여기서 formRef가 아닌 document에 이벤트리스너를 달아준 것은 외부 영역이 form의 여집합이기 때문
    document.addEventListener('mousedown', clickSearchbarOutside);
    return () => {
      // mousedown 이벤트리스너를 제거해줌으로서 메모리 누수 차단
      document.removeEventListener('mousedown', clickSearchbarOutside);
    };
  }, [isModalOpen]); // isModalOpen state를 추적해서 최신 값에 맞게 clickSearchbarOutside가 실행되게끔 함

  const clickSearchbarOutside = event => {
    // 모달 창이 열려있고 이벤트 발생 지점이 form의 요소가 아닐 때만 모달을 꺼주도록 함
    if (isModalOpen && !formRef.current.contains(event.target)) {
      toggleModalState();
    }
  };
};
