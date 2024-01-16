import { Request, Response } from 'express';
const todos = [
    { id:1, text :'buy cookies', createdAt: new Date()},
    { id:2, text :'buy beer', createdAt: new Date()},

];

export class TodosController {
    constructor(){}

    public getTodos = (req: Request, res: Response) =>{
        return res.json(todos);  
    };

    public getTodoById = (req: Request, res: Response) =>{
        const id = +req.params.id;
        if ( isNaN(id)) return res.status(400).json({ error:`ID is not a number`});

        const todo = todos.find(todo => todo.id === id);
        console.log(id,10); 
        ( todo )
            ? res.json(todo)
            : res.status(404).json({ error: `not found ${id}` });
    };

    public createTodo = (req: Request, res: Response) => {
        const { text } = req.body;
        if( !text) return res.status(400).json({ error: 'Text property is required' });
        const newTodo = {
            id: todos.length + 1,
            text: text,
            createdAt: new Date(),
        };

        todos.push(newTodo);
        return res.json(newTodo);

    };
}