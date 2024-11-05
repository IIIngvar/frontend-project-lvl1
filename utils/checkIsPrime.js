const checkIsPrime = (num) => {
  if (num < 2) {
    return true;
  }
  const mathsqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= mathsqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
export default checkIsPrime;
