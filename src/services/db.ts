const express = require('express');
const {Pool, Client} = require('pg');
const connectionString = 'postgres://gomgmzcy:NgUoW3yqAAMnGvg1TmySfyMZRuHPA23r@kesavan.db.elephantsql.com/gomgmzcy'


export const dbQuery = (query: string) => {
    const client = new Client({
        connectionString:connectionString
    })
    client.connect();
    return new Promise<any[]>((resolve, reject) => {
        client.query(query, (err: any, res: { rows: any; })=>{
            if(err)
                reject(err);
            else
                resolve(res.rows)
        })
    })
    .finally(() => {
        client.end()
    })
}