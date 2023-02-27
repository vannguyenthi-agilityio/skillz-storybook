export interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  options: IOption[];
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
