require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

//Import routes
const usersRoute = require('./server/routes/usersRoutes');
const profesionalsRoute = require('./server/routes/profesionalsRoutes');
const macrosRoute = require('./server/routes/macrosRoutes');
const foodRoute = require('./server/routes/foodRoutes');

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes
app.use('/api/v1', usersRoute);
app.use('/api/v1', profesionalsRoute);
app.use('/api/v1', macrosRoute);
app.use('/api/v1', foodRoute);
app.get('/', (req, res) => {
    res.send('Server up & running ✅');
  })



app.listen(PORT, () => console.log(`Listening on port:${PORT}`))
