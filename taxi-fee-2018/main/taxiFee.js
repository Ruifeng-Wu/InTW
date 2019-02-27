module.exports = function taxiFee(mileage, time) {
    const BASE_FEE = 6;
    const FEE_PER_MINUTE=0.25;
    const FEE_PER_MILEAGE=0.8;
    const FEE_FREIGHT=0.5;
    let fee=BASE_FEE;
    if (mileage > 2) {
        fee += Math.ceil(mileage - 2) * FEE_PER_MILEAGE;
    }
    if (mileage > 8) {
        fee += Math.ceil(mileage - 8) * FEE_FREIGHT;
    }
    fee = Math.round(time * FEE_PER_MINUTE + fee);
    return fee;
};