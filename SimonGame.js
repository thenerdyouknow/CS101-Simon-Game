$(document).ready(function(){
  var temp=[];
  var strict="false";
  var mymoves=[];
  var o=-1;
  var j=0;
  var w=0;
  var moves=[];
  var count=1;
  var arr=["topbtn","botbtn","topbtnlft","botbtnlft"];
 //Declaration of variables and arrays
 
  
  
  function restoretopbtn(){
    $("#topbtn").css("background-color","#C20114");
  } //Restores color of the button after click.
  function clicktopbtn(){
    $("#topbtn").css("background-color","#CE4849"); //Changes color of the button
    var sound= document.getElementById("topbtnsound"); 
    sound.play(); //Play sound on click
    setTimeout(restoretopbtn,1000);
  } 
  function restorebotbtn(){
    $("#botbtn").css("background-color","#0582CA");
  } // Restores color of the button after click.
  function clickbotbtn(){
    $("#botbtn").css("background-color","#00A6FB");//Changes color of the button
    var sound= document.getElementById("botbtnsound"); 
    sound.play();//Changes color of the button
    setTimeout(restorebotbtn,1000);

  }
  function restoretopbtnlft(){
    $("#topbtnlft").css("background-color","#FFD717");
  } // Restores color of the button after click.
  function clicktopbtnlft(){
    $("#topbtnlft").css("background-color","#FFE773"); //Changes color of the button
    var sound= document.getElementById("topbtnlftsound"); 
    sound.play(); //Changes color of the button
    setTimeout(restoretopbtnlft,1000);

  }
  function restorebotbtnlft(){
    $("#botbtnlft").css("background-color","#89DF49");
  } //Restores color of the button after click.
  function clickbotbtnlft(){
    $("#botbtnlft").css("background-color","#96F550"); //Changes color of the button
    var sound= document.getElementById("botbtnlftsound"); 
    sound.play(); //Changes color of the button
    setTimeout(restorebotbtnlft,1000);

  }
  
   
  function startpattern(value){
   if(value=="topbtn"){
     clicktopbtn();
   }else if(value=="botbtn"){
     clickbotbtn();
   }else if(value=="topbtnlft"){
     clicktopbtnlft();
   }else if(value=="botbtnlft"){
     clickbotbtnlft();
   }
 }//Checks which button needs to be clicked in the specific part of the game and clicks it.

  
function generatepat(){
    for(var i=0;i<=20;i++){
var value = arr[Math.floor(Math.random() * arr.length)];
      moves.push(value);
    }
} // Generates the pattern and pushes it into the array moves to be clicked later.

  function reset(){
    count=1;
    $(".well").html(count);
    moves=[];
    temp=[];
    mymoves=[];
    generatepat();
 } //Will restart the game after the user is done and empty out all the variables to be reused
  
function setpattern()
{
   if(count==21){
   alert("You've Won! Good Job!");
   reset(); //Checks if the user is at the 21st step which is when they win and if they are then display congratulatory message and resets the game
  }
for(var i=0;i<count;i++){
  temp.push(moves[i]); //Pushes the current move into a temporary array
 var id = setTimeout(startpattern.bind(null, moves[i]), 1500*i); //Starts moves one by one.
  }
}
 $("#strict").click(function(){
   if(strict=="false"){
      strict = "true";
      $("#strict").css("background-color","green");//Checks if strict mode is on or not and assigns value to variable strict accordingly.
   }else{
      strict = "false";
      $("#strict").css("background-color","red");
   }
});

  
function compare(){
    var correctcount=0;
    if(mymoves.length==temp.length){//Checks the mymoves array is the same length as the temporary array to check if user has made adequate amount of moves.
      for(var i=0;i<temp.length;i++){
        if(moves[i]==mymoves[i]){//If mymoves has the same length then the program starts checking each move one by one and incrementing variable correct count for each correct move.
          correctcount++;
        }
      }
      if(correctcount==temp.length){//If the variable correct count has the same count as the length of the temporary array then the count increases by one and the whole process starts all over again.
         count++;
        $(".well").html(count);
         temp=[];
         mymoves=[];
         setTimeout(setpattern,1500);
      }else{
        alert("Wrong!");//If the user is wrong then it repeats the entire process all over again in an attempt to let the user get it right this time.
        temp=[];
        mymoves=[];
        if(strict=="false"){
        console.log(strict); 
        setTimeout(setpattern,1500);
        }else if(strict=="true"){
          count = Math.floor(Math.random() * 20);//If strict is activated then it jumps to a random number of steps.
        $(".well").html(count); 
        setTimeout(setpattern,1500);
        }
      }
    }
  }
    $("#topbtn").click(function(){
    startpattern("topbtn");
    mymoves.push("topbtn");
    compare();
  }); //Registers the click of the button and saves the move to the array mymoves to be compared later.
  $("#botbtn").click(function(){
    startpattern("botbtn");
    mymoves.push("botbtn");
    compare();
  });  //Registers the click of the button and saves the move to the array mymoves to be compared later.
  $("#topbtnlft").click(function(){
    startpattern("topbtnlft");
    mymoves.push("topbtnlft");
    compare();
  });  //Registers the click of the button and saves the move to the array mymoves to be compared later.
  $("#botbtnlft").click(function(){
    startpattern("botbtnlft");
    mymoves.push("botbtnlft");
    compare();
  });  //Registers the click of the button and saves the move to the array mymoves to be compared later.
 $("#start").click(function(){
  $(".well").html(count);
  generatepat(); //Generates pattern for the user
   mymoves=[]; 
  setpattern(); //Starts clicking the pattern
 });  
  $("#reset").click(function(){//Clicking the button resets the game
    reset();
  });
});
