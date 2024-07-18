const setOfWords = [
    "JavaScript was created by Brendan Eich in 1995",
    "It was originally intended as a simpler scripting language for websites",
    "Complementing the use of java for more complex web applications",
    "JavaScript is not just limited to web browsers",
    "Through Node.js a project that provides a standalone runtime for google chrome javaScript engine",
    "Is becoming more and more popular."
];

const msg =document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn=document.getElementById('btn');
let startTime , endTime;

const playGame = ()=>{
let randomNumber = Math.floor(Math.random()*setOfWords.length);
msg.innerText = setOfWords[randomNumber];
let date = new Date();
startTime=date.getTime();
btn.innerText ="Done";
}
const wordCounter = (str) => {
    let response = str.split(" ").length; 
    if (str.length==0){
        response =0;
    }
    console.log(str)
    console.log(str.split(" "))
    console.log(response);
    return response;
}

const compareWords = (str1,str2) =>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt= 0;
    words1.forEach(function (item, index){
        if(item == words2[index]) {
            cnt++;
        }
    })
   
    let errorWords = (words1.length-cnt);
    console.log("CORRECT CNT: "+cnt);
console.log("INCORRECT CNT: "+errorWords);

return(cnt +" correct out of " +words1.length + " words annd the total numbwr of error are " + errorWords +" .");

}

const endPlay = () =>{
    let date = new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    let totalStr = typeWords.value;
    console.log(totalTime);
    let wordCount = wordCounter(totalStr);
    let speed = Math.floor((wordCount/totalTime)*60);
    let finalMsg="You have typed at speed of "+speed+" words per minutes";
    finalMsg+=compareWords(msg.innerText,totalStr);
    document.getElementById("mywords").value = " ";
    msg.innerText=finalMsg;

//    finalMsg +=compareWords(msg.innerText,totalStr);
 
   
    console.log(finalMsg);
    msg.innerText = finalMsg;
    console.log(speed);
}

btn.addEventListener('click', function(){
    if(this .innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText =="Done"){
        typeWords.disabled = true;
        btn.innerText="Start";
        endPlay();
    }
})


/*

           Dynamic typing test
 1: when user pressed start button then only active the textarea else
disabled it and vice-versa.

2: Every time a new set of lines on top. Whenever a start button is
pressed. Not the Done one.

 3: get the time and change the button text to Done.

 4: get the end time when user clicked on Done button. find the total
timetaken.

 5: find the total words on the setofwords.

 6: Find the speed of the user and show it on top when user clicked on
Done.

 7: then call the comparewords fun and find how many of the words are
matching and how many not. Display the result on top with speed.

*/
