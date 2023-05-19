let submit = document.forms.submit; // find element 
const dateInput = document.getElementById("Date_trip");
const selectStation = document.getElementById("Start_Station");




const today = new Date().toISOString().split('T')[0];
// console.log("today ", today );

dateInput.setAttribute('min', today);

// dateInput.setAttribute('max', today);

// console.log("dateInput.setAttribute", dateInput.setAttribute);

submit.addEventListener('submit', handleSubmit); //listener events

const passengers = [
    {
    id: 1324343434,
    firstName: "Roman",
    lasttName: "Kutnyi",
    start: "Lviv",
    end: "Praga",
    date: "21.06.23",
    seatNumber: 47,
    baggage: true,
    pet: false,
    exemption: ""
},
{
    id: 1324343400,
    firstName: "Roman",
    lasttName: "Kutnyi",
    start: "Lviv",
    end: "Praga",
    date: "21.06.23",
    seatNumber: 46,
    baggage: true,
    pet: false,
    exemption: ""
}
];


const seatNumberFreeOnBus = [ 11, 32, 34, 45, 55 ]; //have green border

// console.log("passenger", passenger);

function handleSubmit(event) {
    event.preventDefault();

    const newPassenger = {
        id: 1243646,  // unique id
        firstName: submit.First_Name.value,
        lasttName: submit.Last_Name.value,
        start: document.getElementById('Start_Station').value,
        end: document.getElementById('End_Station').value,

        date: submit.Date_trip.value,
        date1: document.getElementById('Date_trip').date,
        seatNumber: submit.Passenger.value,
        baggage: document.getElementById('baggage').checked,
        pet: document.getElementById('pet').checked,
        exemption: document.getElementById('exemption').value
    }
    console.log("newPassenger", newPassenger);

    alert('Good luck!');
};


const stationsDB =  [
    {
        city: "Lviv",
        stations: {station: "BS-1", station: "BS-2 ", station: "BS-3"}, 
        country: "Ukraine"
    }, 
    {
        city: "Kyiv",
        stations: {station: "BS-1", station: "BS-2", station: "BS-3", station: "BS-4", station: "BS-5", station: "BS-6"}, 
        country: "Ukraine"
    }, 
    {
        city: "Ternopil",
        stations: {station: "BS-1", station: "BS-2", station: "BS-3"}, 
        country: "Ukraine"
    }, 
    {
        city: "Rome",
        stations: {station: "Tiburtina (Stazione Tiburtina)", station: "Termini (Stazione Termini)", station: "EUR Fermi"}, 
        country: "Italy"
    }, 
    
];

for(let station of stationsDB){
    console.log(station.city);
    const option = document.createElement('option')

    option.value = station.city;
option.textContent = `${station.city},${station.country} `;
    selectStation.appendChild(option);
}



