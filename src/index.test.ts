import { describe, it, expect } from 'vitest';
import { hello } from './index';

describe('hello', () => {
  it('should return "Hello, World!" when called without arguments', () => {
    expect(hello()).toBe('Hello, World!');
  });

  it('should return "Hello, {name}!" when called with a name', () => {
    expect(hello('TypeScript')).toBe('Hello, TypeScript!');
  });
});
