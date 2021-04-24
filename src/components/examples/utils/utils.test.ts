import { capitalise, joinClassNames } from './index';

describe('Shared util functions', () => {
  it('Capitalise string correctly', () => {
    const string = 'test string';
    expect(capitalise(string)).toEqual('Test string');
  });

  it('Join class names correctly', () => {
    const isActive = false;
    const isCompleted = true;
    const result = joinClassNames(
      'componentClass',
      'primary',
      isActive && 'active',
      isCompleted && 'completed',
    );
    expect(result).toEqual('componentClass primary completed');
  });
});
