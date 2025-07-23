let button = document.querySelector("#button");

let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".newgame");

const winpatten = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];

const showwinner = (winner) =>{
    msg.innerText = `congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    btndiable();
}


const btndiable = () =>
{
    for(box of boxs)
    {
        box.disabled = true;
    }
}

const btnanable = () =>{
     for(box of boxs)
    {
        box.innerText = "";
        box.disabled = false
    }
};

let boxs = document.querySelectorAll(".box");
let turn0 = true;
boxs.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("button was clicked");
    if(turn0){
    box.innerText = "x";
    turn0 = false;
    }else{
       box.innerText = "o";
    turn0 = true ; 
    }
    box.disabled = true;
    checkwinner();
})
});

const checkwinner = () => {
 for(patten of winpatten)
 {
   let pos1val = boxs[patten[0]].innerText;
   let pos2val = boxs[patten[1]].innerText;
   let pos3val = boxs[patten[2]].innerText;
   
   if(pos1val != "" && pos2val != "" && pos3val != "")
   {
     if(pos1val === pos2val && pos2val === pos3val)
     {
        showwinner(pos1val);
     }
   }
 }
};

const resetbtn = () => {
    turn0 = true;
    btnanable();
    msgcontainer.classList.add("hide");
};

button.addEventListener("click" ,resetbtn);
newgame.addEventListener("click",resetbtn);

