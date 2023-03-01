// Libraries
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

// Component
import Select from '.';
import SelectComponent from './Select.code';

// Types
import { ISelect } from '@interfaces/select.interface';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'onChange' },
    label: { type: 'string' },
    variant: {
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'outline',
    },
    size: {
      options: ['lg', 'md', 'sm', 'xs'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'md',
    },
    isDisabled: { type: 'boolean', defaultValue: false },
  },
  parameters: {
    componentSource: {
      code: SelectComponent,
      language: 'typescript',
    },
  },
} as Meta;

const mockOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const Template: Story<ISelect> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select',
  options: mockOptions,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: mockOptions,
};

export const Large = Template.bind({});
Large.args = {
  options: mockOptions,
  label: 'Large',
  size: 'lg',
};

export const Medium = Template.bind({});
Medium.args = {
  options: mockOptions,
  label: 'Medium',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  options: mockOptions,
  label: 'Small',
  size: 'sm',
};

export const Disable = Template.bind({});
Disable.args = {
  options: mockOptions,
  label: 'Disable',
  isDisabled: true,
};
