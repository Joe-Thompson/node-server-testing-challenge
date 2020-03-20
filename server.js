const express = require('express');
const cors = require('cors');
const gamesRouter = require('./games/gamesRouter');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use('/games', gamesRouter);

server.get('/', (req, res) =>{
    res.json({
        message: "Welcome to the games API!"
    })
});

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        errorMessage: "Server error, please try again"
    })
});

if (!module.parent) {
    server.listen(port, () => {
        console.log(`Running at http://localhost:${port}`)
    })
}

module.exports = server;
