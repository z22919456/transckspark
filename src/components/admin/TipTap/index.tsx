import Focus from '@tiptap/extension-focus';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Youtube from '@tiptap/extension-youtube';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

import FormatPlugin from './plugins/FormatPlugin';
import HeadingPlugin from './plugins/HeadingPlugin';
import HistoryPlugin from './plugins/HistoryPlugin';
import LinkPlugin from './plugins/LinkPlugin';
import ListPlugin from './plugins/ListPlugin';
import MediaPlugin from './plugins/MediaPlugin';
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
      Youtube.configure({
        controls: false,
      }),
      Image,
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'prose h-full min-h-[400px] outline-none w-full',
      },
    },
    onUpdate({ editor: e }) {
      onChange(e.getHTML());
    },
  });

  if (!editor) return <></>;

  return (
    <TipTabProvider value={editor}>
      <div className="w-full border rounded-md">
        <div className="flex flex-wrap items-center p-2 py-2 space-y-1 border-b">
          <HistoryPlugin />
          <TextAlignPlugin />
          <HeadingPlugin />
          <FormatPlugin />
          <ListPlugin />
          <LinkPlugin />
          <MediaPlugin />
        </div>
        <EditorContent editor={editor} className="p-3 h-fit" />
      </div>
    </TipTabProvider>
  );
}

export default TipTap;
