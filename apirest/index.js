'use strict'

const app = require('./app');
const port = 3800;
//starting the server
app.listen(port, () => {
    console.log('Server on port 3800');
});