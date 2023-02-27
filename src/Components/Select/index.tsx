// Components
import { Select as ChakraSelect } from '@chakra-ui/react';

//Types
import { ISelect } from '@interfaces/select.interface';

const Select = ({ options, label, value, onChange }: ISelect) => {
  return (
    <div>
      <label>
        {label}
        <ChakraSelect onChange={onChange} value={value} data-testid='select'>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </ChakraSelect>
      </label>
    </div>
  );
};

export default Select;
