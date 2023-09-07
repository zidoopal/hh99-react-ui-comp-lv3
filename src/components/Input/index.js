import React, { useState } from 'react';
import { PriceInput, ErrorText, InputContainer } from '../Input/styles';
import { StyledBtn } from '../Button/styles';

const Input = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  // price input에 문자 입력했을 때 error 나타내기 위해
  const [error, setError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // 값이 숫자인지 검사하는 정규식
  const handlePriceChange = (e) => {
    const value = e.target.value;
    // ','는 허용하는 정규식 👉 (error체크 위해서)

    const numCheck = /^[\d,]*$/.test(value);

    // 정규식에 잘 해당되면 error false
    if (numCheck) {
      setError(false);
      // 숫자로 변환하기 전에 ',' 제거
      setPrice(Number(value.replaceAll(',', '')).toLocaleString());
      // 값에 숫자 외 값 있을 경우 error를 true로 !
    } else {
      setError(true);
    }
  };

  // 입력 값 없을 때 alert 띄우기
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name && !price) || price === '0') {
      alert(`이름과 가격 모두 써주세용🤗`);
      return;
    }
    const formattedPrice = price ? price.replaceAll(',', '') : '';
    alert(`{ name: ${name}, price: ${formattedPrice} }`);
  };

  return (
    <InputContainer>
      <h2>Input</h2>
      <form onSubmit={handleSubmit}>
        <div className="input__set">
          <label>이름</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="input__set">
          <label>가격</label>
          <PriceInput
            type="text"
            value={price}
            onChange={handlePriceChange}
            $error={error}
          />
        </div>
        {error && <ErrorText>숫자만 입력해주세요😣</ErrorText>}
        <div className="btn">
          <StyledBtn type="submit">저장</StyledBtn>
        </div>
      </form>
    </InputContainer>
  );
};

export default Input;
