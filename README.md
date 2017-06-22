# str
Functional string utilities, inspired by Laravel's `Str` helpers.


## limit
Limit a string Limit a string to a given length with a suffix (ellipsis).

##### Method signature
`limit(limit = 100, end = '…');`

```js
import { str } from 'str';

str('lorem ipsum dolor sit amet').limit(20).get();
// = 'Lorem ipsum dolor si…'
```

## random
Generate a "random" alpha-numeric string.

##### Method signature
`random(length = 32)`

```js
import { random } from 'str';

random().get(); // = 'nKusDo5JIFrI1tJswwzpEyGLpvML1Mxp'
random(16).get(); // = 'Ky6zJuGnGyrnvw1y'
```

## title
Convert the string to Title case.

##### Method signature
`title()`

```js
import { str } from 'str';

str('lorem ipsum dolor sit amet').title().get();
// = 'Lorem Ipsum Dolor Sit Amet'
```

## studly
Convert the string to Studly case.
Also known as [pascal case](https://en.wikipedia.org/wiki/PascalCase)

##### Method signature
`studly()`

```js
import { str } from 'str';

str('lorem_ipsum_dolor_sit_amet').studly().get();
// = 'LoremIpsumDolorSitAmet'
```

## camel
Convert the string to [camel case](https://en.wikipedia.org/wiki/Camel_case)

##### Method signature
`camel()`

```js
import { str } from 'str';

str('lorem_ipsum_dolor_sit_amet').camel().get();
// = 'loremIpsumDolorSitAmet'
```

## snake
Convert the string to [snake case](https://en.wikipedia.org/wiki/Snake_case)

##### Method signature
`snake(delimeter = '_')`

```js
import { str } from 'str';

str('LoremIpsumDolorSitAmet').snake().get();
// = 'lorem_ipsum_dolor_sit_amet'
```

## kebab
Convert the string to kebab case - Which is similar to snake case but with dashes.

##### Method signature
`kebab()`

```js
import { str } from 'str';

str('LoremIpsumDolorSitAmet').kebab().get();
// = 'lorem-ipsum-dolor-sit-amet'
```

## ucfirst
Capitalize the first character in a string.

##### Method signature
`ucfirst()`

```js
import { str } from 'str';

str('foo bar').ucfirst().get(); // = 'Foo bar'
```

## lcfirst
lower case the first character in a string.

##### Method signature
`lcfirst()`

```js
import { str } from 'str';

str('Lorem ipsum').lcfirst().get(); // = 'lorem ipsum'
```

## contains
Determine if a given string contains a given string.

##### Method signature
`contains(val, position = 0)`

```js
import { str } from 'str';

str('foobarbaz').contains('bar'); // = true
str('foobarbaz').contains('bob'); // = false
```

## startsWith
Determine if a given string starts with a given string.

##### Method signature
`startsWith(val, position = 0)`

```js
import { str } from 'str';

str('Lorem ipsum dolor sit amet').startsWith('Lorem') // = true
str('Lorem ipsum dolor sit amet').startsWith('ipsum') // = false
```

## endsWith
Determine if a given string ends with a given string.

##### Method signature
`endsWith(val, position = 0)`

```js
import { str } from 'str';

str('Lorem ipsum dolor sit amet').endsWith('amet'); // = true
str('Lorem ipsum dolor sit amet').endsWith('ipsum'); // = false
```

## isLowerCase
Determine if the string is lowercase.

##### Method signature
`isLowerCase()`

```js
import { str } from 'str';

str('lorem ipsum dolor sit amet').isLowerCase(); // = true
str('Lorem ipsum dolor sit amet').isLowerCase(); // = false
```

## isUpperCase
Determine if the string is uppercase.

##### Method signature
`isUpperCase()`

```js
import { str } from 'str';

str('LORUM').isUpperCase(); // = true
str('LoRuM').isUpperCase(); // = false
```

## strip
Strip all whitespace from a string.

##### Method signature
`strip()`

```js
import { str } from 'str';

str(' Lorem ipsum dolor sit amet  ').strip().get()
// = 'Loremipsumdolorsitamet'
```
