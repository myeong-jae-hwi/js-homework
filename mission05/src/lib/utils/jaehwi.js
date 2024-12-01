const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export async function jaehwi(options) {
  const config = {
    ...defaultOptions.body,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const { url, ...restOptions } = config;

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
}

// const a = jaehwi({
//   // method: 'POST',
//   url: END_POINT,
//   // body: { name: 'jaehwi', age: 25 },
// });

// const response = await fetch(END_POINT, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: 'jaehwi', age: 25 }),
// });

// const data = await response.json();
// console.log(data);

jaehwi.get = (url, option) => {
  return jaehwi({
    method: 'GET',
    url,
    ...option,
  });
};

jaehwi.delete = (url, options) => {
  return jaehwi({
    method: 'DELETE',
    url,
    ...options,
  });
};
