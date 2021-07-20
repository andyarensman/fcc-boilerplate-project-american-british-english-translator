const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  test('American to British 1', done => {
    var text = 'Mangoes are my favorite fruit.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'Mangoes are my <span class="highlight">favourite</span> fruit.')
    done();
  })

  test('American to British 2', done => {
    var text = 'I ate yogurt for breakfast.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.')
    done();
  })

  test('American to British 3', done => {
    var text = 'We had a party at my friend\'s condo.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'We had a party at my friend\'s <span class="highlight">flat</span>.')
    done();
  })

  test('American to British 4', done => {
    var text = 'Can you toss this in the trashcan for me?';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'Can you toss this in the <span class="highlight">rubbish</span>can for me?')
    done();
  })

  test('American to British 5', done => {
    var text = 'The parking lot was full.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'The <span class="highlight">car park</span> was full.')
    done();
  })

  test('American to British 6', done => {
    var text = 'Like a high tech Rube Goldberg machine.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'Like a high tech <span class="highlight">Heath Robinson device</span>.')
    done();
  })

  test('American to British 7', done => {
    var text = 'To play hooky means to skip class or work.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'To <span class="highlight">bunk off</span> means to skip class or work.')
    done();
  })

  test('American to British 8', done => {
    var text = 'No Mr. Bond, I expect you to die.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'No <span class="highlight">Mr</span> Bond, I expect you to die.')
    done();
  })

  test('American to British 9', done => {
    var text = 'Dr. Grosh will see you now.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), '<span class="highlight">Dr</span> Grosh will see you now.')
    done();
  })

  test('American to British 10', done => {
    var text = 'Lunch is at 12:15 today.';
    var locale = 'american-to-british'
    assert.equal(translator.timeTranslator(text, locale), 'Lunch is at <span class="highlight">12.15</span> today.')
    done();
  })

  //B to A
  test('British to American 1', done => {
    var text = 'We watched the footie match for a while.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), 'We watched the <span class="highlight">soccer</span> match for a while.')
    done();
  })

  test('British to American 2', done => {
    var text = 'Paracetamol takes up to an hour to work.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), '<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.')
    done();
  })

  test('British to American 3', done => {
    var text = 'First, caramelise the onions.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), 'First, <span class="highlight">caramelize</span> the onions.')
    done();
  })

  test('British to American 4', done => {
    var text = 'I spent the bank holiday at the funfair.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), 'I spent the <span class="highlight"><span class="highlight">bar</span>lic holiday</span> at the <span class="highlight">carnival</span>.')
    done();
  })

  test('British to American 5', done => {
    var text = 'I had a bicky then went to the chippy.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.')
    done();
  })

  test('British to American 6', done => {
    var text = 'I\'ve just got bits and bobs in my bum bag.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.')
    done();
  })

  test('British to American 7', done => {
    var text = 'The car boot sale at Boxted Airfield was called off.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.')
    done();
  })

  test('British to American 8', done => {
    var text = 'Have you met Mrs Kalyani?';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), 'Have you met <span class="highlight"><span class="highlight">Mr.</span>s.</span> Kalyani?')
    done();
  })

  test('British to American 9', done => {
    var text = 'Prof Joyner of King\'s College, London.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.')
    done();
  })

  test('British to American 10', done => {
    var text = 'Tea time is usually around 4 or 4.30.';
    var locale = 'british-to-american'
    assert.equal(translator.timeTranslator(text, locale), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.')
    done();
  })

  //hightlight
  test('Highlight 1', done => {
    var text = 'Mangoes are my favorite fruit.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'Mangoes are my <span class="highlight">favourite</span> fruit.')
    done();
  })

  test('Highlight 2', done => {
    var text = 'I ate yogurt for breakfast.';
    var locale = 'american-to-british'
    assert.equal(translator.wordTranslator(text, locale), 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.')
    done();
  })

   test('Highlight 3', done => {
    var text = 'We watched the footie match for a while.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), 'We watched the <span class="highlight">soccer</span> match for a while.')
    done();
  })

  test('Highlight 4', done => {
    var text = 'Paracetamol takes up to an hour to work.';
    var locale = 'british-to-american'
    assert.equal(translator.wordTranslator(text, locale), '<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.')
    done();
  })
});
