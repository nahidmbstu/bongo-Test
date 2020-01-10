// Write a function that detects if two strings are an anagram e.g. ‘bleat’ and ‘table’ are
// anagrams but ‘eat’ and ‘tar’ are not.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isAnagram(a, b) {
    if (a.length !== b.length) {
        return false;
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
}

rl.question("Please enter the first String : ", answer1 => {
    rl.question("Please enter the second String : ", answer2 => {
        let a = answer1
            .toLowerCase()
            .trim()
            .split("")
            .sort();
        let b = answer2
            .toLowerCase()
            .trim()
            .split("")
            .sort();

        let result = isAnagram(a, b);
        console.log(result);
        rl.close();
    });
});

module.exports = isAnagram;

