const baseUrl = 'http://localhost:3001/api/books';

// eslint-disable-next-line import/prefer-default-export
export const getAll = () => {
  // eslint-disable-next-line no-undef
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      const items = data;
      console.log(items);
    });
  // return data;
};

// ...

// export default  { getAll };
