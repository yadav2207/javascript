// document.write("using push array");

// fruits=["mango","guava","grapes","banana"]
// // fruits.push("apple","papaya","pineapple")

// fruits.pop();

// fruits.shift();

// fruits.unshift("blueberry","strawberry")

// let start=0;
// let end = 0;
// fruits.fill("kiwi",start,end);

// // document.write(fruits)
// console.log(fruits)

const ages = [22,23,38,50];
function checkAge(age){
    return age>18;
}

function myfunction(){
    document.getElementById("demo").innerHTML = ages.find(checkAge);
} 