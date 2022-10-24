const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Learning API running');
});

app.listen(port, () => {
    console.log('Learning server running on port', port);
})