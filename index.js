// let submit = document.forms.submit; // find element 
let submit = document.getElementById("submit"); 
const dateInput = document.getElementById("Date_trip");

const selectStation = document.getElementById("Start_Station");
const selectEndStation = document.getElementById("End_Station");


const choosePlaces = document.querySelectorAll('.seat');

const arrayOccupiedSeat1 = [];

const handleClick = (event) => {
    console.log(event.target.textContent)
    console.log(event.target.id)

    arrayOccupiedSeat1.push(event.target.id);
    console.log(arrayOccupiedSeat1);
    
    event.target.classList.add("reserved");
    event.target.disabled =true;

    
     return arrayOccupiedSeat1;


}

choosePlaces.forEach(choosePlace => {
    choosePlace.addEventListener('click', handleClick)
})







submit.addEventListener('submit', handleSubmit); //listener events


const totalSeat = 24; // depence


const arrayfreeSeat = [];  // 
for(let i = 0; i < totalSeat; i++) {
    // console.log(i)
    arrayfreeSeat.push(i+1);
    
}
console.log(arrayfreeSeat);

// const choiseSeat = 11;  // вибране місце

const reservS = arrayfreeSeat.splice(2, 1);

const arrayOccupiedSeat = [];

// function reservedSeat() {
//    arrayOccupiedSeat.push(this.resNumSeat);
//    console.log(arrayOccupiedSeat)
//     this.seatNum.classList.add("reserved");
//     console.log(this.seatNum.classList);
//     return arrayOccupiedSeat;
// }


//for date input
const startLimitDate = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', startLimitDate);

const todayOfMiliseconds = Date.parse(new Date());
const msInOneDay = 86400000;
let limitDays = 13;

const finishLimitDate = (new Date(todayOfMiliseconds + limitDays * msInOneDay)).toISOString().split('T')[0];
dateInput.setAttribute('max', finishLimitDate);

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




const seatNumberFreeOnBus = [ 11, 32, 34, 45, 55 ]; //have green border

// console.log("passenger", passenger);

function handleSubmit(event) {
    event.preventDefault();
    const newPassenger = {
        id: Date.now(),  
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
}


