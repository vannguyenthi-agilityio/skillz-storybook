export default `
import Select from '@components/Select';

// Basic use
<Select
  label="Select"
  size="md"
  variant="outline"
  onChange={handleSelect}
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
/>

// Custom 
<Select
  isDisabled
  label="Select"
  size="lg"
  variant="filled"
  onChange={handleSelect}
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
/>
`;
