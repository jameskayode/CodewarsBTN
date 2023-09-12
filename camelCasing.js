// complete the function
function solution(string) {
    let result = '';
  
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    
   
    if (char === char.toUpperCase()) {
     
      result =result + ' ';
    }
    
   
    result = result + char;
  }
  
  
  return result;
}
