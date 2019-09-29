const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = expr;
    let strArr = [];
    let result = '';

    for (let i = 0, counter = 0; i < str.length; i += 10, counter++) {
        let word = str.substr(i, 10);
        strArr[counter] = [];
        for (let j = 0; j < word.length; j += 2) {
            strArr[counter].push(word.substr(j, 2));
        }
    }

    for (let i = 0; i < strArr.length; i++) {
        let letter = '';
        for (let j = 0; j < strArr[i].length; j++) {
            switch (strArr[i][j]) {
                case '00':
                    continue;
                case '10':
                    letter += '.';
                    break;
                case '11':
                    letter += '-';
                    break;
                default:
                    letter = ' ';
                    break;
            }
        }

        result += MORSE_TABLE[letter] !== undefined ? MORSE_TABLE[letter] : ' ';
    }

    return result;
}

module.exports = {
    decode
}