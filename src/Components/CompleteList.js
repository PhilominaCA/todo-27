import React from 'react';

function CompleteList(props) {
    let handleCheck = (e) => {
        let newlist = [...props.data.todoList];
        let totElem = e;
        totElem.status = !totElem.status;
        newlist.splice(newlist.indexOf(e), 1, totElem);
        props.data.settodoList(newlist);
    }
    return <>
        {props.data.todoList.map((e, index) => {
            return <> {e.status ? <div className="todo-item" key={index}>
                <div className="checker">
                    <span className="">
                        <input type="checkbox" defaultChecked={e.status} onChange={() => handleCheck(e)} />
                    </span></div>&nbsp;&nbsp;<span><s>{e.task}</s></span> </div> :
                <div style={{ display: "none" }}></div>} </>
        })
        }
    </>
}

export default CompleteList;
