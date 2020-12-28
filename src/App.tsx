import * as React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import Navigation from './components/Navigation';
import Todos from './components/Todos';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

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
                    <Todos />
                </Container>
            </div>
        );
    };
}
    
export default App;