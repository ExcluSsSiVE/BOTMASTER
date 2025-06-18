import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 14 Pro Max'],
});

test('test', async ({ page }) => {
  await page.goto('https://shop.kovalska.com/');
  await page.locator('form').filter({ hasText: 'Топ продажів Зимовий бетон БСГ В25 Р4 F200 W6 (З) ( 0 ) 0,00 грн Ціна: 3 906,00' }).getByRole('button').click();
  await page.getByText('+', { exact: true }).click();
  await expect(page.locator('#fn_cart_total_price')).toContainText('7 812,00');
});