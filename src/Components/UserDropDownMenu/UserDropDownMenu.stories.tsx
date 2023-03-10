import Storybook from '@storybook/react';

// Components
import UserDropDownMenu from '.';

// Code
import { asDefault } from './UserDropDownMenu.code';

const USER_INFO = {
  id: '1',
  fullName: 'Dehlela Shabir',
  job: 'Instructor',
  profileImage: 'https://gravatar.com/avatar/d7ce2a42de05bc0e7216db3570111d56?s=400&d=mp&r=x'
};

export default {
  title: 'Components/UserDropDownMenu',
  component: UserDropDownMenu,
  parameters: {
    componentSource: {
      code: asDefault,
      language: 'typescript'
    }
  }
} as Storybook.ComponentMeta<typeof UserDropDownMenu>;

const Template: Storybook.ComponentStory<typeof UserDropDownMenu> = (args) => {
  return <UserDropDownMenu {...args} />;
};

export const UserDropDownMenuDefault = Template.bind({});
UserDropDownMenuDefault.args = {
  userInfo: USER_INFO
};
