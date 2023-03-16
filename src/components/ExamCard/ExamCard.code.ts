export const asDefault = `
import ExamCard from '@components/ExamCard';

<ExamCard
  author="Jame Rodriguez"
  color="cyan"
  dateTime="8:00 AM - 21 Dec, 2022"
  enroller={1024}
  price={2}
  score={50}
  title="Card title will goes here"
/>
`;

export const failedCard = `
import ExamCard from '@components/ExamCard';

<ExamCard
  color="purple"
  dateTime="8:00 AM - 21 Dec, 2022"
  maxScore={90}
  order={4}
  score={20}
  status="failed"
  title="Card title will goes here"
/>
`;

export const newFailedCard = `
import ExamCard from '@components/ExamCard';

<ExamCard
  color="purple"
  dateTime="8:00 AM - 21 Dec, 2022"
  isNew
  maxScore={90}
  order={9}
  score={20}
  status="failed"
  title="Card title will goes here"
/>
`;

export const successCard = `
import ExamCard from '@components/ExamCard';

<ExamCard
  color="orange"
  dateTime="8:00 AM - 21 Dec, 2022"
  maxScore={90}
  order={11}
  score={70}
  status="success"
  title="Card title will goes here"
/>
`;

export const newSuccessCard = `
import ExamCard from '@components/ExamCard';

<ExamCard
  color="orange"
  dateTime="8:00 AM - 21 Dec, 2022"
  isNew
  maxScore={100}
  order={18}
  score={85}
  status="success"
  title="Card title will goes here"
/>
`;
