import urlParse from 'url-parse';

/**
 * Parses URL string parts.
 */
function parseUrl(address: string): urlParse<any> {
  return urlParse(address);
}

export default parseUrl;
