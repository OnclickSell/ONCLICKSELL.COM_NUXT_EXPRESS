
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Api settings and routes
const userRoutes = require('./api/routes/user');

const listingsRoutes = require('./api/routes/listings');

const authRoutes = require('./api/routes/authentication');

const errorRouter = require('./api/routes/errorRouter');

const reviewsRoutes = require('./api/routes/review')

const ticketRoutes = require('./api/routes/ticket')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (res.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use('/api/v1/test/error', errorRouter)
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/listings', listingsRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/reviews', reviewsRoutes);
app.use('/api/v1/tickets', ticketRoutes);

// handles all global errors
app.use(function(error, req, res, next) {
  res.json({
    error: error.message,
    message: 'it\'s working'
  }, 400)
})


// app.use(function handleAssertionError(error, req, res, next) {
//   if (error instanceof AssertionError) {
//     return res.status(400).json({
//       type: 'AssertionError',
//       message: error.message
//     });
//   }
//   next(error);
// });

// app.use(function handleDatabaseError(error, req, res, next) {
//   if (error instanceof MongoError) {
//     return res.status(503).json({
//       type: 'MongoError',
//       message: error.message
//     });
//   }
//   next(error);
// });




async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
