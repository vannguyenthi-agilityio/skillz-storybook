// Libraries
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

// Components
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

// Types
import type { ModalProps } from '@chakra-ui/react';

// Hooks
import { useDisclosure } from '@chakra-ui/react';

// Code scripts
import { asDefault, large, medium, small } from './Modal.code';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    },
    componentSource: {
      code: asDefault,
      language: 'typescript'
    }
  }
} as Meta;

export const Default = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Header</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet. Et corporis quisquam eum adipisci impedit quo eius nisi est aspernatur vel
            veniam velit qui numquam totam.
          </ModalBody>
          <ModalFooter justifyContent='center'>
            <Button>Button</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const ModalTemplate = (args: ModalProps) => {
  return (
    <Modal {...{ ...args, isOpen: true }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Header</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet. Et corporis quisquam eum adipisci impedit quo eius nisi est aspernatur vel veniam
          velit qui numquam totam.
        </ModalBody>
        <ModalFooter justifyContent='center'>
          <Button>Button</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Template: Story<ModalProps> = (args) => <ModalTemplate {...args} />;

export const ModalLarge = Template.bind({});
ModalLarge.args = {
  size: 'lg'
};
ModalLarge.parameters = {
  componentSource: {
    code: large,
    language: 'typescript'
  }
};

export const ModalMedium = Template.bind({});
ModalMedium.args = {
  size: 'md'
};
ModalMedium.parameters = {
  componentSource: {
    code: medium,
    language: 'typescript'
  }
};

export const ModalSmall = Template.bind({});
ModalSmall.args = {
  size: 'sm'
};
ModalSmall.parameters = {
  componentSource: {
    code: small,
    language: 'typescript'
  }
};
