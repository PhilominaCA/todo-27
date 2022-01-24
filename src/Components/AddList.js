import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function AddList(props) {

    const [newtask, setnewTask] = useState("");

    let addTask = () => {
        if (newtask) {
            let newList = [{
                task: newtask,
                status: false
            }, ...props.data.todoList];
            props.data.settodoList(newList);
        }
    }
    return <>                 
     <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e) => setnewTask(e.target.value)} /><br />
        <button className='btn btn-success' onClick={() => addTask()}>Add to List</button>
        <ul className="nav nav-pills todo-nav">
            <Link to="/">
                <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a>
                </li></Link>
            <Link to="/active">
                <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
            </Link>
            <Link to="/complete">
                <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
            </Link>
        </ul></>;
}

export default AddList;
