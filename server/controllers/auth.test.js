const request = require('supertest');

describe('Post Auth Endpoints', () => {
  it('should create not create a new user and show error', async () => {
    const res = await request('http://localhost:8080')
      .post('/auth/register')
      .send({
        username: "denniss test",
        email: "dennistsst@gmail.com",
        password: "dennis123"
      });
    expect(res.statusCode).toEqual(400);
  });

  it('should login an existing user', async () => {
    const res = await request('http://localhost:8080')
      .post('/auth/login')
      .send({
        email: "dennistsst@gmail.com",
        password: "dennis123"
      });
    expect(res.statusCode).toEqual(200);
  });

});