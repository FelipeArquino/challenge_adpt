import { Router } from "express";
import { cookiesController } from "../controllers/cookies";

const cookiesRouter = Router();
cookiesRouter.post('/', cookiesController.inserirCookie)
cookiesRouter.get('/', cookiesController.listarCookies)
cookiesRouter.get('/:id', cookiesController.obterCookiePorId)
cookiesRouter.delete('/:id', cookiesController.deletarCookiePorId)
cookiesRouter.put('/:id', cookiesController.atualizarCookie)
cookiesRouter.post('/importACO', cookiesController.inserirCookieViaACO)

export {
    cookiesRouter
}