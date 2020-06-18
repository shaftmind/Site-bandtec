const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { email, senha } = request.body;

        connection.query(`SELECT email, senha FROM cadastros WHERE email = "${email}" AND senha = "${senha}"`, function (error, result) {
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