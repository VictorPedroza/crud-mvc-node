const db = require('../config/db');
const User = require('../entities/user');

const initTableUser = async () => {
    try {
        const fields = Object.entries(User.fields)
            .map(([name, type]) => `${name} ${type}`)
            .join(', ');

        const query = `CREATE TABLE IF NOT EXISTS ${User.tableName} (${fields})`;
        await db.query(query);
        console.log(`Tabela '${User.tableName}' criada/verificada com sucesso!`);
    } catch (err) {
        console.error('Erro ao inicializar o banco:', err);
    } finally {
        process.exit();
    }
};

initTableUser();
