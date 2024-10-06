const parkingLot=require('./utils/parkingLot');

async function createBooking(vechileNo,vechileType,entryGateNo, time){
    let booking=parkingLot_obj.getBooking(vechileNo,vechileType,entryGateNo);
    console.log(`Booking for ${vechileNo} is in done with slot alloted as ${booking.slot}`);
    setTimeout(async () => {
        await parkingLot_obj.exitBooking(booking);
        console.log(`Booking for ${vechileNo} is done`);
    }, time);
}
parkingLot_obj=new parkingLot();
parkingLot_obj.createEntryGate();
parkingLot_obj.addBikeSlot(1);
parkingLot_obj.addBikeSlot(2);
parkingLot_obj.addBikeSlot(3);
parkingLot_obj.addCarSlot(1);
parkingLot_obj.addCarSlot(2);

createBooking('MH-12-1234','car',0,3000);
createBooking('MH-12-1235','bike',0,2000);
setTimeout(() => { 
    createBooking('MH-12-2413','bike',0,1000);
}, 3300);