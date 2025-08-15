import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Profile from '../../(tabs)/profile';

describe('Profile', () => {
  it('renders', () => {
    render(<Profile />);
    const text = screen.getByText('Profile');
    expect(text).toBeVisible();
  });
});
