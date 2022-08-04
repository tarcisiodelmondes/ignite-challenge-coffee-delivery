import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 74rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`;

export const LocationContainer = styled.div`
  & > svg {
    color: ${({ theme }) => theme["purple-500"]};
  }

  padding: 0.5rem;
  background: ${({ theme }) => theme["purple-100"]};
  color: ${({ theme }) => theme["purple-700"]};
  gap: 4px;
  border-radius: 6px;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartContainer = styled(Link)`
  border-radius: 6px;
  max-height: 2.375rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme["yellow-100"]};
  color: ${({ theme }) => theme["yellow-700"]};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: filter 300ms;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  & > span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: ${({ theme }) => theme["yellow-700"]};
    border-radius: 50%;
    color: ${({ theme }) => theme["white"]};

    height: 1.25rem;
    width: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: 700;

    letter-spacing: -0.06em;
  }
`;
