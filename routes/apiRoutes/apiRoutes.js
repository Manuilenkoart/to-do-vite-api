const router = require('express').Router();

const todoRouter = require('./todoRouter.js');
const healthRouter = require('./healthRouter.js');

router.use('/todo', todoRouter);
router.use('/health', healthRouter);

module.exports = router;
