import {
  FormControl, FormHelperText, FormLabel, Input,
} from '@chakra-ui/react';
import axios from 'axios';
import classNames from 'classnames';
import { useField } from 'formik';
import React, { ChangeEvent } from 'react';
import Image from 'next/future/image';

type Props = {
  title?: string
  name: string
  className?: string
  placeholder?: string
};

function FormikImageUpload({
  title, name, className, placeholder,
}: Props) {
  const [{ onBlur, value }, { error }, { setValue, setError }] = useField(name);

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    // check file exist
    if (!files || !files.length) return;
    const formData = new FormData();
    formData.append('image', files[0]);
    try {
      axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMGUR_TOKEN}`,
        },
      })
        .then((response) => {
          if (!response.data.success) return;
          setValue(response.data.data.link);
        });
    } catch (err) {
      console.log(err);
      setError('檔案上傳失敗，請稍後再試');
    }
  };

  return (
    <FormControl>
      {title && <FormLabel>{title}</FormLabel>}
      <Input
        type="file"
        onChange={handleUploadImage}
        onBlur={onBlur}
        multiple={false}
        className={classNames(error && 'border-red-700', className)}
        placeholder={placeholder}
      />
      <FormHelperText>* 限.jpg .jpeg .png，檔案大小請勿超過10MB</FormHelperText>
      {value && (
        <div className="relative w-full aspect-video">
          <Image src={value} alt="" fill />
        </div>
      )}
      {error && <FormHelperText className="text-red-700">{error}</FormHelperText>}
    </FormControl>
  );
}

export default FormikImageUpload;
