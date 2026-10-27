 const myinput = document.getElementById("input")
      let string="";  
      myinput.readOnly = true;
      let buttons = document.querySelectorAll('.btn');
      let isCalculated = false;
     Array.from(buttons).forEach((btn)=> {
     const decibtn = document.getElementById("lastbtn");
     decibtn.addEventListener('click',() => {
        let parts = string.split(/[\+\-\*\/]/);
        let currentNumber = parts[parts.length - 1];
    
        if(!currentNumber.includes('.')) {
            string = string + ".";
            document.querySelector('input').value = string;
        }
        if(shouldReset && !isNaN(value)) {
            string = "";
        }
    })
    btn.addEventListener('click', (e)=> {
    if(e.target.innerHTML == '='){
        try{
             string = eval(string);
     document.querySelector('input').value = string;
     isCalculated = true;
    }
     catch (error){
     document.querySelector('input').value = "ERROR"; string = "ERROR";
    } 
        string = eval(string);
        document.querySelector('input').value = string;
    } 
    else if(e.target.innerHTML == 'C'){
        string = "";
        document.querySelector('input').value = string;
        isCalculated = false;
    }
    else{ 
        console.log(e.target)
        if(string === "ERROR"){
            string = "";
        }
        if(isCalculated) {
            const value = e.target.innerHTML;
            if(!['+', '-', '*', '/'].includes(value)) {
                string = "";
            }
            isCalculated = false;
        }
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    })
})