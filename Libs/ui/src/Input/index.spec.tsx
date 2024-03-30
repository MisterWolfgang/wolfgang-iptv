import React from 'react';
import { render } from '@testing-library/react-native';

import Index from './index';

describe('Index', () => {
  it('should render successfully', () => {
    const { root } = render(< Index />);
    expect(root).toBeTruthy();
  });
});
