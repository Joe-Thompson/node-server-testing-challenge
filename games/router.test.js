const supertest = require('supertest');
const server = require('../server');

test('welcome route', async () => {
   const res = await supertest(server).get('/');
   expect(res.statusCode).toBe(200);
   expect(res.type).toBe('application/json');
   expect(res.body.message).toMatch(/game/i);
});

test('post game route', async () => {
    const res = await supertest(server)
        .post('/games')
        .send({name: 'Skyrim', rating: 10});
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe('application/json');
    expect(res.body.name).toBe('Skyrim');
});

test('post game route, missing name', async () => {
   const res = await supertest(server)
       .post('/games')
       .send({rating: 3});
   return expect(Promise.reject(new Error('Server error, please try again')))
       .rejects.toThrow('Server error, please try again')
});

test('remove', async () => {
   const res = await supertest(server)
       .delete('/games/1')
       .send({id: 1});
   expect(res.statusCode).toBe(204);
});

test('remove id not found', async () => {
     await supertest(server)
    .delete('/games/10')
        .send({id: 10});
    return expect(Promise.reject(new Error('Id not found')))
        .rejects.toThrow('Id not found')
});
