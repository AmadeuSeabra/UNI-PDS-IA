const { test, expect } = require('@playwright/test');

test.describe('image form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('submits an image and adds it to the list', async ({ page }) => {
    const title = `Playwright image ${Date.now()}`;
    const imageUrl = 'https://picsum.photos/seed/playwright/320/240';
    const titleInput = page.getByPlaceholder('Image Title');
    const urlInput = page.getByPlaceholder('https://img.com/erick.png');

    await titleInput.fill(title);
    await urlInput.fill(imageUrl);
    await page.locator('form button[type="submit"], form input[type="submit"]').click();

    const imageItem = page.getByRole('heading', { name: title });
    await expect(imageItem).toBeVisible();
    await expect(page.locator(`img[src="${imageUrl}"]`)).toBeVisible();
    await expect(titleInput).toHaveValue('');
    await expect(urlInput).toHaveValue('');
  });

  test('shows validation errors when both fields are empty', async ({ page }) => {
    await page.locator('form button[type="submit"], form input[type="submit"]').click();

    await expect(page.getByText('Please type a title for the image.')).toBeVisible();
    await expect(page.getByText('Please type a valid URL')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AI Alien' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Predator Night Vision' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'ET Bilu' })).toBeVisible();
  });

  test('rejects a missing title and an invalid image URL', async ({ page }) => {
    await page.getByPlaceholder('https://img.com/erick.png').fill('not-a-url');
    await page.locator('form button[type="submit"], form input[type="submit"]').click();

    await expect(page.getByText('Please type a title for the image.')).toBeVisible();
    await expect(page.getByText('Please type a valid URL')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'not-a-url' })).toHaveCount(0);
  });

  test('rejects a missing image URL', async ({ page }) => {
    await page.getByPlaceholder('Image Title').fill('Missing URL image');
    await page.locator('form button[type="submit"], form input[type="submit"]').click();

    await expect(page.getByText('Please type a valid URL')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Missing URL image' })).toHaveCount(0);
  });
});
