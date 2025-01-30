let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;//playerX,playerY
//2d arrays
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){ //player0
            box.innerText="0";
            turn0=false;
        }else{ //playerx
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
    const showWinner=(Winner)=>{
        msg.innerText=`congratulation,Winner is ${Winner} `;
        msgcontainer.classList.remove("hide");
        disableBoxes();
    };
const checkWinner=()=>{
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);//pattern indexes
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );//pattern indexes
       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;
       if(pos1Val !=""&&pos2Val !=""&&pos3Val !=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
            // console.log("Winner",pos1Val);
            showWinner(pos1Val);
        }
       }
    }
};
newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
