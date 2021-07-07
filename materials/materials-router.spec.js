const request = require('supertest');

const server = require('../api/server.js');

describe('materials router', function() {
  describe('GET /api/materials', function() {
    // run the server
    // make GET req to /
    // verify that it returns a 200
    it('should return 200 OK', function() {
      return request(server)
        .get('/api/materials')
        .then(function(res) {
          expect(res.status).toBe(200);
        });
    });

    it('should return JSON formatted response', function() {
      return request(server)
        .get('/api/materials')
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it('should return 201 CREATED', () => {
      return request(server)
        .post('/api/materials')
        .send({
          material: 'cotton',
          quantity: 200,
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it('should return inserted material', () => {
      return request(server)
        .post('/api/materials')
        .send({
          material: 'cotton',
          quantity: 200,
        })
        .then(res => {
          expect(res.body.id).toBeDefined();
          expect(res.body.material).toBe('cotton');
          expect(res.body.quantity).toBe(200);
        });
    });
  });
});
