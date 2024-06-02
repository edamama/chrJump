//add button functionality

let secondsLeft = 1;

function setTime(){

    const timerInterval = setInterval(function (){

        secondsLeft--;

        if(secondsLeft === 0){

            clearInterval(timerInterval);
           
            chrStand();

            secondsLeft++;

        }

    },250)


}



function chrJump(){

    setTime();
  
    document.getElementById('picture').setAttribute("src", "images/frame2.png"); // I don't know how to do this the event listener way
   
}


   function chrStand(){

    document.getElementById('picture').src = "images/frame1.png";

}


