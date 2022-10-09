function count(arr){
    let count = {};
    for(let element of arr){
        if(count[element]){
            count[element]+=1;
        } else{
            count[element] = 1
        }
    }
    console.log(count)
}

count(["a","a","a","b","b","c","c","c","c"])