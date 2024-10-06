class payment{
    constructor(){
        if(payment.instance){
            console.log("Only one payment object can be created");
            return payment.instance;
        }
        else{
            payment.instance=this;
            return payment.instance;
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

    async refundPayment(amount, account){
        const promise = new Promise((resolve) => {  
            setTimeout(() => {
                console.log(`Refund of ${amount} is done on account ${account}`);
                resolve();
            }, 1000);
        });
        await promise;
        return;
    }
}

module.exports=payment;