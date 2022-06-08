import { Response } from 'express'
const request = require('supertest');
const app = require('../src/index');
const expect = require('chai').expect;

describe('GET /api', () => {
  it('200', () => {
    return request(app)
    .get('/api')
    .then((response: Response) => {
      expect(response.statusCode).to.equal(200);
    });
  });
});
