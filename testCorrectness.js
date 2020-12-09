/*  global primeGen, cumulativeSum, maxPrimeSum*/


describe('primefunctions', function () {
  // const testNums1 = [2, 3, 5, 7];
  // const testNums2 = [2, 3, 5, 7, 11, 13, 17, 19];
  describe('primeGen(10)', function () {
    const testNum = 10;
    it('primeGen(10) = [2, 3, 5, 7]', function () {
      chai.expect(primeGen(testNum)).to.deep.equal([2, 3, 5, 7]);
    });
    const testNum2 = 20;
    it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]', function () {
      chai.expect(primeGen(testNum2)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
});
