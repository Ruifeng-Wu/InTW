const taxiFee = require('../main/taxiFee');

describe('taxi fee', function () {
    // write your tests here...
    it('return the taxi fee when the mileage is within 2 kilometers ', function () {
        let result = taxiFee(1.5, 10);
        expect(9).toEqual(result);
    });
    it('return the taxi fee when the mileage is more than 2 kilometers and less than 8 kilometers ', function () {
        let result = taxiFee(5.8, 10);
        expect(12).toEqual(result);
    });
    it('return the taxi fee when the mileage is more than 8 kilometers ', function () {
        let result = taxiFee(8.5, 10);
        expect(15).toEqual(result);
    });
});
