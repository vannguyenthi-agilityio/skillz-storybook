import { cleanup, render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

import UserDropDownMenu from './index';

const USER_INFO = {
  id: '1',
  fullName: 'Dehlela Shabir',
  job: 'Instructor',
  profileImage: 'https://gravatar.com/avatar/d7ce2a42de05bc0e7216db3570111d56?s=400&d=mp&r=x'
};

describe('DropDownMenu render', () => {
  afterEach(cleanup);

  it('should render DropDownMenu component', () => {
    const { container } = render(<UserDropDownMenu>{}</UserDropDownMenu>);

    const userDropDownMenu = container.querySelector('.chakra-menu__menu-list');
    expect(userDropDownMenu).toBeTruthy();
  });

  it('should render check data-testid UserDropDownMenu component', () => {
    render(<UserDropDownMenu userInfo={USER_INFO}>{}</UserDropDownMenu>);

    const userDropDownMenu = screen.getByTestId('userDropDownMenu');
    expect(userDropDownMenu).toBeTruthy();
  });

  describe('jest Snapshot testing', () => {
    it('matches UserDropDownMenu Snapshot', () => {
      const userDropDownMenu = renderer.create(<UserDropDownMenu userInfo={USER_INFO}>{}</UserDropDownMenu>).toJSON();
      expect(userDropDownMenu).toMatchSnapshot();
    });
  });

  it('should render UserDropDownMenu component with userInfo props', () => {
    const { container } = render(<UserDropDownMenu userInfo={USER_INFO}>{}</UserDropDownMenu>);

    const userDropDownMenu = container.querySelector('.chakra-menu__menu-list');
    expect(userDropDownMenu).toBeTruthy();
  });
});
