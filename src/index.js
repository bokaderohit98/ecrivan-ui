import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './routes';
import Theme from './constants/theme';

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Home />
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
