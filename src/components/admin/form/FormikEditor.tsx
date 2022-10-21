import { FormControl, FormLabel } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

import TipTap from '../TipTap';

type Props = {
  title?: string
  name: string
};

function FormikEditor({
  title, name,
}: Props) {
  const [{ value }, meta, { setValue }] = useField(name);
  return (
    <FormControl>
      {title && <FormLabel>{title}</FormLabel>}
      <TipTap
        value={value}
        onChange={setValue}
      />
    </FormControl>
  );
}

export default FormikEditor;
