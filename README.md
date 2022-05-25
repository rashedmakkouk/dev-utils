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

#### Parameters

| Param               | Required    | Default Value | Description                                 |
|---                  |---          |---            |---                                          |
| `text`              | No          | ''            | Text string.                                |

### `delay`

> Promise

Delays executions of a specified piece of code.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `ms`        | Yes         | -             | Duration to delay in milliseconds.                  |
| `race`      | No          | false         | If true, returns a Promise object that is rejected with status 408 Request Timeout. |

### `escape`

A [sqlstring][sqlstring-npm] wrapper for convenience.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `value`                 | Yes         | -             | Any value.                              |
| `options`               | No          | -             | Object.                                 |
| `options.escapeId`      | No          | false         | Escapes Identifiers such as column names and reserved words. |
| `options.parseInteger`  | No          | false         | Parses values such as LIMIT and OFFSET. |
| `options.stripQuote`    | No          | false         | Removes quotes from result; useful for REGEXP or query conditions e.g. ASC. |

### `initials`

Extracts the first character from the first and last words in a string.

Splits at: whitespace, comma, dot, underscore, dash.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `text`      | No          | ''            | Text string.                                        |

### `isBase64`

Verifies if supplied string is a valid base64 string.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `value`                 | Yes         | -             | Any string value.                       |
| `options`               | No          | -             | Object.                                 |
| `options.allowEmpty`    | No          | false         | Returns true if value is empty.         |
| `options.allowMime`     | No          | false         | String may include mime type.           |
| `options.mimeRequired`  | No          | false         | String should include mime type.        |
| `options.urlSafe`       | No          | false         | See [Base64URL][base64-url-safe].       |

### `isValid`

Verifies if supplied payload is valid by defined type.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `isTypeof`              | Yes         | -             | string, array, number, object, jsonStr. |
| `value`                 | No          | -             | Any value; returns true if value is null or undefined. |

### `joinPath`

Joins list of absolute and relative paths as a string.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `parts`                 | Yes         | -             | Path string array value.                |
| `options`               | No          | -             | Object.                                 |
| `options.resolve`       | No          | false         | If true, resolves result path string.   |

### `letterCase`

Converts supplied string to defined case.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `text`                  | Yes         | -             | Text string.                            |
| `options`               | Yes         | -             | Object.                                 |
| `options.letterCase`    | Yes         | -             | lower, upper, sentence, kebab, title.   |
| `options.separators`    | No          | -             | Converts supplied symbols list to space. |

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

### `normalize`

Normalizes payload by defined object attribute.

> Payload data needs to be consistent and has similar data structure to avoid unexpected results,
> specifically defined `idAttribute` (e.g. results from a database query).

@returns

- entities.key: Normalized records by `key`.
- results: Array of normalized entities `idAttribute` values.

#### Parameters

| Param                   | Required    | Default Value | Description                             |
|---                      |---          |---            |---                                      |
| `key`                   | Yes         | -             | Property name to move records to.       |
| `payload`               | Yes         | -             | Object or array of objects.             |
| `options`               | No          | -             | Object.                                 |
| `options.idAttribute`   | No          | id            | Property to normalize records based on. |

### `parseUrl`

Parses URL string parts.

A [parseurl][parse-url-npm] wrapper for convenience.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `address`   | Yes         | -             | Text string.                                        |

### `random`

Generates a random string with customizable options.

- filename: File names stored in databases.
- number: Number between defined min and max.
- title: Content or post random title.
- temp: File names stored in temporary or cache locations.
- uuid: v4

#### Parameters

| Param             | Required    | Default Value | Description                                   |
|---                |---          |---            |---                                            |
| `type`            | Yes         | -             | filename, number, title, temp, uuid.          |
| `options`         | No          | -             | Object.                                       |
| `options.min`     | No          | -             | If type is number, minimum value to start from. |
| `options.max`     | No          | -             | If type is number, maximum value to end at.   |
| `options.prefix`  | No          | -             | String to add to the beginning of the result. |
| `options.suffix`  | No          | -             | String to add to the end of the result.       |

### `sanitize`

Trims whitespaces and removes HTML tags.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `text`      | Yes         | -             | Text string.                                        |

### `singular`

Trims last character if string ends with `s`.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `text`      | Yes         | -             | Text string.                                        |

### `splitArray`

Splits any array to chunks by supplied size.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `array`     | Yes         | -             | Any array.                                          |
| `size`      | No          | -             | Size of each array chunk; bypasses split if empty.  |

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
| `options`        | No          | -             | Object.                                        |
| `options.format` | No          | DD/MM/YYYY    | datetime, fromNow, short, sql, [Moment][moment-format]. |

### `toArray`

Converts any value to array.

#### Parameters

| Param               | Required    | Default Value | Description                                 |
|---                  |---          |---            |---                                          |
| `value`             | Yes         | -             | Any value.                                  |
| `options`           | No          | -             | Object.                                     |
| `options.separator` | No          | ,             | The pattern where the split should occur.   |
| `options.number`    | No          | false         | If true, maps array values as `Number`.     |

### `toNumeric`

Converts value to and validates as number.

#### Parameters

| Param               | Required    | Default Value | Description                                 |
|---                  |---          |---            |---                                          |
| `value`             | Yes         | -             | Number representation; if null, returns 0.  |
| `options`           | No          | -             | Object.                                     |
| `options.decimal`   | No          | true          | If true, retains decimal point.             |
| `options.math`      | No          | -             | trunc, ceil, round, floor.                  |

### `toRGBa`

Converts color from Name or HEX code to RGBa value.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `color`     | Yes         | -             | Can be Name or HEX code (e.g. white, #FFF).         |
| `alpha`     | No          | 1             | Set custom value to result.                         |

### `trimWhitespace`

Removes leading and trailing spaces and replaces multiple whitespaces, tabs and newlines with one
space.

#### Parameters

| Param       | Required    | Default Value | Description                                         |
|---          |---          |---            |---                                                  |
| `text`      | Yes         | -             | Text string.                                        |

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
[parse-url-npm]: https://www.npmjs.com/package/parseurl
