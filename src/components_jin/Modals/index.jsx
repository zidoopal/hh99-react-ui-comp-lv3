import React, { useState } from "react";
import Button from "../Button";
import ModalF from "../Modal";
import Modal from "../Modal2";
import { Div } from "./styles";

const Modals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSec, setIsOpenSec] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleModalSec = () => {
    setIsOpenSec(!isOpenSec);
  };
  return (
    <>
      <h1>Modal</h1>
      <Div>
        <Button size="small" onClick={handleModal}>
          open modal
        </Button>
        {isOpen === false ? null : <ModalF onClick={handleModal} />}
        <Button primary="$primary" color="#F7A08F" size="large" onClick={handleModalSec}>
          open modal
        </Button>
        {isOpenSec === false ? null : <Modal onClick={handleModalSec} />}
      </Div>
    </>
  );
};

export default Modals;
