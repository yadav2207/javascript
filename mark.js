let CS = "Computer Science"

function mark(){
    let c=60
    console.log("Enter marks in computer science:")
    if (c>=90)
    console.log("Grade=A",c);

    else if (c>=70 && c<90)
    console.log("Grade=B" ,c);

    else if(c>=50 && c<70)
    console.log("Grade=c" ,c);

    else
    console.log("Grade=D" ,c)
}
mark()