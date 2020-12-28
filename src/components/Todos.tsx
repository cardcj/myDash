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
    border: none;
    border-radius: 3px;
    font-family: 'Acme', sans-serif;
    font-size: 16px;
    background-color: #E56399;
    color: #320E3B;
`

const Todos = () => {
    return (
        <div>
            <InputNewTask placeholder="Enter a new task here"></InputNewTask>
            <BtnCreateTask>Create Task</BtnCreateTask>
        </div>
    );
}

export default Todos;