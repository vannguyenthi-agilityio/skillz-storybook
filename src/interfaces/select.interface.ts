export interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  label?: string;
  value: string;
  options: IOption[];
}
