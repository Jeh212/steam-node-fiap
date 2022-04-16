import { Carrinho, Jogos } from "@prisma/client";
import { prismaCliente } from "../../infra/prismCliente";
import { ErrorHandler } from "../../utils";
import { IShoppingCartRepository } from "../interface/IShoppingCartRepository";




class ShoppingCartRepository implements IShoppingCartRepository {


    async addItem(itens: Jogos[], userId: string): Promise<Carrinho> {
        try {

            const findCartIfExist = await prismaCliente.carrinho.findFirst({ where: { userId } })

            //Se não ter carrinho
            if (findCartIfExist === null) {

                const cart = {
                    userId,
                    games: itens
                }

                const createCart = await prismaCliente.carrinho.create({
                    data: cart
                })

                return createCart
            }

            await prismaCliente.carrinho.






        } catch (error) {
            throw new ErrorHandler('Internal Server Error', 500);
        }

    }

    async findCart(cartId: string): Promise<Carrinho | null> {


    }

    async removeItem(cartId: string): Promise<Carrinho | null> {


    }

    async deleteCart(cartId: string): Promise<void> {


    }





}

export { ShoppingCartRepository };
