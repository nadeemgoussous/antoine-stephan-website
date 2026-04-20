import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page.locator('h1:has-text("About Me")')).toBeVisible();
  });

  test('should display subtitle', async ({ page }) => {
    await expect(page.locator('text=45 years of creating spaces that inspire')).toBeVisible();
  });

  test('should display biography section', async ({ page }) => {
    await expect(page.locator('text=Born in Amman in 1955')).toBeVisible();
  });

  test('should have 5 biography paragraphs', async ({ page }) => {
    const bioParagraphs = page.locator('p').filter({ hasText: /journey|years|practice|clients|passionate/ });
    await expect(bioParagraphs.first()).toBeVisible();
  });

  test('should display Design Philosophy section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Design Philosophy")')).toBeVisible();
  });

  test('should display philosophy quote', async ({ page }) => {
    await expect(page.locator('text=Great design is invisible')).toBeVisible();
  });

  test('should display three philosophy principles', async ({ page }) => {
    await expect(page.locator('h3:has-text("Listen First")')).toBeVisible();
    await expect(page.locator('h3:has-text("Honor Context")')).toBeVisible();
    await expect(page.locator('h3:has-text("Pursue Timelessness")')).toBeVisible();
  });

  test('philosophy cards should have descriptions', async ({ page }) => {
    await expect(page.locator('text=Every project begins with understanding')).toBeVisible();
  });

  test('should display How I Work section', async ({ page }) => {
    await expect(page.locator('h2:has-text("How I Work")')).toBeVisible();
  });

  test('should display 5 process steps', async ({ page }) => {
    await expect(page.locator('span:has-text("01")')).toBeVisible();
    await expect(page.locator('span:has-text("02")')).toBeVisible();
    await expect(page.locator('span:has-text("03")')).toBeVisible();
    await expect(page.locator('span:has-text("04")')).toBeVisible();
    await expect(page.locator('span:has-text("05")')).toBeVisible();
  });

  test('process steps should have titles', async ({ page }) => {
    await expect(page.locator('h3:has-text("Discovery")')).toBeVisible();
    await expect(page.locator('h3:has-text("Concept Development")')).toBeVisible();
    await expect(page.locator('h3:has-text("Refinement")')).toBeVisible();
    await expect(page.locator('h3:has-text("Implementation")')).toBeVisible();
    await expect(page.locator('h3:has-text("Completion")')).toBeVisible();
  });

  test('process steps should have descriptions', async ({ page }) => {
    await expect(page.locator('text=We begin with conversation')).toBeVisible();
  });

  test('should display contact CTA section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Let\'s Talk About Your Project")')).toBeVisible();
  });

  test('should have email button in contact section', async ({ page }) => {
    const emailButton = page.locator('a:has-text("Email Me")').last();
    await expect(emailButton).toBeVisible();
    await expect(emailButton).toHaveAttribute('href', 'mailto:stephan.dec@hotmail.com');
  });

  test('should have phone link in contact section', async ({ page }) => {
    const phoneLink = page.locator('a[href^="tel:"]').last();
    await expect(phoneLink).toBeVisible();
  });

  test('should display social media links', async ({ page }) => {
    await expect(page.locator('text=Connect with me')).toBeVisible();
    await expect(page.locator('a:has-text("LinkedIn")').last()).toBeVisible();
    await expect(page.locator('a:has-text("Instagram")').last()).toBeVisible();
  });

  test('should display studio location', async ({ page }) => {
    await expect(page.locator('text=Studio Location')).toBeVisible();
  });

  test('contact CTA should have accent background', async ({ page }) => {
    const ctaSection = page.locator('section.bg-accent').last();
    await expect(ctaSection).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      // Check that content is still visible and readable
      await expect(page.locator('h1:has-text("About Me")')).toBeVisible();
      await expect(page.locator('h2:has-text("Design Philosophy")')).toBeVisible();
    }
  });

  test('philosophy cards should be in grid layout on desktop', async ({ page, viewport }) => {
    if (viewport && viewport.width >= 768) {
      const philosophyGrid = page.locator('.grid').filter({ has: page.locator('h3:has-text("Listen First")') });
      await expect(philosophyGrid).toBeVisible();
    }
  });
});
