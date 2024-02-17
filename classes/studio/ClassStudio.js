//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }
  average() {
    const sum = 0;
    this.scores.forEach((score) => (sum += score));
    const avg = sum / this.scores.length;
    return avg.toFixed(1);
  }

  status() {
    let averageScore = this.average;
    if (averageScore >= 90) {
      return "Accepted";
    } else if (averageScore >= 80) {
      return "Reserve";
    } else if (averageScore >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }
}
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

let bear = new CrewCandidate("Bubba Bear", 135, (88, 85, 90));
let maltese = new CrewCandidate("Merry Maltese", 1.5, (93, 88, 97));
let gator = new CrewCandidate("Glad Gator", 225, (75, 78, 62));

console.log(
  `${
    bear.name
  } earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`
);

// console.log(
//   `${animals.name} earned an average test score of ${animals.average} and has a status of ${animals.satus}`
// );
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
// animals.forEach(animals);
// {
//   console.log(
//     `${animals.name} earned an average test score of ${animals.average} and has a status of ${animals.satus}`
//   );
// }

// console.log(`${alligator.name} is going to keep trying until he can pass`)
// while (alligator.status() !== "Accepted") {
//     let testScore = Math.floor(Math.random() *(100 - 80 +1) +80)
//     alligator.addScore(testScore)
//     console.log(`${alli}`)
// }
