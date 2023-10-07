const { createTodoDb } = require("../../db");
const uuid = require('uuid').v4;

const createTodo = async (req, res) => {
  try {
    const data = await createTodoDb({ ...req.body, id: uuid() });

    if(data.status === 409) {
      const { status, error, message } = data;
      res.status(status).json({ error, message });
    } else if (data) {
      res.status(201).json(data);
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  } catch (error) {
    console.error('Error while creating a todo:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = createTodo;
