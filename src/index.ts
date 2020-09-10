export { default as capitalizeString } from './capitalize-string';
export { default as delay } from './delay';
export { default as escape } from './escape';
export { default as extractValues } from './extract-values';
export { default as isValid } from './is-valid';
export { default as joinPath } from './join-path';
export { default as keyExtractor } from './key-extractor';
export { default as normalize } from './normalize';
export { default as parseTimestamp } from './parse-timestamp';
export { default as random } from './random';
export { default as sanitizeString } from './sanitize-string';
export { default as setSlug } from './set-slug';
export { default as toArray } from './to-array';
export { default as toNumeric } from './to-numeric';
export { default as toRGBa } from './to-rgba';
export { default as trimWhitespace } from './trim-whitespace';

// export function setSrc(type: 'blob', data: string): string | undefined {
//   switch (type) {
//     case 'blob':
//       return data.replace(/(\r\n|\n|\r)/gm, '');
//   }

//   return data;
// }

// export function getTimestampDiff(datetime: string, type = 'days', amount = 7) {
//   var now = moment();
//   var count = now.diff(datetime, type);
//   switch (type) {
//     case 'days':
//       return (count <= amount && datetime.fromNow()) || false;
//     case 'minutes':
//     case 'hours':
//       return count <= amount || false;
//   }
// }

// SPIKE: Get user's timezone offset timestamp? or all server date/time &
// display based on offset.

// export function getTimestamp(type: TimestampFormats, timestamp: string) {
//   var response = null;
//   // FIX:: use DatastoreService.getState
//   var offset = store.getState().User.profile.location_timezone_offset;
//   // TODO: move to registration component, include with request
//   if (offset == null || type === 'offset') {
//     var now = new Date();
//     offset = now.getTimezoneOffset() / -60;
//   }
//   // console.log('offset', new Date().getTimezoneOffset() / -60)
//   timestamp = moment(timestamp);
//   var datetime = timestamp.add(offset, 'hours');
//   switch (type) {
//     case 'fromNow':
//       response = datetime.fromNow();
//       break;
//     case 'MMMM YYYY':
//     case 'MM/D':
//     case 'MM/DD/YYYY':
//       response = datetime.format(type);
//       break;
//     case 'datetime':
//       response =
//         datetime.format('dddd, MMMM D') + ' at ' + datetime.format('h:mmA');
//       break;
//     case 'short':
//       response = `${datetime.format('ddd, MMM D')}
// ${datetime.format('h:mmA')}`;
//       break;
//     case 'online':
//       return getTimestampDiff(datetime, 'minutes', 10);
//     case 'offset':
//       return offset;
//   }
//   // console.log('timestamp', type, response)
//   return getTimestampDiff(datetime) || response;
// }

// TODO: `formatNumber` convert numbers to human readable format (e.g. 1k)
// export function formatNumber(value: string | number, fixed?: number): string | null {
//   if (value === null || value === undefined) return null;

//   const number = !isNumber(value) ? parseInt(value) : value;

//   if (number === 0) {
//     return '0';
//   } // terminate early

/** number of decimal places to show. */
//   fixed = !fixed || fixed < 0 ? 0 : fixed;

//   const b = number.toPrecision(2).split('e'), // get power
/** floor at decimals, ceiling at trillions. */
//     k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
//     c =
//       k < 1
//         ? number.toFixed(0 + fixed)
/** divide by power. */
//         : (number / Math.pow(10, k * 3)).toFixed(1 + fixed),
//     d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
//     e = d + ['', 'k', 'M', 'B', 'T'][k]; // append power

//   return e;
// }

// export function formatNumber(string, digits)
// {
//     var newstring = string

//     if (string >= 1000) {
//         var suffixes = ['', 'k', 'm', 'b', 't']

//         var suffixNum = Math.floor( ('' + string).length/3 )

//         var shortNum
//         var shortstring = ''

//         for (var precision = 2; precision >= 1; precision--)
//         {
//             shortstring = parseFloat( (suffixNum != 0
// ? (string / Math.pow(1000, suffixNum) )
// : string).toPrecision(precision))

//             var dotLessShortstring =
// (shortstring + '').replace(/[^a-zA-Z 0-9]+/g, '')

//             if (dotLessShortstring.length <= 2)
//             {
//                 break
//             }
//         }

//         if (shortstring % 1 != 0)
//         {
//             shortNum = shortstring.toFixed(2)
//         }

//         newstring = shortstring + suffixes[suffixNum]
//     }

//     return newstring
// }

// export function formatNumber(number, digits)
// {
//     var i
//     var string

//     var si = [
//         { string: 1E18, symbol: 'E' },
//         { string: 1E15, symbol: 'P' },
//         { string: 1E12, symbol: 'T' },
//         { string: 1E9, symbol: 'G' },
//         { string: 1E6, symbol: 'M' },
//         { string: 1E3, symbol: 'k' }
//     ]

//     var rx = /\.0+$|(\.[0-9]*[1-9])0+$/

//     for (i = 0; i < si.length; i++)
//     {
//         if (number >= si[i].string)
//         {
//             string =
// (number / si[i].string).toFixed(digits).replace(rx, '$1') + si[i].symbol

//             return Math.round(string)
//         }
//     }

//     string = number.toFixed(digits).replace(rx, '$1')

//     return Math.round(string)
// }
