// Libraries
import { render } from '@testing-library/react';

// Components
import ButtonWithIconText from '.';

describe('ButtonWithIconText Component type create', () => {
  test('should render correctly', () => {
    const { container } = render(<ButtonWithIconText />);

    const btnWithIconTextCreate = container.querySelector('.chakra-button');
    expect(btnWithIconTextCreate).toMatchSnapshot();
  });
});

it('should render ButtonWithIconText with type input', () => {
  const { getByText } = render(<ButtonWithIconText textAction='Input' />);

  const button = getByText('Input');
  expect(button).toBeTruthy();
});

it('should render ButtonWithIconText with type upload', () => {
  const { getByText } = render(<ButtonWithIconText textAction='Upload' />);

  const button = getByText('Upload');
  expect(button).toBeTruthy();
});
