import { CreditCardTypes } from '../credit_card.models';

export namespace MasterCard {
  export type Type = CreditCardTypes.MASTERCARD;
  export const RangeChecks: number[][] = [
    [51, 55],
    [2221, 2720],
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
