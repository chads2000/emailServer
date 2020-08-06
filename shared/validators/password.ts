export namespace Password {
  export const Pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9@$!%*#?&]+)$/;

  export function valid(value: string): boolean {
    return value === null ? true : this.Pattern.test(value);
  }
}
