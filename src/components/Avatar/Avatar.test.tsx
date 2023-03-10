import { cleanup, render } from '@testing-library/react';
import { expect } from '@jest/globals';
import * as renderer from 'react-test-renderer';
import { Avatar } from './index';

// Enums
import { SIZES } from '@enums';

describe('Avatar render', () => {
  afterEach(cleanup);

  it('should render avatar component', () => {
    const { getByTestId } = render(<Avatar data-testid='TestAvatar' />);

    const avatar = getByTestId('TestAvatar');
    expect(avatar).toBeTruthy();
  });

  describe('jest Snapshot testing', () => {
    it('matches Avatar Snapshot', () => {
      const avatar = renderer
        .create(
          <Avatar
            data-testid='TestAvatar'
            isActive={true}
          />
        )
        .toJSON();
      expect(avatar).toMatchSnapshot();
    });
  });
  it('should render avatar component with size, src props', () => {
    const { getByTestId } = render(
      <Avatar
        data-testid='TestAvatar'
        size={SIZES.MD}
        src='https://gravatar.com/avatar/d7ce2a42de05bc0e7216db3570111d56?s=400&d=mp&r=x'
      />
    );

    const avatar = getByTestId('TestAvatar');
    expect(avatar).toBeTruthy();
  });
});
