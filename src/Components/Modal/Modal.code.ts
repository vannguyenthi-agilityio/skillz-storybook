export const asDefault = `
// Components
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

// Hooks
import { useDisclosure } from '@chakra-ui/react';

/**
 * Custom hook used to help handle common open, close, or toggle scenarios
 */
const { isOpen, onOpen, onClose } = useDisclosure();

/**
 * Modal provides context, theming, and accessibility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 *
 * @see Docs https://chakra-ui.com/docs/components/modal
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 */

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
      Lorem ipsum dolor sit amet. Et corporis quisquam eum adipisci impedit quo eius nisi est aspernatur vel veniam
      velit qui numquam totam.
    </ModalBody>
    <ModalFooter justifyContent='center'>
      <Button>Button</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
</>
`;

export const large = `
// Components
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

/**
 * Modal provides context, theming, and accessibility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 *
 * @see Docs https://chakra-ui.com/docs/components/modal
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 */

<Modal
  size:'lg'
  isOpen={true}
  onClose={() => {}}
>
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
`;

export const medium = `
// Components
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

/**
 * Modal provides context, theming, and accessibility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 *
 * @see Docs https://chakra-ui.com/docs/components/modal
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 */

<Modal
  size:'md'
  isOpen={true}
  onClose={() => {}}
>
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
`;

export const small = `
// Components
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

/**
 * Modal provides context, theming, and accessibility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 *
 * @see Docs https://chakra-ui.com/docs/components/modal
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 */

<Modal
  size:'sm'
  isOpen={true}
  onClose={() => {}}
>
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
`;
