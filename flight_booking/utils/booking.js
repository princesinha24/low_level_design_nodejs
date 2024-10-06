const { buisnessSeat, economySeat, firstClassSeat } = require("./seat");

class booking{
    constructor(passenger_name, seat){
        this.passenger_name=passenger_name;
        this.seat=seat;
        this.seats=[];
        this.cost=0;
        this.time0fBooking=new Date();
    }

    

    calculateCost(){
        for (let i = 0; i < this.seats.length; i++) {
            this.cost+=this.seats[i].price;
        }
    }

    async cancelBooking(){
        for (let i = 0; i < this.seat.length; i++) {
            this.seat[i].cancelSeat();
        }
        
        await this.paymentInstance.refundPayment(this.cost, this.passenger_name.account);
        this.passenger_name.notify("Your seat has been cancelled");
        this.cleanup();
    }

    cleanup(){
        this.passenger_name=null;
        this.cost=null;
        this.time0fBooking=null;
        this.seat=null;
    }
}

module.exports=booking;