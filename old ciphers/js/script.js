
const message = document.getElementById('message');
const resultMessage = document.getElementById('result-message');

const encodeBtn = document.getElementById('encode');
const decodeBtn = document.getElementById('decode');

const ceaserBtn = document.getElementById('ceaser');
const playFairBtn = document.getElementById('play-fair');
const vigenereBtn = document.getElementById('vigenere');

import {createContents} from './create_contents.js';
import {encryption, decryption} from './cipher.js';

let currentCipher = 'ceaser';
createContents(0);
let key = document.getElementById('key');


ceaserBtn.addEventListener("click", function(){
    currentCipher = 'ceaser';
    createContents(0);
    key = document.getElementById('key');

});
     
playFairBtn.addEventListener("click", function(){
    currentCipher = 'playFair';
    createContents(1);
    key = document.getElementById('key');

});
vigenereBtn.addEventListener("click", function(){
    currentCipher = 'vigenere';
    createContents(2);
    key = document.getElementById('key');


});

encodeBtn.addEventListener("click", function(){
    const result = encryption(currentCipher, message.value, key.value);
    resultMessage.innerText = result;
});

decodeBtn.addEventListener("click", function(){
    const result = decryption(currentCipher, message.value, key.value);
    resultMessage.innerText = result;

});






