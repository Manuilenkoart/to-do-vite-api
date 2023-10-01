const router = require('express').Router();

const todoRouter = require('./todoRouter.js');

router.use('/todo', todoRouter);

module.exports = router;
