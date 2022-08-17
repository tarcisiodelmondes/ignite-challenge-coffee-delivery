import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { PaymentMethodContainer } from "./styles";

interface ButtonPaymentMethodProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  label: string;
}

export const ButtonPaymentMethod = forwardRef<
  HTMLInputElement,
  ButtonPaymentMethodProps
>(({ id, icon, label, ...rest }, ref) => {
  return (
    <PaymentMethodContainer>
      <input
        className="sr-only"
        type="radio"
        id={id}
        {...rest}
        name="payment_method"
        ref={ref}
      />
      <label htmlFor={id}>
        {icon}
        {label}
      </label>
    </PaymentMethodContainer>
  );
});
