const knex = require('knex');
const configuration = require('../../knexfile');

// CONEXAO NO AMEBIENTE DE DESENVOLVIMENTO
const connection = knex(configuration.development);

// EXPORTAR A CONEXAO
module.exports = connection;