import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import ItemList from './ItemList';

afterEach(cleanup);

describe('ItemList', () => {
  it('renders', () => {
    const { asFragment } = render(<ItemList />);

    expect(asFragment()).toMatchSnapshot();
  });
});