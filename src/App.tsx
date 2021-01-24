import * as React from 'react';
import { render } from 'react-dom';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
// Importing Components
import Navigation from './components/Navigation';
import TodosContainer from './containers/TodosContainer';

// Styling the container of the app content
const Container = styled('div')`
    width: 80%;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 5px;
    z-index: 1;
    background-color: #FFFFFF;
`

class App extends React.Component {
    render() {
        return (
            <div>
                {/* Using Emotion Global styles for basic styling and setting the overall font */}
                <Global
                    styles={{
                        body: {
                            backgroundColor: "#D2D2D2"
                        },
                        "body, ul": {
                            margin: 0,
                            padding: 0
                        },
                        '*': {
                            fontFamily: "Montserrat, sans-serif"
                        }                        
                    }}
                />
                <Navigation />
                <Container>
                    <TodosContainer />
                </Container>
            </div>
        );
    };
}

// Rendering the overall App
render(<App />, document.getElementById('root'));