const express = require('express');
const app = express();
const auth = require('./routes/authApi')
const bodyparser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())

app.use('/auth', auth);

// app.get('/', (req, res) => {
//     res.send("Hi");
// });

app.listen(4000, 'localhost', () => {
    console.log("SERVER IS RUNNING AT PORT : 4000");
});
