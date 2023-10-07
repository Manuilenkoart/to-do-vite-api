const { deleteTodoDb } = require('../../db');

const deleteTodo = async (req, res) => {
  try {
    const data = await deleteTodoDb(req.body.id);

    if (!data) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = deleteTodo;
