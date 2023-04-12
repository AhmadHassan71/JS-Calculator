let string = "";
let buttons = document.querySelectorAll(".button");

  
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", (e) => {
    if(e.target.innerHTML=='='){
        try{
            string=eval(string);
        }
        catch (error) {
            // Display error message to the user
            string ="";
            document.querySelector("input").value = string;
            alert("Syntax Error: " + error.message);
          }
        
        if(string=="Infinity" || string=="NaN"){
            //alert("Invalid Input leads to Infinity or NaN");
            string = "MATH ERROR";
        }
        document.querySelector("input").value = string;
    }
    else if(e.target.innerHTML=='C'){
       
        string="";
        document.querySelector("input").value = string;
    }
    else if(e.target.innerHTML=='^'){
        string = string+"**";
        document.querySelector("input").value = string;
    }
    else{
    console.log(e.target)
    string = string+e.target.innerHTML;
    document.querySelector("input").value = string;}
  })
})

