import { Carrinho, Jogos } from "@prisma/client";



interface IShoppingCartRepository {

    addItem: (item: Jogos[], cartId: string, userId: string) => Promise<Carrinho>;
    findCart: (cartId: string) => Promise<Carrinho | null>;
    removeItem: (cartId: string) => Promise<Carrinho | null>;
    deleteCart: (cartId: string) => Promise<void>;
}


export { IShoppingCartRepository };
