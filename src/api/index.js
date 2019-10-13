export const generateStory = (inputText, wordLimit) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    story: inputText.repeat(Math.floor(wordLimit / inputText.length))
                }
            });
        }, 5000);
    });
};
