import React from 'react';

import ImagePlugin from './ImagePlugin';
import ToolbarSection from './ToolbarSection';
import YoutubePlugin from './YoutubePlugin';

function MediaPlugin() {
  return (
    <ToolbarSection>
      <YoutubePlugin />
      <ImagePlugin />
    </ToolbarSection>
  );
}

export default MediaPlugin;
