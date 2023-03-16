// Components
import { Input, InputGroup, InputRightElement, InputLeftElement, IconButton } from '@chakra-ui/react';
import { Select } from '@components/index';
import { SearchIcon } from '@components/Icons';

// Helpers
import { convertPxToRem } from '@helpers/common';

// Enums
import { COLORS } from '@enums';

export const SearchFilterInput = ({ ...rest }) => {
  // TODO: Remove
  const mockOptions = [
    { label: 'Filter All', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];

  return (
    <InputGroup
      size='md'
      data-testid='searchFilter'
      {...rest}
    >
      <InputRightElement
        h='full'
        w={`${convertPxToRem(63)}`}
        color={`${COLORS.GRAY}.300`}
        bg={`${COLORS.BLUE}.300`}
        p='5'
        cursor='pointer'
        minW={`${convertPxToRem(50)}`}
        borderTopRightRadius={`${convertPxToRem(7)}`}
        borderBottomRightRadius={`${convertPxToRem(7)}`}
      >
        <IconButton
          display='flex'
          justifyContent='center'
          alignItems='center'
          aria-label='Search database'
          icon={<SearchIcon />}
          variant='unstyled'
        />
      </InputRightElement>
      <InputLeftElement
        h='full'
        color={`${COLORS.GRAY}.300`}
        bg={`${COLORS.GREY}.50`}
        py='5'
        minW={`${convertPxToRem(110)}`}
        borderTopLeftRadius={`${convertPxToRem(7)}`}
        borderBottomLeftRadius={`${convertPxToRem(7)}`}
      >
        <Select
          height='full'
          options={mockOptions}
          onChange={() => {}}
          variant='default'
          size='default'
        />
      </InputLeftElement>
      <Input
        variant='outline'
        size='md'
        fontSize={`${convertPxToRem(14)}`}
        borderRadius={`${convertPxToRem(7)}`}
        paddingLeft={`${convertPxToRem(123)}`}
        outline='auto'
        outlineOffset='1px'
        border='none'
        outlineColor={`${COLORS.BLUE}.200`}
        placeholder='Search Course / Question...'
      />
    </InputGroup>
  );
};

export default SearchFilterInput;
