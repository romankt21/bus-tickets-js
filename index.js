// let submit = document.forms.submit; // find element 
let submit = document.getElementById("submit"); 
const dateInput = document.getElementById("Date_trip");
const selectStation = document.getElementById("Start_Station");
const selectEndStation = document.getElementById("End_Station");
let seat_13 = document.getElementById("seat_13")
let seat_14 = document.getElementById("seat_14")

seat_13.addEventListener('click', seat13)
seat_14.addEventListener('click', seat14)


const arrayOccupiedSeat = [];



function seat13() {
    console.log("occupied seat 13")
    arrayOccupiedSeat.push(13)
}

function seat14() {
    console.log("occupied seat 14")
    arrayOccupiedSeat.push(14)
}



console.log(arrayOccupiedSeat)




const today = new Date().toISOString().split('T')[0];
console.log("today ", today );

dateInput.setAttribute('min', today);

const rToday = Date.parse(new Date());
console.log(rToday)
const maxDate = rToday + 24 * 10 * 60 * 60 * 1000

console.log("maxDate ", maxDate );
const maxDate1 = (new Date(maxDate))
const maxDate2 = maxDate1.toISOString().split('T')[0];
console.log("maxDate ", maxDate2 );

dateInput.setAttribute('max', maxDate2);



submit.addEventListener('submit', handleSubmit); //listener events

// const passengers = [
//     {
//     id: 1324343434,
//     firstName: "Roman",
//     lasttName: "Kutnyi",
//     start: "Lviv",
//     end: "Praga",
//     date: "21.06.23",
//     seatNumber: 47,
//     baggage: true,
//     pet: false,
//     exemption: ""
// },
// {
//     id: 1324343400,
//     firstName: "Roman",
//     lasttName: "Kutnyi",
//     start: "Lviv",
//     end: "Praga",
//     date: "21.06.23",
//     seatNumber: 46,
//     baggage: true,
//     pet: false,
//     exemption: ""
// }
// ];


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
    const option = document.createElement('option')

    option.value = station.city;
option.textContent = `${station.city},${station.country} `;
    selectStation.appendChild(option);
}




for(let stationEnd of stationsDB){
    const optionEnd = document.createElement('option')


    optionEnd.value = stationEnd.city;
    optionEnd.textContent = `${stationEnd.city},${stationEnd.country} `;



    selectEndStation.appendChild(optionEnd);
    // console.log(selectEndStation)

}


