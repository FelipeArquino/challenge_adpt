import { Response } from "express";

export const RequestErrado = (res: Response, err: string) => {
    res.status(400).json({
        err
    })
}

export const ErroInterno = (res: Response, err: Error) => {
    res.status(500).json({
        err: err.message
    })
}

export const NaoEncontrado = (res: Response) => {
    res.status(404).json({
        err: 'Nao Encontrado'
    })
}