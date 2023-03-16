// Libraries
import { render, screen } from '@testing-library/react';

// Components
import ExamCard from '.';
import { SlackIcon } from '@components/Icons';

// Types
import { CARD_STATUS, COLORS } from '@enums';

const baseProps = {
  color: COLORS.CYAN,
  title: 'Lorem ipsum dolor sit amet, consectetu',
  status: CARD_STATUS.INITIAL,
  price: 2,
  author: 'Jame Rodriguez',
  dateTime: '8:00 AM - 21 Dec, 2022',
  enroller: 1024,
  score: 50,
  order: 1,
  icon: SlackIcon
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps
  };
  return render(<ExamCard {...props} />);
};

describe('Exam Card render', () => {
  test('should render correctly', () => {
    setup();
    const card = screen.getByTestId('exam-card');
    expect(card).toMatchSnapshot();
  });

  test('should render new success card', () => {
    setup({ isNew: true, status: CARD_STATUS.SUCCESS });
    const card = screen.getByText('New');
    expect(card).toBeInTheDocument();
  });

  test('should render success card', () => {
    setup({ status: CARD_STATUS.SUCCESS });
    const card = screen.getByTestId('success');
    expect(card).toBeTruthy();
  });

  test('should render new failed card', () => {
    setup({ isNew: true, status: CARD_STATUS.FAILED });
    const card = screen.getByText('New');
    expect(card).toBeInTheDocument();
  });

  test('should render failed card', () => {
    setup({ status: CARD_STATUS.FAILED });
    const card = screen.getByTestId('failed');
    expect(card).toBeTruthy();
  });

  test('should render initial footer', () => {
    setup({ status: CARD_STATUS.INITIAL });
    const card = screen.getByTestId('footer-initial');
    expect(card).toBeTruthy();
  });

  test('should render result footer', () => {
    setup({ status: CARD_STATUS.FAILED });
    const card = screen.getByTestId('footer-result');
    expect(card).toBeTruthy();
  });
});
