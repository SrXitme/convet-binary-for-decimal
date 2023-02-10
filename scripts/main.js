 function convert(){

 
  let number = document.querySelector('#number').value
    let output = document.querySelector('#output')
    let soma = 0 
    let count = 0
    let re = number.length -1
    
    while(number.length > count){ 
      
      if(number[re] == 1){
          soma += 2**count
        
      }
      re --
      count ++
   }  
      
   output.innerHTML = soma
       
    
 }   