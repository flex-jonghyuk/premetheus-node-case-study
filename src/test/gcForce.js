import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 50, // 10 virtual users
  duration: '30s', // for 30 seconds
};

export default function () {
  http.get(`http://localhost:8080/memory/gc/force`);
  sleep(0.06); // Sleep for 60ms
}
