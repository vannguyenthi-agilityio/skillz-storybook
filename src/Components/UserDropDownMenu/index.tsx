import {
  Menu as MenuChakra,
  MenuButton,
  MenuGroup,
  IconButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text
} from '@chakra-ui/react';

// Components
import { Avatar } from '@components/index';

// Enums
import { SIZES } from '@enums';

// Interface
import { IUserDropDownMenu } from '@interfaces/userDropDown.interface';

export const UserDropDownMenu = ({ userInfo, ...rest }: IUserDropDownMenu) => {
  return (
    <MenuChakra
      placement='bottom-end'
      strategy='fixed'
      {...rest}
    >
      <MenuButton
        as={IconButton}
        border='none'
        aria-label='Options'
        variant='transparent'
        data-testid='userDropDownMenu'
        fontSize='sm'
        textAlign='left'
        leftIcon={
          <Avatar
            src={userInfo?.profileImage}
            size={SIZES.MD}
          />
        }
      >
        <Text
          color='black'
          fontSize='sm'
          lineHeight='base'
        >
          {userInfo?.fullName}
        </Text>
        <Text
          textTransform='uppercase'
          color='grey.700'
          lineHeight='base'
        >
          {userInfo?.job}
        </Text>
      </MenuButton>
      <MenuGroup>
        <MenuList
          color='grey.400'
          boxShadow='md'
        >
          <MenuItem
            as='a'
            href='#'
          >
            Profile &#38; account
          </MenuItem>
          <MenuDivider
            borderColor='grey.50'
            my='2.5'
          />
          <MenuItem onClick={() => {}}>Logout</MenuItem>
        </MenuList>
      </MenuGroup>
    </MenuChakra>
  );
};

export default UserDropDownMenu;
