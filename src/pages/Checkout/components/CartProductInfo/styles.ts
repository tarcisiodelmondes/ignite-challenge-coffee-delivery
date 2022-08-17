import styled from "styled-components";

export const CartProductInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme["gray-400"]};

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  & > img {
    max-width: 64px;
    max-height: 64px;
    height: 100%;
    width: 100%;
  }

  & > div {
    p {
      color: ${({ theme }) => theme["gray-800"]};
    }
  }

  & > span {
    color: ${({ theme }) => theme["gray-700"]};
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const AddAndRemoveProductToCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    background: ${({ theme }) => theme["gray-400"]};
    border-radius: 6px;

    padding: 8.5px 9.53px;
    height: 32px;
  }
`;

export const ItemToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: ${({ theme }) => theme["purple-500"]};

  transition: all 200ms;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme["purple-700"]};
  }
`;

export const RemoveMoreProductToCart = styled(ItemToCartButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddMoreProductToCart = styled(ItemToCartButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveProductToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: ${({ theme }) => theme["gray-400"]};
  border-radius: 6px;
  padding: 6.5px 8px;
  height: 32px;

  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${({ theme }) => theme["gray-700"]};

  & > svg {
    color: ${({ theme }) => theme["purple-500"]};
  }

  transition: all 200ms;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["gray-500"]};
  }
`;
