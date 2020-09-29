import urlParse from 'url-parse';

function parseUrl(address: string): urlParse {
  return urlParse(address);
}

export default parseUrl;
