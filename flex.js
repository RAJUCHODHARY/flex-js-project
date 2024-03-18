let color="black";
let as=document.querySelector(".board")

 
    for(let i=0;i<8;i++){
       for(let j=0;j<8;j++){
           const square=document.createElement("div")
           square.classList.add("square")
           if(color==="black"){
               square.classList.add("black")
               color="white";
           }else{
               square.classList.add("white")
               color="black";
           }
           as.append(square)
           
        }
        code();
   }
   
   function code(){
       const square=document.createElement("div")
       if(color==="white"){
           square.classList.add("white")
           color="black";
       }else{
           square.classList.add("black")
       color="white";
       }
       
   }