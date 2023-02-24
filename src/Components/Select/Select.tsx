import { Select as SelectChakra } from '@chakra-ui/react';
import { ISelect } from '@interfaces/select.interface';

const Select = ({ options, label, value, ...rest }: ISelect) => {
  return (
    <div>
      <label>
        {label}
        <SelectChakra {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value} selected={value === option.value}>
              {option.label}
            </option>
          ))}
        </SelectChakra>
      </label>
    </div>
  );
};

export default Select;
