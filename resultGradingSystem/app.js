// Result Grading System

// Grading system for One Subject
const resultGrade = (marks, subName) => {
  if (marks >= 80 && marks <= 100) {
    console.log(`${subName} grade is: A+`);
  } else if (marks >= 70 && marks <= 79) {
    console.log(`${subName} grade is: A`);
  } else if (marks >= 60 && marks <= 69) {
    console.log(`${subName} grade is: A-`);
  } else if (marks >= 50 && marks <= 59) {
    console.log(`${subName} grade is: B`);
  } else if (marks >= 40 && marks <= 49) {
    console.log(`${subName} grade is: C`);
  } else if (marks >= 33 && marks <= 39) {
    console.log(`${subName} grade is: D`);
  } else if (marks < 33 && marks >= 1) {
    console.log(`${subName} grade is: F`);
  } else {
    console.log(`${subName} grade is: Not Valid Number`);
  }
};

// For Display more Subjects
const displayResult = (bangla, math, english, science) => {
  resultGrade(bangla, "Bangla");
  resultGrade(math, "Math");
  resultGrade(english, "English");
  resultGrade(science, "Science");
};

displayResult(77, 90, 88, 66);
