export const asDefault = `
import Header from '.';

/**
 * The used to render Header default.
 *
 */

 <Header />
`;

export const withUserInfo = `
import Header from '.';

const USER_INFO = {
  id: '1',
  fullName: 'Dehlela Shabir',
  job: 'Instructor',
  profileImage: 'https://gravatar.com/avatar/d7ce2a42de05bc0e7216db3570111d56?s=400&d=mp&r=x'
};

/**
 * The used to render Header an interface userInfo.
 *
 */

 <Header userInfo={USER_INFO}/>
`;
