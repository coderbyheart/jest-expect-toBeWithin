# `expect.toBeWithin(number, number)`

[![npm](https://img.shields.io/npm/v/@coderbyheart/jest-expect-tobewithin.svg)](https://www.npmjs.com/package/@coderbyheart/jest-expect-tobewithin)
[![Build Status](https://travis-ci.org/coderbyheart/jest-expect-tobewithin.svg?branch=master)](https://travis-ci.org/coderbyheart/jest-expect-tobewithin)
[![Greenkeeper badge](https://badges.greenkeeper.io/coderbyheart/jest-expect-tobewithin.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Use `.toBeWithin` when you want to check that a number is within a range.
For example, if you want to test that \`ouncesPerCan()\` returns a value between 5 and 20, write:

```js
test('ounces per can is between 5 and 20', () => {
  expect(ouncesPerCan()).toBeWithin(5, 20);
});
```

## Install

    npm i @coderbyheart/jest-expect-tobewithin

## Usage

```javascript
import { toBeWithin } from '@coderbyheart/jest-expect-tobewithin'

expect.extend({toBeWithin});

// In your test:
expect(10).toBeWithin(5,20)
```
