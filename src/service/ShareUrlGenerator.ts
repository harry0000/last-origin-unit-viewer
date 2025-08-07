import { Location } from 'history';

import { convert, UrlSafeBase64String } from './UrlParamConverter';
import { SquadJsonStructure } from './SquadJsonStructure';

const squadUrlParamName = 'sq';

const appSiteUrl = new URL(import.meta.env.BASE_URL, 'https://harry0000.github.io').toString();

const defaultTwitterShareParams = {
  hashtags: 'LastOrigin,ラストオリジン,ラスオリ',
  original_referer: appSiteUrl,
  ref_src: 'twsrc^tfw',
  tw_p: 'tweetbutton'
};

function buildTinyUrlEndpoint(url: string): string {
  return new URL('/api-create.php', 'https://tinyurl.com') + '?' + new URLSearchParams({ url });
}

async function fetchShortShareUrl(param: UrlSafeBase64String): Promise<string> {
  const url = appSiteUrl + '?' + new URLSearchParams({ [squadUrlParamName]: param });
  const response =
    await fetch(
      buildTinyUrlEndpoint(url),
      {
        method: 'GET',
        headers: { 'Accept': 'text/plain' }
      }
    );
  return await response.text();
}

export function getSquadParam(location: Location): UrlSafeBase64String | null {
  const param = new URLSearchParams(location.search).get(squadUrlParamName);
  return param as ReturnType<typeof getSquadParam>;
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
