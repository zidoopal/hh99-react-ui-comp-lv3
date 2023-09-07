## 🚢 항해99 | React Lv.3 과제 - 모달, 버튼을 포함한 웹페이지 연습하기 🎨
💘 [배포사이트 바로가기](https://hh99-react-ui-comp-lv3-dvoma00m3-zidoopal.vercel.app/) <br>

🤸‍♂️페어🤸‍♀️<br>
소석진 | 지유진<br>
<br>

![image](https://github.com/zidoopal/hh99-react-ui-comp-lv3/assets/131226548/0b7a0ead-c9e3-4e3e-a8a9-1c8a02ee55dd)



### 💡 features & Requirement : 구현 기능 & Requirement : 요구 사항
### ✅ Modal
- 모달 2개를 구현합니다.
    - `취소`, `확인`이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
    - `닫기` 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태
    - 모달을 `on` 시키는 버튼의 형태는 각각 달라야 함 

### ✅ Button
- 총 6개 형태의 버튼을 구현 
    - `styled-components` 를 이용하여 구현하며, props를 적절하게 잘 활용
    - 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현

### ✅ Input
- 총 2개의 input을 구현
    - 일반형식의 input
    - 숫자를 넣었을 때, 3자리 수마다 `콤마 ,`가 찍히는 input
    - form을 구현하고 각 input에 값을 입력하고 `저장` 버튼을 눌렀을 때 <br>
{name: '아무 텍스트', price: "콤마가 없는 금액"}` 을 `alert`에 표시

### ✅ Select
- select 구현
    - select를 클릭했을 때, option 들이 나오고 해당 option을 클릭하면 select의 값이 변경됨
    - select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현
    - 부모 요소에 `overflow: hidden`을 적용하면 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 됨.
    - 부모 컴포넌트에 `hidden` 속성이 있다고 하더라도 select는 가려지지 않아야 함
