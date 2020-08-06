import { AmericanExpress } from './credit_card/american-express';
import { Discover } from './credit_card/discover';
import { MasterCard } from './credit_card/mastercard';
import { Visa } from './credit_card/visa';
import { CreditCardTypes } from './credit_card.models';

// [Credit Card Checker]{@link https://creditcardchecker.net/}
export namespace CreditCard {
  export function type(number: string): CreditCardTypes | null {
    const cleanNumber: string = number.replace(/\D/g, '');

    if (!/^\d+$/.test(cleanNumber)) {
      return null;
    }
    if (numCheck(cleanNumber, AmericanExpress.NumChecks)) {
      return CreditCardTypes.AMERICAN_EXPRESS;
    }
    if (
      numCheck(cleanNumber, Discover.NumChecks) ||
      rangeCheck(cleanNumber, Discover.RangeChecks)
    ) {
      return CreditCardTypes.DISCOVER;
    }
    if (rangeCheck(cleanNumber, MasterCard.RangeChecks)) {
      return CreditCardTypes.MASTERCARD;
    }
    if (numCheck(cleanNumber, Visa.NumChecks)) {
      return CreditCardTypes.VISA;
    }
    return null;
  }

  export function valid(number: string): boolean | null {
    const cleanNumber: string = number.replace(/\D/g, '');
    const ccType: CreditCardTypes | null = type(cleanNumber);

    switch (ccType) {
      case CreditCardTypes.AMERICAN_EXPRESS:
        return AmericanExpress.validate(cleanNumber);
      case CreditCardTypes.DISCOVER:
        return Discover.validate(cleanNumber);
      case CreditCardTypes.MASTERCARD:
        return MasterCard.validate(cleanNumber);
      case CreditCardTypes.VISA:
        return Visa.validate(cleanNumber);
      default:
        return null;
    }
  }

  export function numCheck(number: string, numChecks: number[]): boolean {
    let isMet = false;
    numChecks.forEach((_numCheck: number) => {
      const numCheckString = _numCheck.toString();
      if (
        number.slice(0, numCheckString.length) === numCheckString ||
        numCheckString.slice(0, number.length) === number
      ) {
        isMet = true;
      }
    });
    return isMet;
  }

  export function rangeCheck(number: string, ranges: Array<number[]>): boolean {
    let isMet = false;

    ranges.forEach((range: number[]) => {
      let minString = range[0].toString();
      let maxString = range[1].toString();
      if (minString.length === maxString.length) {
        if (number.length < minString.length) {
          minString = minString.slice(0, number.length);
          maxString = maxString.slice(0, number.length);
        } else {
          number = number.slice(0, minString.length);
        }
        const numberInt = parseInt(number, 10);
        const minRange = parseInt(minString, 10);
        const maxRange = parseInt(maxString, 10);

        if (numberInt >= minRange && numberInt <= maxRange) {
          isMet = true;
          return;
        }
      }
    });
    return isMet;
  }

  export function transform(number: string): string {
    const cleanNumber: string = number.replace(/\D/g, '');
    const type: CreditCardTypes | null = CreditCard.type(cleanNumber);

    switch (type) {
      case CreditCardTypes.AMERICAN_EXPRESS:
        return AmericanExpress.format(cleanNumber);
      case CreditCardTypes.DISCOVER:
        return Discover.format(cleanNumber);
      case CreditCardTypes.MASTERCARD:
        return MasterCard.format(cleanNumber);
      case CreditCardTypes.VISA:
        return Visa.format(cleanNumber);
      default:
        return cleanNumber;
    }
  }
}
