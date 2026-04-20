import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Interior Design Portfolio/);
  });

  test('should display hero section with designer name', async ({ page }) => {
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText('[Designer Name]');
  });

  test('should display tagline', async ({ page }) => {
    await expect(page.locator('text=Creating Timeless Spaces')).toBeVisible();
  });

  test('should have "View Portfolio" CTA button', async ({ page }) => {
    const ctaButton = page.locator('a:has-text("View Portfolio")').first();
    await expect(ctaButton).toBeVisible();
    await ctaButton.click();
    await expect(page).toHaveURL('/portfolio');
  });

  test('should display "Featured Projects" section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Featured Projects")')).toBeVisible();
  });

  test('should display 4 featured project cards', async ({ page }) => {
    const projectCards = page.locator('.card');
    await expect(projectCards).toHaveCount(4);
  });

  test('should display project titles and metadata', async ({ page }) => {
    await expect(page.locator('text=Modern Residence')).toBeVisible();
    await expect(page.locator('text=Beverly Hills, CA')).toBeVisible();
  });

  test('should display brief introduction section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Crafting Spaces with Soul")')).toBeVisible();
  });

  test('should have "Learn more about my journey" link', async ({ page }) => {
    const aboutLink = page.locator('a:has-text("Learn more about my journey")');
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();
    await expect(page).toHaveURL('/about');
  });

  test('should display contact CTA section', async ({ page }) => {
    await expect(page.locator('h2:has-text("Let\'s Create Something Beautiful")')).toBeVisible();
  });

  test('should have working email link', async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:hello@example.com');
  });

  test('should have working phone link', async ({ page }) => {
    const phoneLink = page.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toBeVisible();
    await expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890');
  });

  test('should be responsive on mobile', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      // Check mobile layout
      await expect(page.locator('h1').first()).toBeVisible();
      const projectCards = page.locator('.card');
      await expect(projectCards).toHaveCount(4);
    }
  });

  test('featured project cards should be clickable', async ({ page }) => {
    const firstCard = page.locator('.card').first();
    await expect(firstCard).toBeVisible();
    await firstCard.click();
    // Should navigate to portfolio page with hash
    await expect(page.url()).toContain('/portfolio');
  });
});
