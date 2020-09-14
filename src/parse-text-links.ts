import Autolinker, { AutolinkerConfig, Match } from 'autolinker';

function parseTextLinks(
  text: string | null = '',
  options: AutolinkerConfig = {}
): { links: string[]; matches: Match[] } {
  if (!text) {
    return { links: [], matches: [] };
  }

  const { hashtag = 'twitter', mention = 'twitter', urls = true } = options;

  const matches = Autolinker.parse(text, {
    hashtag,
    mention,
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

export default parseTextLinks;
