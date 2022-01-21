import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const CreateProjectBtn = styled(Link)`
  border-radius: 4px;
  background: #ed3b4b;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4c3b92;
    color: #fff;
  }
`;
