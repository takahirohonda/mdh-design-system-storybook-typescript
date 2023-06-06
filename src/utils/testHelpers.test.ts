import { Equal, Expect } from './testHelpers';

describe('testHelpers', () => {
  describe('Equal, Expect type alias', () => {
    it('should assert never type', () => {
      type Value = never;
      type Expected = never;
      ({} as Expect<Equal<Value, Expected>>);
    });

    it('should assert unknown type', () => {
      type Value = unknown;
      type Expected = unknown;
      ({} as Expect<Equal<Value, Expected>>);
    });

    it('should assert literal types', () => {
      type Value = 'hello';
      type Expected = 'hello';
      ({} as Expect<Equal<Value, Expected>>);
    });

    it('should assert union types', () => {
      type Value = string | number;
      type Expected = string | number;
      ({} as Expect<Equal<Value, Expected>>);
    });

    it('should assert intersection types', () => {
      type Value = { a: number } & { b: string };
      type Expected = { a: number } & { b: string };
      ({} as Expect<Equal<Value, Expected>>);
    });

    it('should assert tuple types', () => {
      type Value = [number, string];
      type Expected = [number, string];
      ({} as Expect<Equal<Value, Expected>>);
    });

    it('should assert function types', () => {
      type Value = (x: number) => string;
      type Expected = (x: number) => string;
      ({} as Expect<Equal<Value, Expected>>);
    });

    it('should assert array types', () => {
      type Value = number[];
      type Expected = number[];
      ({} as Expect<Equal<Value, Expected>>);
    });

    it('should assert object types', () => {
      type Value = { a: number; b: string };
      type Expected = { a: number; b: string };
      ({} as Expect<Equal<Value, Expected>>);
    });
  });
});
