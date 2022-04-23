import { ShoppingCartController } from '../controllers/cart/ShoppingCartController';
import { FriendsController } from '../controllers/friends/FriendsController';
import { GamesControllers } from '../controllers/games/GamesControllers';
import { ShoppingCartRepository } from '../repositories/cart/ShoppingCartRepository';
import { FriendsRepository } from '../repositories/friends/FriendsRepository';
import { GamesRepository } from '../repositories/games/GamesRepository';
import { ShoppingCartService } from '../services/cart/ShoppingCartService';
import { FriendsService } from '../services/friends/FriendsService';
import { GamesService } from '../services/games/GamesService';

export function cartFacotories() {
  const gamesRepository = new GamesRepository();
  const cartRepository = new ShoppingCartRepository();

  const cartService = new ShoppingCartService(cartRepository, gamesRepository);
  const cartContoller = new ShoppingCartController(cartService);

  return cartContoller;
}

export function gamesFactories() {
  const gamesRepository = new GamesRepository();
  const gamesService = new GamesService(gamesRepository);
  const gamesController = new GamesControllers(gamesService);

  return gamesController;
}

export function friendsFactories() {
  const friendsRepository = new FriendsRepository();
  const friendService = new FriendsService(friendsRepository);
  const friendsController = new FriendsController(friendService);

  return friendsController;
}
