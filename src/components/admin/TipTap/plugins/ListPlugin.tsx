import { faListOl, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useEditorContext } from '../TipTapProvider';
import ToolbarButton from './ToolbarButton';
import ToolbarSection from './ToolbarSection';

function ListPlugin() {
  const editor = useEditorContext();
  return (
    <ToolbarSection>
      <ToolbarButton
        active={editor.isActive('bulletList')}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        aria-label="列表"
      >
        <FontAwesomeIcon icon={faListUl} />
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive('orderedList')}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        aria-label="數字列表"
      >
        <FontAwesomeIcon icon={faListOl} />
      </ToolbarButton>
    </ToolbarSection>
  );
}

export default ListPlugin;
