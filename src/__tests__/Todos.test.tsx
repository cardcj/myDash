import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todos from '../components/Todos';

interface errorProps {
    text: string,
    display: string
}

const handleChange = jest.fn();
const handleKeyPress = jest.fn();

const renderTodosComponent = (error:errorProps) => {
    render(
        <Todos
            tasks={["1", "2"]}
            newTask={""}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
            handleSubmit={handleTestSubmit}
            errorText={error}
        />
    );
};

const handleTestSubmit = jest.fn(() => {
    let newError = {text: "Submitted empty", display: "block"};
    cleanup();
    renderTodosComponent(newError);
});

it('checks error text shows if input is submitted empty', () => {
    let testError = {
        text: "",
        display: "none"
    };
    renderTodosComponent(testError);
    const submitButton = screen.getByRole('button');
    let errorSpan = screen.getByTestId("inputError");
    expect(errorSpan).toHaveStyle({display: "none"});
    userEvent.click(submitButton);
    expect(handleTestSubmit).toHaveBeenCalled();
    errorSpan = screen.getByTestId("inputError");
    expect(errorSpan).toHaveTextContent("Submitted empty");
    expect(errorSpan).toHaveStyle({display: "block"});
    screen.debug();
});