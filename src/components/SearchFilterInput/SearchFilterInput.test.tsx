import { cleanup, render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

import { SearchFilterInput } from './index';

describe('SearchFilter render', () => {
  afterEach(cleanup);

  it('should render check data-testid SearchFilter component', () => {
    render(<SearchFilterInput />);

    const searchFilter = screen.getByTestId('searchFilter');
    expect(searchFilter).toBeTruthy();
  });

  describe('jest Snapshot testing', () => {
    it('matches SearchFilter Snapshot', () => {
      const searchFilter = renderer.create(<SearchFilterInput />).toJSON();
      expect(searchFilter).toMatchSnapshot();
    });
  });
});
