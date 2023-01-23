/** Utilities */
import Autolinker, { AutolinkerConfig, Match } from 'autolinker';
import isString from 'lodash/isString';

/**
 * Parses a text string and returns links matching:
 *
 * - Hashtag **#**
 * - Mention **\@**
 * - URL **http**
 *
 * @returns Result object:
 * - Object.links: Array of unique words links (e.g. mention, hashtag, url).
 * - Object.matches: Array of all matched links metadata.
 */
function autolinks(
  text: string | null = '',
  options: AutolinkerConfig = {}
): { links: string[]; matches: Match[] } {
  if (!isString(text)) {
    return { links: [], matches: [] };
  }

  const {
    hashtag = 'twitter',
    mention = 'twitter',
    stripTrailingSlash = true,
    urls = true,
  } = options;

  const matches = Autolinker.parse(text, {
    hashtag,
    mention,
    stripTrailingSlash,
    urls,
  });

  const links = Object.values(matches).map((match): string => {
    return match.getMatchedText();
  });

  return {
    links: [...new Set(links)],
    matches,
  };
}

export default autolinks;
