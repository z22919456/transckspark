import { Button, FormControl } from '@chakra-ui/react';
import axios from 'axios';
import { withAdminLayout } from 'components/admin/AdminLayout';
import FormikDatePicker from 'components/admin/form/FormikDatePicker';
import FormikEditor from 'components/admin/form/FormikEditor';
import FormikInput from 'components/admin/form/FormikInput';
import { FormikProvider, useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { resourceLimits } from 'worker_threads';

import FormikImageUpload from '../../../components/admin/form/FormikImageUpload';

function CreateNews() {
  const { data: session } = useSession();
  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      content: '',
      published_date: new Date(),
      date: new Date(),
      author: {
        connect: {
          email: session?.user?.email,
        },
      },
    },
    onSubmit(values) {
      axios.post('/api/news', values)
        .then((res) => {
          console.log(res);
        });
    },
  });

  useEffect(() => {
    if (session?.user) {
      formik.setFieldValue('author.connect.email', session?.user?.email);
    }
  }, [session]);

  return (
    <>
      <div className="w-1/2">
        <h1 className="text-3xl font-medium">建立最新消息</h1>
        <hr className="my-5"></hr>
        <FormikProvider value={formik}>
          <form className="w-full space-y-5" onSubmit={formik.handleSubmit}>
            <FormikInput title="標題" name="title" />
            <FormikDatePicker name="date" title="日期" />
            <FormikDatePicker name="published_date" title="發布日期" />
            <FormikImageUpload name="image" title="首圖" />
            <FormikEditor name="content" title="內文" />
            <FormControl>
              <Button type="submit">送出</Button>
            </FormControl>
          </form>
        </FormikProvider>
      </div>
      <div>

      </div>
    </>
  );
}

CreateNews.getLayout = withAdminLayout;

export default CreateNews;
