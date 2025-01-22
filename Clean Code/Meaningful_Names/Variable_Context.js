

// function printGuessStatistics(count, candidate){
//     let number;
//     let verb;
//     let pluralModifire;
//     if(count===0){
//         number = "no";
//         verb = "are";
//         pluralModifire = "s"
//     } else if(count===1){
//         number = "1";
//         verb = "is";
//         pluralModifire = ""
//     } else{
//         number = parseInt(count);
//         verb = "are";
//         pluralModifire = "s";
//     }
//     console.log("There", verb, number, candidate+pluralModifire+".");
// }

// printGuessStatistics(0, "test");





function guessStatistics(count, type){
    let pluralModifire;
    let verb;
    let number;

    const thereAreNoLetters = () =>{
        number = "no";
        verb="are";
        pluralModifire="s"
    }

    const thereIsOneLetter = () =>{
        number = "1";
        verb = "is";
        pluralModifire = "";
    }

    const thereAreManyLetters = () =>{
        number = count;
        verb = "are";
        pluralModifire = "s";
    }

    const createPluralDependentMessageParts = (count) =>{
        if(count==0){
            thereAreNoLetters()
        } else if(count==1){
            thereIsOneLetter()
        } else{
            thereAreManyLetters()
        }
    }

    (function(){
        createPluralDependentMessageParts(count);
        console.log("There", verb, number, type+pluralModifire+".");
    })();
}

guessStatistics('0', "test");