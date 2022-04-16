import { Request, Response, Router } from 'express';
import { friendsRouter } from './friends/friends.routes';
import { gamesRouter } from './games/games.routes';





const router = Router();


//TEsting routes
router.get('/live', (request: Request, response: Response) => response.json({ ok: 'Working....' }))


router.use('/games', gamesRouter);
router.use('/friends', friendsRouter);


export { router };
