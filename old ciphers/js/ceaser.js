// This function accepts the message and a key and encrypt it to cypher text using ceaser cipher.

function ceaserEncription(message, key){
    let encryptedMessage = '';
  
  //Iterate over each character in the 
  for(let i = 0; i < message.length; i++){
   // Check if the message is  letter in english alphabet.
    if (message[i].match(/[a-z]/i)){
      // if the character is capital, we deducte 65 from the ascii value of the character and add the key.
      if((message[i] == message[i].toUpperCase())){
        let code = message.charCodeAt(i)- 65 + key;
        code = (code % 26) + 65;
      encryptedMessage += String.fromCharCode(code);
      }
      else{
        // else if the character is small, we deducte 97 from the ascii value of the character and add the key.
        let code = message.charCodeAt(i)- 97 + key;
        code = (code % 26) + 97;
        encryptedMessage += String.fromCharCode(code);
    }
  }
  
  // if the character is not a letter in alphabet, then just leave it and add it to reuslt.
  else{
    encryptedMessage += message[i];
  }
   
  } 
  return encryptedMessage;
}

// This function decrypted the cipher text with the given key value.
function ceaserDecription(cipherText, key){
    let message = '';
  
  //Iterate over each character in the 
  for(let i = 0; i < cipherText.length; i++){
  
    // Check if the message is  letter in english alphabet.
    if (cipherText[i].match(/[a-z]/i)){
      // if the character is capital, we deducte 65 from the ascii value of the character and deduct the key.
      if(cipherText[i] == cipherText[i].toUpperCase()){
        let code = (cipherText.charCodeAt(i)- 65-key) % 26;   
        // In case if the code is negative add 26 to it and modulo 26 to the value.     
        code = (code + 26) % 26  + 65;
        message += String.fromCharCode(code);
      }
      // else if the character is small, we deducte 97 from the ascii value of the character and add the key.
      else{
        let code = (cipherText.charCodeAt(i)- 97 - key) % 26;
        // In case if the code is negative add 26 to it and modulo 26 to the value.     
        code = (code + 26)%26  + 97;
        message += String.fromCharCode(code);
      }
  }

  // if the character is not a letter in alphabet, then just leave it and add it to reuslt.
  else{
    message += cipherText[i];
  }

  }

  return message;
}

export {ceaserEncription, ceaserDecription};