const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());

const JSON_DATA = `${__dirname}/dev-data/data/tours-simple.json`;

const tours = JSON.parse(fs.readFileSync(JSON_DATA));

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tour,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(JSON_DATA, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: 'success',
      data: {
        tours: newTour,
      },
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
