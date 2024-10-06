flightBooking=require('./utils/flightBooking');

flightBookingInstance = new flightBooking();

flightBookingInstance.addAdmin("admin1","abc.gmail.com","123");
flightBookingInstance.addPassenger("passenger1","abc.gmail.com","123","123456789");
flightBookingInstance.addPassenger("passenger2","abc.gmail.com","123","123456789");

let airport1=flightBookingInstance.addAirport(flightBookingInstance.admin[0],"Delhi","DEL");
let airport2=flightBookingInstance.addAirport(flightBookingInstance.admin[0],"Mumbai","MUM");
let airport3=flightBookingInstance.addAirport(flightBookingInstance.admin[0],"Bangalore","BLR");
let airport4=flightBookingInstance.addAirport(flightBookingInstance.admin[0],"Chennai","CHN");

flightBookingInstance.addFlight(flightBookingInstance.admin[0],"2021-12-12",airport1,airport2,"AI2021",{buisnessSeats:{no: 10, price: 3000},economySeats:{no: 30, price: 1000},firstClassSeats:{no: 5, price: 2000}},"12:00","14:00");
flightBookingInstance.addFlight(flightBookingInstance.admin[0],"2021-12-12",airport1,airport3,"AI2022",{buisnessSeats:10,economySeats:30,firstClassSeats:5},"12:00","14:00");

let flights=flightBookingInstance.searchFlight(airport1,airport2,"2021-12-12");
for(let i=0;i<flights.length;i++){
    console.log(flights[i].flight_type);
}

flightBookingInstance.bookFlight(flightBookingInstance.passenger[0],flights[0],{buisnessSeats:0, economySeats:2, firstClassSeats:1},flightBookingInstance.passenger[0]);