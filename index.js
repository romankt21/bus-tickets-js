// let submit = document.forms.submit; // find element 
let submit = document.getElementById("submit"); 
const dateInput = document.getElementById("Date_trip");

const selectStation = document.getElementById("Start_Station");
const selectEndStation = document.getElementById("End_Station");


const choosePlaces = document.querySelectorAll('.seat');
console.log(choosePlaces);

const handleClick = (event) => {
    console.log(event.target.textContent)
    console.log(event.target.id)
}

choosePlaces.forEach(choosePlace => {
    choosePlace.addEventListener('click', handleClick)
})


const reservPlace = arrayfreeSeat.splice(2, 1);

const arrayOccupiedSeat = [];

function reservedSeat() {
   arrayOccupiedSeat.push(this.resNumSeat);
   console.log(arrayOccupiedSeat)
    this.seatNum.classList.add("reserved");
    console.log(this.seatNum.classList);
    return arrayOccupiedSeat;
}


const seat_1 = document.getElementById("seat_1");
const seat_2 = document.getElementById("seat_2");
const seat_3 = document.getElementById("seat_3");
const seat_4 = document.getElementById("seat_4");
const seat_5 = document.getElementById("seat_5");
const seat_6 = document.getElementById("seat_6");
const seat_7 = document.getElementById("seat_7");
const seat_8 = document.getElementById("seat_8");
const seat_9 = document.getElementById("seat_9");
const seat_10 = document.getElementById("seat_10");
const seat_11 = document.getElementById("seat_11");
const seat_12 = document.getElementById("seat_12");

const seat_13 = document.getElementById("seat_13");
const seat_14 = document.getElementById("seat_14");
const seat_15 = document.getElementById("seat_15");
const seat_16 = document.getElementById("seat_16");
const seat_17 = document.getElementById("seat_17");
const seat_18 = document.getElementById("seat_18");
const seat_19 = document.getElementById("seat_19");
const seat_20 = document.getElementById("seat_20");
const seat_21 = document.getElementById("seat_21");
const seat_22 = document.getElementById("seat_22");
const seat_23 = document.getElementById("seat_23");
const seat_24 = document.getElementById("seat_24");

seat_1.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:1 , seatNum: seat_1});
seat_2.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:2 , seatNum: seat_2});
seat_3.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:3 , seatNum: seat_3});
seat_4.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:4 , seatNum: seat_4});
seat_5.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:5 , seatNum: seat_5});
seat_6.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:6 , seatNum: seat_6});
seat_7.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:7 , seatNum: seat_7});
seat_8.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:8 , seatNum: seat_8});
seat_9.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:9 , seatNum: seat_9});
seat_10.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:10 , seatNum: seat_10});
seat_11.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:11 , seatNum: seat_11});
seat_12.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:12 , seatNum: seat_12});

seat_13.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:13 , seatNum: seat_13});
seat_14.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:14 , seatNum: seat_14});
seat_15.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:15 , seatNum: seat_15});
seat_16.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:16 , seatNum: seat_16});
seat_17.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:17 , seatNum: seat_17});
seat_18.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:18 , seatNum: seat_18});
seat_19.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:19 , seatNum: seat_19});
seat_20.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:20 , seatNum: seat_20});
seat_21.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:21 , seatNum: seat_21});
seat_22.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:22 , seatNum: seat_22});
seat_23.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:23 , seatNum: seat_23});
seat_24.addEventListener('click', {handleEvent: reservedSeat, resNumSeat:24 , seatNum: seat_24});


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

function reservedSeat() {
   arrayOccupiedSeat.push(this.resNumSeat);
   console.log(arrayOccupiedSeat)
    this.seatNum.classList.add("reserved");
    console.log(this.seatNum.classList);
    return arrayOccupiedSeat;
}


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


