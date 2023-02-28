import type { SelectProps } from '@chakra-ui/react';

export interface IOption {
  value: string;
  label: string;
}

export interface ISelect extends SelectProps {
  options: IOption[];
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
