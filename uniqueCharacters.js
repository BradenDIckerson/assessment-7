function hasUniqueChars (str) {
      const charsHolder = [] 
    
      for (let i = 0; i < str.length; i++) {
        if (charsHolder.includes(str[i])) {
            console.log(false)
            return false     
        }
        else{
          charsHolder.push(str[i]) 
        }
      }
      console.log(true) 
      return true
    }
    


// hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

