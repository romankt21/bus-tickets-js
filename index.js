// let submit = document.forms.submit; // find element 
let submit = document.getElementById("submit"); 
const dateInput = document.getElementById("Date_trip");
const selectStation = document.getElementById("Start_Station");
const selectEndStation = document.getElementById("End_Station");


let seat_1 = document.getElementById("seat_1")
let seat_2 = document.getElementById("seat_2")
let seat_3 = document.getElementById("seat_3")
let seat_4 = document.getElementById("seat_4")
let seat_5 = document.getElementById("seat_5")
let seat_6 = document.getElementById("seat_6")
let seat_7 = document.getElementById("seat_7")
let seat_8 = document.getElementById("seat_8")
let seat_9 = document.getElementById("seat_9")
let seat_10 = document.getElementById("seat_10")
let seat_11 = document.getElementById("seat_11")
let seat_12 = document.getElementById("seat_12")




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





// seat_13.addEventListener('click', seat13)
// seat_14.addEventListener('click', seat14)
// seat_15.addEventListener('click', seat15)
// seat_16.addEventListener('click', seat16)
// seat_17.addEventListener('click', seat17)
// seat_18.addEventListener('click', seat18)
// seat_19.addEventListener('click', seat19)
// seat_20.addEventListener('click', seat20)
// seat_21.addEventListener('click', seat21)
// seat_22.addEventListener('click', seat22)
// seat_23.addEventListener('click', seat23)
// seat_24.addEventListener('click', seat24)



const arrayOccupiedSeat =[]

function reservedSeat() {
    console.log(this.resNumSeat)
//    const arrayOccupiedSeat = []
   arrayOccupiedSeat.push(this.resNumSeat)
    console.log(arrayOccupiedSeat)

    // Arr.push(this.resNumSeat)
    // console.log(Arr)


    this.seatNum.style.background = "lightgreen"
    this.seatNum.style.border = "none"

    return arrayOccupiedSeat


   
    

}
// console.log(arrayOccupiedSeat)


function seat10() {
    console.log("choose seat 10")
    const arrayChooseSeat = []
    arrayChooseSeat.push(10)
    seat_10.style.background = "lightgreen"
    seat_10.style.border = "none"
}







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


