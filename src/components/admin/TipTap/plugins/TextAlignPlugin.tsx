import { faAlignCenter, faAlignLeft, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEvent } from 'react';

import { useEditorContext } from '../TipTapProvider';
import ToolbarButton from './ToolbarButton';
import ToolbarSection from './ToolbarSection';

function TextAlignPlugin() {
  const editor = useEditorContext();
  const handleTextAlignChange = (e: MouseEvent<HTMLButtonElement>) => {
    editor.chain().focus().setTextAlign((e.currentTarget as HTMLButtonElement).value).run();
  };
  return (
    <ToolbarSection>
      <ToolbarButton
        active={editor.isActive({ textAlign: 'left' })}
        value="left"
        onClick={handleTextAlignChange}
        aria-label="置左"
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive({ textAlign: 'center' })}
        value="center"
        onClick={handleTextAlignChange}
        aria-label="置中"
      >
        <FontAwesomeIcon icon={faAlignCenter} />
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive({ textAlign: 'right' })}
        value="right"
        onClick={handleTextAlignChange}
        aria-label="置右"
      >
        <FontAwesomeIcon icon={faAlignRight} />
      </ToolbarButton>
    </ToolbarSection>
  );
}

export default TextAlignPlugin;
