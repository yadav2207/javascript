let ar = [3,2,6,4,8];

document.write("Before reversing...<br>")

for (let i=0; i<ar.length; i++){
    document.write(ar[i]+"")
}
let first =0;
let last = ar.length-1;
while(first < last){
    let temp = ar[first];
    ar[first] = ar[last];
    ar[last] = temp;
    
    first++;
    last--;
}
document.write("<br> After reversing...<br>")
for(let i=0;i<ar.length; i++){
    document.write(ar[i]+"");
}



// const numbers = [5, 2, 9, 1, 8, 10];

// // Sort the array in ascending order
// numbers.sort((a, b) => a - b);

// console.log(numbers); // Output: [1, 2, 5, 8, 9, 10]

// // Sort the array in descending order
// // numbers.sort((a, b) => b - a);

// // console.log(numbers); // Output: [10, 9, 8, 5, 2, 1]