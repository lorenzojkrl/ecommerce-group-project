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
    "title": "HTML and CSS: Design and Build Websites",
    "author": "Jon Ducket",
    "synopsis": "A full-color introduction to the basics of HTML and CSS from the publishers of Wrox! Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach. * Introduces HTML and CSS in a way that makes them accessible to everyone hobbyists, students, and professionals and it s full-color throughout * Utilizes information graphics and lifestyle photography to explain the topics in a simple way that is engaging * Boasts a unique structure that allows you to progress through the chapters from beginning to end or just dip into topics of particular interest at your leisure This educational book is one that you will enjoy picking up, reading, then referring back to. It will make you wish other technical topics were presented in such a simple, attractive and engaging way! This book is also available as part of a set in hardcover - Web Design with HTML, CSS, JavaScript and jQuery, 9781119038634; and in softcover - Web Design with HTML, CSS, JavaScript and jQuery, 9781118907443.",
    "format": "paperback",
    "onOfPages": 512,
    "publisher": " John Wiler & Sons Inc",
    "datePublished": "2018-11-11",
    "ISBN": 9781118008188,
    "dimensions": "237x189x27",
    "weight": 1174,
    "price":16.53,
    "quantity": 5,
    "topic": ["html", "css"]
  },
  {
    "id": 1,
    "title": "JQuery in Easy Steps ",
    "author": "Mike McGrath",
    "format": "paperback",
    "onOfPages": 192,
    "publisher": "Computer Step",
    "datePublished": "2011-02-14",
    "ISBN": 9781840786194,
    "dimensions": "227x186x10",
    "weight": 431,
    "price":10.99,
    "quantity": 3,
    "topic": ["JQuery"]
  },
  {
    "id": 2,
    "title": "Python Pocket Reference",
    "author": "Mark Lutz",
    "synopsis": "A full-color introduction to the basics of HTML and CSS from the publishers of Wrox! Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach. * Introduces HTML and CSS in a way that makes them accessible to everyone hobbyists, students, and professionals and it s full-color throughout * Utilizes information graphics and lifestyle photography to explain the topics in a simple way that is engaging * Boasts a unique structure that allows you to progress through the chapters from beginning to end or just dip into topics of particular interest at your leisure This educational book is one that you will enjoy picking up, reading, then referring back to. It will make you wish other technical topics were presented in such a simple, attractive and engaging way! This book is also available as part of a set in hardcover - Web Design with HTML, CSS, JavaScript and jQuery, 9781119038634; and in softcover - Web Design with HTML, CSS, JavaScript and jQuery, 9781118907443.",
    "format": "paperback",
    "onOfPages": 512,
    "publisher": " John Wiler & Sons Inc",
    "datePublished": "2018-11-11",
    "ISBN": 9781118008188,
    "dimensions": "237x189x27",
    "weight": 1174,
    "price":16.53,
    "quantity": 5,
    "topic": ["html", "css"]
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