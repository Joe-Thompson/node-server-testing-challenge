const db = require('../data/config');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(game) {
    const [ id ] = await db('games').insert(game);
    return findById(id);
}

async function update(id, changes) {
    await db('games').update(changes).where('id', id);
    return findById(id)
}

function remove(id) {
    return db('games').where('id', id).del();
}

function getAll() {
    return db('games').select();
}

function findById(id) {
    return db('games')
        .where('id', id)
        .first();
}
