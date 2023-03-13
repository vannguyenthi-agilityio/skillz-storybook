import Storybook from '@storybook/react';

// Components
import TokensBalance from '.';

// Code
import { asDefault } from './TokensBalance.code';

export default {
  title: 'Components/TokensBalance',
  component: TokensBalance,
  parameters: {
    componentSource: {
      code: asDefault,
      language: 'typescript'
    }
  }
} as Storybook.ComponentMeta<typeof TokensBalance>;

const Template: Storybook.ComponentStory<typeof TokensBalance> = (args) => {
  return <TokensBalance {...args} />;
};

export const TokensBalanceDefault = Template.bind({});
TokensBalanceDefault.args = {
  valueTokensBalance: 130
};
