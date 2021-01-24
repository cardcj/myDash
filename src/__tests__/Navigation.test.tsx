import React from 'React';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';

// Basic test to check that the component can be rendered
it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Navigation />, div);
});

// Snapshot testing to make sure that no unintended changes to the component occur
it('checks against last snapshot', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
});