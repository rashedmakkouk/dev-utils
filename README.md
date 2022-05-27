# Dev Utils

Utility library.

## Installation

Install package in your project.

```shell
# NPM
npm install @rashedmakkouk/dev-utils

# Yarn
yarn add @rashedmakkouk/dev-utils
```

## Usage

### Using ES6 module syntax

```javascript
import { module } from '@rashedmakkouk/dev-utils';

module();
```

### Using CommonJS syntax

```javascript
const { module } = require('@rashedmakkouk/dev-utils');

module();
```

## Methods

### `autolinks`

Parses a text string and returns links matching:

- Hashtag **#**
- Mention **@**
- URL **http**

Builds on [autolinker][autolinker-npm] with custom configuration and output.

#### Parameters

| Param               | Required    | Default Value | Description                                 |
|---                  |---          |---            |---                                          |
| `text`              | No          | ''            | Text string.                                |

#### Returns

- `(Object.links)`: Array list of unique words links (e.g. mention, hashtag, url).
- `(Object.matches)`: Array list of all matched links metadata.

#### Example

```javascript
autolinks('The #quick brown @fox.');
// =>
// {
//   "links": [
//     "#quick",
//     "@fox"
//   ],
//   "matches": [
//     {
//       "__jsduckDummyDocProp": null,
//       "matchedText": "#quick",
//       "offset": 4,
//       "tagBuilder": {
//         "newWindow": true,
//         "truncate": {
//           "length": null,
//           "location": "end"
//         },
//         "className": ""
//       },
//       "serviceName": "twitter",
//       "hashtag": "quick"
//     },
//     {
//       "__jsduckDummyDocProp": null,
//       "matchedText": "@fox",
//       "offset": 17,
//       "tagBuilder": {
//         "newWindow": true,
//         "truncate": {
//           "length": null,
//           "location": "end"
//         },
//         "className": ""
//       },
//       "serviceName": "twitter",
//       "mention": "fox"
//     }
//   ]
// }
```

### `delay`

> Promise

Delays executions of a specified piece of code.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `ms`        | Yes         | -             | Duration to delay in milliseconds.                  |
| `race`      | No          | false         | If true, returns a Promise object that is rejected with status 408 Request Timeout. |

#### Returns

- `(Object)`: Returns Promise Object.

#### Example

```javascript
delay(1000, true);
```

### `escape`

SQL input data escape and format for MySQL.

A [sqlstring][sqlstring-npm] wrapper for convenience.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `value`                 | Yes         | -             | Any value.                              |
| `options`               | No          | -             | Object.                                 |
| `options.escapeId`      | No          | false         | Escapes Identifiers such as database table column names and reserved words. |
| `options.parseInteger`  | No          | false         | Parses values such as LIMIT and OFFSET. |
| `options.stripQuote`    | No          | false         | Removes quotes from result; useful for RegExp or query conditions e.g. ASC. |

#### Returns

- `(string)`: Returns escaped string.

#### Example

```javascript
escape('abc', { stripQuote: true });
// => abc
```

### `initials`

Extracts the first character from the first and last words in a string.

Splits at: Splits at: white space, comma, dot, pipe, underscore, dash.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `text`      | No          | ''            | Text string.                                        |

#### Returns

- `(string)`: Returns extracted characters as string.

#### Example

```javascript
initials('John Unknown-Doe');
// => JD
```

### `isBase64`

Validates if supplied mime type and/or base64 string are valid.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `value`                 | Yes         | -             | Any string value.                       |
| `options`               | No          | -             | Object.                                 |
| `options.allowEmpty`    | No          | false         | Returns true if value is empty.         |
| `options.allowMime`     | No          | false         | String may include mime type.           |
| `options.mimeRequired`  | No          | false         | String should include mime type.        |
| `options.urlSafe`       | No          | false         | See [Base64URL][base64-url-safe].       |

#### Returns

- `(boolean)`: Returns true if supplied string passes checks, else false.

#### Example

```javascript
isBase64('data:image/png;base64,<code>', { mimeRequired: true });
// => true
```

### `isValid`

