const booking = require('./booking');
class EntryGate{
    constructor(){
        this.bikeSlots=[];
        this.carSlots=[];
    }
    addBikeSlot(slot){
        this.bikeSlots.push(slot);
    }
    addCarSlot(slot){
        this.carSlots.push(slot);
    }

    findSlot(vechile){
        if(vechile.vechile_type==='car'){
            for(let i=0;i<this.carSlots.length;i++){
                if(this.carSlots[i].available){
                    this.carSlots[i].reserveSlot();
                    return new booking(vechile,this.carSlots[i].location);
                }
            }
        }
        else if(vechile.vechile_type==='bike'){
            for(let i=0;i<this.bikeSlots.length;i++){
                if(this.bikeSlots[i].available){
                    this.bikeSlots[i].reserveSlot();
                    return new booking(vechile,this.bikeSlots[i].location);
                }
            }
        }
    }

    findBooking(booking){
        if(booking.vechile.vechile_type==='car'){
            for(let i=0;i<this.carSlots.length;i++){
                if(this.carSlots[i].location===booking.slot){
                    return this.carSlots[i];
                }
            }
        }
        else if(booking.vechile.vechile_type==='bike'){
            for(let i=0;i<this.bikeSlots.length;i++){
                if(this.bikeSlots[i].location===booking.slot){
                    return this.bikeSlots[i];
                }
            }
        }
    }
}

module.exports = EntryGate;