const express = require('express');
const app = express();
const { displayLangData } = require('./lib/lang');


app.get('/', (req, res) => {

    const processData = async () => {

        const text = unescape(req.query.text);
        const displayText = await displayLangData({ text });

        res.send(displayText);
    }
    
    processData();
});

app.listen(3000);
console.log('Express started on port 3000');