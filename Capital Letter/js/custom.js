var ca = "abdo mahmoud gamal taha";
    

function captlize1(word){
    var oldArray = word.split(" "),
        created = "";
    for(var i = 0;i<oldArray.length;i++){
        created+= oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1)+ " "
    }
   return created.trim()
}

// ===> another mathod


// function captlize2(word){
//     var oldArray = word.split(" "),
//         newArray = [];
//     for(var i = 0;i<oldArray.length;i++){
//         newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1))
//     }
//     return newArray.join(" ")
// }


//console.log(captlize1(ca))
console.log(captlize1(ca))