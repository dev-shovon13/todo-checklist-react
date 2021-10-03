import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img from '../../images/todo.png'
import './IndividualTodo.css'

const IndividualTodo = () => {
    const { todoId } = useParams()
    const [singleTodo, setSingleTodo] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(res => res.json())
            .then(data => setSingleTodo(data))
    }, [todoId])
    return (
        <div className="container w-50 mx-auto mb-5">
            <div className="text-center todo-card my-2 py-2">
                <img src={img} alt="" className="todo-img" />
                <h5 className="text-success "><span className="text-secondary">ID: </span>{singleTodo.id}</h5>
                <h5 className="text-danger "><span className="text-secondary">Title: </span> {singleTodo.title}</h5>
                <h5 className="text-warning" ><span className="text-secondary">Status: </span> {singleTodo.completed ? 'Done' : 'Not Done'}</h5>
            </div>
        </div>
    );
};

export default IndividualTodo;