// Libraries
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import Header from '.';

const USER_INFO = {
  id: '1',
  fullName: 'Dehlela Shabir',
  job: 'Instructor',
  profileImage: 'https://gravatar.com/avatar/d7ce2a42de05bc0e7216db3570111d56?s=400&d=mp&r=x'
};

describe('Header Component', () => {
  test('should render correctly', () => {
    render(<Header />);

    const header = screen.getByTestId('header');

    expect(header).toMatchSnapshot();
  });
});

it('should render header component with userInfo will show UserDropDownMenu', () => {
  const { getByTestId } = render(<Header userInfo={USER_INFO} />);

  const userDropDownMenu = getByTestId('userDropDownMenu');
  expect(userDropDownMenu).toBeTruthy();
});

test('should render header without userInfo will show `Sign in` text', () => {
  render(<Header />);

  const signInText = screen.queryByText('Sign in');
  expect(signInText).toBeTruthy();
});

it('should simulate onClick event MetaMask button to be called', () => {
  const mockFunction = jest.fn();
  const { getByText } = render(<Header onClick={mockFunction} />);
  const metaMaskButton = getByText('MetaMask');

  fireEvent.click(metaMaskButton);
  expect(mockFunction).toHaveBeenCalled();
});
