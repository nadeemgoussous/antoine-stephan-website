import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display header with designer name', async ({ page }) => {
    const logo = page.locator('header a:has-text("[Designer Name]")');
    await expect(logo).toBeVisible();
  });

  test('logo should link to home page', async ({ page }) => {
    await page.goto('/about');
    await page.locator('header a:has-text("[Designer Name]")').click();
    await expect(page).toHaveURL('/');
  });

  test('should display all navigation links on desktop', async ({ page, viewport }) => {
    if (viewport && viewport.width >= 768) {
      await expect(page.locator('nav a:has-text("Home")')).toBeVisible();
      await expect(page.locator('nav a:has-text("Portfolio")')).toBeVisible();
      await expect(page.locator('nav a:has-text("CV")')).toBeVisible();
      await expect(page.locator('nav a:has-text("About")')).toBeVisible();
    }
  });

  test('should navigate to Portfolio page', async ({ page }) => {
    await page.locator('nav a:has-text("Portfolio")').first().click();
    await expect(page).toHaveURL('/portfolio');
  });

  test('should navigate to CV page', async ({ page }) => {
    await page.locator('nav a:has-text("CV")').first().click();
    await expect(page).toHaveURL('/cv');
  });

  test('should navigate to About page', async ({ page }) => {
    await page.locator('nav a:has-text("About")').first().click();
    await expect(page).toHaveURL('/about');
  });

  test('should navigate to Home page', async ({ page }) => {
    await page.goto('/about');
    await page.locator('nav a:has-text("Home")').first().click();
    await expect(page).toHaveURL('/');
  });

  test('should highlight active page in navigation', async ({ page }) => {
    await page.goto('/portfolio');
    const portfolioLink = page.locator('nav a:has-text("Portfolio")').first();
    await expect(portfolioLink).toHaveClass(/text-accent/);
  });

  test('header should be sticky on scroll', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toHaveCSS('position', 'sticky');
  });

  test('should display mobile menu button on mobile', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      const menuButton = page.locator('button[aria-label="Toggle menu"]');
      await expect(menuButton).toBeVisible();
    }
  });

  test('should open mobile menu when button is clicked', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      const menuButton = page.locator('button[aria-label="Toggle menu"]');
      await menuButton.click();

      // Mobile menu should be visible
      await expect(page.locator('nav a:has-text("Home")').last()).toBeVisible();
      await expect(page.locator('nav a:has-text("Portfolio")').last()).toBeVisible();
    }
  });

  test('should close mobile menu after clicking a link', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      const menuButton = page.locator('button[aria-label="Toggle menu"]');
      await menuButton.click();

      // Click a navigation link
      await page.locator('nav a:has-text("About")').last().click();

      // Should navigate to the page
      await expect(page).toHaveURL('/about');
    }
  });

  test('should display footer on all pages', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();

    await page.goto('/portfolio');
    await expect(page.locator('footer')).toBeVisible();

    await page.goto('/cv');
    await expect(page.locator('footer')).toBeVisible();

    await page.goto('/about');
    await expect(page.locator('footer')).toBeVisible();
  });

  test('footer should display designer name', async ({ page }) => {
    await expect(page.locator('footer h3:has-text("[Designer Name]")')).toBeVisible();
  });

  test('footer should have contact information', async ({ page }) => {
    await expect(page.locator('footer a[href^="mailto:"]')).toBeVisible();
    await expect(page.locator('footer a[href^="tel:"]')).toBeVisible();
  });

  test('footer should have social media links', async ({ page }) => {
    await expect(page.locator('footer a:has-text("LinkedIn")')).toBeVisible();
    await expect(page.locator('footer a:has-text("Instagram")')).toBeVisible();
  });

  test('footer should display copyright year', async ({ page }) => {
    const currentYear = new Date().getFullYear();
    await expect(page.locator(`footer text=© ${currentYear}`)).toBeVisible();
  });

  test('footer email link should be clickable', async ({ page }) => {
    const emailLink = page.locator('footer a[href^="mailto:"]');
    await expect(emailLink).toHaveAttribute('href', 'mailto:hello@example.com');
  });

  test('footer phone link should be clickable', async ({ page }) => {
    const phoneLink = page.locator('footer a[href^="tel:"]');
    await expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890');
  });
});
