const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res) => {
//     // res.send('<h2>Hello everyone!</h2>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const port =process.env.PORT || 5001;

app.listen (port, () => console.log(`Server started on port ${port}`));