export const addTodo = (req, res, next) => {
  // Validate user inputs
  // Write todo to database
  // Response to request
  res.json("Todo was added!");
};

export const getTodos = (req, res, next) => {
  res.json("All todos!");
};

export const updatedTodo = (req, res, next) => {
  res.json("Todo updated!");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo deletd!");
};
