import { Jogos } from "@prisma/client";
import { prismaCliente } from "../../infra/prismCliente";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { IGamesRepository } from "../protocols/IGamesRepository";





class GamesRepository implements IGamesRepository {


    async create(data: Jogos): Promise<Jogos | []> {

        try {

            const createUser = await prismaCliente.jogos.create({
                data
            });

            return createUser
        } catch (error) {
            throw new ErrorHandler('Internal Server Error', 500);
        } finally {
            await prismaCliente.$disconnect();
        }
    }

    async getGame(_id: string): Promise<Jogos | null> {

        try {
            const findGame = await prismaCliente.jogos.findFirst({
                where: {
                    id: _id
                }
            });

            return findGame;
        } catch (error) {
            throw new ErrorHandler('Internal Server Error', 500);
        } finally {
            await prismaCliente.$disconnect();
        }
    }

    async listGames(): Promise<Jogos[] | undefined> {

        try {
            const getAll = await prismaCliente.jogos.findMany();

            return getAll;
        } catch (error) {
            throw new ErrorHandler('Internal Server Error', 500);
        } finally {
            await prismaCliente.$disconnect();
        }
    }

}

export { GamesRepository };
