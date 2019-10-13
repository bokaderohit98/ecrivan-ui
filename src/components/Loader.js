import React from 'react';
import Styled from 'styled-components';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Theme from '../constants/theme';

const Container = Styled.div`
    background: ${props => props.theme.palette.dark.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Loader = () => {
    return (
        <Container>
            <PacmanLoader loading color={Theme.palette.dark.accent} size={60} />
        </Container>
    );
};

export default Loader;
