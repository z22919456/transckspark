import {
  Button,
  FormControl,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import { useEditorContext } from '../TipTapProvider';
import ToolbarButton from './ToolbarButton';

function ImagePlugin() {
  const editor = useEditorContext();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const handleLinkDialogOpen = () => {
    setUrl(editor.getAttributes('link').href || '');
    setOpen(true);
  };

  const handleSubmitLink = () => {
    if (!url) return;
    editor.commands.setImage({ src: url });

    setOpen(false);
  };

  const handleImageUpload = (image: File) => {
    if (!image) return;
    const formData = new FormData();
    formData.append('image', image);
    axios.post('https://api.imgur.com/3/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMGUR_TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.data.success) return;
        setUrl(response.data.data.link);
      });
  };

  return (
    <>
      <ToolbarButton
        value="left"
        onClick={handleLinkDialogOpen}
        aria-label="插入圖片"
      >
        <FontAwesomeIcon icon={faImage} />
      </ToolbarButton>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>上傳圖片</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FileUploader
                label="拖曳圖片或點擊上傳"
                hoverTitle="拖曳圖片"
                multiple={false}
                handleChange={handleImageUpload}
                maxSize={10}
                mane="file"
                types={['JPEG', 'JPG', 'PNG', 'GIF']}
              />
            </FormControl>
            <Img src={url} />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} disabled={!url} onClick={handleSubmitLink}>
              確認
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImagePlugin;
