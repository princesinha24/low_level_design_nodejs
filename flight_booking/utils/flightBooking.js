const { Admin,passenger } = require("./user");
const flight = require("./flight");
const booking = require("./booking");
const airport = require("./airport");
const payment = require("./payment");

class flightBooking{

    constructor(){
        if(flightBooking.instance){
            return flightBooking.instance;
        }
        this.flights=[];
        this.admin=[];
        this.paymentInstance= new payment();
        this.passenger=[];
        this.airports=[];
        flightBooking.instance=this;
    }

    validateAdmin(user){
        if( user instanceof Admin && this.admin.includes(user) ){
            return true;
        }
        return false;
    }

    validatePassenger(user){
        if( user instanceof passenger && this.passenger.includes(user) ){
            return true;
        }
        return false;
    }

    addAirport(user,airport_name, airport_code){
        if( this.validateAdmin(user) ){
            let airpot = new airport(airport_name, airport_code);
            this.airports.push(airport);
            return airpot;
        }
    }

    addFlight(user, date, source, destination, flightNo, seats, arrival_time, departure_time){
        if( this.validateAdmin(user) ){
            this.flights.push(new flight(date, source.getCode(), destination.getCode(), flightNo, seats, arrival_time, departure_time));
        }
    }

    addAdmin(name,email,phoneNo){
        this.admin.push(new Admin(name,email,phoneNo));
    }

    addPassenger(name,email,phoneNo,account){
        this.passenger.push(new passenger(name,email,phoneNo,account));
    }

    searchFlight(source, destination, date){
        // console.log(this.flights);
        return this.flights.filter((flight)=>flight.source===source.getCode() && flight.destination===destination.getCode() && flight.date===date);
    }

    async bookFlight(user, flight, seat, passenger){
        if(this.validatePassenger(user)){
            let book = new booking(passenger.name, seat);
            flight.bookSeat(book);
            book.calculateCost();
            console.log(book);
            await this.paymentInstance.makePayment(book.cost);
            user.addbookinghistory(book);
            console.log(`Booking done for ${passenger} on flight ${flight}`);
            return book;
        }
    }

    async cancelBooking(user, booking){
        if(this.validatePassenger(user)){
            await booking.cancelBooking();
            console.log(`Booking cancelled for ${booking.passenger_name}`);
        }
    }

    async flightCancel(flight){
        await flight.cancelFlight();
        console.log(`Flight ${flight} has been cancelled`);
    }
}
module.exports=flightBooking;