import React from "react";
import { ITitleProps } from "./types";
import TitleStyled from "./style";

export { sayHello, sayGoodbye } from "./helper";

export default ({
  color = "#7e00ff",
  background = "#ebdafd",
  children
}: ITitleProps) => (
  <TitleStyled color={color} background={background}>
    {children || `Component Published!! Made in TypeScript!`}
  </TitleStyled>
);
