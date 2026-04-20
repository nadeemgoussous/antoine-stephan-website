import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page.locator('h1:has-text("Portfolio")')).toBeVisible();
  });

  test('should display page description', async ({ page }) => {
    await expect(page.locator('text=A collection of spaces designed with purpose')).toBeVisible();
  });

  test('should display all filter categories', async ({ page }) => {
    await expect(page.locator('button:has-text("All")')).toBeVisible();
    await expect(page.locator('button:has-text("Residential")')).toBeVisible();
    await expect(page.locator('button:has-text("Commercial")')).toBeVisible();
    await expect(page.locator('button:has-text("Hospitality")')).toBeVisible();
  });

  test('should have "All" filter selected by default', async ({ page }) => {
    const allButton = page.locator('button:has-text("All")');
    await expect(allButton).toHaveClass(/bg-accent/);
  });

  test('should display 6 projects with "All" filter', async ({ page }) => {
    const projectCards = page.locator('.card');
    await expect(projectCards).toHaveCount(6);
  });

  test('should filter projects by Residential', async ({ page }) => {
    await page.locator('button:has-text("Residential")').click();

    // Wait for filtering to complete
    await page.waitForTimeout(500);

    // Check that Residential button is now active
    const residentialButton = page.locator('button:has-text("Residential")');
    await expect(residentialButton).toHaveClass(/bg-accent/);

    // Verify residential projects are shown
    await expect(page.locator('text=Modern Residence')).toBeVisible();
  });

  test('should filter projects by Commercial', async ({ page }) => {
    await page.locator('button:has-text("Commercial")').click();
    await page.waitForTimeout(500);

    const commercialButton = page.locator('button:has-text("Commercial")');
    await expect(commercialButton).toHaveClass(/bg-accent/);

    await expect(page.locator('text=Contemporary Office')).toBeVisible();
  });

  test('should filter projects by Hospitality', async ({ page }) => {
    await page.locator('button:has-text("Hospitality")').click();
    await page.waitForTimeout(500);

    const hospitalityButton = page.locator('button:has-text("Hospitality")');
    await expect(hospitalityButton).toHaveClass(/bg-accent/);

    await expect(page.locator('text=Boutique Hotel')).toBeVisible();
  });

  test('should open project modal when card is clicked', async ({ page }) => {
    const firstCard = page.locator('.card').first();
    await firstCard.click();

    // Modal should be visible
    await expect(page.locator('[role="dialog"], .fixed.inset-0')).toBeVisible();
  });

  test('modal should display project details', async ({ page }) => {
    await page.locator('.card').first().click();

    // Check for project title in modal
    await expect(page.locator('h2:has-text("Modern Residence")')).toBeVisible();

    // Check for project metadata
    await expect(page.locator('text=Beverly Hills, CA')).toBeVisible();
    await expect(page.locator('text=2024')).toBeVisible();
  });

  test('modal should have close button', async ({ page }) => {
    await page.locator('.card').first().click();

    const closeButton = page.locator('button[aria-label="Close modal"]');
    await expect(closeButton).toBeVisible();
  });

  test('should close modal when close button is clicked', async ({ page }) => {
    await page.locator('.card').first().click();

    // Wait for modal to open
    await expect(page.locator('.fixed.inset-0')).toBeVisible();

    // Click close button
    await page.locator('button[aria-label="Close modal"]').click();

    // Modal should be hidden
    await expect(page.locator('.fixed.inset-0')).not.toBeVisible();
  });

  test('should close modal when clicking outside', async ({ page }) => {
    await page.locator('.card').first().click();

    // Wait for modal to open
    await expect(page.locator('.fixed.inset-0')).toBeVisible();

    // Click on the backdrop
    await page.locator('.fixed.inset-0').click({ position: { x: 10, y: 10 } });

    // Modal should be hidden
    await expect(page.locator('.fixed.inset-0')).not.toBeVisible();
  });

  test('should close modal when pressing Escape key', async ({ page }) => {
    await page.locator('.card').first().click();

    // Wait for modal to open
    await expect(page.locator('.fixed.inset-0')).toBeVisible();

    // Press Escape
    await page.keyboard.press('Escape');

    // Modal should be hidden
    await expect(page.locator('.fixed.inset-0')).not.toBeVisible();
  });

  test('modal should have image navigation arrows', async ({ page }) => {
    await page.locator('.card').first().click();

    // Check for prev/next buttons
    await expect(page.locator('button[aria-label="Previous image"]')).toBeVisible();
    await expect(page.locator('button[aria-label="Next image"]')).toBeVisible();
  });

  test('should navigate between images in modal', async ({ page }) => {
    await page.locator('.card').first().click();

    // Click next button
    const nextButton = page.locator('button[aria-label="Next image"]');
    await nextButton.click();

    // Image counter should update
    await expect(page.locator('text=/2 \\/ \\d+/')).toBeVisible();
  });

  test('should display image counter in modal', async ({ page }) => {
    await page.locator('.card').first().click();

    // Should show current image and total (e.g., "1 / 4")
    await expect(page.locator('text=/1 \\/ \\d+/')).toBeVisible();
  });

  test('project cards should show hover effect', async ({ page }) => {
    const firstCard = page.locator('.card').first();
    await firstCard.hover();

    // Check that "View Project" text appears on hover
    await expect(page.locator('text=View Project').first()).toBeVisible();
  });
});
