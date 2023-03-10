// Libraries
import { render, screen } from '@testing-library/react';

// Components
import SignUpForm from '.';

describe('Sign Up Form Component', () => {
  test('should render correctly', () => {
    render(<SignUpForm />);

    const signupForm = screen.getByTestId('signup-form');

    expect(signupForm).toMatchSnapshot();
  });
});
