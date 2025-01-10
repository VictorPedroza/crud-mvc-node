const db = require('../config/db');
const User = require('../entities/user');

module.exports = {
    // Listar todos os usuários
    list: async (req, res) => {
        try {
            const [users] = await db.query(`SELECT * FROM ${User.tableName}`);
            res.json({ users }); // Resposta no formato JSON
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    },

    // Criar um novo usuário
    create: async (req, res) => {
        const { name, email } = req.query;

        if (!name || !email) {
            return res.status(400).json({ error: "Nome e email são obrigatórios!" });
        }
    
        try {
            await db.query(
                `INSERT INTO ${User.tableName} (name, email) VALUES (?, ?)`,
                [name, email]
            );
    
            res.status(201).json({ message: "Usuário criado com sucesso!" });
        } catch (err) {
            console.error("Erro ao criar o usuário:", err);
            res.status(500).json({ error: "Erro ao criar usuário. Tente novamente mais tarde." });
        }
    },
    // Buscar um usuário para editar
    editForm: async (req, res) => {
        const id = req.params.id;
        try {
            const [users] = await db.query(`SELECT * FROM ${User.tableName} WHERE id = ?`, [id]);
            if (users.length > 0) {
                res.json({ user: users[0] }); // Retorna o usuário encontrado
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    },

    // Atualizar um usuário
    update: async (req, res) => {
        const { name, email } = req.query;
        const id = req.params.id;
        try {
            await db.query(`UPDATE ${User.tableName} SET name = ?, email = ? WHERE id = ?`, [name, email, id]);
            res.json({ message: 'Usuário atualizado com sucesso!' }); // Mensagem de sucesso
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    },

    // Deletar um usuário
    delete: async (req, res) => {
        const id = req.params.id;
        try {
            await db.query(`DELETE FROM ${User.tableName} WHERE id = ?`, [id]);
            res.json({ message: 'Usuário deletado com sucesso!' }); // Mensagem de sucesso
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    },
};