Verifies if supplied payload is valid by defined type.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `isTypeof`              | Yes         | -             | string, array, number, object, jsonStr. |
| `value`                 | No          | -             | Any value.                              |
| `options`               | No          | -             | Object.                                 |
| `options.allowEmpty`    | No          | false         | If true, validates empty, 0, null and undefined values as valid. |

#### Returns

- `(boolean)`: Returns true if supplied payload passes checks, else false.

#### Example

```javascript
isValid('string', 'undefined');
// => false

isValid('string', '', { allowEmpty: true });
// => true

isValid('number', 'abc');
// => false

isValid('number', '123');
// => false

isValid('number', 0);
// => false

isValid('object', ['abc']);
// => false

isValid('object', {}, { allowEmpty: true });
// => true
```

### `joinPath`

Joins list of absolute and relative paths as a string.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `segments`              | Yes         | -             | Path string array value.                |
| `options`               | No          | -             | Object.                                 |
| `options.resolve`       | No          | false         | If true, tries to resolve segments into an absolute path. |

#### Returns

- `(string)`: Returns joined path string.

#### Example

```javascript
joinPath(['/foo', 'bar', 'baz\\abc', './def', '..']);
// => '/foo/bar/baz/abc'
```

### `letterCase`

Formats supplied string to defined case.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `text`                  | Yes         | -             | Text string.                            |
| `options`               | Yes         | -             | Object.                                 |
| `options.letterCase`    | Yes         | -             | lower, upper, sentence, kebab, title.   |
| `options.separators`    | No          | -             | Replaces supplied symbols with white space. |

#### Returns

- `(string)`: Returns formatted string.

#### Example

```javascript
letterCase('_the   quiCK--brown     FOx_!', { letterCase: 'sentence' });
// => '_The   quick--brown     fox_!'

letterCase('the #quiCK brown FOx!', { letterCase: 'kebab' });
// => 'the-quick-brown-fox'

// Applies custom separators if supplied, else defaults to: [_-\s]+
letterCase('_the   quiCK--brown     FOx_!', { letterCase: 'title' });
// => 'The Quick Brown Fox!'
```

### `ms`

Parses a number representation or a string time period (e.g. 1h, 2d) to Unix Timestamp.

- d: day.
- h: hour.
- m: month.
- ms: millisecond.
- s: second.
- w: week.
- y: year.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `span`                  | Yes         | -             | d, h, m, ms, s, w, y.                   |

#### Returns

- `(number)`: Returns time representation in seconds, else parses value as integer.

#### Example

```javascript
ms('1hr');
// => 3600

ms('1000');
// => 1000
```

### `normalize`

Normalizes payload by defined object attribute.

> Payload data needs to be consistent and has similar data structure to avoid unexpected results,
> specifically defined `idAttribute` (e.g. results from a database query).

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `key`                   | Yes         | -             | Property name to move records to.       |
| `payload`               | Yes         | -             | Object or array of objects.             |
| `options`               | No          | -             | Object.                                 |
| `options.idAttribute`   | No          | id            | Property to normalize records based on. |

#### Returns

- `(Object.entities)`: Normalized data objects.
- `(Object.result)`: List of data idAttributes.

#### Example

```javascript
// Array payload.
normalize('posts', [{ id: 1, title: 'abc' }, { id: 2, title: 'def' }], { idAttribute: 'uid' });
// => 
// {
//   entities: {
//     posts: {
//       1: { uid: 1, title: 'abc' },
//       2: { uid: 2, title: 'def' }
//     },
//   },
//   result: [1,2]
// }

// Object payload.
normalize('posts', { id: 1, title: 'abc' });
// => 
// {
//   entities: {
//     posts: {
//       1: { id: 1, title: 'abc' }
//     },
//   },
//   result: 1
// }
```

### `parseUrl`

Parses URL string segments including query string values, if any.

A [url-parse][url-parse-npm] wrapper for convenience.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `url`       | Yes         | -             | Text string.                                        |

#### Returns

- `(Object)`: Returns parsed URL object.

#### Example

```javascript
parseUrl('https://localhost:8000/foo/bar?firstName=John&lastName=Doe');
// => 
// {
//   "slashes": true,
//   "protocol": "https:",
//   "hash": "",
//   "query": {
//     "firstName": "John",
//     "lastName": "Doe"
//   },
//   "pathname": "/foo/bar",
//   "auth": "",
//   "host": "localhost:8000",
//   "port": "8000",
//   "hostname": "localhost",
//   "password": "",
//   "username": "",
//   "origin": "https://localhost:8000",
//   "href": "https://localhost:8000/foo/bar?firstName=John&lastName=Doe"
// }
```

