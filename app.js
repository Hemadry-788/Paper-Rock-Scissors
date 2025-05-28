let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector(".msg");
let choices=document.querySelectorAll(".choice");
let userscorenum=document.querySelector(".userscore");
let compscorenum=document.querySelector(".compscore");
let finalmsg=document.querySelector(".finalmsg");
let button=document.querySelector("button");

let userscore=0;
let compscore=0;

const Newgame=()=>{
    msgcontainer.classList.add("hide");
    userscore=0;
    compscore=0;
    userscorenum.innerText="0"
    compscorenum.innerText="0";
}

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const draw=()=>{
  finalmsg.innerText="Game is draw🤝";
}

const showwinneru=()=>{
    msgcontainer.classList.remove("hide");
    msg.innerText="Congratulations! Adrita you have beaten Hemadry as always😍";
    confetti();
}



const showwinnerc=()=>{
    msgcontainer.classList.remove("hide");
    msg.innerText="Miracle! Hemadry won😘";
    confetti();
}



const showscore=(userchoice,compchoice,userwin)=>
{
if(userwin)
{
    userscore++;
    userscorenum.innerText=userscore;
    finalmsg.innerText=`Adrita's ${userchoice} crushes Hemadry's ${compchoice}`;
    if(userscore===5)
    {
        showwinneru();
    }
}
else{
    compscore++;
    compscorenum.innerText=compscore;
    finalmsg.innerText=`Hemadry's ${compchoice} beats Adrita's ${userchoice}`;
    if(compscore===5)
    {
        showwinnerc();
    }
}
}

const playgame = (userchoice) => {
    let compchoice = gencompchoice();

    if (userchoice === compchoice) {
        draw();
        return;
    }

    let userwin = true; 

    if (userchoice === "rock") {
        userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
        userwin = compchoice === "scissors" ? false : true;
    } else if (userchoice === "scissors") {
        userwin = compchoice === "rock" ? false : true;
    }

    showscore(userchoice, compchoice, userwin); 
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    let userchoice=choice.getAttribute("id");
    playgame(userchoice);
    }) 
});

button.addEventListener("click",Newgame);

