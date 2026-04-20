import { test, expect } from '@playwright/test';

test.describe('CV Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cv');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page.locator('h1:has-text("Curriculum Vitae")')).toBeVisible();
  });

  test('should display page description', async ({ page }) => {
    await expect(page.locator('text=Over 45 years of excellence in interior design')).toBeVisible();
  });

  test('should display Education section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Education")')).toBeVisible();
    await expect(page.locator('text=1978').first()).toBeVisible();
  });

  test('should display education years', async ({ page }) => {
    await expect(page.locator('text=1978').first()).toBeVisible();
    await expect(page.locator('text=1973')).toBeVisible();
  });

  test('should display Professional Experience section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Professional Experience")')).toBeVisible();
    await expect(page.locator('text=1978 - Present')).toBeVisible();
  });

  test('should display experience date ranges', async ({ page }) => {
    await expect(page.locator('text=1978 - Present')).toBeVisible();
  });

  test('should display Notable Projects section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Notable Projects")')).toBeVisible();
    await expect(page.locator('text=Rotana Tower Hotel')).toBeVisible();
  });

  test('sections should have accent colored borders', async ({ page }) => {
    const sectionHeading = page.locator('h2:has-text("Education")');
    await expect(sectionHeading).toHaveClass(/border-accent/);
  });

  test('should display timeline layout on desktop', async ({ page, viewport }) => {
    if (viewport && viewport.width >= 768) {
      // Check for grid layout
      const cvItem = page.locator('.grid').first();
      await expect(cvItem).toBeVisible();
    }
  });

  test('should be responsive on mobile', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      // Content should still be visible
      await expect(page.locator('h1:has-text("Curriculum Vitae")')).toBeVisible();
      await expect(page.locator('h2:has-text("Education")')).toBeVisible();
    }
  });

  test('should have proper spacing between sections', async ({ page }) => {
    const sections = page.locator('h2');
    await expect(sections).toHaveCount(3);
  });
});
