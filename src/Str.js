import charMap from './charMap';

export class Str {

  /**
   * Create the Str instance
   *
   * @param  {Str} str
   *
   * @return {void}
   */
  constructor (str) {
    this.str = str || '';
  }

  /**
   * Capitalize the first character in a string.
   *
   * @return  {Str}
   */
  ucfirst () {
    return this.setValue(this.str.charAt(0).toLocaleUpperCase() + this.str.slice(1));
  }

  /**
   * Lowercase the first character in a string.
   *
   * @return  {Str}
   */
  lcfirst () {
    return this.setValue(this.str.charAt(0).toLocaleLowerCase() + this.str.slice(1));
  }

  /**
   * Determine if a given string contains a given string.
   *
   * @param   {String}   val           The needle
   * @param   {Integer}  [position=0]  The position to start
   *
   * @return  {Boolean}
   */
  contains (val, position = 0) {
    return this.str.indexOf(val, position) !== -1;
  }

  /**
   * Limit a string to a given length with a suffix.
   *
   * @param   {Number}  [limit=100]  The limit
   * @param   {String}  [end=…]    The suffix
   *
   * @return  {Str}
   */
  limit (limit = 100, end = '…') {
    return this.setValue(this.str.substring(0, limit) + (this.str.length > limit ? end : ''));
  }

  words (words = 100, end = '…') {
    end = this.str.split(' ').length > words ? end : '';

    return this.setValue(
      this.str.split(' ').splice(0, words).join(' ') + end
      // this.str.replace(new RegExp('(\\w+\\s){' + words + '}', 'g'), "$1" + end)
    );
  }

  /**
   * Determine if the string starts with a given substring.
   *
   * @param   {String}   val           The string to check start
   * @param   {Integer}  [position=0]  The position to start in the string
   *
   * @return  {Boolean}
   */
  startsWith (...args) {
    return String.prototype.startsWith.apply(this.str, args);
  }

  /**
   * Determine if the string ends with a given substring.
   *
   * @param   {String}   val                       The string to check ending
   * @param   {Integer}  [length=this.str.length]  The position to end in the string
   *
   * @return  {Boolean}
   */
  endsWith (...args) {
    return String.prototype.endsWith.apply(this.str, args);
  }

  /**
   * Determine if the string is lowercase.
   *
   * @return  {Boolean}
   */
  isLowerCase () {
    return this.str === this.str.toLowerCase();
  }

  /**
   * Determine if the string is uppercase.
   *
   * @return  {Boolean}
   */
  isUpperCase () {
    return this.str === this.str.toUpperCase();
  }

  /**
   * Strip all whitespace from the string.
   *
   * @return  {Str}
   */
  strip () {
    return this.setValue(this.str.replace(/\s+/g, ''));
  }

  /**
   * Convert the string to Title case.
   *
   * @return  {Str}
   */
  title () {
    return this.setValue(this.str.toLowerCase().replace(/(?:^|\s)\S/g, s => s.toUpperCase()));
  }

  /**
   * Convert the string to Studly case.
   *
   * @return  {Str}
   */
  studly () {
    return new Str(this.str.replace(/[_-]+/g, ' '))
      .title()
      .strip();
  }

  /**
   * Convert the string to Camel case
   *
   * @return  {Str}
   */
  camel () {
    if (/^[a-z0-9]+$/i.test(this.str)) {
      return this;
    }

    return this.studly().lcfirst();
  }

  /**
   * Convert the string to Snake case
   *
   * @param   {String}  [delimeter=_]  The delimeter to insert
   *
   * @return  {Str}
   */
  snake (delimeter = '_') {
    if (! this.isLowerCase()) {
      return new Str(this.str.replace(/([A-Z])/g, (s) => {
        return this.str.charAt(0) === s ? s : `${delimeter}${s}`;
      }).toLowerCase()).strip();
    }

    return this;
  }

  /**
   * Convert a string to kebab case.
   *
   * @return  {Str}
   */
  kebab () {
    return this.snake('-');
  }

  /**
   * Transliterate a UTF-8 value to ASCII.
   *
   * @return  {Str}
   */
  ascii () {
    for (let char in charMap) {
      charMap[char].forEach(c => this.str = this.str.replace(c, char));
    }

    return this;
  }

  /**
   * Generate a URL friendly "slug" from a given string.
   *
   * @param   {String}  [separator='-']
   *
   * @return  {Str}
   */
  slug (separator = '-') {
    return this.setValue(
      this.ascii().chain((str) => {
        return str
          .replace(new RegExp(separator === '-' ? '_' : '-', 'g'), separator)
          .replace(/\s+/g, separator)
          .replace(/[^\w\-]+/g, '')
          .toLowerCase();
      }).strip()
    );
  }

  /**
   * Continue the chain with the ability to mutate the string.
   *
   * @param   {Function}  callback
   *
   * @return  {Str}
   */
  chain (callback) {
    this.str = callback(this.str);

    return this;
  }

  /**
   * Generate a "random" alpha-numeric string.
   *
   * @param   {Number}  [length=32]  The length of the generated string
   *
   * @return  {Str}
   */
  static random (length = 32) {
    let str = '';
    while (str.length < length && length > 0) {
      let r = Math.random();
      str += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
    }

    return new Str(str);
  }

  /**
   * Set the string value.
   *
   * @param   {String}  val
   *
   * @return  {Str}
   */
  setValue (val) {
    this.str = val instanceof Str ? val.get() : val;

    return this;
  }

  /**
   * Get the string value.
   *
   * @return {String}
   */
  get () {
    return this.toString();
  }

  /**
   * Get the string value.
   *
   * @return {String}
   */
  toString () {
    return this.str;
  }

  /**
   * Get the string length property.
   *
   * @return {Integer}
   */
  get length () {
    return this.str.length;
  }
}
