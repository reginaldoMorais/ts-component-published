import { ReactNode } from "react";

export interface IStyleProps {
  color?: string;
  background?: string;
}

export interface ITitleProps extends IStyleProps {
  children?: ReactNode;
}
