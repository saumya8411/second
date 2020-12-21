import React, { useState } from 'react';
import { Row, Button, Modal } from 'reactstrap';
import SessionInput from './SessionInput';
import logo from './bebinca-thumb.jpg';
//here a image is need to be added vedant will give it

const CreateSession = () => {
  const [modalLarge, setModalLarge] = useState(false);

  const toggleModal = () => setModalLarge(!modalLarge);

  return (
    <>
      <h3 style={{ marginBottom: '20px' }}>
        {' '}
        You Don 't Have Any Sessions Yet
      </h3>
      <img
        src={logo}
        alt="you don't have any sessions yet logo"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '50%',
          height: '50%',
        }}
      />
      {/* <Button color="primary" onClick={() => setModalLarge(true)} className="mb-2 p-3" >Create Session </Button>  */}

      <Modal isOpen={modalLarge} size="lg" toggle={toggleModal}>
        <SessionInput closeModal={toggleModal} value="true" />
      </Modal>
    </>
  );
};

export default CreateSession;
