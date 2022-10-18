import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillToolbar, { formats, modules } from './QuillToolbar';

function QuillEditor() {
  return (
    <div className="relative text-editor">
      <QuillToolbar />
      <ReactQuill
        className="h-98"
        modules={modules}
        formats={formats}
        theme="snow"
        onChange={(content) => {
          // var htmlToRtf = require('html-to-rtf');
          console.log('CONTETN: ', content);
        }}
      />
    </div>
  );
}

export default QuillEditor;
