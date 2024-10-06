const { buisnessSeat, economySeat, firstClassSeat } = require("./seat");
class flight{
    constructor(date, source, destination, flight_type, seat, arrival_time, departure_time){
        this.flight_type=flight_type;
        this.seat=seat;
        this.source=source;
        this.destination=destination;
        this.date=date;
        this.arrival_time=arrival_time;
        this.departure_time=departure_time;
        this.buisnessSeats=[];
        this.economySeats=[];
        this.firstClassSeats=[];
        this.booking=[];
        this.createSeats(seat);
        return this;
    }

    bookSeat(booking){
        for (let i = 0; i < this.buisnessSeats.length; i++) {
            if(booking.seat.buisnessSeats>0){
                if(!this.buisnessSeats[i].isBooked){
                    buisnessSeats[i].bookSeat(booking.passenger_name);
                    booking.seats.push(this.buisnessSeats[i]);
                    booking.seat.buisnessSeats--;
                }
            }
            else{
                break
            }
        }
        for (let i = 0; i < this.economySeats.length; i++) {
            if(booking.seat.economySeats>0){
                if(this.economySeats[i].isBooked==false){
                    booking.seats.push(this.economySeats[i]);
                    this.economySeats[i].bookSeat(booking.passenger_name);
                    booking.seat.economySeats--;
                }
            }
            else{
                break
            }
        }
        for (let i = 0; i < this.firstClassSeats.length; i++) {
            // console.log("booked");
            if(booking.seat.firstClassSeats>0){
                if(!this.firstClassSeats[i].isBooked){
                    booking.seats.push(this.firstClassSeats[i]);
                    this.firstClassSeats[i].bookSeat(booking.passenger_name);
                    booking.seat.firstClassSeats--;
                }
            }
            else{
                break
            }
        }
    }

    createSeats(seat){
        for(let i=0;i<seat.buisnessSeats.no;i++){
            this.buisnessSeats.push(new buisnessSeat(seat.buisnessSeats.price));
        }
        for(let i=0;i<seat.economySeats.no;i++){
            this.economySeats.push(new economySeat(seat.economySeats.price));
        }
        for(let i=0;i<seat.firstClassSeats.no;i++){
            this.firstClassSeats.push(new firstClassSeat(seat.firstClassSeats.price));
        }
    }

    async cancelFlight(){
        for(let i=0;i<this.booking.length;i++){
            await this.booking[i].cancelBooking();
        }

        this.buisnessSeats=[];
        this.economySeats=[];
        this.firstClassSeats=[];
        this.flight_type=null;
        this.seat=null;
        this.source=null;
        this.destination=null;
        this.date=null;
        this.arrival_time=null;
        this.departure_time=null;
    }
}

module.exports=flight;