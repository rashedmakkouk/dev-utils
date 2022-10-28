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

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `text`              | string  | No          | ''      | Text to parse.                          |

#### Returns

- `(Object.links)`: Array list of unique words links (e.g. mention, hashtag, url).
- `(Object.matches)`: Array list of all matched links metadata.

#### Example

```javascript
autolinks('The #quick brown @fox.');
// Result.
{
  links: [
    "#quick",
    "@fox"
  ],
  matches: [
    {
      "__jsduckDummyDocProp": null,
      matchedText: "#quick",
      offset: 4,
      tagBuilder: {
        newWindow: true,
        truncate: {
          length: null,
          location: "end"
        },
        className: ""
      },
      serviceName: "twitter",
      hashtag: "quick"
    },
    {
      "__jsduckDummyDocProp": null,
      matchedText: "@fox",
      offset: 17,
      tagBuilder: {
        newWindow: true,
        truncate: {
          length: null,
          location: "end"
        },
        className: ""
      },
      serviceName: "twitter",
      mention: "fox"
    }
  ]
}
```

### `delay` *(Promise)*

Delays executions of a specified piece of code.

#### Parameters

| Param       | Type    | Required    | Default | Description                                     |
|---          |---      |---          |---      |---                                              |
| `ms`        | number  | Yes         | -       | Duration to delay in milliseconds.              |
| `race`      | boolean | No          | false   | If true, returns a Promise object that is rejected with status 408 Request Timeout. |

#### Returns

- `(Object)`: Returns Promise Object.

#### Example

```javascript
try {
  await delay(1000, true);
} catch (error) {
  // Handle rejected Promise.
}
```

### `escape`

SQL input data escape and format for MySQL.

A [sqlstring][sqlstring-npm] wrapper for convenience.

#### Parameters

| Param                   | Type    | Required    | Default | Description                         |
|---                      |---      |---          |---      |---                                  |
| `value`                 | Any     | Yes         | -       | Data to escape.                     |
| `options`               | object  | No          | -       | Custom options to apply.            |
| `options.escapeId`      | boolean | No          | false   | Escapes Identifiers such as database table column names and reserved words. |
| `options.parseInteger`  | boolean | No          | false   | Parses values such as LIMIT and OFFSET. |
| `options.stripQuote`    | boolean | No          | false   | Removes quotes from result; useful for RegExp or query conditions e.g. ASC. |

#### Returns

- `(string)`: Returns escaped string.

#### Example

```javascript
escape('abc', { stripQuote: true });
// Result.
abc
```

### `initials`

Extracts the first character from the first and last words in a string.

Splits at: Splits at: white space, comma, dot, pipe, underscore, dash.

#### Parameters

| Param       | Type    | Required    | Default | Description                                     |
|---          |---      |---          |---      |---                                              |
| `text`      | string  | No          | ''      | Text to extract characters from.                |

#### Returns

- `(string)`: Returns extracted characters as string.

#### Example

```javascript
initials('John Unknown-Doe');
// Result.
'JD'
```

### `isBase64`

Validates if supplied mime type and/or base64 string are valid.

#### Parameters

| Param                   | Type    | Required    | Default | Description                         |
|---                      |---      |---          |---      |---                                  |
| `value`                 | string  | Yes         | -       | Base64 value.                       |
| `options`               | object  | No          | -       | Custom options to apply.            |
| `options.allowEmpty`    | boolean | No          | false   | Returns true if value is empty.     |
| `options.allowMime`     | boolean | No          | false   | String may include mime type.       |
| `options.mimeRequired`  | boolean | No          | false   | String should include mime type.    |
| `options.urlSafe`       | boolean | No          | false   | See [Base64URL][base64-url-safe].   |

#### Returns

- `(boolean)`: Returns `true` if supplied string passes checks, else `false`.

#### Example

```javascript
isBase64('data:image/png;base64,<code>', { mimeRequired: true });
// Result.
true
```

### `isValid`

Verifies if supplied payload is valid by defined type.

#### Parameters

| Param                   | Type    | Required    | Default | Description                         |
|---                      |---      |---          |---      |---                                  |
| `isTypeof`              | string  | Yes         | -       | string, array, number, object, jsonStr. |
| `value`                 | Any     | No          | -       | Data to validate.                   |
| `options`               | object  | No          | -       | Custom options to apply.            |
| `options.allowEmpty`    | boolean | No          | false   | If true, validates empty, 0, null and undefined values as valid. |

#### Returns

- `(boolean)`: Returns `true` if supplied payload passes checks, else `false`.

#### Example

```javascript
isValid('string', 'undefined');
// Result.
false

isValid('string', '', { allowEmpty: true });
// Result.
true

isValid('number', 'abc');
// Result.
false

isValid('number', '123');
// Result.
false

isValid('number', 0);
// Result.
false

isValid('object', ['abc']);
// Result.
false

isValid('object', {}, { allowEmpty: true });
// Result.
true
```

