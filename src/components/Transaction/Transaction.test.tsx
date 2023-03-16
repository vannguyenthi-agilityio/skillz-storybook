// Libraries
import { render, screen } from '@testing-library/react';

// Components
import Transaction from '.';
import { FacebookIcon, RubyIcon } from '@components';

describe('Transaction Component', () => {
  test('should render correctly', () => {
    render(
      <Transaction
        label='Enrolled'
        content='Lorem ipsum dolor sit amet, consectetu'
        score={-3}
        timeDate='02:15 pm. February 12, 2023'
        icon={<FacebookIcon />}
        bgColorIcon='yellow.500'
      />
    );

    const transaction = screen.getByTestId('transaction');
    expect(transaction).toMatchSnapshot();
  });
});

describe('Transaction Component with props icon is Ruby', () => {
  test('should render correctly', () => {
    render(
      <Transaction
        label='Enrolled'
        content='Lorem ipsum dolor sit amet, consectetu'
        score={3}
        timeDate='02:15 pm. February 12, 2023'
        icon={<RubyIcon />}
        bgColorIcon='orange.500'
      />
    );

    const transaction = screen.getByTestId('transaction');
    expect(transaction).toBeTruthy();
  });
});
