const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  
  test('POST: Translation with text and locale fields', done => {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: 'Mangoes are my favorite fruit.',
      locale: 'american-to-british'
    })
    .end((error, res) => {
      assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.')
      done();
    })
  })

  test('POST: Translation with text and invalid locale field', done => {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: 'Mangoes are my favorite fruit.',
      locale: 'asdasd-to-british'
    })
    .end((error, res) => {
      assert.equal(res.body.error, 'Invalid value for locale field')
      done();
    })
  })

  test('POST: Translation with missing text field', done => {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: '',
      locale: 'american-to-british'
    })
    .end((error, res) => {
      assert.equal(res.body.error, 'No text to translate')
      done();
    })
  })

  test('POST: Translation with missing locale field', done => {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: 'Mangoes are my favorite fruit.',
    })
    .end((error, res) => {
      assert.equal(res.body.error, 'Required field(s) missing')
      done();
    })
  })

   test('POST: Translation with empty text', done => {
    chai.request(server)
    .post('/api/translate')
    .send({
    })
    .end((error, res) => {
      assert.equal(res.body.error, 'Required field(s) missing')
      done();
    })
  })

  test('POST: Translation with text that needs no translation', done => {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: 'This is fine',
      locale: 'american-to-british'
    })
    .end((error, res) => {
      assert.equal(res.body.translation, 'Everything looks good to me!')
      done();
    })
  })


});
