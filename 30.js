/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const hashmap = new Map();
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        sum += word.length;

        for (let j = 0; j < word.length; j++) {
            const character = word[j];

            if (hashmap.has(character)) {
                hashmap.set(character, hashmap.get(character) + 1);
            } else {
                hashmap.set(character, 1);
            }
        }
    }
    if (sum%(words.length)) return false;

    let output = true;
    hashmap.forEach((value) => {
        if (value%(words.length)) output = false;
    });

    return output;
};
