import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, primary, color, size, onClick, icon }) => {
  return (
    <div>
      <StyledButton $primary={primary} $color={color} $size={size} onClick={onClick}>
        {children}&nbsp;{icon}
      </StyledButton>
    </div>
  );
};

export default Button;

Button.defaultProps = {
  color: "#4BEF8A",
  size: "medium",
};
