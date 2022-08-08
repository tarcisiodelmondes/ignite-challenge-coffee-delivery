import { createContext, ReactNode, useEffect, useState } from "react";

interface CartContextProps {
  cart: Product[];
  addProductToCart: (
    product: Omit<Product, "quantity">,
    productQuantity: number
  ) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  limit_amount: number;
  quantity: number;
  tags: string[];
  image_url: string;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>(() => {
    const cartProductsOfLocalStorage = localStorage.getItem(
      "coffee-delivery:storage"
    );

    if (cartProductsOfLocalStorage) {
      const cartProductsToObject = JSON.parse(cartProductsOfLocalStorage);

      return cartProductsToObject;
    }

    return [];
  });

  useEffect(() => {
    const cartProductsToString = JSON.stringify(cartProducts);

    localStorage.setItem("coffee-delivery:storage", cartProductsToString);
  }, [cartProducts]);

  function addProductToCart(
    product: Omit<Product, "quantity">,
    productQuantity: number
  ) {
    const productExistsInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productExistsInCart) {
      const cartProductWithNewProduct = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: productQuantity,
          };
        }

        return cartProduct;
      });

      return setCartProducts(cartProductWithNewProduct);
    }

    setCartProducts((prevState) => [
      ...prevState,
      { ...product, quantity: productQuantity },
    ]);
  }

  function removeItemOfCart(id: number) {
    const cartProductsWithItemRemoved = cartProducts.filter(
      (product) => product.id !== id
    );

    setCartProducts(cartProductsWithItemRemoved);
  }

  return (
    <CartContext.Provider value={{ cart: cartProducts, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}
