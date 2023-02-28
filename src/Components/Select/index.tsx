// Components
import { Select as ChakraSelect, Text } from '@chakra-ui/react';

//Types
import { ISelect } from '@interfaces/select.interface';

const Select = ({ options, label, value, onChange, ...rest }: ISelect) => {
  return (
    <label>
      <Text mb={2}>{label}</Text>
      <ChakraSelect onChange={onChange} value={value} {...rest} data-testid='select'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    </label>
  );
};

export default Select;
