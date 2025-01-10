const mysql = require("mysql2");
require("dotenv").config();

// Configurações do pool de conexões
const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    connectionLimit: 5,         // Número máximo de conexões no pool
    waitForConnections: true,    // Esperar por uma conexão disponível
    queueLimit: 0,               // Sem limite de fila para esperar conexões
    charset: 'UTF8_GENERAL_CI',  // Charset para garantir suporte a caracteres especiais
    connectTimeout: 10000        // Timeout de 10 segundos para a conexão
});

module.exports = pool.promise();
