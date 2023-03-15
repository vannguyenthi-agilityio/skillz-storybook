import Storybook from '@storybook/react';

// Components
import Header from '.';

// Code
import { asDefault, withUserInfo } from './Header.code';

const USER_INFO = {
  id: '1',
  fullName: 'Dehlela Shabir',
  job: 'Instructor',
  profileImage: 'https://gravatar.com/avatar/d7ce2a42de05bc0e7216db3570111d56?s=400&d=mp&r=x'
};

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    componentSource: {
      language: 'typescript'
    }
  }
} as Storybook.ComponentMeta<typeof Header>;

const Template: Storybook.ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  componentSource: {
    code: asDefault
  }
};

export const WithUserInfo = Template.bind({});
WithUserInfo.args = {
  userInfo: USER_INFO
};
WithUserInfo.parameters = {
  componentSource: {
    code: withUserInfo
  }
};
