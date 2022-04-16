import { FriendsController } from "../controllers/friends/FriendsController";
import { GamesControllers } from "../controllers/games/GamesControllers";
import { FriendsRepository } from "../repositories/friends/FriendsRepository";
import { GamesRepository } from "../repositories/games/GamesRepository";
import { FriendsService } from "../services/friends/FriendsService";
import { GamesService } from "../services/games/GamesService";




export function gamesFactories() {

    const gamesRepository = new GamesRepository();
    const gamesService = new GamesService(gamesRepository);
    const gamesController = new GamesControllers(gamesService);

    return gamesController;
}



export function friendsFactories() {

    const friendsRepository = new FriendsRepository();
    const friendService = new FriendsService(friendsRepository);
    const friendsController = new FriendsController(friendService)

    return friendsController;
}