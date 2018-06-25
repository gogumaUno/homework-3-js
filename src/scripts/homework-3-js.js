;(function() {
  function splitAndMerge (str, sp) {
    return str.split(' ').map( el => el.split('').join(sp) ).join(' ');
  };
  
  function convert(hash) {
    return Object.keys(hash).map( key => {
      if(typeof hash[key] === 'object') return [key, convert(hash[key])]; 
      return [key, hash[key]] 
    });
  }
  
  function toCamelCase(str) {
    return str
    .split(/-|_/)
    .map( (el, index) => {
      if(index) {
        el = el.toLowerCase();
        return el[0].toUpperCase() + el.slice(1);
      }
      return el;
    })
    .join('');
  }

  function reverseWords(str) {
    let arr = str.split(' ');

    arr.forEach( (el, index) => {
      el = el.split('');
      for(let i = 0; i < Math.floor(el.length / 2); i++) {
        let temp = el[i];
        el[i] = el[el.length - 1 - i];
        el[el.length - 1 - i] = temp;
      };
      arr[index] = el.join('');
    });

    return arr.join(' ');
  }

  function powChar(chr, exp) {
    for(exp; exp > 1; exp--) {
      chr += chr[0];
    }
    return chr;
  }

  function stringExpansion(str) {
    if(!str || str === ' ') return str;
    let newStr = '';
    str.split('').forEach( (el, index) => {
      if(!Number(el) && el !== '0') {
        if(Number(str[index-1])) {
          return newStr += powChar(el, str[index-1]);
        };
        newStr += el;
      };
    });
    return newStr || str;
  }

  window.splitAndMerge = splitAndMerge;
  window.convert = convert;
  window.toCamelCase = toCamelCase;
  window.reverseWords = reverseWords;
  window.stringExpansion = stringExpansion;
}());
