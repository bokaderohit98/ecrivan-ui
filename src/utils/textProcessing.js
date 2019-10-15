export const trimText = text => {
    return text
        .split(' ')
        .map(word => word.trim())
        .filter(word => word !== '')
        .join(' ');
};
