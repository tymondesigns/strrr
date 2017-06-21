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
   * @return  {String}
   */
  ucfirst () {
    return this.setValue(this.str.charAt(0).toUpperCase() + this.str.slice(1));
  }

  /**
   * Lowercase the first character in a string.
   *
   * @return  {String}
   */
  lcfirst () {
    return this.setValue(this.str.charAt(0).toLowerCase() + this.str.slice(1));
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
   * @return  {String}
   */
  limit (limit = 100, end = '…') {
    return this.setValue(this.str.substring(0, limit) + (this.str.length > limit ? end : ''));
  }

  /**
   * Generate a "random" alpha-numeric string.
   *
   * @param   {Number}  [length=32]  The length of the generated string
   *
   * @return  {String}
   */
  random (length = 32) {
    let str = '';
    while (str.length < length && length > 0) {
      let r = Math.random();
      str += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
    }

    return this.setValue(str);
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
   * @return  {String}
   */
  strip () {
    return this.setValue(this.str.replace(/\s+/g, ''));
  }

  /**
   * Convert the string to Title case.
   *
   * @return  {String}
   */
  title () {
    return this.setValue(this.str.toLowerCase().replace(/(?:^|\s)\S/g, s => s.toUpperCase()));
  }

  /**
   * Convert the string to Studly case.
   *
   * @return  {String}
   */
  studly () {
    return new Str(this.str.replace(/[_-]+/g, ' '))
      .title()
      .strip();
  }

  /**
   * Convert the string to Camel case
   *
   * @return  {String}
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
   * @return  {String}
   */
  snake (delimeter = '_') {
    if (! this.isLowerCase()) {
      return new Str(this.str.replace(/([A-Z])/g, `${delimeter}$1`).toLowerCase()).strip();
    }

    return this;
  }

  /**
   * Convert a string to kebab case.
   *
   * @return  {String}
   */
  kebab () {
    return this.snake('-');
  }

  /**
   * Set the string value.
   *
   * @param   {String}  val
   *
   * @return  {String}
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
