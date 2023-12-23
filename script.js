// function market (shareprice){
//     shareprice()
// }
// market (()=>console.log("Today adaniport share price is 500rs"))
function order(v,n){
    v();
    n();
}
order(()=>console.log("This is veg order"),()=>console.log("This is non-veg order"))

function train(p,c){
    p();
    c();
}
train(()=>console.log("Way to prayagraj"),()=>console.log("Way to Chhiunki"))

function Relation(R,A){
    R();
    A();
}
Relation(()=>console.log("Lets go for shopping"),()=>console.log("I don't like cooking"))

function food(F,V){
    F();
    V();
    }
    food(()=>console.log("i love to eat Frankie"),()=>console.log("i love to eat Vada pav with chatni"))