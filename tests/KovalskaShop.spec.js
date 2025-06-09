import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shop.kovalska.com/');
  await page.getByRole('textbox', { name: 'search' }).click();
  await page.getByRole('textbox', { name: 'search' }).fill('зимо');
  await page.getByRole('link', { name: 'Зимовий бетон БСГ В25 Р4 F200 W6 (М-5)' }).click();
  await page.getByText('+', { exact: true }).click();
  await page.getByRole('button', { name: 'Додати в кошик' }).click();
  await page.getByText('7 968,00', { exact: true }).click();
  await page.getByRole('link', { name: 'Оформити замовлення' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('тест');
  await page.locator('input[name="name"]').press('Tab');
  await page.locator('input[name="last_name"]').fill('тест');
  await page.locator('input[name="last_name"]').press('Tab');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('тест');
});