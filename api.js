const express = require('express');
const bodyParser = require('body-parser')
const PORT = 5050
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({'Name': 'Shafin'})
    console.log('[/, GET] => 200')
});

app.get('/:id', (req, res) => {
    res.send({'id': req.params.id})
    console.log('[/test, GET] => 200 | [QS] =>', req.params.id)
});

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})