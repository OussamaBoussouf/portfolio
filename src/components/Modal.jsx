import { useState } from "react";
import { ModalContainer } from "../styles/Modal.style";
import Form from "./Form";
import { Button } from "../styles/Button.style";
import { createPortal } from "react-dom";

const portal = document.querySelector("#portal");

function Modal({ onError, onSuccess }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>CONTACT ME</Button>
      {isOpen &&
        createPortal(
          <ModalContainer>
            <Form
              onSuccess={onSuccess}
              onError={onError}
              onClose={() => setIsOpen(false)}
            />
          </ModalContainer>,
          portal
        )}
    </>
  );
}

export default Modal;
