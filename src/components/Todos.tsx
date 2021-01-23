import * as React from 'react';
import styled from '@emotion/styled';

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

const ValidationText = styled('p')`
    color: #ff0000;
    display: ${props => props.errorText.shouldShow};
`

const renderTasks = (tasks) => {
    return tasks.map((task, taskId) => { 
        return (
            <TodoTask key={taskId}><input type="checkbox" />{task}</TodoTask>
        )
    });
};

const Todos = (props:React.ComponentProps<any>) => {
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
            <ValidationText >{props.errorText.text}</ValidationText>
            <ul>
                { props.renderTasks() }
            </ul>
        </div>
    );
}

export default Todos;