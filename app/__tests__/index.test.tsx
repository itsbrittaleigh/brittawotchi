import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Index from '../index';

describe('Index screen', () => {
  it('renders welcome text', () => {
    render(<Index />);
    const text = screen.getByText('Welcome');
    expect(text).toBeVisible();
  });
});
