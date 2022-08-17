import { Minus, Plus, Trash } from "phosphor-react";
import { useCart } from "../../../../hooks/cart";
import {
  AddAndRemoveProductToCartContainer,
  AddMoreProductToCart,
  CartProductInfoContainer,
  RemoveMoreProductToCart,
  RemoveProductToCartButton,
} from "./styles";

interface ProductInfoProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    limit_amount: number;
    quantity: number;
    tags: string[];
    image_url: string;
  };
}

export function CartProductInfo({ product }: ProductInfoProps) {
  const { addProductToCart, removeItemOfCart } = useCart();

  let productQuantity = product.quantity;

  const isDisableRemoveMoreProductButton = productQuantity <= 1 ? true : false;

  const isDisableAddMoreProductButton =
    productQuantity >= product.limit_amount ? true : false;

  const priceFormatted = Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(product.price);

  function removeMoreProductToCart() {
    if (productQuantity <= 1) return;

    productQuantity -= 1;

    addProductToCart(product, productQuantity);
  }

  function addMoreProductToCart() {
    if (productQuantity >= product.limit_amount) return;

    productQuantity += 1;

    addProductToCart(product, productQuantity);
  }

  return (
    <CartProductInfoContainer>
      <img src={product.image_url} alt="" />

      <div>
        <p>{product.name}</p>

        <AddAndRemoveProductToCartContainer>
          <div>
            <RemoveMoreProductToCart
              type="button"
              onClick={removeMoreProductToCart}
              disabled={isDisableRemoveMoreProductButton}
            >
              <Minus size={14} weight="bold" />
            </RemoveMoreProductToCart>
            <span>{product.quantity}</span>
            <AddMoreProductToCart
              type="button"
              onClick={addMoreProductToCart}
              disabled={isDisableAddMoreProductButton}
            >
              <Plus size={14} weight="bold" />
            </AddMoreProductToCart>
          </div>

          <RemoveProductToCartButton
            type="button"
            onClick={() => removeItemOfCart(product.id)}
          >
            <Trash size={16} weight="regular" />
            Remover
          </RemoveProductToCartButton>
        </AddAndRemoveProductToCartContainer>
      </div>

      <span>{priceFormatted}</span>
    </CartProductInfoContainer>
  );
}
