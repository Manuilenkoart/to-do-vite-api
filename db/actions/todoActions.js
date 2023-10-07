const { TodoModel } = require('../models/index');

const handleDatabaseError = (error) => {
  console.error('Database error:', error.message);
  throw new Error(`Database operation: ${error.message}`);
};

function handleSchemaValidationError(error) {
  const validationErrors = Object.keys(error.errors).map((field) => error.errors[field].message);

  return {
    status: 409,
    error: validationErrors.join(''),
    message: 'Invalid data provided',
  };
}

const getAllTodosDb = async () => {
  try {
    return await TodoModel.find().limit(20).sort({ countId: -1 });
  } catch (error) {
    handleDatabaseError(error);
  }
};

const createTodoDb = async (newTodo) => {
  try {
    const todo = new TodoModel(newTodo);
    return await todo.save();
  } catch (error) {
    if (error.name === 'ValidationError') {
      return handleSchemaValidationError(error);
    }

    handleDatabaseError(error);
  }
};

const updateTodoDb = async (id, todo) => {
  try {
    const updatedTodo = await TodoModel.findOneAndUpdate({ id }, todo, {
      new: true,
      runValidators: true
    });
    if (!updatedTodo) {
      console.warn('Todo not found');
    }
    return updatedTodo;
  } catch (error) {
    handleDatabaseError(error);
  }
};

const deleteTodoDb = async (todoId) => {
  try {
    const todo = await TodoModel.findOneAndDelete({ id: todoId });
    if (!todo) {
      console.warn('deleteTodoDb: Todo not found');
    }
    return todo;
  } catch (error) {
    handleDatabaseError(error);
  }
};

const getTodoByIdDB = async (id) => {
  try {
    const todo = await TodoModel.findById(id);
    if (!todo) {
      console.warn('Todo not found');
    }
    return todo;
  } catch (error) {
    handleDatabaseError(error);
  }
};

module.exports = {
  getAllTodosDb,
  createTodoDb,
  deleteTodoDb,
  updateTodoDb,
  getTodoByIdDB,
};
