var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get("/api/setupTodos", async function(req, res) {
        var starterTodos = [
            {
                username: 'mitch',
                todo: 'heard cats',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'mitch',
                todo: 'meet with eve',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'mitch',
                todo: 'talk to param',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'eve',
                todo: 'meet with mitch',
                isDone: false,
                hasAttachment: false
            }
        ];

        try {
            const results = await Todos.create(starterTodos);
            res.send(results);
        } catch (err) {
            res.status(500).send(err);
        }
    });
}