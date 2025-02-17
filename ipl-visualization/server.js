const express = require('express');
const cors = require('cors');
const data = require('./ipl-data.json');

const app = express();
app.use(cors());

// Endpoint to fetch data
app.get('/ipl-data', (req, res) => {
    res.json(data);
    console.log(data)
});


app.listen(8000, () => console.log(`Server running on http://localhost:${8000}`));
