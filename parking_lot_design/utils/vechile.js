class vechile{
    constructor(vechile_no, vechile_type){
        this.vechile_no=vechile_no;
        this.vechile_type=vechile_type;
    }
    getVechileNo(){
        return this.vechile_no;
    }
    getVechileType(){
        return this.vechile_type;
    }
}

module.exports = vechile;