import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shop.kovalska.com/');
  await page.locator('form').filter({ hasText: 'Топ продажів Зимовий бетон БСГ В25 Р4 F200 W6 (З) ( 0 ) 0,00 грн Ціна: 3 906,00' }).getByRole('button').click();
  await page.getByText('+', { exact: true }).click();
  await page.getByRole('link', { name: 'Оформити замовлення' }).click();
  await page.locator('input[name="name"]').fill('test');
  await page.locator('input[name="name"]').press('Tab');
  await page.locator('input[name="last_name"]').fill('test');
  await page.locator('input[name="phone"]').press('Enter');
  await page.locator('input[name="email"]').fill('test');
  await expect(page.locator('#fn_total_purchases_price')).toContainText('7 812,00 грн');
});