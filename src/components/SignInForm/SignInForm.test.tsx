// Libraries
import { render, screen } from '@testing-library/react';

// Components
import SignInForm from '.';

describe('Sign Up Form Component', () => {
  test('should render correctly', () => {
    render(<SignInForm />);

    const signinForm = screen.getByTestId('signin-form');

    expect(signinForm).toMatchSnapshot();
  });
});
