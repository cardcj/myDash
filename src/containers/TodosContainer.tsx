import * as React from 'react';
import Todos from '../components/Todos';

// Container to hold the logic for Todos
const TodosContainer = () => {
    // State hook for tasks list
    let [tasks, setTasks] = React.useState([]);
    // State hook for new task input
    let [newTask, setNewTask] = React.useState("");
    // State hook for current state of error message
    let [errorText, setErrorText] = React.useState({text: "", display: "none"});

    // Handles when the user types in the input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.currentTarget.value);
    };
    
    // Handles when the user presses the Enter key or clicks the submit button
    const handleSubmit = () => {
        // If the input is not empty
        if (newTask !== "") {
            // Create a new task using the user's inputted value
            setTasks([newTask, ...tasks]);
            // Set the new task input to be empty again
            setNewTask("");
            // Set the error text to nothing and remove it from the DOM
            setErrorText({
                text:"",
                display: "none"
            })
        } else {
            // If the input is empty (retrieved from state) then show error text
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
        // Returning the Todos component with all props passed so it can access logic
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