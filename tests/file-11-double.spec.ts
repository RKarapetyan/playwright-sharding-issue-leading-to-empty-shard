import { test, expect } from '@playwright/test';

// File 11: 2 tests
test('complex file 11 - test 1', async () => {
  console.log('File 11 - test 1');
  expect(11).toBe(11);
});

test('complex file 11 - test 2', async () => {
  console.log('File 11 - test 2');
  expect(11 + 1).toBe(12);
}); 