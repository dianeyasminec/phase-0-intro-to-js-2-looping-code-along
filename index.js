// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 
function writeCards(stringnames, eventname){
    var msgarray=[];
    for (var i=0 ; i<stringnames.length; i++){
        msgarray.push(`Thank you, ${stringnames[i]}, for the wonderful ${eventname} gift!`)
    }
    return msgarray
}
function countDown(number){
    if(number>0){
        while(number>=0){
            console.log(number);
            number=number-1;
        }
    }
}
    
