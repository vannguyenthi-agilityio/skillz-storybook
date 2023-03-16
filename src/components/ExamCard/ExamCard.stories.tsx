// Component
import ExamCard from '.';

// Types
import type { IExamCard } from '.';
import type { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

// Enums
import { CARD_STATUS, COLORS } from '@enums';

// Code script
import { asDefault, failedCard, newFailedCard, newSuccessCard, successCard } from './ExamCard.code';

export default {
  title: 'Components/ExamCard',
  component: ExamCard,
  argTypes: {
    color: {
      options: ['cyan', 'yellow', 'orange', 'purple', 'lime'],
      control: {
        type: 'select'
      }
    },
    status: {
      options: ['success', 'failed', 'initial'],
      control: {
        type: 'inline-radio'
      }
    },
    isNew: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as Meta;

const Template: Story<IExamCard> = (args) => <ExamCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: COLORS.CYAN,
  title: 'Lorem ipsum dolor sit amet, consectetu',
  price: 2,
  author: 'Jame Rodriguez',
  dateTime: '8:00 AM - 21 Dec, 2022',
  enroller: 1024,
  score: 50,
  status: CARD_STATUS.INITIAL
};
Default.parameters = {
  componentSource: {
    code: asDefault,
    language: 'typescript'
  }
};

export const FailedCard = Template.bind({});
FailedCard.args = {
  color: COLORS.PURPLE,
  title: 'Card title will goes here',
  status: CARD_STATUS.FAILED,
  score: 20,
  maxScore: '90',
  order: 4,
  dateTime: '8:00 AM - 21 Dec, 2022'
};
FailedCard.parameters = {
  componentSource: {
    code: failedCard,
    language: 'typescript'
  }
};

export const NewFailedCard = Template.bind({});
NewFailedCard.args = {
  color: COLORS.PURPLE,
  title: 'Card title will goes here',
  status: CARD_STATUS.FAILED,
  score: 20,
  maxScore: 90,
  dateTime: '8:00 AM - 21 Dec, 2022',
  order: 9,
  isNew: true
};
NewFailedCard.parameters = {
  componentSource: {
    code: newFailedCard,
    language: 'typescript'
  }
};

export const SuccessCard = Template.bind({});
SuccessCard.args = {
  color: COLORS.ORANGE,
  status: CARD_STATUS.SUCCESS,
  title: 'Card title will goes here',
  maxScore: 90,
  score: 70,
  dateTime: '8:00 AM - 21 Dec, 2022',
  order: 11
};
SuccessCard.parameters = {
  componentSource: {
    code: successCard,
    language: 'typescript'
  }
};

export const NewSuccessCard = Template.bind({});
NewSuccessCard.args = {
  color: COLORS.ORANGE,
  status: CARD_STATUS.SUCCESS,
  title: 'Card title will goes here',
  maxScore: 100,
  score: 85,
  dateTime: '8:00 AM - 21 Dec, 2022',
  order: 18,
  isNew: true
};
NewSuccessCard.parameters = {
  componentSource: {
    code: newSuccessCard,
    language: 'typescript'
  }
};
