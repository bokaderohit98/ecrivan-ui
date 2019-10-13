import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = Styled.div`
    background: ${props => props.theme.palette.dark.secondary};
    z-index: 100;
    border-radius: 4px;
    width: 250px;
    min-height: 80px;
    padding: 16px;
    position: fixed;
    bottom: 32px;
    left: 32px;
    transition: 0.2s all;
`;

const Close = Styled.a`
    position: absolute;
    font-size: 18px;
    top: 16px;
    right: 16px;
    color: ${props => props.theme.palette.dark.primaryText};
    cursor: pointer;
`;

const Message = Styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    font-size: 17px;
    font-weight: 400;
    color: ${props => props.theme.palette.dark.secondaryText};
`;

const Toast = ({ message, onClose }) => {
    return (
        <Container>
            <Close className="material-icons" onClick={onClose}>
                close
            </Close>
            <Message>
                <a className="material-icons">error</a>
                <span style={{ fontWeight: 600, margin: '0 6px' }}>Error : </span>
                <span>{message}</span>
            </Message>
        </Container>
    );
};

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Toast;
