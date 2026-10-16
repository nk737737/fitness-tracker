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
