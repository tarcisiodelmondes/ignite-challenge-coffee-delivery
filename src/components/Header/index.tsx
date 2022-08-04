import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffeeDelivery from "../../assets/coffee-delivery-logo.svg";
import { useCart } from "../../hooks/cart";
import { CartContainer, HeaderContainer, LocationContainer } from "./styles";

export function Header() {
  const { cart } = useCart();

  const totalProductInCart = cart.length;

  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />

      <div>
        <LocationContainer>
          <MapPin size={20} weight="fill" />

          <span>Porto Alegre, RS</span>
        </LocationContainer>

        <CartContainer to="/checkout">
          <ShoppingCart size={20} weight="fill" />

          {totalProductInCart > 0 ? <span>{totalProductInCart}</span> : null}
        </CartContainer>
      </div>
    </HeaderContainer>
  );
}