### `joinPath`

Joins list of absolute and relative paths as a string.

#### Parameters

| Param                   | Type    | Required    | Default | Description                         |
|---                      |---      |---          |---      |---                                  |
| `segments`              | Array   | Yes         | -       | List of paths to join.              |
| `options`               | object  | No          | -       | Custom options to apply.            |
| `options.resolve`       | boolean | No          | false   | If true, tries to resolve segments into an absolute path. |

#### Returns

- `(string)`: Returns joined path string.

#### Example

```javascript
joinPath(['/foo', 'bar', 'baz\\abc', './def', '..']);
// Result.
'/foo/bar/baz/abc'
```

### `letterCase`

Formats supplied string to defined case.

#### Parameters

| Param                   | Type    | Required    | Default | Description                         |
|---                      |---      |---          |---      |---                                  |
| `text`                  | string  | Yes         | -       | Text to format.                     |
| `options`               | object  | Yes         | -       | Custom options to apply.            |
| `options.letterCase`    | string  | Yes         | -       | lower, upper, sentence, kebab, title. |
| `options.separators`    | Array   | No          | -       | Replaces specified symbols with white space. |

#### Returns

- `(string)`: Returns formatted string.

#### Example

```javascript
letterCase('_the   quiCK--brown     FOx_!', { letterCase: 'sentence' });
// Result.
'_The   quick--brown     fox_!'

letterCase('the #quiCK brown FOx!', { letterCase: 'kebab' });
// Result.
'the-quick-brown-fox'

// Applies custom separators if supplied, else defaults to: [_-\s]+
letterCase('_the   quiCK--brown     FOx_!', { letterCase: 'title' });
// Result.
'The Quick Brown Fox!'
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

| Param                   | Type    | Required    | Default | Description                         |
|---                      |---      |---          |---      |---                                  |
| `span`                  | string \| number  | Yes         | -             | d, h, m, ms, s, w, y. |

#### Returns

- `(number)`: Returns time representation in seconds, else parses value as integer.

#### Example

```javascript
ms('1hr');
// Result.
3600

ms('1000');
// Result.
1000
```

### `normalize`

Normalizes payload by defined object attribute.

> Payload data needs to be consistent and has similar data structure to avoid unexpected results,
> specifically defined `idAttribute` (e.g. results from a database query).

#### Parameters

| Param                   | Type    | Required    | Default | Description                         |
|---                      |---      |---          |---      |---                                  |
| `key`                   | string  | Yes         | -       | Object property name to move records to. |
| `payload`               | Array \| object | Yes         | -             | Data to normalize.    |
| `options`               | object  | No          | -       | Custom options to apply.            |
| `options.idAttribute`   | string  | No          | id      | Object property name to normalize records based on. |

#### Returns

- `(Object.entities)`: Normalized data objects.
- `(Object.result)`: List of data idAttributes.

#### Example

```javascript
// Array payload.
normalize('posts', [{ id: 1, title: 'abc' }, { id: 2, title: 'def' }], { idAttribute: 'uid' });
// Result.
{
  entities: {
    posts: {
      1: { uid: 1, title: 'abc' },
      2: { uid: 2, title: 'def' }
    },
  },
  result: [1,2]
}

// Object payload.
normalize('posts', { id: 1, title: 'abc' });
// Result.
{
  entities: {
    posts: {
      1: { id: 1, title: 'abc' }
    },
  },
  result: 1
}
```

### `parseUrl`

Parses URL string segments including query string values, if any.

A [url-parse][url-parse-npm] wrapper for convenience.

#### Parameters

| Param       | Type    | Required    | Default | Description                                     |
|---          |---      |---          |---      |---                                              |
| `url`       | string  | Yes         | -       | URL to parse.                                   |

#### Returns

- `(Object)`: Returns parsed URL object.

#### Example

```javascript
parseUrl('https://localhost:8000/foo/bar?firstName=John&lastName=Doe');
// Result.
{
  slashes: true,
  protocol: "https:",
  hash: "",
  query: {
    firstName: "John",
    lastName: "Doe"
  },
  pathname: "/foo/bar",
  auth: "",
  host: "localhost:8000",
  port: "8000",
  hostname: "localhost",
  password: "",
  username: "",
  origin: "https://localhost:8000",
  href: "https://localhost:8000/foo/bar?firstName=John&lastName=Doe"
}
```

### `random`

Generates a random string with customizable options.

- filename: File names stored in databases.
- number: Number between defined min and max (See [Math.random][math-random-mdn]).
- title: Content or post random title.
- temp: File names stored in temporary or cache locations.
- uuid: v4.

This helper uses [uuid][uuid-npm] to generate UUIDs in options `filename`, `temp` and `uuid`; for
known issues, see [Duplicate UUIDs (Googlebot)][uuid-github-duplicate-uuids-googlebot].

#### Usage

If using this package in a `React Native/Expo` project:

1. Install [react-native-get-random-values][react-native-get-random-values-npm] polyfill.
1. Add `import 'react-native-get-random-values'` as the first line in your index/entry point. See
more details [here][uuid-npm-react-native-polyfill].

#### Parameters

| Param             | Type    | Required    | Default | Description                               |
|---                |---      |---          |---      |---                                        |
| `type`            | string  | Yes         | -       | filename, number, title, temp, uuid.      |
| `options`         | object  | No          | -       | Custom options to apply.                  |
| `options.min`     | number  | No          | 0       | If type is number, minimum value to start from. |
| `options.max`     | number  | No          | 1       | If type is number, maximum value to end at. |
| `options.prefix`  | string  | No          | -       | Text to add to the beginning of the result. |
| `options.suffix`  | string  | No          | -       | Text to add to the end of the result.     |

#### Returns

- `(string|number)`: Returns generated string or number.

#### Example

```javascript
random('filename', { prefix: 'post' });
// Result.
'post_2018-01-01_12-00-00_7f2a79ba-962e-4b35-96d0-28xf1d025107'

