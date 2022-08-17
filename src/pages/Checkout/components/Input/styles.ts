import { Fragment } from "react";
import styled from "styled-components";

interface InputContainerProps {
  width?: string | number;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  z-index: 1;

  flex: 1;
  max-width: ${({ width }) => `${width}px`};

  & > input.input-error {
    margin-bottom: 1rem;
  }

  & > input:focus + span {
    display: none;
  }

  & span {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    transform: translateY(-50%);
    z-index: 2;
    color: ${({ theme }) => theme["gray-600"]};
    font-size: 0.75rem;
    font-style: italic;
    line-height: 1.31;
  }

  & span.input-error {
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    transform: translateY(1.2rem);
    color: #f03622;
    font-weight: 600;
    font-style: normal;
  }

  @media (max-width: 430px) {
    & span:not([class^="input-error"]) {
      visibility: hidden;
    }
  }
`;

export const InputForm = styled.input`
  min-width: 3.75rem;
  width: 100%;
  height: 2.625rem;

  background: ${({ theme }) => theme["gray-300"]};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme["gray-400"]};
  color: ${({ theme }) => theme["gray-700"]};
  padding: 0.75rem;

  font-size: 0.875rem;
  line-height: 1.3;

  &::placeholder {
    color: ${({ theme }) => theme["gray-600"]};
  }
`;
