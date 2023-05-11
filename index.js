let submit = document.forms.submit; // find element 


submit.addEventListener('submit', handleSubmit); //listener events

const passenger = {
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
}

// console.log("passenger", passenger);

function handleSubmit(event) {
    event.preventDefault();

    const newPassenger = {
        id: 1243646,  // unique id
        firstName: submit.First_Name.value,
        lasttName: submit.Last_Name.value,
        start: submit.Start_Station.value,
        end: submit.End_Station.value,
        date: submit.Date_trip.date,
        seatNumber: submit.Seat_Number.value,
        baggage: document.getElementById('baggage').checked,
        pet: document.getElementById('pet').checked,
        exemption: document.getElementById('exemption').value
    }
    console.log("newPassenger", newPassenger);

    alert('Good luck!');
};


