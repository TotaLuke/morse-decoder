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
    '*****': ' ',
};

function decode(expr) {
    let arr = expr.split('');
    let arrMorse = [];
    let result = '';

    while (arr.length > 0) {
        arrMorse.push(arr.splice(0, 10));
    }

    for (let i = 0; i < arrMorse.length; i++) {
        let morseWord = '';
        for (let j = 0; j < arrMorse[i].length; j = j + 2) {
            if (arrMorse[i][j] === '1' && arrMorse[i][j + 1] === '0') morseWord += '.';
            else if (arrMorse[i][j] === '1' && arrMorse[i][j + 1] === '1') morseWord += '-'
            else if (arrMorse[i].includes('*')) morseWord += '*';
        }
        result = result + MORSE_TABLE[morseWord];
    }
    return result;
}

module.exports = {
    decode
}