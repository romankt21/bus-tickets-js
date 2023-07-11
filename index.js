let submit = document.getElementById("submit");  // find element 
const dateInput = document.getElementById("Date_trip");

const selectStation = document.getElementById("Start_Station");
const selectEndStation = document.getElementById("End_Station");


const choosePlaces = document.querySelectorAll('.seat');
console.log(choosePlaces)

const CP = document.getElementsByClassName('seat');
console.log(CP)

const arrayOccupiedSeat1 = []; // [ 22, 3, 11]

const handleClick = (event) => {
    console.log(event.target.textContent)
    console.log(event.target.id)

    arrayOccupiedSeat1.push(event.target.textContent);
    console.log(arrayOccupiedSeat1);
    
    event.target.classList.add("reserved");
    event.target.disabled = true;

    // location.href = "./ticket.html";
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
    arrayfreeSeat.push(i+1); // for dinamic make layout and compaire with pccupied Array
    
}
console.log("arrayfreeSeat", arrayfreeSeat);

// const choiseSeat = 11;  // вибране місце

const reservS = arrayfreeSeat.splice(2, 1);

const arrayOccupiedSeat = [];

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



const busesDB =  [
    {
        busBrand: "iveco",
        numberOfSeats: 24,
        id: "BC1122AA"
    },

    {
        busBrand: "iveco",
        numberOfSeats: 32,
        id: "BC2233AA"
    },

    {
        busBrand: "neoplan",
        numberOfSeats: 40,
        id: "BC3344AA"
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


// bus seat

let bus_seat_row1 = document.getElementById("bus_seat_row1");
let bus_seat_row2 = document.getElementById("bus_seat_row2");
let bus_seat_row3 = document.getElementById("bus_seat_row3");
let bus_seat_row4 = document.getElementById("bus_seat_row4");

let arrBusSeatsRow12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (let i = arrBusSeatsRow12.length-1; i >= 0; i--) {
    if (arrBusSeatsRow12[i] % 2 !== 0)   {
         let buttonSeat = document.createElement('button');
        buttonSeat.classList.add('seat');
        buttonSeat.setAttribute('id', `'seat' $arrBusSeatsRow12[i]`);
        buttonSeat.innerText = arrBusSeatsRow12[i];
        bus_seat_row1.append(buttonSeat)
        }
        
        else {
            let buttonSeat = document.createElement('button');
            buttonSeat.classList.add('seat');
            buttonSeat.setAttribute('id', `'seat' $arrBusSeatsRow12[i]`);
            buttonSeat.innerText = arrBusSeatsRow12[i];
            bus_seat_row2.append(buttonSeat)
        }
}


let arrBusSeatsRow34 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

for (let i = arrBusSeatsRow34.length-1; i >= 0; i--) {
    if (arrBusSeatsRow34[i] % 2 !== 0)   {
         let buttonSeat34 = document.createElement('button');
        buttonSeat34.classList.add('seat');
        buttonSeat34.setAttribute('id', `'seat' $arrBusSeatsRow34[i]`);
        buttonSeat34.innerText = arrBusSeatsRow34[i];
        bus_seat_row3.append(buttonSeat34)
        }
        
        else {
            let buttonSeat34 = document.createElement('button');
            buttonSeat34.classList.add('seat');
            buttonSeat34.setAttribute('id', `'seat' $arrBusSeatsRow34[i]`);
            buttonSeat34.innerText = arrBusSeatsRow34[i];
            bus_seat_row4.append(buttonSeat34)
        }
}










