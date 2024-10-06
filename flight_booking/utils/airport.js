class airport{
    constructor(name, code){
        this.name = name;
        this.code = code;
    }
    getAirportName(){
        return this.name;
    }
    getCode(){
        return this.code;
    }
}

module.exports=airport;