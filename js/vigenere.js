// This function maps the key to the length of the message
/*  for instance message: hello world
                key:      love
                mapkey:   lovel ovelo
 */
function mapKey(message, key){
    let count = 0;
    var result = '';
    // Iterate over each character in the message.
    for(let i=0; i < message.length; i++){
        // Check if the character is a letter.
        if ((message[i].match(/[a-z]/i))){
            // then, add the letter to result.
            let letter = key[count%key.length];
            result += letter.toLowerCase();
            count++;
         }
        else{
            result += message[i];
        }
    }
    return result;
}
/*  This vigenereEcrption function encrpt a given message with the key return the cipher text.
    for instance: message: hello world
                  key:     love
                  keymap:  lovel ovelo
    change each letter to numbers to character and add them.
    [a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9, k:10, l:11, m:12, n:13
    o:14, p:15, q:16, r:17, s:18, t:19, u:20, v:21, w:22, x:23, y:24, z:25]
                message: h |e |l |l |o |w |o |r |l |d |
                         7 |4 |11|11|14|22|14|17|11|3 |
                keymap:  l |o |v |e |l |o |v |e |l |o |
                         11|14|21|4 |11|14|21|4 |11|14|
                sum:     18|18|32|15|25|36|35|21|22|17|
        sum modulo 26:   18|18|6 |15|25|10|9 |21|22|17|
        cipher Text:     s |s |g |p |z |k |j |v |w |r |
        cipher = ssgpz kjvwr
 */

function vigenereEncription(message, key){
    const keyMap = mapKey(message, key);
    let encryptedMessage = '';
    // Iterate over each character in the message.
    for(let i=0; i<message.length; i++){
        // Check if the message a letter in english alphabet.
        if (message[i].match(/[a-z]/i)){

            //if letter is uppercase, then deducte 65 to find the value of the letter.
            if(message[i]== message[i].toUpperCase()){
                // add a value of keyMap and deducte 97 from it as the keyMap is change to small letters.
                let code = message.charCodeAt(i)- 65 + keyMap.charCodeAt(i) - 97;
                // code modulo 26 turns the number in a range of value 0 to 25.
                code = (code % 26) + 65;
                encryptedMessage += String.fromCharCode(code);

                }
            else{
                //if letter is lowercase, then deducte 97 to find the value of the letter.
                let code = message.charCodeAt(i)- 97 + keyMap.charCodeAt(i) - 97;
                code = (code % 26) + 97;
                encryptedMessage += String.fromCharCode(code);
            }
        }
        // if the character is not a letter in alphabet, then just leave it and add it to reuslt.
        else {
            encryptedMessage += message[i];
            }  

}
    return encryptedMessage;
}
/*  This vigeneredecription function decript a given cipher with the key return the message.
    for instance: cipher: ssgpz kjvwr
                  key:     love
                  keymap:  lovel ovelo
    change each letter to numbers to character and add them.
    [a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9, k:10, l:11, m:12, n:13
    o:14, p:15, q:16, r:17, s:18, t:19, u:20, v:21, w:22, x:23, y:24, z:25]
                cipher:  s |s |g |p |z |k |j |v |w |r |
                         18|18|6 |15|25|10|9 |21|22|17|
                keymap:  l |o |v |e |l |o |v |e |l |o |
                         11|14|21|4 |11|14|21|4 |11|14|
                dif:     7 |4 |-15|11|14|-4|-12|17|11|3 |
    (dif+26) modulo 26:   7 |4 |11|11|14|22|14|17|11|3 |
        message:         h |e |l |l |o |w |o |r |l |d |
        message = hello world
 */
function vigenereDecription(cipherText, key){
    const keyMap = mapKey(cipherText, key);    
    let message = '';
    // Iterate over each character in the message.
    for(let i=0; i<cipherText.length; i++){
        // Check if the message a letter in english alphabet.
        if (cipherText[i].match(/[a-z]/i)){
            //if letter is uppercase, then deducte 65 to find the value of the letter.
            if(cipherText[i]== cipherText[i].toUpperCase()){
                // minus a value of keyMap and deducte 97 from it as the keyMap is change to small letters.
                let code = (cipherText.charCodeAt(i)- 65) - (keyMap.charCodeAt(i) - 97);
                // since the code might be negative, we add 26 to code
                code = 26 + code;
                // code modulo 26 turns the number in a range of value 0 to 25.
                code = (code%26) + 65;            
                message += String.fromCharCode(code);
            }
            else{
                //if letter is lowercase, then deducte 97 to find the value of the letter.
                let code = (cipherText.charCodeAt(i)- 97) - (keyMap.charCodeAt(i) - 97);
                code = 26 + code;
                code = (code % 26) + 97;
                message += String.fromCharCode(code);
        }
    }
    // if the character is not a letter in alphabet, then just leave it and add it to reuslt.
    else {
        message += cipherText[i];
        }  
    }
    return message;
}

export {vigenereEncription, vigenereDecription};
