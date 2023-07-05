const check = document.getElementById("check"); 
const GNMV = document.querySelector(".GNMV");
const res = document.querySelector(".res"); 
const inp = document.getElementById("inp");
const Score = document.getElementById("score");
const RESULT = document.querySelector(".result");
let NUM = document.querySelector(".num");
let pause = document.querySelector("#pause");
let pauseCon = document.querySelector(".paused");
let game = document.querySelector(".game");
let score = 20;
let highscore = 0;

const secretNumber = Math.floor((Math.random() * 20) + 1);
const INP = Number(inp.value);
console.log(INP);

function CHECK() {
      if(!inp.value){
         res.innerHTML = "No Number"
         console.log(inp.value);
      }else if(inp.value == secretNumber){
         res.innerHTML = "Correct Number"
         GNMV.innerHTML = secretNumber;

         const SCORE = () => {
            let sco = Score.innerHTML >= 20; 
            if(sco){
               Score.innerHTML = 20;
            }else if(Score.innerHTML < 20){
               score++;
               Score.innerHTML = score;
            }
         }
         SCORE();
        
         document.body.style.backgroundColor = "lightgreen";
   
         NUM.style.animationPlayState = "paused";

         if(score > highscore){
            highscore = score;
            document.getElementById("highscore").innerHTML = highscore;
         }
      }else if(inp.value > secretNumber){
         res.innerHTML = "Too High"
         score--;
         Score.innerHTML = score;
         console.log(inp.value);
      }else if(inp.value < secretNumber){
         res.innerHTML = "Too Low"
         score--;
         Score.innerHTML = score;
         console.log(inp.value);
      }

}  

function Again(){
       document.body.style.backgroundColor = "black";
       res.innerHTML = "Start Guessing..."
       Score.innerHTML = 0;
       GNMV.innerHTML = "?";
       inp.value = "";
}
 
 const Pause = () =>{
        if(NUM.style.animationPlayState == "running"){
                    pause.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>`

                    pauseCon.style.display = "flex";
                    NUM.style.animationPlayState = "paused";
                    game.style.opacity = 0.2;
                  

        }
        else if (NUM.style.animationPlayState = "paused"){

                                pause.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
                                        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                                </svg>`

                                pauseCon.style.display = "none";
                                NUM.style.animationPlayState = "running";
                                console.log("HI")
                                game.style.opacity = 1;
                        
        }
 }
 
pause.addEventListener("click",Pause)

document.querySelector(".again").addEventListener("click",Again);

check.addEventListener("click",CHECK)

