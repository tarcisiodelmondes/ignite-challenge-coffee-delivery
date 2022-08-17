import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  flex: 1;

  & > label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    width: 100%;
    max-width: 11.16rem;
    padding: 1rem;

    background: ${({ theme }) => theme["gray-400"]};
    border-radius: 6px;
    color: ${({ theme }) => theme["gray-700"]};

    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    white-space: nowrap;

    & > svg {
      color: ${({ theme }) => theme["purple-500"]};
    }

    &:hover {
      background: ${({ theme }) => theme["gray-500"]};
    }
  }

  input:checked + label {
    background: ${({ theme }) => theme["purple-100"]};
  }
`;
