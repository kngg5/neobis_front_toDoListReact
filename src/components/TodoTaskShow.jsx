import React, { useState } from "react";

const TodoTaskShow = () => {
    const[value,setValue] = useState('');
    return(
        <div className="todo_show_task">
            <div class="todo_list">
                <h3 class="todo_uppercase heading_wrap">Todo list</h3>
                <div class="task_list" id="todo_list">
                    <div className="todo_item">
                        <div className="checkbox_business">
                            <input type="checkbox"  className="check"/>
                        </div>
                        <div className="todo_content">
                            <input type="text" className="task_input" value={"Make dinner"} readonly/>
                        </div>  
                        <div className="actions">
                            <button className="edit">Edit</button>
                            <button className="delete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default TodoTaskShow;