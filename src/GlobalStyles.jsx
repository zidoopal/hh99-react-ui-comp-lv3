import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

// 전역변수
:root {
        --main-hotpink: #E91E63;
        --main-softpink: #f1b1ac;
        --main-mint: #61C0BF
}


* , body{
  font-family: 'LOTTERIACHAB';
  color: var(--main-softpink);
  box-sizing: border-box;
}


body{
  background: #BBDED6;
}


h2{
  font-size: 1.7rem;
  margin-bottom: 15px;
}
`;

export default GlobalStyles;
