import {
  FormControl, FormHelperText, FormLabel, Input, InputProps,
} from '@chakra-ui/react';
import classNames from 'classnames';
import { useField } from 'formik';

import React from 'react';

type Props = Pick<InputProps, 'type' | 'placeholder' | 'name' | 'className'> & {
  title?: string
  name: string
};

function FormikInput({
  type, title, name, className, placeholder,
}: Props) {
  const [field, { error }] = useField(name);

  return (
    <FormControl>
      {title && <FormLabel>{title}</FormLabel>}
      <Input
        {...field}
        name={name}
        type={type}
        className={classNames(error && 'border-red-700', className)}
        placeholder={placeholder}
      />
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      {error && <FormHelperText className="text-red-700">{error}</FormHelperText>}
    </FormControl>
  );
}

export default FormikInput;
