module.exports = function findRotationPoint(words) {
    return words.slice(1).reduce((indexOfRotation, word, index) => {
        if (word.localeCompare(words[index - 1]) === -1) {
            return index;
        }
        return indexOfRotation;
    }, 0);
};
