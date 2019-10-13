export const validateInputs = (inputText, wordLimit) => {
    if (
        inputText
            .trim()
            .split(' ')
            .map(word => word.trim())
            .filter(word => word !== '')
            .join(' ').length < 100
    )
        return {
            inputError: true,
            inputErrorMessage: 'I need atleast 100 characters to write a story.'
        };

    if (wordLimit < 200)
        return {
            inputError: true,
            inputErrorMessage: 'Seriously? You want me to generate a story with less than 200 words!'
        };

    return {
        inputError: false,
        inputErrorMessage: ''
    };
};