random('number', { min: 1000, max: 2000 });
// Result.
1784

random('title', { suffix: 'post' });
// Result.
'2018-01-01_12-00-00_post'

random('temp');
// Result.
'2018-01-01_12-00-00_efc7438f-0a4d-4538-af87-b6984xe04688'

random('uuid');
// Result.
'7e0ea78d-c170-4449-93fb-f5caxb952752'
```

### `sanitize`

Trims white spaces and removes HTML tags.

> Uses: [trimWhitespace](#trimwhitespace)

#### Parameters

| Param       | Type    | Required    | Default | Description                                     |
|---          |---      |---          |---      |---                                              |
| `text`      | string  | Yes         | -       | Text to trim.                                   |

#### Returns

- `(string)`: Returns sanitized string.

#### Example

```javascript
sanitize('<script>"the__   #quicK-- BROWN     @foX_".js</script> <html><div>Html code</div></html>');
// Result.
'the__ #quicK-- BROWN @foX_.js Html code'
```

### `singular`

Trims last character if ends with `s` or replaces `ies` with `y`.

#### Parameters

| Param       | Type    | Required    | Default | Description                                     |
|---          |---      |---          |---      |---                                              |
| `text`      | string  | Yes         | -       | Text to convert.                                |

#### Returns

- `(string)`: Returns trimmed text.

#### Example

```javascript
singular('posts');
// Result.
'post'

singular('commodities');
// Result.
'commodity'
```

### `splitArray`

Splits any array to chunks by supplied size.

#### Parameters

| Param       | Type    | Required    | Default | Description                                     |
|---          |---      |---          |---      |---                                              |
| `array`     | Array   | Yes         | -       | Data array to split.                            |
| `size`      | number  | No          | -       | Size of each array chunk; bypasses split if empty. |

#### Returns

- `(Array)`: Returns new array chunks.

#### Example

```javascript
splitArray([{ id: 1, title: 'abc' }, { id: 2, title: 'def' }]);
// Result.
[
  { "id": 1, "title": "name1" },
  { "id": 2, "title": "name2" }
]

splitArray([{ id: 1, title: 'abc' }, { id: 2, title: 'def' }], 1);
// Result.
[
  [{ "id": 1, "title": "name1" }],
  [{ "id": 2, "title": "name2" }]
]
```

### `timestamp`

Parses any date value to a timestamp with predefined or custom format.

- datetime: dddd, MMMM D at h:mA.
- fromNow: Relative time.
- short: ddd, MMM D.
- sql: YYYY-MM-DD HH:mm:ss.

#### Parameters

| Param             | Type    | Required    | Default | Description                               |
|---                |---      |---          |---      |---                                        |
| `date`            | string \| number \| object | Yes         | -             | Date string, Date object, Unix Timestamp. |
| `options`         | object  | No          | -       | Custom options to apply.                  |
| `options.format`  | string  | No          | DD/MM/YYYY | datetime, fromNow, short, sql, [Moment][moment-format]. |

#### Returns

- `(string)`: Returns formatted timestamp.

#### Example

```javascript
timestamp(Date.now());
// Result.
'31/12/2018'

timestamp(new Date('12/31/2018'), { format: 'datetime' });
// Result.
'Monday, December 31 at 12:00AM'

timestamp(Date(), { format: 'fromNow' });
// Result.
'a few seconds ago'

timestamp(moment('12/31/2018'), { format: 'short' });
// Result.
'Mon, Dec 31 12:00AM'

