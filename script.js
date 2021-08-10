"use strict";
// 1.
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },

  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },

  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },

  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

addSubmission(submissions, "John", 62, "2021-08-10");
addSubmission(submissions, "James", 15, "2021-08-11");
console.log(submissions);

// 3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

// 4.
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => item.name === name);
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);

// 5.
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 3, 50);
console.log(submissions);

// 6.
const findSubmissionByName = (array, name) => {
  let found = array.find((item) => item.name === name);
  if (found) {
    return found.name;
  } else {
    return null;
  }
};
console.log(findSubmissionByName(submissions, "Jill"));

// 7.
const findLowestScore = (array) => {
  let lowestCurrentScore = array[0];
  array.forEach((item) => {
    if (item.score < lowestCurrentScore.score) {
      lowestCurrentScore = item;
    }
  });
  return lowestCurrentScore;
};
console.log(findLowestScore(submissions));

// 8.
const findAverageScore = (array) => {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  return sum / array.length;
};
console.log(findAverageScore(submissions));

// 9.
const filterPassing = (array) => {
  return array.filter((item) => {
    return item.passed;
  });
};
console.log(filterPassing(submissions));

// 10.
const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};
console.log(filter90AndAbove(submissions));

//Extended Challenges:
// 1.
const createRange = (start, end) => {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};
console.log(createRange(5, 10));

// 2.
const countElements = (arrayOfStrings) => {
  let elementCount = {};
  arrayOfStrings.forEach((item) => {
    if (elementCount[item]) {
      elementCount[item]++;
    } else {
      elementCount[item] = 1;
    }
  });
  return elementCount;
};
console.log(countElements(["a", "b", "a", "c", "b", "a", "b", "b"]));
