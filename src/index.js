import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Error, Toast } from './components';
import Theme from './constants/theme';

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Toast show message="This is some error" onClose={() => console.log('closing error')} />
            <Error message="System Crashed" onClose={() => console.log('closing')} />
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
