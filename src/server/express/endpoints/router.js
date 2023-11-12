import { Router } from 'express';
import {
  memoryLeakHandler,
  memoryLeakLargeObjectHandler,
} from './handlers/memoryLeak';
import {
  garbageCollectionHandler,
  forceGarbageCollectionHandler,
} from './handlers/garbageCollection';
import {
  cpuIntensiveHandler,
  mediaCpuIntensiveHandler,
} from './handlers/cpuIntensive';

export const router = Router();

router.get('/memory/leak/small', memoryLeakHandler);
router.get('/memory/leak/large', memoryLeakLargeObjectHandler);
router.get('/memory/gc', garbageCollectionHandler);
router.get('/memory/gc/force', forceGarbageCollectionHandler);

router.get('/cpu/intensive', cpuIntensiveHandler);
router.get('/cpu/intensive/media', mediaCpuIntensiveHandler);

router.get('/event-loop/io', (req, res) => {});
router.get('/event-loop/timeout', (req, res) => {});
router.get('/event-loop/promise', (req, res) => {});

router.get('/active-resource/socket', (req, res) => {});
router.get('/active-resource/io', (req, res) => {});
