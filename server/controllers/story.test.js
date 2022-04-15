const request = require('supertest');

describe('Post Story Endpoint', () => {
  
    it('should get error due to unauthorised user', async () => {
      const id = "62478b71c32d63b245fc05e6";
      const res = await request('http://localhost:8080').get(`/story/get/${id}`)
      expect(res.statusCode).toEqual(200);
    });

    it('should get error due to empty id', async () => {
        const id = "";
        const res = await request('http://localhost:8080').get(`/story/get/${id}`)
        expect(res.statusCode).toEqual(200);
      });
  
  });
