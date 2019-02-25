module.exports = function main(mileage, time) {
    // console.log("Debug Info");
    let fee = 0;
    if (mileage <= 2) {
        fee = 6;
    }
    fee = Math.round(time * 0.25 + fee);
    return fee;
};