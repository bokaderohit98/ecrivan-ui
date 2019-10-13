import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Loader } from './components';
import Theme from './constants/theme';

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Loader />
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
