export function getBooks() {
  return fetch('../books.json', {
    headers: {
      Accept: 'application/vnd.life-api.com; version=1',
      'Content-Type': 'application/json',
    },
  }).then(r => r.json());
}
