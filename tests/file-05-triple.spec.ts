import { test, expect } from '@playwright/test';

// File 5: 3 tests
test('complex file 5 - test 1', async () => {
  console.log('File 5 - test 1');
  expect(5).toBe(5);
});

test('complex file 5 - test 2', async () => {
  console.log('File 5 - test 2');
  expect(5 + 1).toBe(6);
});

test('complex file 5 - test 3', async () => {
  console.log('File 5 - test 3');
  expect(5 + 2).toBe(7);
}); 