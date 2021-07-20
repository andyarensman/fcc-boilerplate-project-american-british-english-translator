'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      var text = req.body.text;
      var locale = req.body.locale;
      
      //if missing anything
      if (req.body.locale == undefined || req.body.text == undefined) {
        return res.json({ error: 'Required field(s) missing'})
      } else if (text == '') {
        return res.json({ error: 'No text to translate' })
      } else if (locale != 'american-to-british' && locale != 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field'})
      }

      var returnObject = {
        text: text,
        translation: text
      }
      
      returnObject.translation = translator.wordTranslator(returnObject.translation, locale)
      returnObject.translation = translator.timeTranslator(returnObject.translation, locale)


      //If nothing changes
      if (text === returnObject.translation) {
        returnObject.translation = "Everything looks good to me!"
      }

      res.json(returnObject)
      
    });
};
