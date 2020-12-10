/*  maxPrimeSum */

// two warning silenced due to code structure - will always be "undefined"
describe('primefunctions', function () {
  describe('maxPrimeSum Test', function () {
    it('maxPrimeSum(10000) should take less than 50ms', function () {
      this.slow(0);
      this.timeout(50);
      // eslint-disable-next-line no-undef
      chai.expect(maxPrimeSum(10000)).to.deep.equal([9521, 65]);
    });
    it('maxPrimeSum(100000) should take less than 1000ms', function () {
      this.slow(0);
      this.timeout(1000);
      // eslint-disable-next-line no-undef
      chai.expect(maxPrimeSum(100000)).to.deep.equal([92951, 183]);
    });
  });
});
