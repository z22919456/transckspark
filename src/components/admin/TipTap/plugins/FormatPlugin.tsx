import {
  faBold, faItalic, faQuoteLeft, faStrikethrough, faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEditorContext } from '../TipTapProvider';
import ToolbarButton from './ToolbarButton';
import ToolbarSection from './ToolbarSection';

function HeadingPlugin() {
  const editor = useEditorContext();
  return (
    <ToolbarSection>
      <ToolbarButton
        active={editor.isActive('bold')}
        value="1"
        onClick={() => editor.chain().focus().toggleBold().run()}
        aria-label="粗體"
      >
        <FontAwesomeIcon icon={faBold} />
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive('italic')}
        value="1"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        aria-label="斜體"
      >
        <FontAwesomeIcon icon={faItalic} />
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive('underline')}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        aria-label="底線"
      >
        <FontAwesomeIcon icon={faUnderline} />
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive('strike')}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        aria-label="刪除線"
      >
        <FontAwesomeIcon icon={faStrikethrough} />
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive('blockquote')}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        aria-label="引用"
      >
        <FontAwesomeIcon icon={faQuoteLeft} />
      </ToolbarButton>
    </ToolbarSection>
  );
}

export default HeadingPlugin;
