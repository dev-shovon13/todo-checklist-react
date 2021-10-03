import React, { useEffect, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div className="container">
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            }
        </div>
    );
};

export default Todos;