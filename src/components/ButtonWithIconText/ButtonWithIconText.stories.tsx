import Storybook from '@storybook/react';

// Components
import ButtonWithIconText from '.';
import { UploadIcon, InputIcon } from '@components';

// Code
import {
  btnWithIconInput,
  btnWithIconUpload,
  btnWithIconCreate,
  btnWithIconUploadIsAcive,
  btnWithIconUploadWithValueTokens
} from './ButtonWithIconText.code';

export default {
  title: 'Components/ButtonWithIconText',
  component: ButtonWithIconText,
  parameters: {
    componentSource: {
      language: 'typescript'
    }
  },
  argTypes: {
    colorScheme: {
      options: ['yellow.300', 'cyan.400', 'orange.400'],
      control: {
        type: 'select'
      },
      defaultValue: 'cyan.400'
    },
    bgColorBoxText: {
      options: ['yellow.500', 'cyan.500', 'orange.500'],
      control: {
        type: 'select'
      },
      defaultValue: 'cyan.500'
    }
  }
} as Storybook.ComponentMeta<typeof ButtonWithIconText>;

const Template: Storybook.ComponentStory<typeof ButtonWithIconText> = (args) => {
  return <ButtonWithIconText {...args} />;
};

export const ButtonWithIconTextCreate = Template.bind({});
ButtonWithIconTextCreate.args = {
  textAction: 'Create'
};
ButtonWithIconTextCreate.parameters = {
  componentSource: {
    code: btnWithIconCreate
  },
  argTypes: {
    colorScheme: {
      defaultValue: 'yellow'
    }
  }
};

export const ButtonWithIconTextInput = Template.bind({});
ButtonWithIconTextInput.args = {
  textAction: 'Input',
  textType: 'an exam',
  icon: <InputIcon />
};
ButtonWithIconTextInput.parameters = {
  componentSource: {
    code: btnWithIconInput
  },
  argTypes: {
    colorScheme: {
      defaultValue: 'blue'
    }
  }
};

export const ButtonWithIconTextUpload = Template.bind({});
ButtonWithIconTextUpload.args = {
  textAction: 'Upload',
  textType: 'an exam',
  icon: <UploadIcon />
};
ButtonWithIconTextUpload.parameters = {
  componentSource: {
    code: btnWithIconUpload
  },
  argTypes: {
    colorScheme: {
      defaultValue: 'orange'
    }
  }
};

export const ButtonWithIconTextUploadWithValueTokens = Template.bind({});
ButtonWithIconTextUploadWithValueTokens.args = {
  textAction: 'Upload',
  textType: 'an exam',
  valueTokens: '20',
  icon: <UploadIcon />
};
ButtonWithIconTextUploadWithValueTokens.parameters = {
  componentSource: {
    code: btnWithIconUploadWithValueTokens
  }
};

export const ButtonWithIconTextUploadIsActive = Template.bind({});
ButtonWithIconTextUploadIsActive.args = {
  textAction: 'Upload',
  textType: 'an exam',
  icon: <UploadIcon />,
  isActive: true,
  valueTokens: '20',
  variant: 'ghost'
};
ButtonWithIconTextUploadIsActive.parameters = {
  componentSource: {
    code: btnWithIconUploadIsAcive
  },
  argTypes: {
    colorScheme: {
      defaultValue: 'orange'
    }
  }
};
