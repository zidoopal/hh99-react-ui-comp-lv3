import React from "react";
import Button from "../Button";
import { Div } from "./styles";
import { AiFillHeart, AiFillFrown } from "react-icons/ai";

const Buttons = () => {
  const size = ["large", "medium", "small"];
  const BtnAlertHandler = () => alert("버튼 클릭!");
  const BtnPromptHandler = () => prompt("어렵죠?");
  return (
    <>
      <h1>Button</h1>
      <Div>
        <Button primary="$primary" onClick={BtnAlertHandler} size={size[0]} icon={<AiFillHeart />}>
          Large Primary Button
        </Button>
        <Button>Medium</Button>
        <Button size={size[2]}>small</Button>
      </Div>
      <Div>
        <Button primary="$primary" color="#F7A08F" onClick={BtnPromptHandler} size={size[0]} icon={<AiFillFrown />}>
          Large Primary Button
        </Button>
        <Button color="#F7A08F">Medium</Button>
        <Button color="#F7A08F" size={size[2]}>
          small
        </Button>
      </Div>
    </>
  );
};

export default Buttons;
