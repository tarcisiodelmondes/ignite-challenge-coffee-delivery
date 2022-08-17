import styled from "styled-components";

export const CheckoutSuccessContainer = styled.main`
  padding: 1rem;
  max-width: 1119px;
  margin: 5rem auto 0 auto;

  & > h1 {
    color: ${({ theme }) => theme["yellow-700"]};
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }

  & > p {
    color: ${({ theme }) => theme["gray-800"]};
    font-family: "Roboto";
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 4px;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-direction: column;
    margin-top: 2.5rem;
  }

  @media (min-width: 820px) {
    & > div {
      flex-direction: row;
    }
  }
`;

export const AddressDeliveryContainer = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  max-width: 526px;
  width: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  flex-direction: column;

  background: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background-clip: padding-box;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to right, #dbac2c, #8047f8);
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    gap: 12px;

    & > p {
      color: ${({ theme }) => theme["gray-700"]};
      font-family: "Roboto";
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3;
    }

    & > strong {
      color: ${({ theme }) => theme["gray-700"]};
      font-family: "Roboto";
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.3;
    }
  }
`;

const BACKGROUND_COLORS = {
  "yellow-light": "yellow-500",
  "yellow-dark": "yellow-700",
  "purple-dark": "purple-500",
} as const;

interface IconContainerColors {
  color: keyof typeof BACKGROUND_COLORS;
}

export const IconBackgroundContainer = styled.div<IconContainerColors>`
  padding: 0.5rem;
  background: ${({ theme, color }) => theme[BACKGROUND_COLORS[color]]};
  border-radius: 50%;
  color: ${({ theme }) => theme["white"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.img`
  max-width: 492px;
  max-height: 293px;
  width: 100%;
  height: 100%;
`;
