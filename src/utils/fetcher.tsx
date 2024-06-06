const fetcher = (url: string, body: any, method = "GET") => {
  const bodyData = method === 'GET' ? null : { body: JSON.stringify(body) }
  return fetch(url, {
    method: method,
    ...bodyData,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then((res) => res.json());
}
  

export default fetcher;
