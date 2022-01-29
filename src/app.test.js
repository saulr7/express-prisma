const request = require('supertest');
const App = require('./app');

describe('App', () => {
  const app = new App().build();

  it('responds ping', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe('pong');
  });
});
