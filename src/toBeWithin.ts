import {
    ensureNumbers,
    matcherHint,
    printReceived,
    printExpected
} from 'jest-matcher-utils'

export const toBeWithin = (actual: number, lowerBound: number, upperBound: number) => {
  ensureNumbers(actual, lowerBound, '.toBeWithin')
  ensureNumbers(actual, upperBound, '.toBeWithin')
  const pass = actual >= lowerBound && actual <= upperBound
  const message = pass
        ? () =>
            matcherHint('.not.toBeWithin') +
            '\n\n' +
            `Expected value not within:\n` +
            `  ${printExpected(lowerBound)} ` +
            `>= n >= ${printExpected(upperBound)}\n` +
            `Received:\n` +
            `  ${printReceived(actual)}`
        : () =>
            matcherHint('.toBeWithin') +
            '\n\n' +
            `Expected value to be within:\n` +
            `  ${printExpected(lowerBound)} ` +
            `>= n >= ${printExpected(upperBound)}\n` +
            `Received:\n` +
            `  ${printReceived(actual)}`
  return { message, pass }
}
