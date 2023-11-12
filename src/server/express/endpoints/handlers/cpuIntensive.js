import Jimp from 'jimp';

export function cpuIntensiveHandler(req, res) {
  const number = parseInt(req.query.number, 10) || 40;
  const result = fibonacci(number);

  res.send(`Fibonacci of ${number} is ${result}`);
}

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export async function mediaCpuIntensiveHandler(_, res) {
  const image = new Jimp(256, 256, '#000000');

  for (let x = 0; x < image.bitmap.width; x++) {
    for (let y = 0; y < image.bitmap.height; y++) {
      image.setPixelColor(
        Jimp.rgbaToInt(
          Math.random() * 255,
          Math.random() * 255,
          Math.random() * 255,
          255,
        ),
        x,
        y,
      );
    }
  }

  res.send('ok');
}
