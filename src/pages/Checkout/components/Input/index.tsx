import { forwardRef, InputHTMLAttributes } from "react";
import { InputContainer, InputForm } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  title: string;
  id: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, title, error, isOptional = false, ...rest }, ref) => {
    return (
      <InputContainer width={rest.width}>
        <label className="sr-only" htmlFor={id}>
          {title}
        </label>

        <InputForm
          id={id}
          name={id}
          {...rest}
          ref={ref}
          className={`${error ? "input-error" : null}`}
        />

        {isOptional ? <span>Opcional</span> : null}

        {error ? <span className="input-error">{error}</span> : null}
      </InputContainer>
    );
  }
);
