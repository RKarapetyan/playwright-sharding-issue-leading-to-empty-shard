import { test, expect } from '@playwright/test';

// File 7: 2 tests
test('complex file 7 - test 1', async () => {
  console.log('File 7 - test 1');
  expect(7).toBe(7);
});

test('complex file 7 - test 2', async () => {
  console.log('File 7 - test 2');
  expect(7 + 1).toBe(8);
}); 