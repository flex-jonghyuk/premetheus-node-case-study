import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 5, // 10 virtual users
  duration: '5s', // for 30 seconds
};

export default function () {
  http.get(`http://localhost:8080/memory/leak/large`);
  sleep(0.06);
}
