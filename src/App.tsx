import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import Navigation from './components/Navigation';
import TodosContainer from './containers/TodosContainer';

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
    
ReactDOM.render(<App />, document.getElementById('root'));