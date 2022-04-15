const request = require('supertest');

describe('Post Log Endpoints', () => {
  
    it('should get error due to unauthorised user', async () => {
      const res = await request('http://localhost:8080').get('/logs')
      expect(res.statusCode).toEqual(200);
    });
    
  
  });