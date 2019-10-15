import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 32px;
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.palette.dark.primary};
`;

const Input = Styled.textarea`
    background: ${props => props.theme.palette.dark.secondary};
    width: 80%;
    height: 200px;
    padding: 16px;
    border-radius: 4px;
    border: 0;
    color: ${props => props.theme.palette.dark.secondaryText};
    font-size: 24px;

    :focus {
        border: 0;
        outline: none !important;
    }
`;

const CountContainer = Styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CountLabel = Styled.div`
    color: ${props => props.theme.palette.dark.primaryText}
    margin-right: 16px;
`;

const Count = Styled.div`
    color: ${props => props.theme.palette.dark.secondaryText};
`;

const WordLimitContaier = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const WordLimitLabel = Styled.h4`
    color: ${props => props.theme.palette.dark.secondaryText};
    font-size: 20px;
    margin-right: 18px;
`;

const WordLimit = Styled.input`
    background: ${props => props.theme.palette.dark.secondary};
    color: ${props => props.theme.palette.dark.secondaryText};
    border: 0;
    width: 80px;
    padding: 8px 16px;
    font-size: 20px;

    :focus {
        border: 0;
        outline: none !important;
    }
`;

const Button = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 60px;
    border: 1px solid ${props => props.theme.palette.dark.accent};
    color: ${props => props.theme.palette.dark.accent};
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;

    :hover {
        background: ${props => props.theme.palette.dark.accent};
        color: ${props => props.theme.palette.dark.primaryText};
    }
`;

const InputArea = ({ inputText, wordLimit, onInputChange, onWordLimitChange, generateStory, charCount }) => {
    return (
        <Container>
            <Container>
                <Input
                    placeholder="Begin your story and we will complete for you..."
                    value={inputText}
                    onChange={onInputChange}
                />
                <CountContainer>
                    <CountLabel>Character Count</CountLabel>
                    <Count>{charCount}</Count>
                </CountContainer>
                <WordLimitContaier>
                    <WordLimitLabel>How many characters do you want me to write?</WordLimitLabel>
                    <WordLimit type="number" placeholder="Count" value={wordLimit} onChange={onWordLimitChange} />
                </WordLimitContaier>
                <Button onClick={generateStory}>Complete My Story</Button>
            </Container>
        </Container>
    );
};

InputArea.propTypes = {
    inputText: PropTypes.string.isRequired,
    wordLimit: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onWordLimitChange: PropTypes.func.isRequired,
    generateStory: PropTypes.func.isRequired,
    charCount: PropTypes.string.isRequired
};

export default InputArea;
