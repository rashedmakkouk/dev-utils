/** Utilities */
import Autolinker, { AutolinkerConfig, Match } from 'autolinker';

function autolinks(
  text: string | null = '',
  options: AutolinkerConfig = {}
): { links: string[]; matches: Match[] } {
  if (!text) {
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
