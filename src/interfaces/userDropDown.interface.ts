import type { MenuProps } from '@chakra-ui/react';

export type User = {
  id: string;
  fullName: string;
  profileImage?: string;
  job?: string;
  address?: string;
  gender?: string;
};

export interface IUserDropDownMenu extends MenuProps {
  userInfo?: User;
}
