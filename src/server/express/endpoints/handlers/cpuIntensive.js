export function cpuIntensiveHandler(req, res) {
  const number = parseInt(req.query.number, 10) || 40;
  const result = fibonacci(number);

  res.send(`Fibonacci of ${number} is ${result}`);
}

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
