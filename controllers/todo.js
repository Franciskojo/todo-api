export const addTodo = (req, res, next) => {
    req.json("Todo was added!");
}

export const getTodos = (req, res, next) => {
    res.json("All todos!");
}

export const updatedTodo = (req, res, next) => {
    res.json("Todo updated!");
}

export const deleteTodo = (req, res, next) => {
res.json("Todo deletd!");
}