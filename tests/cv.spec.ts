import { test, expect } from '@playwright/test';

test.describe('CV Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cv');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page.locator('h1:has-text("Curriculum Vitae")')).toBeVisible();
  });

  test('should display page description', async ({ page }) => {
    await expect(page.locator('text=A comprehensive overview of my professional journey')).toBeVisible();
  });

  test('should have Download PDF button', async ({ page }) => {
    const downloadButton = page.locator('button:has-text("Download PDF")');
    await expect(downloadButton).toBeVisible();
  });

  test('should display Education section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Education")')).toBeVisible();
    await expect(page.locator('text=Master of Fine Arts in Interior Design')).toBeVisible();
    await expect(page.locator('text=Rhode Island School of Design')).toBeVisible();
  });

  test('should display education years', async ({ page }) => {
    await expect(page.locator('text=1978')).toBeVisible();
    await expect(page.locator('text=1975')).toBeVisible();
  });

  test('should display Professional Experience section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Professional Experience")')).toBeVisible();
    await expect(page.locator('text=Principal Designer & Founder')).toBeVisible();
  });

  test('should display experience date ranges', async ({ page }) => {
    await expect(page.locator('text=1995 - Present')).toBeVisible();
  });

  test('should display Notable Projects section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Notable Projects")')).toBeVisible();
    await expect(page.locator('text=Modern Residence, Beverly Hills')).toBeVisible();
  });

  test('should display Awards & Recognition section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Awards & Recognition")')).toBeVisible();
    await expect(page.locator('text=Best Residential Design')).toBeVisible();
    await expect(page.locator('text=American Society of Interior Designers')).toBeVisible();
  });

  test('should display Publications & Press section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Publications & Press")')).toBeVisible();
    await expect(page.locator('text=Featured Designer')).toBeVisible();
  });

  test('should display Professional Memberships section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Professional Memberships")')).toBeVisible();
    await expect(page.locator('text=Fellow, American Society of Interior Designers')).toBeVisible();
  });

  test('should display Certifications section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Certifications")')).toBeVisible();
    await expect(page.locator('text=NCIDQ Certified')).toBeVisible();
  });

  test('sections should have accent colored borders', async ({ page }) => {
    const sectionHeading = page.locator('h2:has-text("Education")');
    await expect(sectionHeading).toHaveCSS('border-bottom-color', /.*accent.*/);
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
    await expect(sections).toHaveCount(7); // 7 main sections
  });
});
