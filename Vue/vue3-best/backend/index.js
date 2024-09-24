const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const getRandomTodos = () => {
    const todos = [];
    for (let i = 1; i <= 5; i++) {
        todos.push({
            id: i,
            task: `Todo item ${i}`,
            completed: Math.random() < 0.5,
        });
    }
    return todos;
};

router.get('/todos', (ctx) => {
    ctx.body = getRandomTodos();
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
