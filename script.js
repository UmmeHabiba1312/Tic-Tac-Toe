let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



// let setColor = document.querySelector(".set-color"); 


// playerO , PlayerX
let Oturn = true;
let count = 0;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

let resetGame = ()=>{
    Oturn=true;
    count=0;
    boxEnable();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener( "click", ()=>{
        // console.log("box clicked!");
        if(Oturn){
            box.innerText = "O";
            Oturn = false;
            box.classList.remove("color");
        }else{
            box.innerText = "X";
            Oturn = true;
            box.classList.add("color");
        }
        box.disabled = true;
        count++;
        
        let iswinner =checkWinner();

        if(count === 9 && !iswinner){
            gameDraw();
        }

    });
});

let boxDisable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}


let boxEnable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

let showWinner = (Winner)=>{
    msg.innerText = `Congratulation [${Winner}]🥳🎁, you are the winner!`;
    msgContainer.classList.remove("hide");
    boxDisable();
}

let gameDraw = ()=>{
    msg.innerText = `Game Draw!`;
    msgContainer.classList.remove("hide");
    boxDisable();
}

let checkWinner = () => {
    for(let pattern of winPatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

    if(position1 != "" && position2 != "" && position3 != ""){
        if(position1 === position2 && position2 === position3){
            // console.log("Winner!", position1);
            showWinner(position1);
            return true
        }
    }

}
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);