import { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const BasicModal = ({ children }: { children: ReactNode }) => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal
        isOpen={!isOpen}
        onClose={onClose}
        size={"xs"}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent textAlign={"center"} p={2}>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;
