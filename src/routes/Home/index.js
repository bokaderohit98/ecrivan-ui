import React, { PureComponent } from 'react';
import { Loader, Error, Toast } from '../../components';
import { validateInputs } from '../../utils/validation';
import { trimText } from '../../utils/textProcessing';
import { generateStory } from '../../api';
import InputArea from './InputArea';
import ResultArea from './ResultArea';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            wordLimit: 0,
            charCount: 0,
            inputText: '',
            inputError: false,
            inputErrorMessage: '',
            serverError: false,
            showResult: false,
            result: ''
        };
    }

    handleErrorDismiss = () => {
        this.setState({
            serverError: false,
            inputError: false
        });
    };

    handleResultDismiss = () => {
        this.setState({
            showResult: false
        });
    };

    handleInputChange = ({ target }) => {
        const { value } = target;
        const charCount = trimText(value).length;
        this.setState({
            inputText: value,
            charCount
        });
    };

    handleWordLimitChange = ({ target }) => {
        let { value } = target;
        value = value < 0 ? 0 : value;
        this.setState({
            wordLimit: value
        });
    };

    handleGenerateStory = () => {
        const { inputText, wordLimit } = this.state;
        const { inputError, inputErrorMessage, requestText } = validateInputs(inputText, wordLimit);
        if (inputError) {
            this.setState(
                {
                    inputError,
                    inputErrorMessage
                },
                () => {
                    setTimeout(this.handleErrorDismiss, 4000);
                }
            );
            return;
        }

        this.setState({
            loading: true
        });

        generateStory(requestText, wordLimit)
            .then(res => {
                this.setState({
                    loading: false,
                    showResult: true,
                    result: res.data.story
                });
            })
            .catch(err => {
                this.setState({
                    serverError: true,
                    loading: false
                });
            });
    };

    render() {
        const {
            loading,
            wordLimit,
            inputText,
            inputError,
            inputErrorMessage,
            serverError,
            showResult,
            result,
            charCount
        } = this.state;
        return (
            <>
                {loading && <Loader />}
                {!loading && !serverError && inputError && (
                    <Toast message={inputErrorMessage} onClose={this.handleErrorDismiss} />
                )}
                {!loading && serverError && <Error message="Server Crashed" onClose={this.handleErrorDismiss} />}
                {!loading && !serverError && !showResult && (
                    <InputArea
                        inputText={inputText}
                        wordLimit={`${wordLimit}`}
                        onInputChange={this.handleInputChange}
                        onWordLimitChange={this.handleWordLimitChange}
                        generateStory={this.handleGenerateStory}
                        charCount={charCount}
                    />
                )}
                {!loading && showResult && <ResultArea result={result} onClose={this.handleResultDismiss} />}
            </>
        );
    }
}

export default Home;
