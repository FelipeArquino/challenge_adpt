import { dbQuery } from "../services/db"

export type Cookies = {
    id: string;
    sabor: string;
    formato: string;
    dataFabricacao: string;
    preco: string;
    descricao: string;
}

const inserirCookie = async (cookie: Cookies) => {
    const query = "INSERT INTO cookie(id, sabor, formato, dataFabricacao, preco, descricao) values ('" 
    + cookie.id +"','" + cookie.sabor +"','" + cookie.formato +"','" + cookie.dataFabricacao +"','" 
    + cookie.preco +"','" + cookie.descricao +"')";
    await dbQuery(query);
    let retorno = cookie.id;
    return retorno as string | undefined;
}

const inserirCookieViaACO = async (texto: string) => {
    const linhas = texto.split("\n");
    linhas.forEach(element => {
        console.log(element)
    });
}

const atualizarCookie = async (cookie: Cookies) => {
    const query = "Update cookie set sabor = '" + cookie.sabor +"', formato = '" + cookie.formato +"', dataFabricacao = '" 
    + cookie.dataFabricacao +"', preco = '" + cookie.preco +"', descricao = '" + cookie.descricao +"' where id = '"+ cookie.id +"'";
    await dbQuery(query);
    let retorno = cookie.id;
    return retorno as string | undefined;
}

const listarCookies = async () => {
    const retorno = await dbQuery('Select * from cookie');
    return retorno as Cookies[];
}

const obterCookiePorId = async (id: string) => {
    const retorno = await dbQuery("Select * from cookie where id = '"+ id +"'");
    console.log(retorno)
    return retorno[0] as Cookies | undefined;
}

const deletarCookiePorId = async (id: string) => {
    await dbQuery("delete from cookie where id = '"+ id +"'");
}

export const cookiesModel = {
    inserirCookie,
    listarCookies,
    obterCookiePorId,
    deletarCookiePorId,
    atualizarCookie,
    inserirCookieViaACO
}