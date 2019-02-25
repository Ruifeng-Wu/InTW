module.exports = function main(mileage, time) {
    // console.log("Debug Info");
    let fee = 6;
    if (mileage > 2) {
        fee += Math.ceil(mileage - 2) * 0.8;
    }
    if (mileage > 8) {
        fee += Math.ceil(mileage - 8) * 0.5;
    }
    fee = Math.round(time * 0.25 + fee);
    return fee;
};