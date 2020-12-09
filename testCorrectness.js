/*  global primeGen, cumulativeSum, maxPrimeSum*/


describe('primefunctions', function () {
  const testArr1 = [1, 2, 3, 4];
  const testArr2 = [10, 11, 12, 13, 14];
  describe('primeGen Test', function () {
    const testNum = 10;
    it('primeGen(10) = [2, 3, 5, 7]', function () {
      chai.expect(primeGen(testNum)).to.deep.equal([2, 3, 5, 7]);
    });
    const testNum2 = 20;
    it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]', function () {
      chai.expect(primeGen(testNum2)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  describe('cumulativeSum Test', function () {
    it('cumulativeSum([1, 2, 3, 4])=>[1, 3, 6, 10]', function () {
      chai.expect(cumulativeSum(testArr1)).to.deep.equal([1, 3, 6, 10]);
    });
    it('cumulativeSum([10, 11, 12, 13, 14])=>[10, 21, 33, 46, 60]', function () {
      chai.expect(cumulativeSum(testArr2)).to.deep.equal([10, 21, 33, 46, 60]);
    });
  });
  describe('maxPrimeSum Test', function () {
    it('maxPrimeSum(100)=>[41, 6]', function () {
      chai.expect(maxPrimeSum(100)).to.deep.equal([41, 6]);
    });
    it('maxPrimeSum(1000)=>[953, 21]', function () {
      chai.expect(maxPrimeSum(1000)).to.deep.equal([953, 21]);
    });
  });
});
