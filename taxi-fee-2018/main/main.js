module.exports = function main(mileage, time) {
    // console.log("Debug Info");
    let fee = 0;
    if (mileage <= 2) {
        fee = 6;
    }
    if (mileage > 2 && mileage <= 8) {
        fee = 6 + Math.ceil(mileage - 2) * 0.8;
    }
    fee = Math.round(time * 0.25 + fee);
    return fee;
};