export const asDefault = `
import Avatar from '.';

/**
 * The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.
 *
 * @see Docs https://chakra-ui.com/docs/components/avatar
 */

 <Avatar />
`;

export const online = `
import Avatar from '.';

/**
 * The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.
 *
 * @see Docs https://chakra-ui.com/docs/components/avatar
 */

<Avatar
  isActive={true}
/>
`;

export const border = `
import Avatar from '.';
import { ASSETS } from '@constants/index';

/**
 * The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.
 *
 * @see Docs https://chakra-ui.com/docs/components/avatar
 */

<Avatar
  variant='border'
/>
`;
