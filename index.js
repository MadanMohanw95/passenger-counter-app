let counterEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let passengerCount = 0;

function increment() {
    passengerCount += 1;
    counterEl.textContent = passengerCount;
}

let previousEntries = '';
function save() {
    const previousEntries = passengerCount + ' - ';
    if (passengerCount) {
        saveEl.textContent += previousEntries;
    }
    console.log(previousEntries)
}

function reset() {
    passengerCount = 0;
    counterEl.textContent = passengerCount;
}