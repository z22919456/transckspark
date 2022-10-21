import { faRedo, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useEditorContext } from '../TipTapProvider';
import ToolbarButton from './ToolbarButton';

function HistoryPlugin() {
  const editor = useEditorContext();
  return (
    <>
      <ToolbarButton
        disabled={!editor.can().undo()}
        onClick={() => editor.chain().focus().undo().run()}
        aria-label="上一步"
      >
        <FontAwesomeIcon icon={faUndo} />
      </ToolbarButton>
      <ToolbarButton
        disabled={!editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
        aria-label="重做"
      >
        <FontAwesomeIcon icon={faRedo} />
      </ToolbarButton>
    </>
  );
}

export default HistoryPlugin;
