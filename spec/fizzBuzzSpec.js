describe('Fizzbuzz',function() {
    it('returns fizz when passed number divisible by 3', function() {
      expect(Fizzbuzz(3)).toEqual('fizz')
    });

    it('returns buzz when passed number is divisible by 5', function() {
      expect(Fizzbuzz(5)).toEqual('buzz')
    });

    it('returns fizzbuzz when passed number divisible by 3 and 5', function() {
      expect(Fizzbuzz(15)).toEqual('fizzbuzz')
    });

    it('returns number if it is not divisible by 5 or 3', function() {
      expect(Fizzbuzz(2)).toEqual(2)
    });
});
