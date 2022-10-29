// leap year function

let year = 2020;

const checkYear = (leap) => {
  if ((leap % 4 == 0 && leap % 100 != 0) || leap % 400 == 0) {
    console.log("It is Leap year:", leap);
  } else {
    console.log("It is not leap year:", leap);
  }
};

checkYear(2010);
