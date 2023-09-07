import React, { useState } from "react";

import { Div, StyledForm, StyledInput } from "./styles";
import Button from "../Button";

const Input = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };
  const nameChangeHandler = (e) => setName(e.target.value);
  const priceChangeHandler = (e) => {
    const { value } = e.target;
    let money = value.replaceAll(",", "");
    setPrice(money);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim().length) {
      return alert("이름을 적어주세요!");
    }
    if (!price.trim().length) {
      return alert("가격을 입력하세요!");
    }
    alert(`{ name: ${name}, price: ${price} }`);
  };

  return (
    <>
      <h1>Input</h1>
      <Div>
        <StyledForm onSubmit={onSubmit}>
          <label>이름</label>
          <StyledInput type="text" name="name" value={name} onChange={nameChangeHandler} />
          <label>가격</label>
          <StyledInput type="text" name="price" value={addComma(price) || ""} onChange={(e) => priceChangeHandler(e)} placeholder="0" />
          <Button>저장</Button>
        </StyledForm>
      </Div>
    </>
  );
};

export default Input;
