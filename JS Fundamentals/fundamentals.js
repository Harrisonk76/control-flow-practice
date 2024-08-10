


const CourseInfo = {
     id: 451,
     name: "Introduction to JavaScript"
};

// The provided assignment group.
// const AssignmentGroup = {
//       id: 12345,
//       name: "Fundamentals of JavaScript",
//       course_id: 451,
//       group_weight: 25,
//       assignments: []
// }
//     {
//         id: 1,
//         name: "Declare a Variable",
//         due_at: "2023-01-25",
//         points_possible: 50    
//     },
//     {
//         id: 2,
//         name: "Write a Function",
//         due_at: "2023-02-27",
//         points_possible: 150
//     },

// {
//         id: 3,
//         name: "Code the World",
//         due_at: "3156-11-15",
//         points_possible: 500
// }
    
  


// // The provided learner submission data.

const LearnerSubmissions = [
  {
      learner_id: 125,
      assignment_id: 1,
      submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
      learner_id: 125,
      assignment_id: 2,
      submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
      learner_id: 125,
      assignment_id: 3,
      submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
      learner_id: 132,
      assignment_id: 1,
      submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
      learner_id: 132,
      assignment_id: 2,
      submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

//    {
// //   /here, we would process this data to achieve the desired result.
//     const
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   {/* return result; */}
// }

// const doesGroupBelong = function(CourseInfo, AssignmentGroup){
//     console.log (CourseInfo.id === AssignmentGroup.course_id);
// };



// let learnerData = [] 

// function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission) { 
//     console.log(getLearnerData);

// }

// learnerSubmissions.forEach((item)=> {

//  if(uniqueStudents.includes(item.learner-id)){

//     else{
//         uniqueStudents.push(item.learner_id) 
//     }
// });
// uniqueStudents= uniqueStudents.map((item)=>{
//     console.log(item)
//     let uniqueId={
//         id:item,
//     }

//      function getLearnerData(course, ag, submission )
//        learnerData = [];
//        submission.forEach((submission)=>{
//         const learnerId = submission.learner_id;
//         const assignmentId = submission.assignment_id;
//         const score = submission.submission.score;
//         submittedAt= new Date (submission.submitted_at);
//         console.log(learnerData)
//     });

//     // Find the corresponding assignment
//     const assignment = ag.assignments.find(a => a.id === assignment)
//     if (!assignment){}
    
//     // return uniqueId</assignment_id>)

//     // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSunmission);