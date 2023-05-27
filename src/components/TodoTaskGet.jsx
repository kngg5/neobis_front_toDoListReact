import React, { useState } from "react";
import TodoTaskShow from "./TodoTaskShow";

const TodoTaskGet = () => {
    const[todoTask,setTodoTask] = useState([
        
    ]);
    
    const[input,setInput] = useState({id: 0, task: '', taskCategory: 'personal', taskDone: false});
    function res(e) {
        e.preventDefault();
        if(input.task) {
            setTodoTask([...todoTask, {...input, id: Date.now(),}]);
            setInput({id: Date.now(), task: '', taskCategory: '', taskDone: false});    
        } else {
            console.log("Please, enter task name!");
        }        
    }
    return(
        
        <div>
            <div className="todo_get_task_info">
                <div className="header">
                    <h2 className="client_name">
                        <label htmlFor="client"> What's up,<input type="text" id="name" placeholder="Name here"/></label>
                    </h2>
                </div>
                <div className="create_todo">
                    <h3 className="todo_uppercase heading_wrap">Create a todo</h3>

                    <form id="nav-todo-form">
                        <h4 className="heading_wrap">What's on your todo list</h4>
                        <input type="text" name="content"  id="content" placeholder="e.g. make a video" value={input.task} onChange={(event)=> setInput({...input, task: event.target.value})}/>
                        <h4 className="heading_wrap">Pick a category</h4>
                        <div className="options">
                            <label><div id="check-hov-business"><input type="radio" name="category" id="category" onChange={(e)=>setInput({...input, taskCategory: e.target.value})} className="business" value="business"/></div><p>Business</p></label>
                            <label><div id="check-hov-personal"><input type="radio" name="category" id="category" onChange={(e)=>setInput({...input, taskCategory: e.target.value})} className="personal" value="personal"/></div><p>Personal</p></label>
                        </div>
                        <input type="submit" id="submit" onClick={res}  value="Add todo"/>
                    </form>
                </div>
            </div>
            <div className="todo_show_task">
                <div className="todo_list">
                    <h3 className="todo_uppercase heading_wrap">Todo list</h3>
                    <div className="task_list" id="todo_list">
                        {todoTask.map((taskItem, index) => 
                            <TodoTaskShow todoTask={todoTask} taskItem={taskItem} setTodoTask={setTodoTask} id={index} task={taskItem.task} key={index} taskCategory= {taskItem.taskCategory} taskDone={taskItem.taskDone}/>
                        )}
                        
                    </div>
                </div>  
            </div>
        </div>
        
    );
}

export default TodoTaskGet;