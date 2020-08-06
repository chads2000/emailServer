import { CreditCardTypes } from '../credit_card.models';

export namespace AmericanExpress {
  export type Type = CreditCardTypes.AMERICAN_EXPRESS;
  export const NumChecks: number[] = [34, 37];

  /**
   * Validate that the number is 15 numbers
   * @param number CreditCard number
   * @returns boolean
   */
  export function validate(number: string): boolean {
    return /^(\d{15})$/.test(number);
  }

  /**
   * Validate CreditCard number
   * @param number CreditCard number
   * @returns string
   */
  export function format(number: string): string {
    return `${number.substring(0, 4)}-${number.substring(4, 10)}-${number.substring(10)}`;
  }
}
