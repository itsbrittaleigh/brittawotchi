import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Index from '../../(tabs)/index';

describe('Home', () => {
  it('renders', () => {
    render(<Index />);
    const text = screen.getByText('Home');
    expect(text).toBeVisible();
  });
});
