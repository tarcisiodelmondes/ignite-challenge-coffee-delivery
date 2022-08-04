import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background: ${({ theme }) => theme["gray-200"]};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;
  max-width: 16rem;
  max-height: 310px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
    aspect-ratio: 1;
    max-height: 120px;
  }

  h2 {
    font-size: 1.25rem;
    font-family: "Baloo 2";
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme["gray-800"]};
    margin-top: 1rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme["gray-600"]};
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.06rem;
    width: 100%;

    & > span {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: "Baloo 2";
      line-height: 1.3;
      color: ${({ theme }) => theme["gray-700"]};
    }

    & > div {
      padding: 0.53rem 0.59rem;
      background: ${({ theme }) => theme["gray-400"]};
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 4.5rem;
      width: 100%;

      span {
        color: ${({ theme }) => theme["gray-900"]};
      }
    }
  }
`;

export const TagsContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

export const TagContainer = styled.span`
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme["yellow-100"]};
  color: ${({ theme }) => theme["yellow-700"]};
  border-radius: 100px;

  font-size: 0.675rem;
  font-weight: 800;
  line-height: 1.3;
`;

export const ItemToCartButton = styled.button`
  padding: 0.1rem;
  background: transparent;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 300ms;

  &:disabled {
    opacity: 0.5;
  }

  &:not(:disabled):hover::after,
  &:not(:disabled):hover::before {
    background: ${({ theme }) => theme["purple-700"]};
  }
`;

export const RemoveMoreProduct = styled(ItemToCartButton)`
  &::before {
    content: "";
    width: 10.94px;
    height: 1.31px;
    background: ${({ theme }) => theme["purple-500"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AddMoreProduct = styled(ItemToCartButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    width: 1.31px;
    height: 10.94px;
    background: ${({ theme }) => theme["purple-500"]};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: relative;
  }

  &:after {
    position: absolute;

    content: "";
    width: 10.94px;
    height: 1.31px;
    background: ${({ theme }) => theme["purple-500"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CartContainer = styled.button`
  border-radius: 6px;
  max-height: 2.375rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme["purple-700"]};
  color: ${({ theme }) => theme["gray-200"]};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 300ms;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background: ${({ theme }) => theme["purple-500"]};
  }
`;
