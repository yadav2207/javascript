class engineer{
    coursename = ''
    educationfees = ''
   duration = ''
  private salary =''
   result(){
    console.log(this.coursename,'',this.educationfees,'',this.duration,'',this.salary);
   }
}
let e1 = new engineer
e1.coursename = 'machinal engineer'
e1.educationfees = '200000'
e1.duration = '4 years'
e1.result()

let e2 = new engineer
e2.coursename ='chemical engineer'
e2.educationfees = '150000'
e2.duration = '3 year'
e2.result()
