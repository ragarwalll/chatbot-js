
var userInput = [
    ["hey","hi","hello"],
    ["what is your name","whats your name","what's your name","your name"],
];

const botReply = [
    ["Hey","Hi","Hello"],
    ["ChatBot"]
];
const universlReply = ["Ohh!","XD"];


// Output after user enters
var output = (input) => {
    try{
        var botAns = eval(input);
    }
    catch(e){
        var botInsert= "";
        var botAns = (input.toLowerCase()).replace(/[^\w\s\d]/gi,"");
        botAns = botAns.replace(/ a /g," ");
        try{
            botAns = replaceses(botAns);
        }
        catch(e){
            botAns = botAns;
        }
        //Interaction
        if(getReply(userInput, botReply, botAns)){
            var botAns = getReply(userInput, botReply, botAns);
        }
        else{
            var botAns = universlReply[Math.floor(Math.random()*universlReply.length)];
        }

    }

    botInsert += "<div class=\"message_left1\"><span>" + botAns + "</span></div><div class=\"message_left2\"></div><hr>"; //displaying bot answer


    document.querySelector('#chat-area').insertAdjacentHTML('beforeend', botInsert);  //display
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    document.querySelector('#input').value = ""; //setting value to user input to null
}

//getting user output
document.querySelector("#input").addEventListener("keypress", (e)=>{
    var enter = e.which || e.keyCode;
    if(enter == 13){    //If enter pressed
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        var userShow = "";
        var input = document.querySelector('#input').value; //gets the user input
        userShow += "<div class=\"message_right1\"></div><div class=\"message_right2\"><span>" + input + "</span></div><hr>"; //displaying user input
        document.querySelector('#chat-area').insertAdjacentHTML('beforeend', userShow);  //display
        output(input);
    }
    
    
})

//Main Function to get the bot answer

function getReply(userArray, botArray, userInputvalue){
    var reply;
    for(var x=0; x<userArray.length; x++){
        userArrayLength = userArray[x];
        for(var y=0; y<userArrayLength.length; y++){
            if(userInputvalue == userInput[x][y]){
                replyArray = botArray[x];
                reply = replyArray[Math.floor(Math.random()*replyArray.length)];
                
            }
        }
    }
    return reply;
}
