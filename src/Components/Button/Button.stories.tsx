import Storybook from '@storybook/react';
import { Image } from '@chakra-ui/react'

// Constants
import { SIZES, VARIANTS } from '@enums/button';
import { ASSETS } from '@constants/assets';

// Components
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Storybook.ComponentMeta<typeof Button>;

const Template: Storybook.ComponentStory<typeof Button> = args => (
  <Button label='Login' {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: SIZES.default
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  variant: VARIANTS.uppercase,
  size: SIZES.default
};

export const Incorrect = Template.bind({});
Incorrect.args = {
  size: SIZES.sm,
  color: 'default.light',
  label: 'Incorrect',
  bg: 'red.500',
  fontWeight: 'bold',
  variant: VARIANTS.uppercase,
};

export const Correct = Template.bind({});
Correct.args = {
  size: SIZES.sm,
  color: 'grey.200',
  label: 'Correct',
  bg: 'transparent',
  fontWeight: 'bold',
  border: '1px solid',
  borderColor: 'grey.200',
  variant: VARIANTS.uppercase,
};

export const WithIcon = Template.bind({});
WithIcon.args = {  
  size: SIZES.md,
  color: 'default.light',
  bg: 'primary.100',
  label: 'Examination',
  fontWeight: 'normal',
  positionIcon: 'left',
  icon: <Image src={ASSETS.ICON_CHARITY} alt='Icon Charity' />
};

export const IconAddOnly = Template.bind({});
IconAddOnly.args = {
  bg: 'tranparent',
  variant: VARIANTS.icon,
  label: '',
  positionIcon: 'left',
  icon: <Image src={ASSETS.ICON_ADD} alt='Icon Add'/>
};

export const IconEditOnly = Template.bind({});
IconEditOnly.args = {
  bg: 'tranparent',
  variant: VARIANTS.icon,
  label: '',
  positionIcon: 'left',
  icon: <Image src={ASSETS.ICON_EDIT} alt='Icon Edit'/>
};

export const OrangeMask = Template.bind({});
OrangeMask.args = {  
  size: SIZES.default,
  variant: VARIANTS.medium,
  color: 'default.light',
  bg: 'orange.300',
  label: 'MetaMask',
  fontWeight: 'normal',
  positionIcon: 'left',
  icon: <Image src={ASSETS.ICON_MASK} alt='Icon MetaMask' />
};
export const MaskFull = Template.bind({});
MaskFull.args = {  
  size: SIZES.full,
  variant: VARIANTS.medium,
  color: 'default.light',
  bg: 'orange.300',
  label: 'Connect MetaMask',
  fontWeight: 'normal',
  positionIcon: 'left',
  icon: <Image src={ASSETS.ICON_MASK} alt='Icon MetaMask'/>
};

export const Loading = Template.bind({});
Loading.args = {
  size: SIZES.default,
  label: 'Loading',
  isLoading: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  size:  SIZES.default,
  label: 'Disabled',
  isDisabled: true
};
