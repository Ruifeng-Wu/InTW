const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('return the taxi fee when the mileage is within 2 kilometers ', function () {
        let result = main(1.5, 10);
        let expect_fee = 9;
        expect(result).toEqual(expect_fee);
    });
});
