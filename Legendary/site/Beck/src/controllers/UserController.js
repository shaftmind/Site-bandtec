const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        connection.query('SELECT nome, sobrenome, email, senha FROM cadastros', function (error, result) {
            if (error) throw error;
            response.send(result)
        });
    },

    async create(request, response) {
        const { nome, sobrenome, email, senha } = request.body;

        sql = 'INSERT INTO cadastros (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)';

        connection.query(sql, [nome, sobrenome, email, senha], function (error, result) {
            if (error) throw error;
            response.send(result);
        });
    }
}