import { CreditCardTypes } from '../credit_card.models';

export namespace Discover {
  export type Type = CreditCardTypes.DISCOVER;
  export const NumChecks: number[] = [65, 6011];
  export const RangeChecks: number[][] = [
    [644, 649],
    [622126, 622925],
  ];

  /**
   * Validate that the number is 16 numbers
   * @param number CreditCard number
   * @returns boolean
   */
  export function validate(number: string): boolean {
    return /^(\d{16})$/.test(number);
  }

  /**
   * Validate CreditCard number
   * @param number CreditCard number
   * @returns string
   */
  export function format(number: string): string {
    return `${number.substring(0, 4)}-${number.substring(4, 8)}-${number.substring(
      8,
      12
    )}-${number.substring(12)}`;
  }
}
