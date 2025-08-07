import { test, expect } from '@playwright/test';

// File 3: 2 tests
test('complex file 3 - test 1', async () => {
  console.log('File 3 - test 1');
  expect(3).toBe(3);
});

test('complex file 3 - test 2', async () => {
  console.log('File 3 - test 2');
  expect(3 + 1).toBe(4);
}); 