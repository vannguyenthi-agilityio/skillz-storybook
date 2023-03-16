export const asDefault = `
import Transaction from '.';

/**
 * The used to render number an interface transaction.
 *
 */

 <Transaction
  label='Enrolled'
  content='Lorem ipsum dolor sit amet, consectetu'
  score={-3}
  timeDate='02:15 pm. February 12, 2023'
  icon={<FacebookIcon />}
  bgColorIcon='yellow.500'
 />
`;

export const transactionSlack = `
import Transaction from '.';
import { SlackIcon } from '@components';

/**
 * The used to render a transaction with Slack.
 *
 */

<Transaction
  label='Enrolled'
  content='Lorem ipsum dolor sit amet, consectetu'
  score={-3}
  timeDate='02:15 pm. February 12, 2023'
  icon={<SlackIcon />}
  bgColorIcon='green.400'
/>
`;

export const transactionJavascript = `
import Transaction from '.';
import { JavascriptIcon } from '@components';

/**
 * The used to render a transaction Javascript.
 *
 */

<Transaction
  label='Enrolled'
  content='Lorem ipsum dolor sit amet, consectetu'
  score={-3}
  timeDate='02:15 pm. February 12, 2023'
  icon={<JavascriptIcon />}
  bgColorIcon='purple.450'
/>
`;

export const transactionRuby = `
import Transaction from '.';
import { RubyIcon } from '@components';

/**
 * The used to render a transaction Ruby.
 *
 */

<Transaction
  label='Enrolled'
  content='Lorem ipsum dolor sit amet, consectetu'
  score={-3}
  timeDate='02:15 pm. February 12, 2023'
  icon={<RubyIcon />}
  bgColorIcon='orange.500'
/>
`;

export const transactionGoogle = `
import Transaction from '.';
import { GoogleIcon } from '@components';

/**
 * The used to render a transaction Google.
 *
 */

<Transaction
  label='Enrolled'
  content='Lorem ipsum dolor sit amet, consectetu'
  score={-3}
  timeDate='02:15 pm. February 12, 2023'
  icon={<GoogleIcon />}
  bgColorIcon='cyan.500'
/>
`;
