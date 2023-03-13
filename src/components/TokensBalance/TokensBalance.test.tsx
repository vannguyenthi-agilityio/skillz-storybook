// Libraries
import { render, screen } from '@testing-library/react';

// Components
import TokensBalance from '.';

describe('TokensBalance Component', () => {
  test('should render correctly', () => {
    render(<TokensBalance valueTokensBalance={129} />);

    const tokensBalance = screen.getByTestId('tokents-balance');

    expect(tokensBalance).toMatchSnapshot();
  });
});
