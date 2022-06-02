class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-'\s]/g, "");
  }


  static titleize(str) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let wordsArray = str.split(' ');
    for (let i = 0; i < wordsArray.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(wordsArray[i]));
      } else if (except.includes(wordsArray[i])) {
        result.push(wordsArray[i]);
      } else {
        result.push(this.capitalize(wordsArray[i]));
      }
    }
    return result.join(' ');
  }
}
console.log(Formatter.titleize('where the wild things are'));