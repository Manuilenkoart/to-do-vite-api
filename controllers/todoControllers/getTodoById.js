const { getTodoByIdDB } = require('../../db');

const getTodoById = async (req, res) => {
  const todoId = req.params.id;
  try {
    const data = await getTodoByIdDB(todoId);

    if (data) {
      res.status(200).json(data);
    } else {
      return res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.error('Error while fetching a todo by ID:', error);

    if (error.name === 'CastError') {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = getTodoById;
