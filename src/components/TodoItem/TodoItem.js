import React from 'react';
import './TodoItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const done = < FontAwesomeIcon icon={faCheckCircle} className="text-success icon" />
const notDone = < FontAwesomeIcon icon={faTimesCircle} className="text-danger icon" />

const TodoItem = (props) => {
    const { title, id, completed } = props.todo
    const todoLink = `/todo/${id}`
    return (
        <div className="card my-2 py-2">
            <div className="grid row align-items-center">
                <h5 className="col-2 text-center">{id}</h5>
                <h5 className="col-8"><Link to={todoLink} className="text-decoration-none text-secondary">{title}</Link></h5>
                <h5 className="col-2 text-center" >{completed ? done : notDone}</h5>
            </div>
        </div>
    );
};

export default TodoItem;