import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeImage from "../../assets/coffee-image.png";

import {
  HomeContainer,
  IconBackgroundContainer,
  ProductsListContainer,
  SectionCoffeeListContainer,
  SectionInfoContainer,
} from "./styles";
import Background from "../../assets/background.png";
import { ProductCard } from "../../components/ProductCard";
import { useEffect, useState } from "react";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  limit_amount: number;
  tags: string[];
  image_url: string;
}

export function Home() {
  const [products, setProducts] = useState<Coffee[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const products = await fetch("/api/products");

      const productToObject = await products.json();

      console.log(productToObject);

      setProducts(productToObject);
    };

    getProduct();
  }, []);

  return (
    <HomeContainer>
      <SectionInfoContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div>
            <ul>
              <li>
                <IconBackgroundContainer color="yellow-dark">
                  <ShoppingCart size={16} weight="fill" />
                </IconBackgroundContainer>
                Compra simples e segura
              </li>
              <li>
                <IconBackgroundContainer color="gray-dark">
                  <Package size={16} weight="fill" />
                </IconBackgroundContainer>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconBackgroundContainer color="yellow-light">
                  <Timer size={16} weight="fill" />
                </IconBackgroundContainer>
                Entrega rápida e rastreada
              </li>
              <li>
                <IconBackgroundContainer color="purple-dark">
                  <Coffee size={16} weight="fill" />
                </IconBackgroundContainer>
                O café chega fresquinho até você
              </li>
            </ul>
          </div>
        </div>

        <img src={CoffeeImage} alt="" />
      </SectionInfoContainer>

      <img src={Background} alt="" />

      <SectionCoffeeListContainer>
        <h2>Nossos cafés</h2>

        <ProductsListContainer>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </ProductsListContainer>
      </SectionCoffeeListContainer>
    </HomeContainer>
  );
}
