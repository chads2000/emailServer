// Regex taken from http://emailregex.com/ which attempts to follow RFC 5322
/* tslint:disable:max-line-length */
export namespace Email {
  export const Pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export function valid(value: string): boolean {
    return value === null ? true : Email.Pattern.test(value);
  }
}
