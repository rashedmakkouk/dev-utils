import urlParse from 'url-parse';

function parseUrl(address: string): urlParse<any> {
  return urlParse(address);
}

export default parseUrl;
