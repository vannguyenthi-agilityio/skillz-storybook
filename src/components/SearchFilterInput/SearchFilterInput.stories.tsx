import Storybook from '@storybook/react';

// Components
import SearchFilter from '.';

// Code scripts
import { asDefault } from './SearchFilterInput.code';

export default {
  title: 'Components/SearchFilterInput',
  component: SearchFilter,
  argTypes: {
    size: {
      options: ['lg', 'xl'],
      control: {
        type: 'select'
      },
      defaultValue: 'xl'
    }
  },
  parameters: {
    componentSource: {
      language: 'typescript'
    }
  }
} as Storybook.ComponentMeta<typeof SearchFilter>;

const Template: Storybook.ComponentStory<typeof SearchFilter> = (args) => <SearchFilter {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  componentSource: {
    code: asDefault
  }
};
