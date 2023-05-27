import React, { useState } from "react";


const TodoTaskShow = ({id, task, taskCategory, taskDone, setTodoTask, taskItem, todoTask}) => {
    
    const[check,setChecked] = useState("");
    const[textDec,setTextDec] = useState("");
    const[read,setRead] = useState({makeChange: true, btnName: "Edit"});
   
    function edit() {
        
        if(read.makeChange) {
            setRead({...read, makeChange: false, btnName: "Save"});
            
        } else {
            setRead({...read, makeChange: true, btnName: "Edit"});
            
        }
        
    }
    function remove() { 
        setTodoTask( todoTask.filter((t)=>t.id !== taskItem.id));  
    }
    function checkTask() {
        if(check) {
            setChecked(false);
            setTextDec("none");
        } else {
            setChecked(true);
            setTextDec("line-through");
        }
    }

    return(
        <div className="todo_item">
            <span className={`checkbox-${taskCategory}`}>
                <input type="checkbox"  className={taskCategory} onChange={checkTask} checked={check}/>
            </span>
            <div className="todo_content">
                <input type="text" className="task_input" value={task} style={{textDecoration: `${textDec}`}} readOnly={read.makeChange} />
            </div>  
            <div className="actions">
                <button className="edit" onClick={edit}>{read.btnName}</button>
                <button className="delete" onClick={remove}>Delete</button>
            </div>
        </div>
    );
}

export default TodoTaskShow;