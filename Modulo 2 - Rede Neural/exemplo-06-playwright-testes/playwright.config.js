// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 5_000,
  expect: { timeout: 5_000 },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://erickwendel.github.io/vanilla-js-web-app-example/',
    ...devices['Desktop Chrome'],
    browserName: 'chromium',
  },
});
