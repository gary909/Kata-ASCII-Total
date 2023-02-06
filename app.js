function uniTotal (string) {
    str = string.split(""); //split into arr
    let newArr = [];
        for(let i = 0; i < str.length; i++){
            newArr[i] = str[i].charCodeAt(0);
        }
    return newArr.reduce((partialSum, a) => partialSum + a, 0); //sum array
}

console.log(uniTotal("")); // 0
console.log(uniTotal("a")); // 97
console.log(uniTotal("b")); // 98
console.log(uniTotal("c")); // 99
console.log(uniTotal("d")); // 100
console.log(uniTotal("e")); // 101
console.log(uniTotal("aaa")); // 291
console.log(uniTotal("Mary Had A Little Lamb")); // 1873