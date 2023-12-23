let y= 8;
y+=++y + y-- + --y ;
console.log(y)

let a = 7;
a+=a++ + ++a + --a +a--;
console.log(a)

let d = 10;
d = (++d *(d++ +5));
console.log(d)

let e = 63;
let f = 36;
let g = (e<f) ? true : false;
let h = (e>f) ?  e:f;
console.log(g)
console.log(h)

function main(){
    let p = 36;
    let q = 45;
    let r = 53;
    let pv;
    pv = (p+q+r)/3;
    console.log("average="+pv);
}main();

// i. < = called as less than operator;
// 2. ++ = called as increment operator;
// 3.  && called as logical operator;
// 4. called as ternary operator.