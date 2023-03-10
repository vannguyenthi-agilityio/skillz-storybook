// Components
import { Input, InputGroup, InputRightElement, InputLeftElement, Image } from '@chakra-ui/react';
import { Select } from '@components/index';

// Constants
import { ASSETS } from '@constants/index';

// Helpers
import { convertPxToRem } from '@helpers/common';

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
        color='gray.300'
        bg='blue.300'
        p='5'
        cursor='pointer'
        minW={`${convertPxToRem(50)}`}
        borderTopRightRadius={`${convertPxToRem(7)}`}
        borderBottomRightRadius={`${convertPxToRem(7)}`}
      >
        <Image
          src={ASSETS.ICON_SEARCH}
          alt='Icon Search'
        />
      </InputRightElement>
      <InputLeftElement
        h='full'
        color='gray.300'
        bg='grey.50'
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
        paddingLeft={`${convertPxToRem(115)}`}
        outline='auto'
        outlineOffset='1px'
        border='none'
        outlineColor='blue.200'
        placeholder='Search Course / Question...'
      />
    </InputGroup>
  );
};

export default SearchFilterInput;
