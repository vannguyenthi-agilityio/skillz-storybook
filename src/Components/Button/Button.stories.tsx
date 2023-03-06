// Libraries
import Storybook from '@storybook/react';

// Components
import { Button } from '@chakra-ui/react';
import CharityIcon from '@components/Icons/CharityIcon';

// Code scripts
import { asDefault, disabled, active, outline, loading, withIconLeft, withIconRight } from './Button.code';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      options: [
        'whiteAlpha',
        'blackAlpha',
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
        'linkedin',
        'facebook',
        'messenger',
        'whatsapp',
        'twitter',
        'telegram'
      ],
      control: {
        type: 'select'
      },
      defaultValue: 'blue'
    },
    variant: {
      options: ['ghost', 'outline', 'solid', 'link', 'unstyled'],
      control: {
        type: 'inline-radio'
      },
      defaultValue: 'solid'
    },
    isDisabled: {
      type: 'boolean',
      defaultValue: false
    },
    isLoading: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as Storybook.ComponentMeta<typeof Button>;

const Template: Storybook.ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.parameters = {
  componentSource: {
    code: asDefault,
    language: 'typescript',
    argTypes: {
      colorScheme: {
        options: [
          'whiteAlpha',
          'blackAlpha',
          'gray',
          'red',
          'orange',
          'yellow',
          'green',
          'teal',
          'blue',
          'cyan',
          'purple',
          'pink',
          'linkedin',
          'facebook',
          'messenger',
          'whatsapp',
          'twitter',
          'telegram'
        ],
        control: {
          type: 'select'
        },
        defaultValue: 'blue'
      },
      variant: {
        options: ['ghost', 'outline', 'solid', 'link', 'unstyled'],
        control: {
          type: 'inline-radio'
        },
        defaultValue: 'solid'
      },
      isDisabled: {
        type: 'boolean',
        defaultValue: false
      },
      isActive: {
        type: 'boolean',
        defaultValue: false
      },
      isLoading: {
        type: 'boolean',
        defaultValue: false
      }
    }
  }
};

export const Active = Template.bind({});
Active.args = {
  isActive: true
};
Active.parameters = {
  componentSource: {
    code: active,
    language: 'typescript'
  }
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline'
};
Outline.parameters = {
  componentSource: {
    code: outline,
    language: 'typescript'
  }
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  leftIcon: <CharityIcon />
};
WithIconLeft.parameters = {
  componentSource: {
    code: withIconLeft,
    language: 'typescript'
  }
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  rightIcon: <CharityIcon />
};
WithIconRight.parameters = {
  componentSource: {
    code: withIconRight,
    language: 'typescript'
  }
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
Loading.parameters = {
  componentSource: {
    code: loading,
    language: 'typescript'
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true
};
Disabled.parameters = {
  componentSource: {
    code: disabled,
    language: 'typescript'
  }
};
