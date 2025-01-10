const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Lista de todos os usuários
router.get('/', userController.list);

// Criar um novo usuário
router.post('/Create', userController.create);

// Buscar um usuário para edição
router.get('/Edit/:id', userController.editForm);

// Atualizar usuário
router.put('/Edit/:id', userController.update);

// Deletar usuário
router.delete('/Delete/:id', userController.delete);

module.exports = router;
