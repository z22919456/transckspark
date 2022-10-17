import { withAdminLayout } from 'components/admin/AdminLayout';
import React from 'react';

function News() {
  return (
    <div>News</div>
  );
}

News.getLayout = withAdminLayout;

export default News;
