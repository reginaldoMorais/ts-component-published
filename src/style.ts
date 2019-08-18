import styled from "styled-components";
import { IStyleProps } from "./types";

export default styled.h1`
  font-size: 1.4rem;
  color: ${(props: IStyleProps) => props.color};
  background-color: ${(props: IStyleProps) => props.background};
  padding: 0.5rem;
  border-radius: 0.8rem;
  font-family: "Roboto", Arial, sans-serif;
`;
