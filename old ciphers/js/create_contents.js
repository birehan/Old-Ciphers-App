const titleContainer = document.getElementById('title');
const sidebarContainer = document.getElementById('history-continer');
const keyContainer = document.getElementById('key-container');

const models = [
    {
        name: 'Julius Caesar',
        imageSrc: "./images/ceaser.jpg",
        birthDate: "born around July 13, 100 B.C",
        infoLink: "https://www.history.com/topics/ancient-history/julius-caesar",
        description1: "The Caesar Cipher technique is simply a type of substitution cipher, i.e., each letter of a given text is replaced by a letter some fixed number of positions down the alphabet. For example with a shift of 1, A would be replaced by B, B would become C, and so on.",
        description2: "Thus to cipher a given text we need an integer value, known as shift which indicates the number of position each letter of the text has been moved down. The encryption can be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,…, Z = 25. ",
        text: "ABCDE",
        key: "3",
        cipher: "DEFGH",
        cipherLink: "https://en.wikipedia.org/wiki/Caesar_cipher"
    },
    {
        name: 'Charles Wheatstone',
        imageSrc: "./images/playfair.jpg",
        birthDate: "born Feb. 6, 1802G.C",
        infoLink: "https://www.thoughtco.com/sir-charles-wheatstone-1992662",
        description1: "The Playfair cipher or Playfair square or Wheatstone–Playfair cipher is a manual symmetric encryption technique and was the first literal digram substitution cipher. The scheme was invented in 1854 by Charles Wheatstone.",
        description2: "The technique encrypts pairs of letters (bigrams or digrams), instead of single letters as in the simple substitution cipher and rather more complex Vigenère cipher systems then in use. The Playfair is thus significantly harder to break.",
        text: "hello world",
        key: "playfair",
        cipher: "kcnvmpymqmcy",
        cipherLink: "https://en.wikipedia.org/wiki/Playfair_cipher"
    },
    {
        name: 'Blaise de Vigenère',
        imageSrc: "./images/vigenere.png",
        birthDate: "born April 6, 1523 G.C",
        infoLink: "https://historyofinformation.com/detail.php?id=1678",
        description1: "Vigenere Cipher is a method of encrypting alphabetic text. It uses a simple form of polyalphabetic substitution. A polyalphabetic cipher is any cipher based on substitution, using multiple substitution alphabets. The encryption of the original text is done using the Vigenère square or Vigenère table.",
        description2: "The table consists of the alphabets written out 26 times in different rows, each alphabet shifted cyclically to the left compared to the previous alphabet, corresponding to the 26 possible Caesar Ciphers At different points in the encryption process, the cipher uses a different alphabet from one of the rows. The alphabet used at each point depends on a repeating keyword.",
        text: "attack at dawn",
        key: "LEMON",
        cipher: "lxfopvefrnhr",
        cipherLink: "https://brilliant.org/wiki/vigenere-cipher/"
    }
];

function createSideBar(index){
    return `
    <div class="thumbnail">
    <h3>${models[index].name}</h3>
    <img src='${models[index].imageSrc}' alt="Paris" width="400" height="300">
    <p style="margin-top:10px;">${models[index].birthDate}</p>
      <a target="_blank" href='${models[index].infoLink}'>
          <button 
          style="margin-bottom:10px;" class="btn btn-primary">More info</button>
      </a>
    </div>      
    <div style="text-align:left;" class="well">
    <p style="font-size:1.2em;">${models[index].description1}</p>
    </div>
    <div style="text-align:left;" class="well">
    <p style="font-size:1.2em;">
    '${models[index].description2}'
    </p>
    </div>
    <div style="text-align:left;" class="well">
    
      <p style="font-size:1.2em;">
          <strong>Text : </strong>'${models[index].text}'<br>
          <strong>Shift : </strong>'${models[index].key}'<br>
          <strong>Cipher : </strong>'${models[index].cipher}'<br>
          <p></p>
          <a  target="_blank" href= ${models[index].cipherLink}>
          <button 
          style="font-size:1.3em;" class="btn btn-info">How to?</button>
      </a>
      </p>
    </div> `;

};

const titles = ['Ceaser Cipher', 'Playfair Cipher', 'Vigenere Cipher'];

function createTitle(index){
    return titles[index];
}

const Keys = [
    {
        type: "number",
        palceholder: "0",
    },
    {
        type: "text",
        palceholder: "PLAYFAIR",
    },
     {
        type: "text",
        palceholder: "VIGENERE",
    }
]

function createKey(index){
    return  `
    <label for="usr">Key: </label> 
    <input style = 'max-width: 250px;' placeholder='${Keys[index].palceholder}' type='${Keys[index].type}'  class="form-control" id="key">`;
}

function createContents(index){
    titleContainer.innerText = createTitle(index);
    keyContainer.innerHTML = createKey(index);
    sidebarContainer.innerHTML = createSideBar(index);
}


export {createContents};