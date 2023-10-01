const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    const arrRes = [];
    for (let i = 0; i < expr.length; i += 10) {
        let morse = [];
        str = expr.slice(i, i + 10);
        if (str === '**********') {
            arrRes.push(' ');
        } else {
            for (let j = 0; j < str.length; j += 2) {
                if (str[j] + str[j + 1] === '10') {
                    morse.push('.');
                } else if (str[j] + str[j + 1] === '11') {
                    morse.push('-');
                }
            }
            let morseDecode = MORSE_TABLE[morse.join('')];
            arrRes.push(morseDecode);
        }
    }
    return arrRes.join('');
}

module.exports = {
    decode
}