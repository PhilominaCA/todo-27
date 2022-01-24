import React from 'react';

function TodoListupdate(props) {

    let handleCheck = (e) => {
        let newlist = [...props.data.todoList];
        let totElem = e;
        totElem.status = !totElem.status;
        newlist.splice(newlist.indexOf(e), 1, totElem);
        props.data.settodoList(newlist);
    }

    return <>

        {props.data.todoList.map((e, index) => {
            return <><div className="todo-item" key={index}>
                <div className="checker" >
                    <span className="">
                        <input type="checkbox" defaultChecked={e.status} onChange={() => handleCheck(e)} />
                    </span></div>&nbsp;&nbsp;
                {e.status ? <span><s>{e.task}</s></span> : <span>{e.task}</span>}
            </div></>
        })}

    </>;
}

export default TodoListupdate;
