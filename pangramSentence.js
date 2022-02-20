function isPangram(str) {
      const lettersOfAlpha = 'abcdefghijklmnopqrstuvwxyz'
      let cleansedStr = ''
    
      for (let i = 0; i < str.length; i++) {
        if (lettersOfAlpha.includes(str[i].toLowerCase())) {
          cleansedStr += str[i] 
        }
      }
      
      cleansedStr = cleansedStr.toLowerCase()
      
      const letters = {} 
    
      for (let i = 0; i < cleansedStr.length; i++) {
        
        if (!letters.hasOwnProperty(cleansedStr[i])) {
          letters[ cleansedStr[i] ] = 1 
          console.log(letters)
        }
      }
      const keysArr = Object.keys(letters)
    
      if (keysArr.length === 26) {
        console.log(true) 
        return true
      } else {
        console.log(false) 
        return false
      } 
    }
    
    isPangram("The quick brown fox jumps over the lazy dog!");
    // -> True
    
    // isPangram("I like cats, but not mice");
    // // -> False
    
    
    // isPangram("It is Friday") // => false
    
    // isPangram('abcdefghijklmnopqrstuvwxyz') // => true