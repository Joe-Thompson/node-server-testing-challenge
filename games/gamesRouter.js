const express = require('express');
const helpers = require('./gamesModel');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const game = req.body;
        const newGame =  await helpers.insert(game);
        res.status(201).json(newGame);
    } catch (e) {
        next(e)
    }
});

router.delete('/:id', async (req, res, next) => {
   try {
       const { id } = req.params;
       const gameId = await helpers.findById(id);
       if (!gameId) {
           return res.status(404).json({
               errorMessage: 'Id not found'
           })
       } else {
           await helpers.remove(id);
           res.status(204).json(id);
       }
   } catch (e) {
       next(e)
   }
});

module.exports = router;
