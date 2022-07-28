import { createServer } from "miragejs";

export function makeServer() {
  let server = createServer({
    routes() {
      this.get("/api/products", () => [
        {
          id: 1,
          name: "Expresso Tradicional",
          description:
            "O tradicional café feito com água quente e grãos moídos",
          price: 16.99,
          quantity: 9,
          tags: ["Tradicional"],
          image_url: "/assets/expresso-tradicional.png",
        },
        {
          id: 2,
          name: "Expresso Americano",
          description: "Expresso diluído, menos intenso que o tradicional",
          price: 11.99,
          quantity: 5,
          tags: ["Tradicional"],
          image_url: "/assets/expresso-americano.png",
        },
        {
          id: 3,
          name: "Expresso Cremoso",
          description: "Café expresso tradicional com espuma cremosa",
          price: 9.99,
          quantity: 3,
          tags: ["Tradicional"],
          image_url: "/assets/expresso-cremoso.png",
        },
        {
          id: 4,
          name: "Expresso Gelado",
          description: "Bebida preparada com café expresso e cubos de gelo",
          price: 10.9,
          quantity: 7,
          tags: ["Tradicional", "Gelado"],
          image_url: "/assets/expresso-gelado.png",
        },
        {
          id: 5,
          name: "Café com Leite",
          description:
            "Meio a meio de expresso tradicional com leite vaporizado",
          price: 9.9,
          quantity: 2,
          tags: ["Tradicional", "Com leite"],
          image_url: "/assets/cafe-com-leite.png",
        },
        {
          id: 6,
          name: "Latte",
          description:
            "Uma dose de café expresso com o dobro de leite e espuma cremosa",
          price: 13.95,
          quantity: 14,
          tags: ["Tradicional", "Com leite"],
          image_url: "/assets/latte.png",
        },
        {
          id: 7,
          name: "Capuccino",
          description:
            "Bebida com canela feita de doses iguais de café, leite e espuma",
          price: 26.5,
          quantity: 1,
          tags: ["Tradicional", "Com leite"],
          image_url: "/assets/capuccino.png",
        },
        {
          id: 8,
          name: "Macchiato",
          description:
            "Café expresso misturado com um pouco de leite quente e espuma",
          price: 17.25,
          quantity: 2,
          tags: ["Tradicional", "Com leite"],
          image_url: "/assets/macchiato.png",
        },
        {
          id: 9,
          name: "Mocaccino",
          description:
            "Café expresso com calda de chocolate, pouco leite e espuma",
          price: 7.3,
          quantity: 5,
          tags: ["Tradicional", "Com leite"],
          image_url: "/assets/mocaccino.png",
        },
        {
          id: 10,
          name: "Chocolate Quente",
          description:
            "Bebida feita com chocolate dissolvido no leite quente e café",
          price: 12.55,
          quantity: 10,
          tags: ["especial", "Com leite"],
          image_url: "/assets/chocolate-quente.png",
        },
        {
          id: 11,
          name: "Cubano",
          description:
            "Drink gelado de café expresso com rum, creme de leite e hortelã",
          price: 28.5,
          quantity: 16,
          tags: ["Especial", "Alcoólico", "Gelado"],
          image_url: "/assets/cubano.png",
        },
        {
          id: 12,
          name: "Havaiano",
          description: "Bebida adocicada preparada com café e leite de coco",
          price: 23.4,
          quantity: 8,
          tags: ["Especial"],
          image_url: "/assets/havaiano.png",
        },
        {
          id: 13,
          name: "Árabe",
          description: "Bebida preparada com grãos de café árabe e especiarias",
          price: 25.49,
          quantity: 4,
          tags: ["Especial"],
          image_url: "/assets/arabe.png",
        },
        {
          id: 14,
          name: "Irlandês",
          description:
            "Bebida a base de café, uísque irlandês, açúcar e chantilly",
          price: 30.99,
          quantity: 8,
          tags: ["Especial", "Alcoólico"],
          image_url: "/assets/irlandes.png",
        },
      ]);
    },
  });

  return server;
}
