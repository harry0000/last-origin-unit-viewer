import { convert, UrlSafeBase64String } from './UrlParamConverter';
import { isRecord } from '../util/object';
import { SquadJsonStructure } from './SquadJsonStructure';

export const squadUrlParamName = 'sq';

const appSiteUrl = new URL(process.env.PUBLIC_URL + '/', 'https://harry0000.github.io').toString();

const defaultTwitterShareParams = {
  hashtags: 'LastOrigin,ラストオリジン,ラスオリ',
  original_referer: appSiteUrl,
  ref_src: 'twsrc^tfw',
  tw_p: 'tweetbutton'
};

type ShortLinksResponse = {
  shortLink: string,
  previewLink: string
}

function isShortLinksResponse(arg: unknown): arg is ShortLinksResponse {
  return isRecord(arg) && 'shortLink' in arg && 'previewLink' in arg;
}

function buildFirebaseEndpoint(key: string): string {
  return new URL('/v1/shortLinks', 'https://firebasedynamiclinks.googleapis.com') + '?' + new URLSearchParams({ key });
}

function buildLongDynamicLink(param: UrlSafeBase64String): string {
  const link = appSiteUrl + '?' + new URLSearchParams({ [squadUrlParamName]: param });
  return new URL('https://losquad.page.link') + '?' + new URLSearchParams({ link });
}

function fetchShortShareUrl(param: UrlSafeBase64String): Promise<string> {
  if (!process.env.REACT_APP_FIREBASE_WEB_API_KEY) {
    return Promise.reject(new Error('Firebase web API key is undefined.'));
  }

  return fetch(
    buildFirebaseEndpoint(process.env.REACT_APP_FIREBASE_WEB_API_KEY),
    {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        longDynamicLink: buildLongDynamicLink(param),
        suffix: { option: 'SHORT' }
      })
    }
  )
    .then(res => res.json())
    .then(json => {
      if (!isShortLinksResponse(json)) {
        throw new Error(`Unexpected response from Firebase Dynamic Links API. json: ${JSON.stringify(json)}`);
      }
      return json.shortLink;
    });
}

export function generateShareUrl(squadJson: SquadJsonStructure): Promise<string> {
  const param = convert(squadJson);
  return fetchShortShareUrl(param);
}

/**
 * @see https://publish.twitter.com/
 */
export function generateTwitterShareUrl(url: string): string {
  return new URL('/intent/tweet', 'https://twitter.com') +
    '?' +
    new URLSearchParams({ ...defaultTwitterShareParams, url });
}
