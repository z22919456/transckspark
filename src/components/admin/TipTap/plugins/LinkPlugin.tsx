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
import { faLink, faUnlink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useState } from 'react';

import { useEditorContext } from '../TipTapProvider';
import ToolbarButton from './ToolbarButton';
import ToolbarSection from './ToolbarSection';

function LinkPlugin() {
  const editor = useEditorContext();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const handleLinkDialogOpen = () => {
    setUrl(editor.getAttributes('link').href || '');
    setOpen(true);
  };

  const handleSubmitLink = () => {
    if (!url) {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run();
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url })
        .run();
    }
    setOpen(false);
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value);

  return (
    <ToolbarSection>
      <ToolbarButton
        active={editor.isActive('link')}
        value="left"
        onClick={handleLinkDialogOpen}
        aria-label="設置連結"
      >
        <FontAwesomeIcon icon={faLink} />
      </ToolbarButton>
      <ToolbarButton
        disabled={!editor.isActive('link')}
        onClick={() => editor.chain().focus().unsetLink().run()}
        aria-label="斷開連結"
      >
        <FontAwesomeIcon icon={faUnlink} />
      </ToolbarButton>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>請輸入連結網址</ModalHeader>
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
    </ToolbarSection>
  );
}

export default LinkPlugin;
