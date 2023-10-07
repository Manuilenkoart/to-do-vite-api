const { updateTodoDb } = require('../../db');

const updateTodo = async (req, res) => {
  const { id, ...todoFields } = req.body;

  try {
    const updatedTodo = await updateTodoDb(id, todoFields);

    if (updatedTodo) {
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.error('Error while updating a todo:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateTodo;
