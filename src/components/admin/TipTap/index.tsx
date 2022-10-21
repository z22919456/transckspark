import Focus from '@tiptap/extension-focus';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

import FormatPlugin from './plugins/FormatPlugin';
import HeadingPlugin from './plugins/HeadingPlugin';
import HistoryPlugin from './plugins/HistoryPlugin';
import ListPlugin from './plugins/ListPlugin';
import TextAlignPlugin from './plugins/TextAlignPlugin';
import { TipTabProvider } from './TipTapProvider';

type Props = { value: string, onChange: (value: string) => void };

const Divider = () => <div className="h-6 border-l-2 border-gray-300 w-0 !ml-2 !mr-1" />;

function TipTap({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'right', 'center'],
      }),
      Focus.configure({
        className: 'focus',
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'prose h-full min-h-[400px] outline-none',
      },
    },
    onUpdate({ editor: e }) {
      onChange(e.getHTML());
    },
  });

  if (!editor) return <></>;

  return (
    <TipTabProvider value={editor}>
      <div className="flex items-center space-x-1">
        <HistoryPlugin />
        <Divider />
        <TextAlignPlugin />
        <Divider />
        <HeadingPlugin />
        <Divider />
        <FormatPlugin />
        <Divider />
        <ListPlugin />
      </div>

      <EditorContent editor={editor} className="p-5 border rounded-md h-fit" />
    </TipTabProvider>
  );
}

export default TipTap;
