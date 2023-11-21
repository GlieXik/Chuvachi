import { ReactNode } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

const BasicModal = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"xs"}
        closeOnOverlayClick={false}
        isCentered
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
