import * as React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import Navigation from './components/Navigation';
import Todos from './components/Todos';

const Container = styled('div')`
    width: 80%;
    text-align: center;
    margin: 0 auto;
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
                            margin: 0,
                            padding: 0,
                            backgroundColor: "#D2D2D2"
                        },
                        '*': {
                            fontFamily: "Montserrat, sans-serif"
                        }                        
                    }}
                />
                <Navigation />
                <Container>
                    <Todos />
                </Container>
            </div>
        );
    };
}
    
export default App;