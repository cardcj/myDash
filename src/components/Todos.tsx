/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

// Interface to make sure that only the correct props can be passed
interface TodoProps {
    tasks:string[],
    newTask:string,
    handleChange:React.ChangeEventHandler,
    handleKeyPress:React.KeyboardEventHandler,
    handleSubmit:React.MouseEventHandler,
    errorText:{text:string, display:string}
}

// Styling the new task input
const InputNewTask = styled('input')`
    width: 80%;
    margin: 20px;
    padding: 10px;
    font-size: 14px;
    &:focus {
        border: thin #E56399 solid;
        box-shadow: 0 0 2px 0 #E56399;
    }
`
// Styling the submit button
const BtnCreateTask = styled('button')`
    padding: 10px;
    border: thin #000000 solid;
    border-radius: 3px;
    font-family: 'Acme', sans-serif;
    font-size: 16px;
    background-color: #E56399;
    color: #320E3B;
    &:hover {
        background-color: #7FEFBD;
        cursor: pointer; 
    }
`
// Styling the tasks in the task list
const TodoTask = styled('li')`
    text-align: left;
	padding: 10px;
    margin: 10px;
    background-color: #7FEFBD;
	color: #1A535C;
	font-size: 20px;
	list-style: none;
	cursor: grab;
	&:hover {
        background-color: #6EDEAC;
    }
`

// Providing the JSX and styling needed for the error text
const ValidationText = (props:TodoProps):ReactJSXElement => (
    <span
        css={css`
        color: #ff0000;
        display: ${props.errorText.display};
        `}
        data-testid="inputError"
    >
        {props.errorText.text}
    </span>
)

// Function to render the tasks list using the tasks passed through props
const renderTasks = (tasks:string[]) => {
    return tasks.map((task:string, taskId:number) => { 
        return (
            <TodoTask key={taskId}><input type="checkbox" />{task}</TodoTask>
        )
    });
};

// JSX for the elements that make up the Todos component
const Todos = (props:TodoProps) => {
    return (
        <div>
            {/* Single line text input using event handlers and value from props */}
            <InputNewTask 
                placeholder="Enter a new task here"
                onChange={props.handleChange}
                onKeyPress={props.handleKeyPress}
                value={props.newTask}
            />
            {/* Submit button using onClick handler from props */}
            <BtnCreateTask onClick={props.handleSubmit} role="button">
                Create Task
            </BtnCreateTask>
            {/* Error text element taking attributes from props */}
            <ValidationText {...props} />
            <ul>
                {/* Render all tasks passed through props */}
                { renderTasks(props.tasks) }
            </ul>
        </div>
    );
}

export default Todos;