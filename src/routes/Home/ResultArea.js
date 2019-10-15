import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: ${props => props.theme.palette.dark.primary};
`;

const Close = Styled.a`
    position: fixed;
    top: 32px;
    right: 32px;
    color: ${props => props.theme.palette.dark.primaryText};
    cursor: pointer;
`;

const Story = Styled.div`
    margin-top: 32px;
    padding: 32px;
    border-radius: 4px;
    font-size: 24px;
    color: ${props => props.theme.palette.dark.secondaryText};
`;

const ResultArea = ({ result, onClose }) => {
    return (
        <Container>
            <Close className="material-icons" onClick={onClose}>
                close
            </Close>
            <Story>{result}</Story>
        </Container>
    );
};

export default ResultArea;
