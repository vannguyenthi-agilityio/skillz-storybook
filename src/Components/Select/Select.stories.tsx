//Libraries
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

// Component
import Select from '.';

// Types
import { ISelect } from '@interfaces/select.interface';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: { onChange: { action: 'onChange' } },
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

export const SelectWithoutLabel = Template.bind({});
SelectWithoutLabel.args = {
  options: mockOptions,
};
