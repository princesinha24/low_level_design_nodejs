const {bike,car}=require('./parkingSlot');
const EntryGate=require('./EntryGate');
const vechile=require('./vechile');
const booking=require('./booking');

class payment{
    constructor(){
        if(!payment.inst){
            payment.inst=this;
        }
        else{
            console.log("Only one payment object can be created");
            return payment.inst;
        }
    }
    async makePayment(amount){
        const promise = new Promise((resolve) => {  
            setTimeout(() => {
                console.log(`Payment of ${amount} is done`);
                resolve();
            }, 1000);
        });
        await promise;
        return;
    }
}


class parkingLot{
    constructor(){
        this.EntryGates=[];
        this.payment_obj=new payment();
    }

    calculateCost(booking){
        let duration=booking.endtime-booking.starttime;
        duration=Math.floor(duration/(1000));
        console.log(duration, booking.endtime, booking.starttime);
        if(booking.vechile.vechile_type==='car'){
            return duration*50;
        }
        else{
            return duration*20;
        }
    }

    createEntryGate(){
        this.EntryGates.push(new EntryGate());
    }

    addBikeSlot(location){
        let bike_slot=new bike(location);
        for(let i=0;i<this.EntryGates.length;i++){
            this.EntryGates[i].addBikeSlot(bike_slot);
        }
    }

    addCarSlot(location){
        let car_slot=new car(location);
        for(let i=0;i<this.EntryGates.length;i++){
            this.EntryGates[i].addCarSlot(car_slot);
        }
    }

    enterNewVechile(vechileNo,vechileType){
        return new vechile(vechileNo,vechileType);
    }

    getBooking(vechileNo,vechileType,entryGate){
        let vechile=this.enterNewVechile(vechileNo,vechileType);
        let booking= this.EntryGates[entryGate].findSlot(vechile);
        return booking;
    }

    async exitBooking(booking){
        let slot=this.EntryGates[0].findBooking(booking);
        booking.endBooking();
        let cost=this.calculateCost(booking);
        console.log(`Cost of parking is ${cost}`);
        await this.payment_obj.makePayment(cost);
        console.log(`Payment done for ${booking.vechile.getVechileNo()}`);
        slot.releaseSlot();
        return;
    }
}

module.exports = parkingLot;