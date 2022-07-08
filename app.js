function rot13(str) {
    let charCode = 0
    let strArr = [] // here we take an empty array to store our strings passed as args buy using string split methods
  
    strArr = str.split("") //splits the string into 2 arrary => let string = "I code"  => ['I','code'] and finlly adds our output to this blank array
    for (let i = 0; i < strArr.length; i++){  //loops thru to iterate the array and stores our ASSCII as a variable here
      charCode = str.charCodeAt(i) // 
    if (charCode >= 65 && charCode <= 90){ // if else conditions to check if our ASSCII chars are higher or lower or =s to the given numbers. 
      if (charCode > 77){ // we execute our Algorithm Scripting here to check if the values adds or substracts from 77 or to 77  if true & greater than 77 it substracts 13 -   if true and less than 77 it adds 13 ?? 
        charCode = charCode - 13
      } else {
        charCode = charCode + 13
      }
  
      strArr.splice(i,1,String.fromCharCode(charCode))
      
    }
  
  
    }
    
  
    return strArr.join('');
  }
  
  rot13("SERR PBQR PNZC");
  
  
  //SHOW OUTPUS >>
  
  //EN to Cipher
  console.log(rot13("HELLO WORLD!"))
  console.log(rot13("I LOVE JavaScript!"))
  
  //Cipher to EN
  console.log(rot13("V YBIR PBQVAT!!"))
  
  
  
  
  
  /* Caesars Cipher
  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
  
  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
  
  Write a function which takes a ROT13 encoded string as input and returns a decoded string.
  
  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */