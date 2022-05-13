import {ceaserEncription, ceaserDecription} from './ceaser.js';
import {playFiarEncrytion, playFiarDecrytion} from './playfair.js';
import {vigenereEncription, vigenereDecription} from './vigenere.js';

function valiateMessage(message){
    if(message.length == 0){
        alert('Message can not be empty.');
    }
    else{
        return true;
    }
}
function validateNumberKey(key){
    if(key < 0){
        alert('key can not be less than zero.');
    }
    else{
        return true;
    }
}

function validateTextKey(key){
    if(key.length == 0){
        alert('key can not be empty.');
    }
    else{
        return true;
    }
}

function encryption(encriptionName, message, key){
    if (encriptionName == 'ceaser'){
        const validMessage  = valiateMessage(message);
        const validKey = validateNumberKey(Number(key));
        if (validMessage && validKey){
            return ceaserEncription(message, Number(key));
        }
        
    }

    else if (encriptionName == 'playFair'){
        const validMessage  = valiateMessage(message);
        const validKey = validateTextKey(key);
        if (validMessage && validKey){
            return playFiarEncrytion(message, key);
        }
        
    }

    else if(encriptionName == 'vigenere'){
        const validMessage  = valiateMessage(message);
        const validKey = validateTextKey(key);
        if (validMessage && validKey){
            return vigenereEncription(message, key); 
        } 
    }

}
function decryption(encriptionName, message, key){
    if (encriptionName == 'ceaser'){
        const validMessage  = valiateMessage(message);
        const validKey = validateNumberKey(Number(key));
        if (validMessage && validKey){
            return ceaserDecription(message, Number(key));
        }
        
    }

    else if (encriptionName == 'playFair'){
        const validMessage  = valiateMessage(message);
        const validKey = validateTextKey(key);
        if (validMessage && validKey){
            return playFiarDecrytion(message, key);
        }
        
    }

    else if(encriptionName == 'vigenere'){
        const validMessage  = valiateMessage(message);
        const validKey = validateTextKey(key);
        if (validMessage && validKey){
            return vigenereDecription(message, key);
        } 
    }

}

export {encryption, decryption};