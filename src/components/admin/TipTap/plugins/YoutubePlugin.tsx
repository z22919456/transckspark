import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useState } from 'react';

import { useEditorContext } from '../TipTapProvider';
import ToolbarButton from './ToolbarButton';

function YoutubePlugin() {
  const editor = useEditorContext();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const handleLinkDialogOpen = () => {
    setUrl(editor.getAttributes('link').href || '');
    setOpen(true);
  };

  const handleSubmitLink = () => {
    if (!url) return;
    editor.commands.setYoutubeVideo({
      src: url,
      width: 640,
      height: 480,
    });

    setOpen(false);
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value);

  return (
    <>
      <ToolbarButton
        value="left"
        onClick={handleLinkDialogOpen}
        aria-label="Youtube"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </ToolbarButton>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>請輸入Youtube網址</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input type='url' value={url} onChange={handleUrlChange} />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={handleSubmitLink}>
              確認
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default YoutubePlugin;
