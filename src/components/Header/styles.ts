import styled from "styled-components";

export const HeaderContainer = styled.header`
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

export const CartContainer = styled.div`
  border-radius: 6px;
  max-height: 2.375rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme["yellow-100"]};
  color: ${({ theme }) => theme["yellow-700"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;
