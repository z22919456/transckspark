import React, { MouseEvent } from 'react';
import { useEditorContext } from '../TipTapProvider';
import ToolbarButton from './ToolbarButton';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

function HeadingPlugin() {
  const editor = useEditorContext();
  const handleHeadingChange = (e: MouseEvent<HTMLButtonElement>) => {
    const level = Number.parseInt((e.currentTarget as HTMLButtonElement).value, 10) as Level;
    editor.chain().focus().toggleHeading({ level }).run();
  };

  return (
    <>
      <ToolbarButton
        active={editor.isActive('heading', { level: 1 })}
        value="1"
        onClick={handleHeadingChange}
      >
        h1
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive('heading', { level: 2 })}
        value="2"
        onClick={handleHeadingChange}
      >
        h2
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive('heading', { level: 3 })}
        value="3"
        onClick={handleHeadingChange}
      >
        h3
      </ToolbarButton>
    </>
  );
}

export default HeadingPlugin;
