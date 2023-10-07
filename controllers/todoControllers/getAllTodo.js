const { getAllTodosDb } = require('../../db');

const getAllTodo = async (req, res) => {
  try {
    const data = await getAllTodosDb();

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  } catch (error) {
    console.error('Error while fetching all todos:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = getAllTodo;
