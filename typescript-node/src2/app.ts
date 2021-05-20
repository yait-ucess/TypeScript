import express { Request, Response, NextFunction  } from 'express';
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  next();
})
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>')
})
app.post('/', (req, res, next) => {
  res.send(`<h1>I got ${req.body}</h1>`)
})
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  next();
})
app.listen(3000);