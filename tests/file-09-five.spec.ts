import { test, expect } from '@playwright/test';

// File 9: 5 tests
test('complex file 9 - test 1', async () => {
  console.log('File 9 - test 1');
  expect(9).toBe(9);
});

test('complex file 9 - test 2', async () => {
  console.log('File 9 - test 2');
  expect(9 + 1).toBe(10);
});

test('complex file 9 - test 3', async () => {
  console.log('File 9 - test 3');
  expect(9 + 2).toBe(11);
});

test('complex file 9 - test 4', async () => {
  console.log('File 9 - test 4');
  expect(9 + 3).toBe(12);
});

test('complex file 9 - test 5', async () => {
  console.log('File 9 - test 5');
  expect(9 + 4).toBe(13);
}); 