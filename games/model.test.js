const gameHelpers = require('./gamesModel');
const db = require('../data/config');

beforeEach(async () => {
    await db.seed.run()
});

afterAll(async () => {
    await db.destroy()
});

test('insert', async () => {
   const res = await gameHelpers.insert({
       name: "Fallen Order",
       rating: 10
   });
   expect(res.name).toBe('Fallen Order');
   expect(res.rating).toBe(10);
});

test('update', async () => {
    const res = await gameHelpers.update(1, {
        name: "Dragon Age",
        rating: 9
    });
    expect(res.name).toBe("Dragon Age")
});

test('remove', async () => {
   await gameHelpers.remove(1);
   const games = await db('games').select();
   expect(games).toHaveLength(3)
});

test('get-all', async () => {
   const res =await gameHelpers.getAll();
   expect(res).toHaveLength(4)
});

test('findById', async () => {
    const res = await gameHelpers.findById(1);
    expect(res.name).toMatch(/mlb/i)
});
