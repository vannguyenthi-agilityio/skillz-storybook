// Libraries
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

// Components
import { Checkbox, Icon } from '@chakra-ui/react';

// Types
import type { CheckboxProps } from '@chakra-ui/react';

// Code scripts
import { asDefault, black, danger, disabled, success, withTick } from './ChecBox.code';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    variant: {
      options: ['selected', 'success', 'danger', 'black'],
      control: {
        type: 'select'
      },
      defaultValue: 'selected'
    },
    isDisabled: {
      type: 'boolean',
      defaultValue: false
    },
    isChecked: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'selected',
  children: 'Some text here',
  icon: (
    <Icon viewBox='0 0 24 24'>
      <circle
        cx='12'
        cy='12'
        r='12'
        fill='white'
      />
    </Icon>
  )
};
Default.parameters = {
  componentSource: {
    code: asDefault,
    language: 'typescript'
  }
};

export const WithTick = Template.bind({});
WithTick.args = {
  variant: 'success',
  children: 'Some text here',
  isChecked: true
};
WithTick.parameters = {
  componentSource: {
    code: withTick,
    language: 'typescript'
  }
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Some text here',
  isChecked: true,
  icon: (
    <Icon viewBox='0 0 24 24'>
      <circle
        cx='12'
        cy='12'
        r='12'
        fill='white'
      />
    </Icon>
  )
};
Success.parameters = {
  componentSource: {
    code: success,
    language: 'typescript'
  }
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Some text here',
  isChecked: true,
  icon: (
    <Icon viewBox='0 0 24 24'>
      <circle
        cx='12'
        cy='12'
        r='12'
        fill='white'
      />
    </Icon>
  )
};
Danger.parameters = {
  componentSource: {
    code: danger,
    language: 'typescript'
  }
};

export const Black = Template.bind({});
Black.args = {
  variant: 'black',
  children: 'Some text here',
  isChecked: true,
  icon: (
    <Icon viewBox='0 0 24 24'>
      <circle
        cx='12'
        cy='12'
        r='12'
        fill='white'
      />
    </Icon>
  )
};
Black.parameters = {
  componentSource: {
    code: black,
    language: 'typescript'
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'selected',
  children: 'Some text here',
  icon: (
    <Icon viewBox='0 0 24 24'>
      <circle
        cx='12'
        cy='12'
        r='12'
        fill='white'
      />
    </Icon>
  ),
  isDisabled: true
};
Disabled.parameters = {
  componentSource: {
    code: disabled,
    language: 'typescript'
  }
};
