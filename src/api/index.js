import axios from 'axios';

export const generateStory = (inputText, wordLimit) => {
    return axios.get('/api', {
        params: {
            inputText,
            wordLimit
        }
    });
};
