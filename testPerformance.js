/*  global primeGen, cumulativeSum, maxPrimeSum*/


describe('primefunctions', function () {
  describe('maxPrimeSum Test', function () {
    it('maxPrimeSum(10000)=>[9521, 65]', function () {
      this.slow(0);
      this.timeout(1000);
      chai.expect(maxPrimeSum(100)).to.deep.equal([41,6]);
    });
    it('maxPrimeSum(100000)=>[92951, 183]', function () {
      this.slow(0);
      this.timeout(1000);
      chai.expect(maxPrimeSum(1000)).to.deep.equal([953, 21]);
    });
  });
});
