class booking{
    constructor(vechile,slot){
        this.vechile=vechile;
        this.slot=slot;
        this.starttime=new Date().getTime();
    }
    getBookingDetails(){
        return `Vechile no: ${this.vechile.getVechileNo()} Vechile type: ${this.vechile.getVechileType()} Slot: ${this.slot} Start time: ${this.starttime}`;
    }
    endBooking(){
        this.endtime=new Date().getTime();
    }
}

module.exports = booking;