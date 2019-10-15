export const validateInputs = (inputText, wordLimit) => {
    const requestText = inputText
        .split(' ')
        .map(word => word.trim())
        .filter(word => word !== '')
        .join(' ');

    if (requestText.length < 100)
        return {
            inputError: true,
            inputErrorMessage: 'I need atleast 100 characters to write a story.'
        };

    if (wordLimit < 150)
        return {
            inputError: true,
            inputErrorMessage: 'Seriously? You want me to generate a story with less than 150 words!'
        };

    return {
        inputError: false,
        inputErrorMessage: '',
        requestText
    };
};
