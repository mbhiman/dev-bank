const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.post('/calculate', (req, res) => {
  const { principal, rate, time } = req.body;

  if (!principal || !rate || !time) {
    return res.status(400).send({ error: 'Please provide principal, rate, and time' });
  }

  const interest = (principal * rate * time) / 100;
  res.send({ interest });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
