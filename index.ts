import express, { Response } from 'express';

const app = express();
// const port = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world by demo OpenAI API using secret_01_info');
});

app.get('/some-route', (req: Request, res: Response) => {
  const number1 = Math.floor(Math.random() * 10); // Random integer in range 0-9
  const sum = number1 + number2;
  res.send(`Sum of random integers: ${sum}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
