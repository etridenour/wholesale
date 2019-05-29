const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/picture', (req, res) => {

})

app.get('/test', (req, res) => {
    console.log('testing')
    res.end();
})


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () { console.log("\n\nlistening for requests on port " + PORT + "\n\n") })