console.log("Fitness Tracker tests started!");

console.assert(
    isValidDuration(0) === false,
    "Bug: 0 minute should be rejected"
);
console.log("Test 1: PASS");

console.assert(
    isValidDuration(1) === true,
    "Bug: 1 minute should be accepted"
);

console.assert(
    isValidDuration(179) === true,
    "Bug: 179 minutes should be accepted"
);

console.assert(
    isValidDuration(180) === true,
    "Bug: 180 minutes should be accepted"
);

console.assert(
    isValidDuration(181) === false,
    "Bug: 181 minutes should be rejected"
);

console.assert(isValidDuration(0) === false,
    "Bug: 0 minute should be rejected"
);

function isValidWorkoutDate(date) {
    const selectedDateObject = new Date(date);
    const today = new Date();
    return selectedDateObject <= today;
}

 console.assert(isValidWorkoutDate("2026-09-28") === true,
    "Bug: Past date should be valid"
);

 console.assert(isValidWorkoutDate("2026-09-30") === false,
    "Bug: Future date should be invalid"
);

 console.assert(isValidWorkoutDate("2026-09-29") === true,
    "Bug: Today's date should be valid"
);


const practiceWorkouts = [
  { id: 1, type: "running", duration: 30 },
  { id: 2, type: "strength", duration: 45 },
  { id: 3, type: "running", duration: 60 },
  { id: 4, type: "strength", duration: 20 }
];

const workoutSummaries = practiceWorkouts.map(function (item) {
    return `${item.type} - ${item.duration} min`;
});
console.log(workoutSummaries);


const strengthWorkoutsPractice = practiceWorkouts.filter(function (item) {
return item.type === "strength";
});
console.log(strengthWorkoutsPractice);


const foundWorkoutPractice = practiceWorkouts.find(function (item) {
    return item.id === 3;
});
console.log(foundWorkoutPractice);


const totalDurationPractice = practiceWorkouts.reduce(function (sum, item) {
    return sum + item.duration;
}, 0);
console.log(totalDurationPractice);


const runningWorkoutsPractice = practiceWorkouts.filter(function (item) {
        return item.type === "running";
});


const totalRunningDurationPractice = runningWorkoutsPractice.reduce(function (sum, item) {
    return sum + item.duration;
}, 0);
console.log(totalRunningDurationPractice);
console.log(practiceWorkouts);
console.log(runningWorkoutsPractice);