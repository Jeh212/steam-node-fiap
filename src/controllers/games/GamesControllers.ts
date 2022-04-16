import { Jogos } from '@prisma/client';
import { Request, Response } from 'express';
import { GamesService } from "../../services/games/GamesService";






class GamesControllers {


    constructor(
        private readonly gamesService: GamesService
    ) { }



    async handleCreate(request: Request, response: Response) {

        const data: Jogos = request.body;

        return response.json(await this.gamesService.createGame(data))

    }

    async handleGetGame(request: Request, response: Response) {

        const { id } = request.params;

        return response.json(await this.gamesService.getGame(id))

    }

    async handleListGames(request: Request, response: Response) {

        return response.json(await this.gamesService.listAllGames());
    }
}

export { GamesControllers };
