/** Utilties */
import urlParse from 'url-parse';

/**
 * Parses URL string segments including query string values, if any.
 */
function parseUrl(url: string): urlParse<Record<string, string | undefined>> {
  return urlParse(url, true);
}

export default parseUrl;
