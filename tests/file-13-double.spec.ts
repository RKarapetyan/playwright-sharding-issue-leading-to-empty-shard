import { test, expect } from '@playwright/test';

// File 13: 2 tests
test('complex file 13 - test 1', async () => {
  console.log('File 13 - test 1');
  expect(13).toBe(13);
});

test('complex file 13 - test 2', async () => {
  console.log('File 13 - test 2');
  expect(13 + 1).toBe(14);
}); 