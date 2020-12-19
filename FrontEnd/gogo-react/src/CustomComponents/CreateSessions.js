import React,{useState} from 'react';
import {
    Row,
    Button,
    Modal
} from 'reactstrap';
import SessionInput from './SessionInput';

//here a image is need to be added vedant will give it

const CreateSession = () => {
    const [modalLarge, setModalLarge] = useState(false);

  return (
    <>
      <h3 style={{ marginBottom: '20px' }} > You Don 't Have Any Sessions Yet</h3>
      <Button color="primary" onClick={() => setModalLarge(true)} className="mb-2 p-3" >Create Session </Button> 
        
      <Modal  
        isOpen={modalLarge}
        size="lg"
        toggle={() => setModalLarge(!modalLarge)}
      >
        <SessionInput />
      </Modal>

    </>

    )
}

export default CreateSession