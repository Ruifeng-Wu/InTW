const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('return the taxi fee when the mileage is within 2 kilometers ', function () {
        let result = main(1.5, 10);
        let expect_fee = 9;
        expect(result).toEqual(expect_fee);
    });
    it('return the taxi fee when the mileage is more than 2 kilometers and less than 8 kilometers ', function () {
        let result = main(5.8, 23);
        let expect_fee = 15;
        expect(result).toEqual(expect_fee);
    });
    it('return the taxi fee when the mileage is more than 8 kilometers ', function () {
        let result = main(8.5, 35);
        let expect_fee = 21;
        expect(result).toEqual(expect_fee);
    });
});
