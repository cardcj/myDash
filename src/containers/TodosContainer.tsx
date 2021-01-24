import * as React from 'react';
import Todos from '../components/Todos';

const TodosContainer = () => {
    let [tasks, setTasks] = React.useState([]);
    let [newTask, setNewTask] = React.useState("");
    let [errorText, setErrorText] = React.useState({text: "", display: "none"});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.currentTarget.value);
    };
    
    const handleSubmit = () => {
        if (newTask !== "") {
            setTasks([newTask, ...tasks]);
            setNewTask("");
            setErrorText({
                text:"",
                display: "none"
            })
        } else {
            setErrorText({
                text: "* To create a new task you must enter a value",
                display: "block"
            });
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // If the key pressed while the input is focused is the Enter key then call handleSubmit
        if(e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <Todos 
            tasks={tasks}
            newTask={newTask}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
            handleSubmit={handleSubmit}
            errorText={errorText}/>
    );
}

export default TodosContainer;