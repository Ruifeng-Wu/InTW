module.exports = function main(mileage, time) {
    // console.log("Debug Info");
    let fee;
    if (mileage > 8) {
        fee = 6 + 6 * 0.8 + Math.ceil(mileage - 8) * 0.8 * 1.5;
    } else if (mileage > 2) {
        fee = 6 + Math.ceil(mileage - 2) * 0.8;
    } else {
        fee = 6;
    }
    fee = Math.round(time * 0.25 + fee);
    return fee
};