import styled from "styled-components";

export const CheckoutContainer = styled.main`
  max-width: 74rem;
`;

export const Form = styled.form`
  padding: 0 2rem;
  width: 100%;
  margin: 2.5rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 840px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const SectionFormBase = styled.section`
  flex: 1;
  background: ${({ theme }) => theme["gray-200"]};
  border-radius: 6px;
  padding: 1rem;
  width: 100%;

  @media (min-width: 720px) {
    padding: 2.5rem;
  }
`;

export const AddressContentContainer = styled.div`
  max-width: 40rem;
`;

export const FormAddressContainer = styled(SectionFormBase)`
  margin-top: 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  & > div h3 {
    line-height: 1.3;
    color: ${({ theme }) => theme["gray-800"]};
    font-size: 1rem;
    font-weight: normal;
  }

  & > div p {
    line-height: 1.3;
    color: ${({ theme }) => theme["gray-700"]};
    font-size: 0.875rem;
    font-weight: normal;
  }

  & > div {
    align-self: flex-start;
  }
`;

const ICON_COLORS = {
  yellow: "yellow-700",
  purple: "purple-500",
} as const;

interface IconContainerProps {
  color: keyof typeof ICON_COLORS;
}

export const IconContainer = styled.div<IconContainerProps>`
  & > svg {
    color: ${({ color, theme }) => theme[ICON_COLORS[color]]};
  }
`;

export const FormContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div.inputs-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
  }
`;

export const SectionPaymentMethod = styled(SectionFormBase)`
  margin-top: 0.75rem;
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  & > span {
    font-size: 1rem;
    color: #f03622;
    font-weight: 600;
  }
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Baloo 2";
  line-height: 1.3;
  color: ${({ theme }) => theme["gray-800"]};
`;

export const CartContentContainer = styled.div`
  max-width: 28rem;
  width: 100%;
`;

export const SectionCartContainer = styled(SectionFormBase)`
  width: 100%;
  margin-top: 1rem;
`;

export const TotalPurchasePrice = styled.div`
  margin-top: 1.5rem;

  button {
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme["white"]};
    background: ${({ theme }) => theme["yellow-500"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: background 200ms;

    &:hover {
      background: ${({ theme }) => theme["yellow-700"]};
    }
  }
`;

export const PriceInfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PriceInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  color: ${({ theme }) => theme["gray-700"]};

  & span {
    font-size: 0.875rem;
  }

  & span + span {
    font-size: 1rem;
  }

  &:last-child span {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme["gray-800"]};
  }
`;
