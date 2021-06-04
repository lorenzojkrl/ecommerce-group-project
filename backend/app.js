const { request, response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

let books = [
  {
    "id": 0,
    "Title": "HTML is easy",
    "date": "2019-05-30T17:30:31.098Z",
    "ISBN": 123,
    "Description": "A book about HTML",
    "Reviews": ['review1', 'review2', 'review3']
  },
  {
    "id": 1,
    "Title": "Browser can execute only JavaScript",
    "date": "2019-05-30T18:39:34.091Z",
    "ISBN": 234,
    "Description": "A book about JS",
    "Reviews": ['review1', 'review2', 'review3']
  },
  {
    "id": 2,
    "Title": "GET and POST are the most important methods of HTTP protocol",
    "date": "2019-05-30T19:20:14.298Z",
    "ISBN": 345,
    "Description": "A book about CRUD operations",
    "Reviews": []
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello Books!</h1>')
})

app.get('/api/books/:id', (request, response) => {
  const id = Number(request.params.id)
  const book = books.find(book => book.id === id)
  book ? response.send(book) : response.status(404).end()
})

app.get('/api/books', (request, response) => {
  response.json(books)
})

app.delete('/api/books/:id', (request, response) => {
  const id = Number(request.params.id)
  books = books.filter(book => book.id !== id)

  response.status(204).end()
})

app.post('/api/books', (request, response) => {
  const newBook = request.body
  const maxId = books.length > 0
    ? Math.max(...books.map(book => book.id))
    : 0
  if (!newBook.Title || !newBook.ISBN) {
    return response.status(400).json({
      error: `${!newBook.Title
        ? !newBook.ISBN ? 'Title and ISBN missing' : 'Title is missing'
        : 'ISBN is missing'
        }`
    })
  }

  newBook.id = maxId + 1

  books = books.concat([newBook])
  response.json(newBook)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})