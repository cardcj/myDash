/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

type TodoProps = {
    tasks:string[],
    newTask:string,
    handleChange:React.ChangeEventHandler,
    handleKeyPress:React.KeyboardEventHandler,
    handleSubmit:React.MouseEventHandler,
    errorText:{text:string, display:string}
}

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

const ValidationText = (props:TodoProps):ReactJSXElement => (
    <p
        css={css`
        color: #ff0000;
        display: ${props.errorText.display};
        `}
    >
        {props.errorText.text}
    </p>
)

const renderTasks = (tasks:string[]) => {
    return tasks.map((task:string, taskId:number) => { 
        return (
            <TodoTask key={taskId}><input type="checkbox" />{task}</TodoTask>
        )
    });
};

const Todos = (props:TodoProps) => {
    return (
        <div>
            <InputNewTask 
                placeholder="Enter a new task here"
                onChange={props.handleChange}
                onKeyPress={props.handleKeyPress}
                value={props.newTask}
            />
            <BtnCreateTask onClick={props.handleSubmit}>
                Create Task
            </BtnCreateTask>
            <ValidationText {...props} />
            <ul>
                { renderTasks(props.tasks) }
            </ul>
        </div>
    );
}

export default Todos;