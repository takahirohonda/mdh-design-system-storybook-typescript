import { joinClassNames } from './index';

describe('Shared util functions', () => {
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
