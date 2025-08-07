import { test, expect } from '@playwright/test';

// File 10: 2 tests
test('complex file 10 - test 1', async () => {
  console.log('File 10 - test 1');
  expect(10).toBe(10);
});

test('complex file 10 - test 2', async () => {
  console.log('File 10 - test 2');
  expect(10 + 1).toBe(11);
}); 