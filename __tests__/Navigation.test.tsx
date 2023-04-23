import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import '@testing-library/jest-dom/extend-expect'; // import the jest-dom matchers

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Navigation', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/',
    });
  });

  it('renders the "Overview" link as active when on the homepage', () => {
    render(<Navigation />);
    const overviewLink = screen.getByText('OVERVIEW');
    expect(overviewLink).toHaveClass('active');
  });

  it('renders the "Inventory" link as active when on the inventory page', () => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/inventory',
    });
    render(<Navigation />);
    const inventoryLink = screen.getByText('INVENTORY');
    expect(inventoryLink).toHaveClass('active');
  });

  it('renders the "Settings" link as active when on the settings page', () => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/settings',
    });
    render(<Navigation />);
    const settingsLink = screen.getByText('SETTINGS');
    expect(settingsLink).toHaveClass('active');
  });
});
