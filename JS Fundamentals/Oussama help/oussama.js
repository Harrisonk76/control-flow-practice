let grades = [1,7,9,5]
let students = ["adam","joseph","mary","john"]

let cities = [{city:"boston",temp:50},{city:"newyork",temp:70},{city:"dallas",temp:100}]
// ()=>
//first represents array elements
//second represnts index
// third represent the whole array
// cities.forEach((student,index,orginalArray)=>{
//   console.log(student.temp)
// })


//map
let newStudents = students.map((student,index)=>{
  // console.log(student.temp)
    // let newStudent = student + " is student in perscholas " + "their grade is " + grades[index]
    let studentObject ={
      student ,
        school: "perscholas",
        grade:grades[index]

    }
  return  index.student===7;



})

//{student:"adam",school:"perscholas", grade:1,hasPassed:false}
//only students who has a grade above 7 or equal to 7 should have true on has passed
// console.log(newStudents)