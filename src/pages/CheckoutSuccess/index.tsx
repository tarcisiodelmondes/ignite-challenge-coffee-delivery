import { useLocation, useNavigate } from "react-router-dom";
import {
  AddressDeliveryContainer,
  CheckoutSuccessContainer,
  IconBackgroundContainer,
  ImageContainer,
} from "./styles";

import DeliveryImage from "../../assets/delivery.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { PaymentMethod } from "../Checkout";
import { useEffect } from "react";

interface PaymentInfo {
  cep: string;
  street: string;
  house_number: string;
  district: string;
  complement: string;
  city: string;
  state: string;
  payment_method: PaymentMethod;
}

export function CheckoutSuccess() {
  const { state } = useLocation() as unknown as Record<"state", PaymentInfo>;

  const navigate = useNavigate();

  console.log("asadddd");

  useEffect(() => {
    if (!state) {
      return navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <CheckoutSuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <AddressDeliveryContainer>
          <div>
            <IconBackgroundContainer color="purple-dark">
              <MapPin size={16} weight="fill" />
            </IconBackgroundContainer>
            <span>
              <p>
                Entrega em{" "}
                <strong>
                  {state.street}, {state.house_number}{" "}
                </strong>
                {state.district}- {state.city}, {state.state}
              </p>
            </span>
          </div>

          <div>
            <IconBackgroundContainer color="yellow-light">
              <Timer size={16} weight="fill" />
            </IconBackgroundContainer>
            <span>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min </strong>
            </span>
          </div>

          <div>
            <IconBackgroundContainer color="yellow-dark">
              <CurrencyDollar size={16} weight="regular" />
            </IconBackgroundContainer>
            <span>
              <p>Pagamento na entrega</p>
              {state.payment_method == "credit" ? (
                <strong>Cartão de Crédito</strong>
              ) : null}

              {state.payment_method == "debit" ? (
                <strong>Cartão de Debito</strong>
              ) : null}

              {state.payment_method == "money" ? (
                <strong>Dinheiro</strong>
              ) : null}
            </span>
          </div>
        </AddressDeliveryContainer>

        <ImageContainer src={DeliveryImage} alt="" />
      </div>
    </CheckoutSuccessContainer>
  );
}
