import Storybook from '@storybook/react';
import { Image } from '@chakra-ui/react'

// Constants
import { SIZES, VARIANTS } from '@enums/button';

import ASSETS from '@constants/assets';

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
  size: SIZES.default,
  color: 'default.light',
  bg: 'primary.100'
};

export const Leave = Template.bind({});
Leave.args = {
  size: SIZES.default,
  color: 'default.light',
  label: 'Leave',
  bg: 'red.300',
  fontWeight: 'bold',
  variant: VARIANTS.uppercase,
};

export const Incorrect = Template.bind({});
Incorrect.args = {
  size: SIZES.smallExtra,
  color: 'default.light',
  label: 'Incorrect',
  bg: 'red.500',
  fontWeight: 'bold',
  variant: VARIANTS.uppercase,
};

export const Correct = Template.bind({});
Correct.args = {
  size: SIZES.smallExtra,
  color: 'grey.200',
  label: 'Correct',
  bg: 'transparent',
  fontWeight: 'bold',
  border: '1px solid',
  borderColor: 'grey.200',
  variant: VARIANTS.uppercase,
};

export const Next = Template.bind({});
Next.args = {
  size: SIZES.default,
  color: 'default.light',
  label: 'Next',
  bg: 'primary.100',
  fontWeight: 'bold',
  variant: VARIANTS.uppercase,
};

export const Continue = Template.bind({});
Continue.args = {
  size: SIZES.default,
  color: 'default.light',
  label: 'Continue',
  bg: 'primary.100',
  variant: VARIANTS.uppercase,
};

export const Back = Template.bind({});
Back.args = {
  size: SIZES.default,
  color: 'default.light',
  label: 'Back',
  bg: 'grey.100',
  fontWeight: 'bold',
  variant: VARIANTS.uppercase,
};

export const Examination = Template.bind({});
Examination.args = {  
  size: SIZES.medium,
  color: 'default.light',
  bg: 'primary.100',
  label: 'Examination',
  fontWeight: 'normal',
  leftIcon: <Image src={ASSETS.ICON_CHARITY} alt='Icon Charity'/>
};

export const SignIn = Template.bind({});
SignIn.args = {  
  size: SIZES.default,
  color: 'red.200',
  bg: 'transparent',
  label: 'Click to sign in',
  leftIcon: <Image src={ASSETS.ICON_ARROW} alt='Icon Arrow'/>
};

export const IconAddOnly = Template.bind({});
IconAddOnly.args = {
  bg: 'tranparent',
  variant: VARIANTS.icon,
  label: '',
  leftIcon: <Image src={ASSETS.ICON_ADD} alt='Icon Add'/>
};

export const IconEditOnly = Template.bind({});
IconEditOnly.args = {
  bg: 'tranparent',
  variant: VARIANTS.icon,
  label: '',
  leftIcon: <Image src={ASSETS.ICON_EDIT} alt='Icon Edit'/>
};

export const Mask = Template.bind({});
Mask.args = {  
  size: SIZES.default,
  variant: VARIANTS.medium,
  color: 'default.light',
  bg: 'orange.300',
  label: 'MetaMask',
  fontWeight: 'normal',
  leftIcon: <Image src={ASSETS.ICON_MASK} alt='Icon MetaMask'/>
};

export const MaskConnect = Template.bind({});
MaskConnect.args = {  
  size: SIZES.largeExtra,
  variant: VARIANTS.medium,
  color: 'default.light',
  bg: 'orange.300',
  label: 'Connect MetaMask',
  fontWeight: 'normal',
  leftIcon: <Image src={ASSETS.ICON_MASK} alt='Icon MetaMask'/>
};

export const MaskFull = Template.bind({});
MaskFull.args = {  
  size: SIZES.full,
  variant: VARIANTS.medium,
  color: 'default.light',
  bg: 'orange.300',
  label: 'Connect MetaMask',
  fontWeight: 'normal',
  leftIcon: <Image src={ASSETS.ICON_MASK} alt='Icon MetaMask'/>
};
