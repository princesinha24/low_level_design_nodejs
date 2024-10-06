class seat{
    constructor(price){
        this.isBooked=false;
        this.passengerName=null;
        this.price=price;
    }
    bookSeat(passengerName){
        this.isBooked=true;
        this.passengerName=passengerName;
    }
    cancelSeat(){
        this.passengerName.notifiy("Your seat has been cancelled");
        this.isBooked=false;
        this.passengerName=null;
    }
}

class buisnessSeat extends seat{
    constructor(price){
        super(price);
    }
    setPrice(price){
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
}

class economySeat extends seat{
    constructor(price){
        super(price);
    }
    setPrice(price){
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
}

class firstClassSeat extends seat{
    constructor(price){
        super(price);
    }
    setPrice(price){
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
}

module.exports={buisnessSeat,economySeat,firstClassSeat};