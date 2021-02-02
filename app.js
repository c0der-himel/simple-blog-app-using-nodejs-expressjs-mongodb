const express = require('express');
const morgan = require('morgan');

const app = express();

// View Engine
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));

// Home Page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About Page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Create Blog
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create Blog' });
});

// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: '404 Page' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
