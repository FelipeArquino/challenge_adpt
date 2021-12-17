import { Request, Response } from "express";
import { ErroInterno, NaoEncontrado, RequestErrado } from "../services/util";
import { Cookies, cookiesModel } from "../models/cookies";

const inserirCookie = (req: Request, res: Response) => {

    {
        const cookie = req.body;
        if(!cookie)
            return RequestErrado(res, "Estrutura de Cookie Inválido");
    }

    const cookie = req.body as Cookies;
    cookiesModel.inserirCookie(cookie)
        .then(id => {
            res.json({
                id
            })
        })
        .catch(err => ErroInterno(res, err))
}

const inserirCookieViaACO = (req: Request, res: Response) => {

    {
        const cookie = req.body;
        if(!cookie)
            return RequestErrado(res, "Estrutura de Cookie Inválido");
    }

    const texto = req.body.aco as string;
    console.log(texto)
    cookiesModel.inserirCookieViaACO(texto)
        .then(id => {
            res.json({
                id
            })
        })
        .catch(err => ErroInterno(res, err))
}

const atualizarCookie = async (req: Request, res: Response) => {

    {
        const cookie = req.body;
        if(!cookie)
            return RequestErrado(res, "Estrutura de Cookie Inválido");

        if (!req.params.id)
            return RequestErrado(res, 'ID inválido');
    }

    const cookie = req.body as Cookies;
    cookiesModel.atualizarCookie(cookie)
        .then(cookie => {
            res.json(cookie)
        })
        .catch(err => ErroInterno(res, err))
}

const listarCookies = (req: Request, res: Response) => {

    cookiesModel.listarCookies()
        .then(cookies => {
            res.json(cookies)
        })
        .catch(err => ErroInterno(res, err))
}

const obterCookiePorId = (req: Request, res: Response) => {

    {
        if (!req.params.id)
            return RequestErrado(res, 'ID inválido')
    }
    cookiesModel.obterCookiePorId(req.params.id)
        .then(cookies => {
            res.json(cookies)
        })
        .catch(err => ErroInterno(res, err))
}


const deletarCookiePorId = (req: Request, res: Response) => {

    {
        if (!req.params.id)
            return RequestErrado(res, 'ID inválido')
    }
    cookiesModel.deletarCookiePorId(req.params.id)
        .then(() => {
            return res.sendStatus(200);
        })
        .catch(err => ErroInterno(res, err))
}


export const cookiesController = {
    inserirCookie,
    listarCookies,
    obterCookiePorId,
    deletarCookiePorId,
    atualizarCookie,
    inserirCookieViaACO
}