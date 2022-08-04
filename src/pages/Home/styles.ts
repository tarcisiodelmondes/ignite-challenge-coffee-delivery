import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 2.5rem;
  position: relative;

  @media (min-width: 720px) {
    margin-top: 5.875rem;
  }

  & > img {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    max-width: 100%;
    object-position: center;
  }
`;

export const SectionInfoContainer = styled.section`
  padding: 0 2rem;
  max-width: 74rem;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > div {
    max-width: 588px;

    h1 {
      font-family: "Baloo 2";
      font-size: 3rem;
      font-weight: 900;
      line-height: 1.3;
      color: ${({ theme }) => theme["gray-900"]};
    }

    p {
      margin-top: 1rem;
      font-family: "Roboto";
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${({ theme }) => theme["gray-800"]};
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1.25rem;
      margin-top: 4.46rem;

      & > li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: ${({ theme }) => theme["gray-700"]};
      }
    }
  }

  & > img {
    display: none;
  }

  @media (min-width: 990px) {
    justify-content: space-between;

    img {
      display: block;
      max-height: 360px;
      align-self: center;
    }
  }
`;

const BACKGROUND_COLORS = {
  "yellow-light": "yellow-500",
  "yellow-dark": "yellow-700",
  "purple-dark": "purple-500",
  "gray-dark": "gray-700",
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
  justify-content: space-between;
`;

export const SectionCoffeeListContainer = styled.section`
  padding: 0 2rem;
  max-width: 74rem;
  width: 100%;
  margin: 5rem auto 0;

  @media (min-width: 990px) {
    margin-top: 8.75rem;
  }

  h2 {
    color: ${({ theme }) => theme["gray-800"]};
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }
`;

export const ProductsListContainer = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  margin-top: 3.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem 2rem;

  @media (min-width: 896px) {
    margin-top: 3.375rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
  }
`;
