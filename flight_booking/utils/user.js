class user{
    constructor(name,email,phoneNo){
        this.name=name;
        this.email=email;
        this.phoneNo=phoneNo;
    }
}

class passenger extends user{
    constructor(name,email,phoneNo, account){
        super(name,email,phoneNo);
        this.historyBookings=[];
        this.account=account;
    }

    addbookinghistory(booking){
        this.historyBookings.push(booking);
    }

    getbookinghistory(){
        return this.historyBookings;
    }

    removebookinghistory(booking){
        this.historyBookings=this.historyBookings.filter((book)=>book!==booking);
    }

    notify(message){
        console.log(`${message} sent to ${this.name} and refund has been initiated`);
    }
}

class Admin extends user{
    constructor(name,email,phoneNo){
        super(name,email,phoneNo);
    }
}

module.exports={passenger,Admin};