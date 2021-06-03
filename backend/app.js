const express = require('express')
const app = express()

let books = [
  {
    "id": 0,
    "Title": "HTML is easy",
    "date": "2019-05-30T17:30:31.098Z",
    "ISBN": 123,
    "Description": "A book about HTML"
  },
  {
    "id": 1,
    "Title": "Browser can execute only JavaScript",
    "date": "2019-05-30T18:39:34.091Z",
    "ISBN": 234,
    "Description": "A book about JS"
  },
  {
    "id": 2,
    "Title": "GET and POST are the most important methods of HTTP protocol",
    "date": "2019-05-30T19:20:14.298Z",
    "ISBN": 345,
    "Description": "A book about CRUD operations"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello Books!</h1>')
})

app.get('/api/books/:id', (request, response) => {
  const id = Number(request.params.id)
  const book = books.find(book => book.id === id)
  response.send(book)
})

app.get('/api/books', (request, response) => {
  response.json(books)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})