import { convert, UrlSafeBase64String } from './UrlParamConverter';
import { isRecord } from '../util/object';
import { SquadJsonStructure } from './SquadJsonStructure';

export const squadUrlParamName = 'sq';

const appSiteUrl = `https://harry0000.github.io${process.env.PUBLIC_URL}`;

/**
 * @see https://publish.twitter.com/
 */
const twitterShareUrl = [
  'https://twitter.com/intent/tweet',
  '?hashtags=LastOrigin%2C%E3%83%A9%E3%82%B9%E3%83%88%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%B3%2C%E3%83%A9%E3%82%B9%E3%82%AA%E3%83%AA',
  `&original_referer=${encodeURIComponent(appSiteUrl)}%2F`,
  '&ref_src=twsrc%5Etfw',
  '&tw_p=tweetbutton'
].join('');

type ShortLinksResponse = {
  shortLink: string,
  previewLink: string
}

function isShortLinksResponse(arg: unknown): arg is ShortLinksResponse {
  return isRecord(arg) && 'shortLink' in arg && 'previewLink' in arg;
}

function fetchShortShareUrl(param: UrlSafeBase64String): Promise<string> {
  if (!process.env.REACT_APP_FIREBASE_WEB_API_KEY) {
    return Promise.reject(new Error('Firebase web API key is undefined.'));
  }

  return fetch(
    `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`,
    {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        longDynamicLink: `https://losquad.page.link/?link=${appSiteUrl}/?${squadUrlParamName}=${param}`,
        suffix: { option: 'SHORT' }
      })
    }
  )
    .then(res => res.json())
    .then(json => {
      if (!isShortLinksResponse(json)) {
        throw new Error(`Unexpected response from Firebase Dynamic Links API. json: ${json}`);
      }
      return json.shortLink;
    });
}

export function generateShareUrl(squadJson: SquadJsonStructure): Promise<string> {
  const param = convert(squadJson);
  return fetchShortShareUrl(param);
}

export function generateTwitterShareUrl(url: string): string {
  return `${twitterShareUrl}&url=${encodeURIComponent(url)}`;
}
