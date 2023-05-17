import React from "react";

const TodoTaskGet = (props) => {
    return(
        <div className="todo_get_task_info">
            <div className="header">
                <h2 className="client_name">
                    <label for="client"> What's up,<input type="text" id="name" placeholder="Name here"/></label>
                </h2>
            </div>
            <div className="create_todo">
                <h3 className="todo_uppercase heading_wrap">Create a todo</h3>

                <form id="nav-todo-form">
                    <h4 className="heading_wrap">What's on your todo list</h4>
                    <input type="text" name="content" id="content" placeholder="e.g. make a video"/>
                    <h4 className="heading_wrap">Pick a category</h4>
                    <div className="options">
                        <label><div id="check-hov-business"><input type="radio" name="category" id="category" className="business" value="business"/></div><p>Business</p></label>
                        <label><div id="check-hov-personal"><input type="radio" name="category" id="category" className="personal" value="personal"/></div><p>Personal</p></label>
                    </div>
                    <input type="submit" id="submit" value="Add todo"/>
                </form>
            </div>
        </div>
    );
}

export default TodoTaskGet;