### `random`

Generates a random string with customizable options.

- filename: File names stored in databases.
- number: Number between defined min and max (See [Math.random][math-random-mdn]).
- title: Content or post random title.
- temp: File names stored in temporary or cache locations.
- uuid: v4

#### Parameters

| Param             | Required    | Default Value | Description                                   |
|---                |---          |---            |---                                            |
| `type`            | Yes         | -             | filename, number, title, temp, uuid.          |
| `options`         | No          | -             | Object.                                       |
| `options.min`     | No          | 0             | If type is number, minimum value to start from. |
| `options.max`     | No          | 1             | If type is number, maximum value to end at.   |
| `options.prefix`  | No          | -             | String to add to the beginning of the result. |
| `options.suffix`  | No          | -             | String to add to the end of the result.       |

#### Returns

- `(string|number)`: Returns generated string or number.

#### Example

```javascript
random('filename', { prefix: 'post' });
// => post_2018-01-01_12-00-00_7f2a79ba-962e-4b35-96d0-28xf1d025107

random('number', { min: 1000, max: 2000 });
// => 1784

random('title', { prefix: 'post' });
// => post_2018-01-01_12-00-00

random('temp');
// => 2018-01-01_12-00-00_efc7438f-0a4d-4538-af87-b6984xe04688

random('uuid');
// => 7e0ea78d-c170-4449-93fb-f5caxb952752
```

### `sanitize`

Trims white spaces and removes HTML tags.

