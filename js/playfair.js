//play fair cipher

// this function remove all the free spaces in the message.

function strip(message) {

    var splitString = "";
  
    for (var item in message) {
  
      var letter = message.charAt(item);
  
      // ignore whitespace and append to string
      if (letter.search(/\s|\W|\d/igm) == -1) {
        splitString += letter;
      }
    }
    return splitString;
  }

// this function generate the 5 by 5 table needed for encryption.
function fillMatrix(userInput) {
    var matrix = new Array(25);
    var matrixIndex = 0;
    var keyIndex = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    // strip whitespace
    userInput = strip(userInput);
    userInput = userInput.toLowerCase();

    // Fill in the keyword
    while ( keyIndex < userInput.length ) {
        var letter = userInput.charAt(keyIndex);
        if ( matrix.indexOf(letter) == -1 ) {
        matrix[matrixIndex] = letter;
        matrixIndex++;
        }
        keyIndex++;
    }
    // Insert unique letters from the alphabet
    for (var item in alphabet) {
        var literal = alphabet.charAt(item);

        //check both uppercase and lowercase letters
        var letterNotInMatrix = (matrix.indexOf(literal) +
        matrix.indexOf(literal.toUpperCase()) == -2);

        // if the letter is not in the matrix (-1 + -1)
        if ( letterNotInMatrix   ) {
        // Skip i or j if already in matrix
        if ( (literal == "i" || literal == "I") && (matrix.indexOf("j") == -1 &&
                matrix.indexOf("J") == -1 ) ) {
                matrix[matrixIndex] = literal;
                matrixIndex++;
                }
        // replace j with i
        else if ( literal == "j" || literal == "J" &&
            (matrix.indexOf("i") == -1 && matrix.indexOf("I") == -1 ) ) {}
        else {
            matrix[matrixIndex] = literal;
            matrixIndex++;
        }
        }
    }

    var result = [];
    for(let i=0; i< 5; i++){
        var t = []
        for(let j=i*5; j< 5+i*5; j++){
            t.push(matrix[j]);
        }
        result.push(t);
    }
    return result;
}

// This function change the message to digrams which a pair of two letters.
// If similar letter appear side to side, add x at the middle.
// if a single letter left at the end, add x to make it a digram.
function getDigrams(message) {

    var count = 0;
    var input = message.toLowerCase();
    var tempDigram = "";
    var textLength = input.length;
    var digramLength;
    var letter;
    var array = [];

    while (count < input.length) {

        digramLength = tempDigram.length;
        letter = input.charAt(count);

        if ( digramLength == 0 ) {
        tempDigram += letter;
        }
        else if ( digramLength == 1 ) {
        var str = tempDigram.charAt(0);
        if (  str == letter ) {
            tempDigram += "x";
            count--; 
        // stay at the current char
        }
        else {
            tempDigram += letter;
            array.push(tempDigram);
            tempDigram = "";
        }
        }
        else {
        array.push(tempDigram);
        tempDigram = "";
        tempDigram += letter;
        }

    // check odd ending
    if ( textLength % 2 != 0 && count == input.length - 1
        && tempDigram.length % 2 != 0 ) {
    tempDigram += "x";
    array.push(tempDigram);
    }
    // check odd letters
    else if (count == input.length - 1 && tempDigram.length != 0) {
        tempDigram = letter + "x";
        array.push(tempDigram);
    }
    count++;
    }
    return array;
}

// this function help us to find the x and y position of a given value in the table.
function getIndexOfK(table, k) {
    for (var i = 0; i < table.length; i++) {
        var index = table[i].indexOf(k);
        if (index > -1) {
        return [i, index];
        }
    }
}

// This function encrypts a given message using playfair cipher and return the encrypted message.
function playFiarEncrytion(message, key){
    const arr = fillMatrix(key);
    message = message.split(" ").join("");
    const digrams = getDigrams(message);
    var encryptedMessage = [];
    for (var i = 0; i < digrams.length; i++) {
  
        let letter1 = digrams[i][0];
        let letter2 = digrams[i][1];
        let diResult = ''
    
        // replace j with i
        if (letter1 == "j") {
          letter1 = "i"
        }
        else if (letter2 == "j") {
          letter2 = "i";
        }
    
        let letter1pos = getIndexOfK(arr, letter1);
        let letter2pos = getIndexOfK(arr, letter2);
    
        if (!letter1.match(/[a-z]/i) || !letter2.match(/[a-z]/i)){
            encryptedMessage.push(digrams[i]);
         }

        else{
        // check if they are in the same row.

        if(letter1pos[0] == letter2pos[0]){
            letter1pos[1] = (letter1pos[1]+1)%5;
            letter2pos[1] = (letter2pos[1]+1)%5;
        }
        // check if they are in the same column.
        else if(letter1pos[1] == letter2pos[1]){
            letter1pos[0] = (letter1pos[0]+1)%5;
            letter2pos[0] = (letter2pos[0]+1)%5;
        }
        // else, form a rectangle and take the horizontal opposite.
        else{
            let temp = letter2pos[1];
            letter2pos[1] = letter1pos[1];
            letter1pos[1] = temp;
        }
        diResult += arr[letter1pos[0]][letter1pos[1]];
        diResult += arr[letter2pos[0]][letter2pos[1]];
    
        encryptedMessage.push(diResult);
    }

        }
        let v = '';
        for(let i=0; i<encryptedMessage.length; i++){
            v+= encryptedMessage[i];
        }
        return v;
        return encryptedMessage;
    }
// This function decrypts a given cipher using playfair cipher and return the message.
function playFiarDecrytion(cipherText, key){
    const arr = fillMatrix(strip(key));
    cipherText = cipherText.split(" ").join("");

    const digrams = getDigrams(cipherText);

    var message = [];
    for (var i = 0; i < digrams.length; i++) {
        
        let letter1 = digrams[i][0];
        let letter2 = digrams[i][1];
        let diResult = ''
    
        let letter1pos = getIndexOfK(arr, letter1);
        let letter2pos = getIndexOfK(arr, letter2);
    
        if (!letter1.match(/[a-z]/i) || !letter2.match(/[a-z]/i)){
            message.push(digrams[i]);
         }

        else{
        
        // check if they are in the same row.

        if(letter1pos[0] == letter2pos[0]){
            letter1pos[1] = (letter1pos[1]-1)%5;
            letter2pos[1] = (letter2pos[1]-1)%5;
            if (letter1pos[1] < 0){
                letter1pos[1] = 5 + letter1pos[1]
            }
            if (letter2pos[1] < 0){
                letter2pos[1] = 5 + letter2pos[1];
            }

        }
        // check if they are in the same column.
        else if(letter1pos[1] == letter2pos[1]){
            letter1pos[0] = (letter1pos[0]-1)%5;
            if (letter1pos[0] < 0){
                letter1pos[0] = 5 + letter1pos[0];
            }
            letter2pos[0] = (letter2pos[0]-1)%5;
            if (letter2pos[0] < 0){
                letter2pos[0] = 5 + letter2pos[0];
            }
        }
        // else, form a rectangle and take the horizontal opposite.
        else{
            let temp = letter2pos[1];
            letter2pos[1] = letter1pos[1];
            letter1pos[1] = temp;
        }
        diResult += arr[letter1pos[0]][letter1pos[1]];
        diResult += arr[letter2pos[0]][letter2pos[1]];
        message.push(diResult);
    }

        }
    let v = '';
    for(let i=0; i<message.length; i++){
        v+= message[i];
    }
    return v;
}

export {playFiarEncrytion, playFiarDecrytion};
