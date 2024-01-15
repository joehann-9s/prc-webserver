import { Router } from "express";

export class AppRoutes{
    static get routes(): Router {
        const router = Router();

        router.get('/api/v1/todos', (req, res) => {
            res.json([
                {
                    hello: 'world',
                }
            ])

        })
        return router;
    }
}