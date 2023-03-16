import Storybook from '@storybook/react';

// Components
import Transaction from '.';
import { FacebookIcon, SlackIcon, JavascriptIcon, GoogleIcon, RubyIcon } from '@components';

// Code
import {
  asDefault,
  transactionSlack,
  transactionJavascript,
  transactionRuby,
  transactionGoogle
} from './Transaction.code';

export default {
  title: 'Components/Transaction',
  component: Transaction,
  parameters: {
    componentSource: {
      code: asDefault,
      language: 'typescript'
    }
  }
} as Storybook.ComponentMeta<typeof Transaction>;

const Template: Storybook.ComponentStory<typeof Transaction> = (args) => {
  return <Transaction {...args} />;
};

export const TransactionDefault = Template.bind({});
TransactionDefault.args = {
  label: 'Enrolled',
  content: 'Lorem ipsum dolor sit amet, consectetu',
  score: -3,
  timeDate: '02:15 pm. February 12, 2023',
  bgColorIcon: 'yellow.500',
  icon: <FacebookIcon />
};

export const TransactionSlack = Template.bind({});
TransactionSlack.args = {
  label: 'Enrolled',
  content: 'Lorem ipsum dolor sit amet, consectetu',
  score: -3,
  timeDate: '02:15 pm. February 12, 2023',
  bgColorIcon: 'green.400',
  icon: (
    <SlackIcon
      w='35'
      h='35'
    />
  )
};
TransactionSlack.parameters = {
  componentSource: {
    code: transactionSlack
  }
};

export const TransactionJavascript = Template.bind({});
TransactionJavascript.args = {
  label: 'Enrolled',
  content: 'Lorem ipsum dolor sit amet, consectetu',
  score: -3,
  timeDate: '02:15 pm. February 12, 2023',
  icon: <JavascriptIcon />,
  bgColorIcon: 'purple.450'
};
TransactionJavascript.parameters = {
  componentSource: {
    code: transactionJavascript
  }
};

export const TransactionRuby = Template.bind({});
TransactionRuby.args = {
  label: 'Enrolled',
  content: 'Lorem ipsum dolor sit amet, consectetu',
  score: -3,
  timeDate: '02:15 pm. February 12, 2023',
  icon: <RubyIcon />,
  bgColorIcon: 'orange.500'
};
TransactionRuby.parameters = {
  componentSource: {
    code: transactionRuby
  }
};

export const TransactionGoogle = Template.bind({});
TransactionGoogle.args = {
  label: 'Enrolled',
  content: 'Lorem ipsum dolor sit amet, consectetu',
  score: -3,
  timeDate: '02:15 pm. February 12, 2023',
  icon: <GoogleIcon />,
  bgColorIcon: 'cyan.500'
};
TransactionGoogle.parameters = {
  componentSource: {
    code: transactionGoogle
  }
};
