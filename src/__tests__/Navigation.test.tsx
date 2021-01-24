import React from 'React';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Navigation />, div);
});

it('checks against last snapshot', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
});