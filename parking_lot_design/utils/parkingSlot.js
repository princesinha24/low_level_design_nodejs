class parkingSlot {
    constructor(location){
        this.location=location;
        this.available=true;
    }
    reserveSlot() {
        this.available=false;    
    }
    releaseSlot() {
        this.available=true;
    }
}

class bike extends parkingSlot{
    constructor(location){
        super(location);
    }
}

class car extends parkingSlot{
    constructor(location){
        super(location);
    }
}

module.exports = {bike, car};