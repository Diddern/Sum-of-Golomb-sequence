const target = process.argv[2]
var memoization = [,1];
var golomb = (function() {
  return function(n) {
    var i;
    for (i=memoization.length;i<n;i++){
      memoization[i]=golomb(i);
    }
    return memoization[n] || (memoization[n]=1+golomb(n-golomb(golomb(n-1))));
  }
})();
golomb(target);
console.log(memoization.reduce((a, b) => a + b, 0));
