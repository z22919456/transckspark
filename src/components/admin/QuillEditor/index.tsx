import dynamic from 'next/dynamic';

const QuillEditor = dynamic(import('./QuillEditor'), { ssr: false });

export default QuillEditor;
