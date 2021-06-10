const baseUrl = 'http://localhost:3001/api/books'

export const getAll = () => {
    fetch(baseUrl)
    .then(function(response){ return response.json(); })
    .then(function(data) {
        const items = data;
        console.log(items)
    })
  //return data;
}

// ...

//export default  { getAll };