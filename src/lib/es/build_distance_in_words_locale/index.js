function buildDistanceInWordsLocale() {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'menos de un segundo',
      other: 'menos de {{count}} segundos'
    },

    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundos'
    },

    halfAMinute: 'medio minuto',

    lessThanXMinutes: {
      one: 'menos de un minuto',
      other: 'menos de {{count}} minutos'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutos'
    },

    aboutXHours: {
      one: 'hace 1 hora',
      other: 'hace {{count}} horas'
    },

    xHours: {
      one: '1 hora',
      other: '{{count}} horas'
    },

    xDays: {
      one: 'ayer',
      other: 'hace {{count}} días'
    },

    aboutXMonths: {
      one: 'hace 1 mes',
      other: 'hace {{count}} meses'
    },

    xMonths: {
      one: '1 mes',
      other: '{{count}} meses'
    },

    aboutXYears: {
      one: 'hace 1 año',
      other: 'hace {{count}} años'
    },

    xYears: {
      one: '1 año',
      other: '{{count}} años'
    },

    overXYears: {
      one: 'más de 1 año',
      other: 'más de {{count}} años'
    },

    almostXYears: {
      one: 'casi 1 año',
      other: 'casi {{count}} años'
    }
  };

  function localize(token, count, options) {
    options = options || {};

    var result;
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token];
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one;
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'en ' + result;
      } else {
        return 'hace ' + result;
      }
    }

    return result;
  }

  return {
    localize: localize
  };
}

module.exports = buildDistanceInWordsLocale;
