const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

var americanKeys = Object.keys(americanOnly)
                        .concat(Object.keys(americanToBritishSpelling), 
                        Object.keys(americanToBritishTitles));
var americanValues = Object.values(britishOnly);
var britishKeys = Object.keys(britishOnly);
var britishValues  = Object.values(americanOnly)
                        .concat(Object.values(americanToBritishSpelling), 
                        Object.values(americanToBritishTitles));

var translatorObject = {
  ...americanOnly,
  ...americanToBritishSpelling,
  ...americanToBritishTitles,
  ...britishOnly
}

//get key from value
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

//class
class Translator {

  wordTranslator(textString, locale) {
    var newText = textString

    if (locale === 'american-to-british') {
      americanKeys.forEach(key => {
        newText = newText.replace(key, '<span class="highlight">' + translatorObject[key] + '</span>')
      })
      americanValues.forEach(value => {
        newText = newText.replace(value, '<span class="highlight">' + getKeyByValue(translatorObject, value) + '</span>')
      })
    } else {
      britishKeys.forEach(key => {
        newText = newText.replace(key, '<span class="highlight">' + translatorObject[key] + '</span>')
      })
      britishValues.forEach(value => {
        newText = newText.replace(value, '<span class="highlight">' + getKeyByValue(translatorObject, value) + '</span>')
      })
    }

    return newText;
  }

  timeTranslator(textString, locale) {
    
    var timeRegEx = /\d{1,2}(:||\.)\d{2}/g
    
    var newText = textString
    var times = newText.match(timeRegEx)
    if (times) {
      times.forEach(time => {
        if (locale === 'american-to-british') {
          newText = newText.replace(time, '<span class="highlight">' + time.replace(':', '.') + '</span>')
        } else {
          newText = newText.replace(time, '<span class="highlight">' + time.replace('.', ':') + '</span>')
        }
      })
    }
    console.log(newText)
    return newText;
  }

  titleTranslator(textString, locale) {
    var newText = textString

  }
}

module.exports = Translator;