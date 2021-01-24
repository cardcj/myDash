import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todos from '../components/Todos';

// Interface used to check that the error props are correctly typed
interface errorProps {
    text: string,
    display: string
}

// Mock functions for input handlers
const handleChange = jest.fn();
const handleKeyPress = jest.fn();

// Function for the render fo the Todos component
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

// Mock submit handler to cleanup the previous render and re-render with the new error
const handleTestSubmit = jest.fn(() => {
    let newError = {text: "Submitted empty", display: "block"};
    // Remove the previous render
    cleanup();
    // Render with the new error included
    renderTodosComponent(newError);
});

it('checks error text shows if input is submitted empty', () => {
    // Initial error values
    let testError = {
        text: "",
        display: "none"
    };
    // Render with the initial error values
    renderTodosComponent(testError);
    // Get the submit button
    const submitButton = screen.getByRole('button');
    // Get the error span
    let errorSpan = screen.getByTestId("inputError");
    // Check that the errorSpan initially isn't displayed
    expect(errorSpan).toHaveStyle({display: "none"});
    // CLick the submit button
    userEvent.click(submitButton);
    // Check that the submit handler has been called
    expect(handleTestSubmit).toHaveBeenCalled();
    // Get the newly rendered error
    errorSpan = screen.getByTestId("inputError");
    // Check that the new error has the correct text
    expect(errorSpan).toHaveTextContent("Submitted empty");
    // Check that the new error is shown
    expect(errorSpan).toHaveStyle({display: "block"});
});