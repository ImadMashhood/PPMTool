import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const CreateProjectBtn = styled(Link)`
  border-radius: 4px;
  background: #ed3b4b;
  padding: 10px 22px;
  color: #e4e6eb;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4c3b92;
    color: #e4e6eb;
  }
`;

export const GetStarted = styled(Link)`
  font-size: 1rem;
  background-color: #ed3b4b;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  text-align: center;
  color: #e4e6eb;
  margin-top: 2rem;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  outline: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4c3b92;
    color: #e4e6eb;
  }
`;
