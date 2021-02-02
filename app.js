const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// View Engine
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// About Page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog Routes
app.use('/blogs', blogRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: '404 Page' });
});

const username = 'dev-blog-0-admin';
const password = 'admin123';
const dbName = 'dev-blog-0';
const PORT = process.env.PORT || 3000;
const dbURI = `mongodb+srv://${username}:${password}@nodejs.2gw6h.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(PORT, () => {
      console.log('Connected to Database');
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
