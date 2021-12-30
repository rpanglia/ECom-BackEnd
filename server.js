const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sequelize models sync to the database, then server turns on
app.listen(PORT, () => {
  sequelize.sync(() => {
    console.log('Connected to the database!');
  })
  console.log(`App listening on port ${PORT}!`);
});
