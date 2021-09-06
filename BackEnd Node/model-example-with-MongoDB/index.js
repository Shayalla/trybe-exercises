// index.js

const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
  
    const author = await Author.findById(id);
  
    if (!author) return res.status(404).json({ message: 'Not found' });
  
    res.status(200).json(author);
  });

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    return res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});


app.get('/books/search', async (req, res) => {
    const { author_id } = req.query;
    const books = await Book.getAllById(author_id);
    if (!books || books.length === 0) return res.status(404).json({ message: 'Book not found!'});

    return res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
  
    const books = await Book.findById(id);
  
    if (books.length === 0) return res.status(404).json({ message: 'Not found' });
  
    res.status(200).json(books);
  });

app.get('/books', async (_req, res) => {
    const books = await Book.getAll();

    return res.status(200).json(books);
})

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});