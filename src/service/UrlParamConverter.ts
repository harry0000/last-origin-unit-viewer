import { SquadJsonStructure } from './SquadJsonStructure';

export type UrlSafeBase64String = string & { _urlSafeBase64Brand: never }

export function convert(json: SquadJsonStructure): UrlSafeBase64String {
  return toUrlSafeBase64(JSON.stringify(json));
}

export function restore(param: UrlSafeBase64String): unknown {
  return JSON.parse(fromUrlSafeBase64(param));
}

/**
 * @param base64
 * @see https://datatracker.ietf.org/doc/html/rfc4648#section-5
 */
function toUrlSafeBase64(base64: string): UrlSafeBase64String {
  return btoa(base64)
    .replaceAll('+', '-')
    .replaceAll('/', '_') as UrlSafeBase64String;
}

/**
 * @param base64
 * @see https://datatracker.ietf.org/doc/html/rfc4648#section-5
 */
function fromUrlSafeBase64(base64: UrlSafeBase64String): string {
  return atob(
    base64
      .replaceAll('-', '+')
      .replaceAll('_', '/')
  );
}
