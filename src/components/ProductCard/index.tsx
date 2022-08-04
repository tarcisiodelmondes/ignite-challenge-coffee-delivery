import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../../hooks/cart";
import {
  AddMoreProduct,
  CartContainer,
  ProductCardContainer,
  RemoveMoreProduct,
  TagContainer,
  TagsContainer,
} from "./styles";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  limit_amount: number;
  tags: string[];
  image_url: string;
}

interface ProductCardProps {
  product: Coffee;
}

export function ProductCard({ product }: ProductCardProps) {
  const { cart, addProductToCart } = useCart();

  const [productQuantity, setProductQuantity] = useState(() => {
    const productExistInCart = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productExistInCart) {
      return productExistInCart.quantity;
    }

    return 1;
  });

  function addMoreProductQuantity() {
    const moreProductQuantity = productQuantity + 1;

    setProductQuantity(moreProductQuantity);
    addProductToCart(product, moreProductQuantity);
  }

  function removeMoreProduct() {
    setProductQuantity(productQuantity - 1);
  }

  const isDisableRemoveMoreProductButton = productQuantity <= 1 ? true : false;

  const isDisableAddMoreProductButton =
    productQuantity >= product.limit_amount ? true : false;

  const priceFormatted = Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(product.price);

  return (
    <ProductCardContainer>
      <img src={product.image_url} alt="" />
      <TagsContainer>
        {product.tags.map((tag) => (
          <TagContainer key={tag}>{tag}</TagContainer>
        ))}
      </TagsContainer>

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <div>
        <span>{priceFormatted}</span>
        <div>
          <RemoveMoreProduct
            onClick={removeMoreProduct}
            disabled={isDisableRemoveMoreProductButton}
          />
          <span>{productQuantity}</span>
          <AddMoreProduct
            onClick={addMoreProductQuantity}
            disabled={isDisableAddMoreProductButton}
          />
        </div>
        <CartContainer
          onClick={() => addProductToCart(product, productQuantity)}
        >
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </div>
    </ProductCardContainer>
  );
}
