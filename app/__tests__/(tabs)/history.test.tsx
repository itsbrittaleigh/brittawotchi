import { render, screen } from '@testing-library/react-native';
import React from 'react';
import History from '../../(tabs)/history';

describe('History', () => {
  it('renders', () => {
    render(<History />);
    const text = screen.getByText('History');
    expect(text).toBeVisible();
  });
});
