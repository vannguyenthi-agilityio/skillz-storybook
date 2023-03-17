export const btnWithIconCreate = `
import ButtonWithIconText from '.';

/**
 * The used to render ButtonWithIconText with action type Create.
 *
 */

 <ButtonWithIconText />
`;

export const btnWithIconUpload = `
import ButtonWithIconText from '.';
import { UploadIcon } from '@components';

/**
 * The used to render ButtonWithIconText with action type Upload.
 *
 */

 <ButtonWithIconText
  textAction='Upload'
  textType='an exam'
  icon={<UploadIcon />}
/>
`;

export const btnWithIconUploadIsAcive = `
import ButtonWithIconText from '.';
import { UploadIcon } from '@components';

/**
 * The used to render ButtonWithIconText with action type Upload isActive.
 *
 */

 <ButtonWithIconText
  textAction='Upload'
  textType='an exam'
  valueTokens='20',
  isActive=true
  variant='ghost'
  icon={<UploadIcon />}
/>
`;

export const btnWithIconUploadWithValueTokens = `
import ButtonWithIconText from '.';
import { UploadIcon } from '@components';

/**
 * The used to render ButtonWithIconText with action type Upload with ValueTokens.
 *
 */

 <ButtonWithIconText
  textAction='Upload'
  textType='an exam'
  valueTokens='20',
  icon={<UploadIcon />}
  />
`;

export const btnWithIconInput = `
import ButtonWithIconText from '.';
import { InputIcon } from '@components';

/**
 * The used to render ButtonWithIconText with action type Input.
 *
 */

 <ButtonWithIconText
  textAction='Input'
  textType='an exam'
  icon={<InputIcon />}
/>
`;