> Uses: [trimWhitespace](#trimwhitespace)

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `text`      | Yes         | -             | Text string.                                        |

#### Returns

- `(string)`: Returns sanitized string.

#### Example

```javascript
sanitize('<script>"the__   #quicK-- BROWN     @foX_".js</script> <html><div>Html code</div></html>');
// => "the__ #quicK-- BROWN @foX_".js Html code
```

### `singular`

Trims last character if ends with `s` or replaces `ies` with `y`.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `text`      | Yes         | -             | Text string.                                        |

#### Returns

- `(string)`: Returns trimmed text.

#### Example

```javascript
singular('posts');
// => post

singular('commodities');
// => commodity

singular({ key: 'posts' });
// => ''
```

### `splitArray`

Splits any array to chunks by supplied size.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `array`     | Yes         | -             | Any array.                                          |
| `size`      | No          | -             | Size of each array chunk; bypasses split if empty.  |

#### Returns

- `(Array)`: Returns new array chunks.

#### Example

```javascript
splitArray([{ id: 1, title: 'abc' }, { id: 2, title: 'def' }]);
// =>
// [
//   { "id": 1, "title": "name1" },
//   { "id": 2, "title": "name2" }
// ]

splitArray([{ id: 1, title: 'abc' }, { id: 2, title: 'def' }], 2);
// =>
// [
//   [{ "id": 1, "title": "name1" }],
//   [{ "id": 2, "title": "name2" }]
// ]
```

### `timestamp`

Parses any date value to a timestamp with predefined or custom format.

- datetime: dddd, MMMM D at h:mA
- fromNow: Relative time.
- short: ddd, MMM D
- sql: YYYY-MM-DD HH:mm:ss

#### Parameters

| Param             | Required    | Default Value | Description                                   |
|---                |---          |---            |---                                            |
| `date`            | Yes         | -             | Date string, Date object, Unix Timestamp.     |
| `options`         | No          | -             | Object.                                       |
| `options.format`  | No          | DD/MM/YYYY    | datetime, fromNow, short, sql, [Moment][moment-format]. |

#### Returns

- `(string)`: Returns formatted timestamp.

#### Example

```javascript
timestamp(Date.now());
// => 31/12/2018

timestamp(new Date('12/31/2018'), { format: 'datetime' });
// => Monday, December 31 at 12:00AM

timestamp(Date(), { format: 'fromNow' });
// => a few seconds ago

timestamp(moment('12/31/2018'), { format: 'short' });
// => Mon, Dec 31 12:00AM

timestamp('12/31/2018 12:00', { format: 'sql' });
// => 2018-12-31 12:00:00
```

### `toArray`

Converts any value to array.

#### Parameters

| Param               | Required    | Default Value | Description                                 |
|---                  |---          |---            |---                                          |
| `value`             | Yes         | -             | Any value.                                  |
| `options`           | No          | -             | Object.                                     |
| `options.separator` | No          | ,             | The pattern where the split should occur.   |
| `options.toNumber`  | No          | false         | If true, maps array values as `Number`.     |

#### Returns

- `(Array)`: Returns array based on supplied params.

#### Example

```javascript
toArray('1', { toNumber: true });
// => [1]

toArray(['a', 'b', 'c']);
// => ['a', 'b', 'c']

toArray({ id: 1, title: 'name1' });
// => [{ id: 1, title: 'name1' }]

toArray('1,2,3');
// => ['1', '2', '3']

toArray('  a-2-3  -', { toNumber: true, separator: '-' });
// => [NaN, 2, 3]
```

### `toNumeric`

Converts value to and validates as number.

#### Parameters

| Param               | Required    | Default Value | Description                                 |
|---                  |---          |---            |---                                          |
| `value`             | Yes         | -             | Number representation; if null, returns 0.  |
| `options`           | No          | -             | Object.                                     |
| `options.decimal`   | No          | true          | If true, retains decimal point.             |
| `options.math`      | No          | -             | trunc, ceil, round, floor.                  |

#### Returns

- `(number)`: Returns formatted number.

#### Example

```javascript
toNumeric('1.3');
// => 1.3

toNumeric(1.3);
// => 1.3

toNumeric('1.3', { decimal: false });
// => 1

toNumeric('1.3', { math: 'ceil' });
// => 2

toNumeric(1.3, { math: 'floor' });
// => 1

toNumeric(['1.3', 1], { math: 'floor' });
// => NaN

toNumeric({ 0: 1 });
// => NaN
```

### `toRGBa`

Converts color from Name or HEX code to RGBa value.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `color`     | Yes         | -             | Can be Name or HEX code (e.g. white, #DDD).         |
| `alpha`     | No          | 1             | Set custom alpha value.                             |

#### Returns

- `(string)`: Returns RGBa value.

#### Example

```javascript
toRGBa('purple');
// => rgba(128,0,128,1)

toRGBa('#DDD', 0.5);
// => rgba(221,221,221,0.5)
```

### `trimWhitespace`

Removes leading and trailing spaces and replaces multiple white spaces, tabs and newlines with one
space.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `text`      | Yes         | -             | Text string.                                        |

#### Returns

- `(string)`: Returns trimmed text.

#### Example

```javascript
trimWhitespace('   _the   quiCK--brown     FOx !');
// => _the quiCK--brown FOx !
```

## Changelog

Check [Changelog][changelog] for a detailed list of changes.

## Community

Head over to [Discussions][discussions] where you can ask questions, request new features or voice
your ideas and suggestions.

- [`Ideas`][discussions-ideas]
- [`Q&A`][discussions-q-a]

## License

This package is available under the [MIT license][mit-license]. It also includes external libraries
that are available under a variety of licenses. See [LICENSE][mit-license-repo] for the full
license text.

[discussions]: https://github.com/rashedmakkouk/dev-utils/discussions
[discussions-ideas]: https://github.com/rashedmakkouk/dev-utils/discussions/categories/ideas
[discussions-q-a]: https://github.com/rashedmakkouk/dev-utils/discussions/categories/q-a
[issues]: https://github.com/rashedmakkouk/dev-utils/issues
[mit-license]:https://opensource.org/licenses/MIT
[mit-license-repo]: https://github.com/rashedmakkouk/dev-utils/blob/main/LICENSE
[changelog]: https://github.com/rashedmakkouk/dev-utils/blob/main/CHANGELOG.md
[sqlstring-npm]: https://www.npmjs.com/package/sqlstring
[moment-format]: https://momentjs.com/docs/#/displaying/format/
[base64-url-safe]: https://base64.guru/standards/base64url
[url-parse-npm]: https://www.npmjs.com/package/url-parse
[math-random-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[autolinker-npm]: https://www.npmjs.com/package/autolinker
