const express = require('express');
const app = express();
module.exports.app = app;

const router = require('./routes.js')

const PORT = process.env.PORT || 3000;

app.use('/api', router);

app.get('/', (req, res) => res.json({ test: `Works`}));

app.listen(PORT, () => console.log(`Server on port:${PORT}`));