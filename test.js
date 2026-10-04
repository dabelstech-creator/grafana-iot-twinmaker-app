import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  cloud: {
    projectID: 8485565,
    distribution: {
      ashburn: { loadZone: 'amazon:us:ashburn', percent: 100 },
    },
  },
  vus: 10,
  duration: '30s',
};

const BASE_URL = __ENV.K6_BASE_URL || 'https://example.com';

export default function () {
  const response = http.get(BASE_URL);

  check(response, {
    'status is 2xx': (r) => r.status >= 200 && r.status < 300,
  });

  sleep(1);
}
