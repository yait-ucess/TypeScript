import express from 'express';
const app = express();
app.use((req, res, next) => {
  next();
})
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>')
})
app.use((err, req, res, next) => {
  next();
})
app.listen(3000);