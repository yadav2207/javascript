class developer {
    coursename = ''
    coursefees = ''
    courseduration = ''
    benefit() {
        console.log(this.coursename, '', this.coursefees, '', this.courseduration);    }
}
let d1 = new developer
d1.coursename = 'front end developer'
d1.coursefees = '100000'
d1.courseduration = '8 month'
d1.benefit()

let d2 = new developer
d2.coursename = 'python'
d2.coursefees = '200000'
d2.courseduration = '1 year'
d2.benefit()

let d3 = new developer
d3.coursename = 'software engineer'
d3.coursefees = '125000'
d3.courseduration = '1.5 month'
d3.benefit()

let d4 = new developer
d4.coursename = 'cyber security'
d4.coursefees = '250000'
d4.courseduration = '10 month'
d4.benefit()

let d5 = new developer
d5.coursename = 'data science'
d5.coursefees = '300000'
d5.courseduration = '2.5 month'
d5.benefit()

let d6= new developer
d6.coursename = 'Software developer'
d6.coursefees = '3500000'
d6.courseduration = '12 month'
d6.benefit()
