let tempMemory = {};
import { v4 } from 'uuid';

export function garbageCollectionHandler(_, res) {
  const key = v4();

  for (let i = 0; i < 100; i++) {
    tempMemory[key] = new Array(1000000).fill('*');
    if (Math.random() >= 0.5) {
      tempMemory[key] = null;
    }
  }

  res.send(`Frequent garbage collections ${tempMemory === null}`);
}

export function forceGarbageCollectionHandler(_, res) {
  const key = v4();

  for (let i = 0; i < 100; i++) {
    tempMemory[key] = new Array(1000000).fill('*');
    global.gc();
  }

  res.send(`Frequent garbage collections ${tempMemory === null}`);
}
