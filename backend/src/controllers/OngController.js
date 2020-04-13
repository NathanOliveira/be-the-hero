// BIBLIOTECA PARA CRIPTOGRAFAR
const crypto = require('crypto');

//IMPORTAR CONEXAO COM O BANCO DE DADOS
const connection = require('../database/connection');

/**
 * TIPO DE PARAMETROS
 * 
 * QUERY PARAMS: Parametros  nomeados enviados na rota após "?" (filtro, paginação) o "&" serve  (requst.query)
 * como concatenação de parametros "pagina=2&idade=2&nome=x" (request.params)
 * ROUTE PARAMS: Parametros utilzados para identificar recursos (ENTIDADES)
 * REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos (request.body)
 * 
 */

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        });

        return response.json({ id });
    },
    async getAll(request, response) {

        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }
};