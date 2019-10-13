import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Error } from './components';
import Theme from './constants/theme';

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Error message="System Crashed" onClose={() => console.log('closing')} />
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
