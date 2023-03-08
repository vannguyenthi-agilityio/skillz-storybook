import Storybook from '@storybook/react';

// Components
import { Avatar } from '.';

// Code scripts
import { asDefault, online, border } from './Avatar.code';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select'
      },
      defaultValue: 'md'
    }
  },
  parameters: {
    componentSource: {
      language: 'typescript'
    }
  }
} as Storybook.ComponentMeta<typeof Avatar>;

const Template: Storybook.ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  componentSource: {
    code: asDefault
  }
};

export const Online = Template.bind({});
Online.args = {
  isActive: true
};
Online.parameters = {
  componentSource: {
    code: online
  }
};
Online.argTypes = {
  size: {
    options: ['xs', 'sm', 'md', 'lg'],
    defaultValue: 'md'
  }
};

export const Border = Template.bind({});
Border.args = {
  src: 'https://gravatar.com/avatar/d7ce2a42de05bc0e7216db3570111d56?s=400&d=mp&r=x',
  variant: 'border'
};
Border.parameters = {
  componentSource: {
    code: border
  }
};
Border.argTypes = {
  size: {
    options: ['2xl', '3xl', '4xl', '5xl'],
    defaultValue: '2xl'
  },
  variant: {
    options: ['border', 'unstyled'],
    control: {
      type: 'inline-radio'
    },
    defaultValue: 'solid'
  }
};
