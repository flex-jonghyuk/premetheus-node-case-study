const leaks = [];

export function memoryLeakHandler(_, res) {
  // 큰 객체를 계속 배열에 추가하여 메모리 누수 발생
  leaks.push(new Array(100).fill('*'));
  res.send(`Memory Leak: ${leaks.length}`);
}

export function memoryLeakLargeObjectHandler(_, res) {
  // 큰 객체를 계속 배열에 추가하여 메모리 누수 발생
  leaks.push(new Array(10000000).fill('*'));
  res.send(`Memory Leak: ${leaks.length}`);
}
