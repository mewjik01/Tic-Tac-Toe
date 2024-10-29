let btn = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let msgbox = document.querySelector(".msg-container")
let msgpara = document.querySelector("#msg")
let turn0= true; 
let win_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [6,7,8],
    [2,5,8],
];
btn.forEach((box)=>{
    box.addEventListener("click", ()=>{
       if(turn0===true){
        box.innerHTML= "O"
        turn0= false; 
       }
       else{
        box.innerHTML= "X"
        turn0= true; 
       }
       box.disabled= true; 
       checkwinner();
    })
});
const reset_game= ()=>{
    turn0 = true; 
    enableboxes();
    msgbox.classList.add("hide")
};
const show_winner= (winner)=>{
    msgpara.innerHTML= `Congrats!!, Winner is ${winner}`
    msgbox.classList.remove("hide")
    diableboxes();
}
const disableboxes= ()=>{
    for(let box of btn){
        box.disabled= true;
    }
}
const enableboxes= ()=>{
    for(let box of btn){
        box.disabled = true; 
        box.innerHTML=""
    }
}
const checkwinner= ()=>{
    for(let pattern of win_pattern){
        pos1=btn[pattern[0]].innerText
        pos2=btn[pattern[1]].innerText
        pos3=btn[pattern[2]].innerText
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
            show_winner(pos1);
        }
    }
}
   }
reset.addEventListener("click", reset_game)
