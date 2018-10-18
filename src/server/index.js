const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const productsBuffer = fs.readFileSync(path.join(__dirname, 'data/products.json'));
const products = JSON.parse(productsBuffer);

const recommendationsBuffer = fs.readFileSync(path.join(__dirname, 'data/recommendations.json'));
const recommendations = JSON.parse(recommendationsBuffer);

const app = express();
app.use(cors());
app.use(morgan('combined'));

app.get('/search/:query', (req, res) => {
  const showSearchResults = products.items.filter(item => item.name.indexOf(req.params.query) !== -1);
  if (showSearchResults) {
    setTimeout(() => res.json(showSearchResults), Math.floor(Math.random * 500));
  } else {
    res.status(200).json([]);
  }
});

app.get('/recommendations/:itemId', (req, res) => {
  const showRecommendedItems = recommendations.items;
  setTimeout(() => res.json(showRecommendedItems), Math.floor(Math.random * 500));
});

//	start server
app.listen(3000, function () {
  console.log('API Server listening at http://localhost:3000');
});
