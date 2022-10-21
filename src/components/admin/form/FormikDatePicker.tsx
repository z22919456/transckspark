import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import DatePicker from 'components/DatePicker';
import { useField } from 'formik';
import React from 'react';

type Props = {
  name: string
  title?: string
};

function FormikDatePicker({ title, name }: Props) {
  const [{ value, onBlur }, { error }, { setValue }] = useField(name);
  const handleChange = (date: Date) => {
    setValue(date);
  };
  return (
    <FormControl>
      {title && <FormLabel>title</FormLabel>}
      <DatePicker
        date={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {error && <FormHelperText className="text-red-700">{error}</FormHelperText>}
    </FormControl>
  );
}

export default FormikDatePicker;
