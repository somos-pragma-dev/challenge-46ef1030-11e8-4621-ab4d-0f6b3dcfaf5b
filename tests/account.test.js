const request = require('supertest');
const app = require('../src/index');

describe('Account API', () => {
  it('should create a new account', async () => {
    const res = await request(app)
     .post('/api/accounts')
     .send({
        accountNumber: '1234567890',
        balance: 1000,
        owner: 'John Doe'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('accountNumber', '1234567890');
  });

  it('should get all accounts', async () => {
    const res = await request(app).get('/api/accounts');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get an account by ID', async () => {
    const account = await request(app)
     .post('/api/accounts')
     .send({
        accountNumber: '1234567890',
        balance: 1000,
        owner: 'John Doe'
      });
    const res = await request(app).get(`/api/accounts/${account.body._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', account.body._id);
  });

  it('should update an account', async () => {
    const account = await request(app)
     .post('/api/accounts')
     .send({
        accountNumber: '1234567890',
        balance: 1000,
        owner: 'John Doe'
      });
    const res = await request(app)
     .put(`/api/accounts/${account.body._id}`)
     .send({ balance: 2000 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('balance', 2000);
  });

  it('should delete an account', async () => {
    const account = await request(app)
     .post('/api/accounts')
     .send({
        accountNumber: '1234567890',
        balance: 1000,
        owner: 'John Doe'
      });
    const res = await request(app).delete(`/api/accounts/${account.body._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Account deleted');
  });
});