timestamp('12/31/2018 12:00', { format: 'sql' });
// Result.
'2018-12-31 12:00:00'
```

### `toArray`

Converts any value to array.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `value`             | Any     | Yes         | -       | Data to convert.                        |
| `options`           | object  | No          | -       | Custom options to apply.                |
| `options.separator` | string  | No          | ,       | The pattern where the split should occur. |
| `options.toNumber`  | boolean | No          | false   | If true, maps array values as `Number`. |

#### Returns

- `(Array)`: Returns array based on supplied params.

#### Example

```javascript
toArray('1', { toNumber: true });
// Result.
[1]

toArray(['a', 'b', 'c']);
// Result.
['a', 'b', 'c']

toArray({ id: 1, title: 'name1' });
// Result.
[{ id: 1, title: 'name1' }]

toArray('1,2,3');
// Result.
['1', '2', '3']

toArray('  a-2-3  -', { toNumber: true, separator: '-' });
// Result.
[NaN, 2, 3]
```

### `toNumeric`

Converts value to and validates as number.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `value`             | number \| string | Yes         | -             | Number representation; if null, returns 0. |
| `options`           | object  | No          | -       | Custom options to apply.                |
| `options.decimal`   | boolean | No          | true    | If true, retains decimal point.         |
| `options.math`      | string  | No          | -       | trunc, ceil, round, floor.              |

#### Returns

- `(number)`: Returns formatted number.

#### Example

```javascript
toNumeric('1.3');
// Result.
1.3

toNumeric(1.3);
// Result.
1.3

toNumeric('1.3', { decimal: false });
// Result.
1

toNumeric('1.3', { math: 'ceil' });
// Result.
2

toNumeric(1.3, { math: 'floor' });
// Result.
1

toNumeric(['1.3', 1], { math: 'floor' });
// Result.
NaN

toNumeric({ 0: 1 });
// Result.
NaN
```

### `toRGBa`

Converts color from Name or HEX code to RGBa value.

#### Parameters

| Param       | Type    | Required    | Default | Description                                     |
|---          |---      |---          |---      |---                                              |
| `color`     | string  | Yes         | -       | Can be Name or HEX code (e.g. white, #DDD).     |
| `alpha`     | number  | No          | 1       | Set custom alpha value.                         |

#### Returns

- `(string)`: Returns RGBa value.

#### Example

```javascript
toRGBa('purple');
// Result.
'rgba(128,0,128,1)'

toRGBa('#DDD', 0.5);
// Result.
'rgba(221,221,221,0.5)'
```

### `trimWhitespace`

Removes leading and trailing spaces and replaces multiple white spaces, tabs and newlines with one
space.

#### Parameters

| Param       | Type    | Required    | Default | Description                                     |
|---          |---      |---          |---      |---                                              |
| `text`      | string  | Yes         | -       | Text to trim.                                   |

#### Returns

- `(string)`: Returns trimmed text.

#### Example

```javascript
trimWhitespace('   _the   quiCK--brown     FOx !');
// Result.
'_the quiCK--brown FOx !'
```

## Changelog

Check [Changelog][changelog] for a detailed list of changes.

## Community

Head over to [Discussions][discussions] where you can ask questions, request new features or voice
your ideas and suggestions.

- [`Ideas`][discussions-ideas]
- [`Q&A`][discussions-q-a]

## License

This package is available under the [BSD 3-Clause license][bsd-3-clause-license]. It also includes
external libraries that are available under a variety of licenses. See [LICENSE][license-file] for
the full license text.

[discussions]: https://github.com/rashedmakkouk/dev-utils/discussions
[discussions-ideas]: https://github.com/rashedmakkouk/dev-utils/discussions/categories/ideas
[discussions-q-a]: https://github.com/rashedmakkouk/dev-utils/discussions/categories/q-a
[bsd-3-clause-license]: https://opensource.org/licenses/BSD-3-Clause
[license-file]: https://github.com/rashedmakkouk/dev-utils/blob/main/LICENSE
[changelog]: https://github.com/rashedmakkouk/dev-utils/blob/main/CHANGELOG.md
[sqlstring-npm]: https://www.npmjs.com/package/sqlstring
[moment-format]: https://momentjs.com/docs/#/displaying/format/
[base64-url-safe]: https://base64.guru/standards/base64url
[url-parse-npm]: https://www.npmjs.com/package/url-parse
[math-random-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[autolinker-npm]: https://www.npmjs.com/package/autolinker
[uuid-npm]: https://www.npmjs.com/package/uuid
[uuid-npm-react-native-polyfill]: https://www.npmjs.com/package/uuid#react-native--expo
[uuid-github-duplicate-uuids-googlebot]: https://github.com/uuidjs/uuid#duplicate-uuids-googlebot
[react-native-get-random-values-npm]:https://www.npmjs.com/package/react-native-get-random-values
