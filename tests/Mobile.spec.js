import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 14 Pro Max'],
});

test('test', async ({ page }) => {
  await page.goto('https://shop.kovalska.com/');
  await page.getByRole('banner').getByRole('img').first().click();
  await page.getByRole('textbox', { name: 'search' }).click();
  await page.getByRole('textbox', { name: 'search' }).fill('бетон зимовий ');
  await page.getByRole('link', { name: 'Зимовий бетон БСГ В25 Р4 F200 W6 (М-5)' }).click();
  await page.getByText('+', { exact: true }).click();
  await page.getByText('+', { exact: true }).click();
  await page.getByText('984,00').click();
  await page.getByRole('button', { name: 'Додати в кошик' }).click();
  await page.getByText('952,00 грн').first().click();
  await page.getByRole('link', { name: 'Продовжити покупки' }).click();
});