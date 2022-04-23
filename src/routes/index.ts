import { Request, Response, Router } from 'express';
import { cartRouter } from './cart/cart.routes';
import { friendsRouter } from './friends/friends.routes';
import { gamesRouter } from './games/games.routes';

const router = Router();

router.get('/live', (request: Request, response: Response) =>
  response.json({ ok: 'Working....' })
);

router.use('/games', gamesRouter);
router.use('/friends', friendsRouter);
router.use('/carts', cartRouter);

export { router };
