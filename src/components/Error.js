import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import ErrorIcon from '../assets/error.png';

const Container = Styled.div`
    background: ${props => props.theme.palette.dark.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Img = Styled.img`
    width: 180px;
    height: auto;
    margin-bottom: 16px;
`;

const Message = Styled.h1`
    color: ${props => props.theme.palette.dark.primaryText};
    font-weight: 400;
`;

const Close = Styled.a`
    position: fixed;
    top: 32px;
    right: 32px;
    color: ${props => props.theme.palette.dark.primaryText};
    cursor: pointer;
`;

const Error = ({ message, onClose }) => {
    return (
        <Container>
            <Close className="material-icons" onClick={onClose}>
                close
            </Close>
            <Img src={ErrorIcon} alt="Error" />
            <Message>{message}</Message>
        </Container>
    );
};

Error.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Error;
