# str
Functional string utilities


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
