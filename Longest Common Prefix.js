var longestCommonPrefix = function(strs) {
    let sorted = strs.sort();
    console.log(sorted)
    let first = sorted[0];
    let last = sorted[sorted.length - 1]
   let prefix = [];
    for(let i=0;i<first.length;i++){
        if(first[i] == last[i]){
            prefix.push(first[i]);
        }else{
            break;
        }
    }
    return prefix;
}

let strs = ["flight","flower","flow"];
console.log(longestCommonPrefix(strs).join(''))

//output : fl
