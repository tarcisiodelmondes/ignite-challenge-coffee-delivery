import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useCart } from "../../hooks/cart";
import { ButtonPaymentMethod } from "./components/ButtonPaymentMethod";
import { CartProductInfo } from "./components/CartProductInfo";
import { Input } from "./components/Input";
import * as zod from "zod";
import {
  CheckoutContainer,
  FormContainer,
  HeaderContainer,
  IconContainer,
  SectionPaymentMethod,
  PaymentMethodContainer,
  Title,
  FormAddressContainer,
  AddressContentContainer,
  CartContentContainer,
  SectionCartContainer,
  TotalPurchasePrice,
  PriceInfoContainer,
  PriceInfosContainer,
  Form,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export enum PaymentMethod {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmPaymentFormFormValidationScheme = zod.object({
  cep: zod.string().min(1, "Informe seu CEP"),
  street: zod.string().min(1, "Informe a rua"),
  house_number: zod.string().min(1, "Informe o número da casa"),
  complement: zod.string().optional(),
  district: zod.string().min(1, "informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Informe o estado"),
  payment_method: zod.nativeEnum(PaymentMethod, {
    errorMap: () => ({ message: "informe o método de pagamento" }),
  }),
});

type ConfirmPaymentFormData = zod.infer<
  typeof confirmPaymentFormFormValidationScheme
>;

export function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const { register, formState, handleSubmit } = useForm<ConfirmPaymentFormData>(
    {
      resolver: zodResolver(confirmPaymentFormFormValidationScheme),
    }
  );

  const { errors } = formState as unknown as ErrorsType;

  const totalPriceOfProducts = cart.reduce((acc, currentValue) => {
    if (currentValue.quantity > 1) {
      return (acc += currentValue.price * currentValue.quantity);
    }

    return (acc += currentValue.price);
  }, 0);

  const totalPriceOfProductsWithDelivery = totalPriceOfProducts + 3.5;

  const totalPriceOfProductsFormatted = Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(totalPriceOfProducts);

  const totalPriceOfProductsWithDeliveryFormatted = Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(totalPriceOfProductsWithDelivery);

  function handleConfirmPayment(data: ConfirmPaymentFormData) {
    clearCart();
    navigate("/checkout-success", { state: data });
  }

  const methodsOfPayment = {
    credit: {
      label: "Cartão de crédito",
      icon: <CreditCard size={16} />,
    },
    debit: {
      label: "Cartão de débito",
      icon: <Bank size={16} />,
    },
    money: {
      label: "Dinheiro",
      icon: <Money size={16} />,
    },
  };

  const paymentMethodError = errors?.payment_method?.message;

  return (
    <CheckoutContainer>
      <Form onSubmit={handleSubmit(handleConfirmPayment)}>
        <AddressContentContainer>
          <Title>Complete seu pedido</Title>

          <FormAddressContainer>
            <HeaderContainer>
              <IconContainer color="yellow">
                <MapPinLine size={22} weight="regular" />
              </IconContainer>

              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </HeaderContainer>

            <FormContainer>
              <Input
                title="CEP"
                id="cep"
                width={200}
                placeholder="CEP"
                {...register("cep")}
                error={errors.cep?.message}
              />
              <Input
                title="Rua"
                id="rua"
                placeholder="Rua"
                {...register("street")}
                error={errors.street?.message}
              />

              <div className="inputs-container">
                <Input
                  width={200}
                  title="Número"
                  id="numero"
                  placeholder="Número"
                  type="number"
                  {...register("house_number")}
                  error={errors.house_number?.message}
                />
                <Input
                  title="Complemento"
                  id="complemento"
                  placeholder="Complemento"
                  isOptional
                  {...register("complement")}
                  error={errors.complement?.message}
                />
              </div>
              <div className="inputs-container">
                <Input
                  width={200}
                  title="Bairro"
                  id="bairro"
                  placeholder="Bairro"
                  {...register("district")}
                  error={errors.district?.message}
                />
                <Input
                  width={276}
                  title="Cidade"
                  id="cidade"
                  placeholder="Cidade"
                  {...register("city")}
                  error={errors.city?.message}
                />
                <Input
                  width={60}
                  title="UF"
                  id="uf"
                  placeholder="UF"
                  {...register("state")}
                  error={errors.state?.message}
                />
              </div>
            </FormContainer>
          </FormAddressContainer>

          <SectionPaymentMethod>
            <HeaderContainer>
              <IconContainer color="purple">
                <CurrencyDollar size={22} weight="regular" />
              </IconContainer>

              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </HeaderContainer>

            <PaymentMethodContainer>
              {Object.entries(methodsOfPayment).map(
                ([key, { label, icon }]) => (
                  <ButtonPaymentMethod
                    key={label}
                    id={key}
                    label={label}
                    icon={icon}
                    value={key}
                    {...register("payment_method")}
                  />
                )
              )}

              {paymentMethodError ? <span>{paymentMethodError}</span> : null}
            </PaymentMethodContainer>
          </SectionPaymentMethod>
        </AddressContentContainer>

        <CartContentContainer>
          <Title>Cafés selecionados</Title>

          <SectionCartContainer>
            {cart.length <= 0 ? (
              <p>O carrinho esta vazio!</p>
            ) : (
              <>
                {cart.map((product) => (
                  <CartProductInfo key={product.id} product={product} />
                ))}

                <TotalPurchasePrice>
                  <PriceInfosContainer>
                    <PriceInfoContainer>
                      <span>Total de itens</span>
                      <span>{totalPriceOfProductsFormatted}</span>
                    </PriceInfoContainer>

                    <PriceInfoContainer>
                      <span>Entrega</span>
                      <span>R$ 3,50</span>
                    </PriceInfoContainer>

                    <PriceInfoContainer>
                      <span>Total</span>
                      <span>{totalPriceOfProductsWithDeliveryFormatted}</span>
                    </PriceInfoContainer>
                  </PriceInfosContainer>

                  <button type="submit">Confirmar pedido</button>
                </TotalPurchasePrice>
              </>
            )}
          </SectionCartContainer>
        </CartContentContainer>
      </Form>
    </CheckoutContainer>
  );
}
