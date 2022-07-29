import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffeeDelivery from "../../assets/coffee-delivery-logo.svg";
import { CartContainer, HeaderContainer, LocationContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />

      <div>
        <LocationContainer>
          <MapPin size={20} weight="fill" />

          <span>Porto Alegre, RS</span>
        </LocationContainer>

        <CartContainer>
          <ShoppingCart size={20} weight="fill" />
        </CartContainer>
      </div>
    </HeaderContainer>
  );
}
