import React,{useState} from 'react'
import { Breadcrumb, BreadcrumbItem,Button,Card,CardBody,ModalBody,Modal,CardTitle,ModalHeader, ModalFooter,Row,UncontrolledCollapse ,FormGroup,Label, Input,CardText,Collapse, Col} from 'reactstrap';
function Make_modal() {


      const [modal, setModal] = useState(false)

      const toggle = () => {
          setModal(!modal)
      }



    return (
        <div>
            <Row className="justify-content-end">
          <Button className="float-right" style={{borderRadius:'0px',fontSize:'15px'}} onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle} className="">
                <ModalHeader toggle={toggle}>Edit Details</ModalHeader>
                <ModalBody>
                    <Label for="exampleText">Tagline</Label>
                    <Input type="textarea" name="text" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." id="exampleText" />
                    <Label for="exampleText2" className="mt-4">Description</Label>
                    <Input type="textarea" name="text" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." id="exampleText2" />
                    <Label for="exampleText2" className="mt-4">SEO Tags</Label>
                    <Input type="textarea" name="text" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." id="exampleText2" />
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle} style={{borderRadius:'0px',fontSize:'15px'}}>Submit</Button>{' '}
                <Button color="secondary" onClick={toggle} style={{borderRadius:'0px',fontSize:'15px'}}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </Row>
        </div>
    )
}

export default Make_modal
