
console.log("Fitness Tracker is connected!");
const addWorkoutBtn = document.querySelector("#addWorkoutBtn");
console.log(addWorkoutBtn);
const workoutType = document.querySelector("#workoutType");
const durationInput = document.querySelector("#duration");
const workoutDate = document.querySelector("#workoutDate");
const workoutNotes = document.querySelector("#workoutNotes");
let workouts = [];
const searchWorkoutId = document.querySelector("#searchWorkoutId");
const searchWorkoutBtn = document.querySelector("#searchWorkoutBtn");
const searchResult = document.querySelector("#searchResult");
const sortWorkouts = document.querySelector("#sortWorkouts");
const filterType = document.getElementById("filterType");

function renderWorkouts() {
const selectedSort = sortWorkouts.value;
    console.log(selectedSort);
    const sortedWorkouts = [...workouts];

    if (selectedSort === "asc") {
        sortedWorkouts.sort((a, b) => a.duration - b.duration);
    }

    if (selectedSort === "desc") {
        sortedWorkouts.sort((a, b) => b.duration - a.duration);
    }
    console.log(sortedWorkouts);

    sortedWorkouts.forEach(function (workout) {
    const listItem = document.querySelector(`#workoutList li[data-id="${workout.id}"]`);

    if (listItem) {
        workoutList.append(listItem);
    }
});

  const selectedType = filterType.value;
    console.log(selectedType);
    let filteredWorkouts = [...workouts];

    if (selectedType !== "all") {
        filteredWorkouts = filteredWorkouts.filter (
            (workout) => workout.type === selectedType
        );
    }
    console.log("All workouts:", workouts);
    console.log("Filtered workouts:", filteredWorkouts);

    workouts.forEach(function (workout) {

        const listItem = document.querySelector (
            `#workoutList li[data-id="${workout.id}"]`
        );

        if (listItem) {
            if (selectedType === "all" || selectedType === workout.type) {
                listItem.style.display = "";
            } else {
                listItem.style.display = "none";
            }
        }
    });
}


sortWorkouts.addEventListener("change", function () {
   renderWorkouts();

});


filterType.addEventListener("change", function () {
    renderWorkouts();
});


function isValidDuration(duration) {
    return duration >= 1 && duration <= 180;
}

const totalWorkouts = document.querySelector("#totalWorkouts");
const runningTime = document.querySelector("#runningTime");
let totalRunningMinutes = 0;
const strengthWorkouts = document.querySelector("#strengthWorkouts");

console.log(strengthWorkouts);

let totalStrengthWorkouts = 0;
const workoutList = document.querySelector("#workoutList");
let newWorkoutId = 1;

addWorkoutBtn.addEventListener("click", function () {
    if (workoutType.value === "") {
        alert("Please select a workout type.");
        return;
    }


if (durationInput.value === "") {
    alert("Please enter a workout duration.");
    return;
}

if (Number(durationInput.value) < 1) {
    alert("Duration must be at least 1 minute.");
    return;
}

if (!isValidDuration(Number(durationInput.value))) {

    alert("Duration must be between 1 and 180 minutes.");

    return;

}


const selectedDate = workoutDate.value;
const today = new Date(); 
const selectedDateObject = new Date(selectedDate);

if (selectedDateObject > today) {
    alert("Workout date cannot be in the future.");
    return;
}


    console.log("Add Workout button clicked");
    console.log(workoutType.value);
    console.log(durationInput.value);
    console.log(workoutDate.value);
    console.log(workoutNotes.value);


const workout = {
    id: newWorkoutId,
    type: workoutType.value,
    duration: Number(durationInput.value),
    date: workoutDate.value,
    notes: workoutNotes.value
};

newWorkoutId ++;

console.log(workout);

workouts.push(workout);
if (workout.type === "running") {
    totalRunningMinutes += workout.duration;
    runningTime.textContent = totalRunningMinutes + " min";
}
totalWorkouts.textContent = workouts.length;
console.log(workouts);


if (workout.type === "strength") {
    totalStrengthWorkouts += 1;
    strengthWorkouts.textContent = totalStrengthWorkouts;
}

const listItem = document.createElement("li");
listItem.dataset.id = workout.id;
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

listItem.textContent = workout.type + " - " + workout.duration + " min";
listItem.append(deleteButton);

deleteButton.addEventListener("click", function () {
    console.log("Delete button clicked");
    listItem.remove();
    workouts = workouts.filter(function (item) {
    return item !== workout;
});
     totalWorkouts.textContent = workouts.length;

     const newRunningTime = workouts.filter(function (item) {
    return item.type === "running";
})
    .reduce(function (total, item) {
        return total + item.duration; 
}, 0);

runningTime.textContent = newRunningTime + " min";

});

workoutList.append(listItem);
    renderWorkouts();
});


searchWorkoutBtn.addEventListener("click", function () {
    if (searchWorkoutId.value === "") {
        searchResult.textContent = "Please enter a workout ID";
        return;
    }

    const enteredId = Number(searchWorkoutId.value);

    const foundWorkout = workouts.find(function (item) {
        return item.id === enteredId;


    });

    if (foundWorkout) {
    searchResult.textContent = `Workout: ${foundWorkout.type}, Duration: ${foundWorkout.duration} minutes`;
} else {
    searchResult.textContent = "Workout not found";
}

    console.log(foundWorkout);
});