const connectToMongoDB = require('./mongoConnect');
const {
  getAllTodosDb, createTodoDb,
  deleteTodoDb,
  updateTodoDb,
  getTodoByIdDB,
} = require('./actions/todoActions');

module.exports = {
  connectToMongoDB,
  getAllTodosDb, createTodoDb,
  deleteTodoDb,
  updateTodoDb,
  getTodoByIdDB,
};