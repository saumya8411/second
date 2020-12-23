import React, { useState, useEffect } from 'react';
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Row,
  FormGroup,
  Label,
  Input,
  Col,
  Form,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import './Customcss.css';
import Avatar from './avatarnew.png';
import { func } from 'prop-types';
// import produtcs from '../data/products';
import { iconsmind, simplelineicons } from '../data/icons';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { FiUpload } from 'react-icons/fi';
import { VscLibrary } from 'react-icons/vsc';
import axiosInstance from '../helpers/axiosInstance';
import { useHistory } from 'react-router-dom';
import NotificationManager from '../components/common/react-notifications/NotificationManager';

// import Switch from 'rc-switch';
// import {iconsmind} from '../data/icons'
// import 'rc-switch/assets/index.css';

const Remotelook = (props) => {
  const history = useHistory();
  const { uniquesessionid } = props.location.state;
  // console.log(uniquesessionid);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]); //uniquesessionid instead of products
  useEffect(() => {
    //call your data from backend with uniquesessionid and store in data
    //setData(result);
    axiosInstance
      .get(`/sessions/FindSessionById/${uniquesessionid}`)
      .then((response) => {
        console.log(response);
        if (response.data.success) setData(response.data.session);
        else {
          console.log('err occured');
          history.push('/app/dashboard/default');
        }
      })
      .catch((err) => {
        console.log(err);
        history.push('/app/dashboard/default');
      });
    return () => {
      //do what you want you do when component unmounts
    };
  }, []);

  useEffect(() => {
    if (error) {
      console.log(error);
      NotificationManager.warning(
        error,
        'Update Live Session Error',
        3000,
        null,
        null,
        ''
      );
    }
  }, [error]);

  const handleSubmit = () => {
    setModal(!modal);
    const values = {
      session_description: document.getElementById('exampleText2').value,
      session_id: uniquesessionid,
    };
    if (!values.session_description) setError('provide session description');
    else {
      axiosInstance
        .post('/sessions/updateSession', { values })
        .then((response) => {
          console.log(response);
          if (response.data.success) setData(response.data.session);
          else {
            console.log(response.data.error);
            setError(response.data.error);
          }
        })
        .catch((err) => {
          console.log(err);
          try {
            setError(err.message);
          } catch (err) {
            setError('Could not update...try again');
          }
        });
    }
  };

  const { buttonLabel, className } = props;
  /*         const [desc,setDesc] = useState('Hello I am desc') */
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const fileUploadButton = () => {
    document.getElementById('fileButton').click();
    document.getElementById('fileButton').onchange = () => {
      this.setState({
        fileUploadState: document.getElementById('fileButton').value,
      });
    };
  };
  /*         const change = (e) => {
            setDesc({desc : e.target.value})
            
        } */
  //  const summary : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

  return (
    <section style={{ marginLeft: '7%', marginRight: '7%' }}>
      <Link to="/app/dashboard/default">
        <div
          className={`glyph-icon ${iconsmind[2].icons[42]} sessionlookicon`}
          style={{ fontSize: '3rem' }}
        />
      </Link>
      <Card className="p-4 mb-3 ">
        <CardBody>
          <Row>
            <Colxx md="9" xs="12">
              <Row>
                <nav>
                  <ul className="d-flex">
                    <li className="d-flex align-items-center">
                      <h1
                        style={{ marginBottom: '0' }}
                        className="font-weight-bold"
                      >
                        {data.session_name}
                      </h1>
                    </li>
                    <li className="d-flex align-items-center ">
                      <badge
                        style={{
                          padding: '2px 2px',
                          backgroundColor: '#CFEBFD',
                          borderRadius: '12px',
                          fontSize: '10px',
                        }}
                      >
                        {data.session_type}
                      </badge>
                    </li>
                  </ul>
                </nav>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <nav>
                  <ul className="d-flex">
                    <li className="d-flex align-items-center">
                      <span style={{ fontSize: '12px' }}>
                        {data.session_start_date},
                      </span>
                    </li>
                    <li className="d-flex">
                      <span style={{ fontSize: '12px' }}>
                        {data.session_end_time
                          ? data.session_end_time.toString().slice(-8)
                          : ''}
                      </span>
                    </li>
                  </ul>
                </nav>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                {/* <Col md="3" xs="12"> */}
                {/* <li className="d-flex "> */}
                <h6 className="mb-0">
                  <a
                    href={data.session_link}
                    target="_blank"
                    style={{ cursor: 'pointer' }}
                  >
                    {data.session_link ? data.session_link : 'www.zoomapp.com,'}
                  </a>
                </h6>
                {/* </li> */}
                {/* </Col> */}
              </Row>
              <Row>
                <Col md="4" xs="12">
                  <li className=" d-flex">
                    <p className="mb-0" style={{ marginLeft: '10px' }}>
                      <span className="font-weight-bold">Code: </span>{' '}
                      {data.session_zoom_code}
                    </p>
                  </li>
                </Col>
                <Col md="4" xs="12">
                  <li className=" d-flex ">
                    <p style={{ marginLeft: '10px' }} className="mb-0">
                      {' '}
                      <span className="font-weight-bold">Password:</span>{' '}
                      {data.session_zoom_password}
                    </p>
                  </li>
                </Col>
                <Col md="4" xs="12">
                  <li className=" d-flex ">
                    <p style={{ marginLeft: '10px' }} className="mb-0">
                      {' '}
                      <span className="font-weight-bold">Duration:</span>{' '}
                      {data.session_duration} Days
                    </p>
                  </li>
                </Col>
              </Row>
            </Colxx>
            <Colxx md="3" xs="12">
              <Button
                outline
                color="secondary"
                style={{ fontSize: '1.0rem', borderRadius: '0px' }}
                onClick={() => window.open(data.session_link)}
              >
                Launch
              </Button>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
      <Card className="px-4 mb-3">
        <CardBody>
          <Row className="justify-content-end">
            <Button
              className="float-right"
              style={{ borderRadius: '0px', fontSize: '15px' }}
              onClick={toggle}
            >
              Edit
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Edit Details</ModalHeader>
              <ModalBody>
                {/* <Label for="exampleText">Tagline</Label> */}
                {/*  <Input type="textarea" */}{' '}
                {/*  value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." */
                /* id="exampleText" /> */}
                <Label for="exampleText2" className="">
                  Description
                </Label>
                <Input
                  type="textarea"
                  name="session_description"
                  /* value={desc} onChange={(e) => change(e)} */ id="exampleText2"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={handleSubmit}
                  style={{ borderRadius: '0px', fontSize: '15px' }}
                >
                  Submit
                </Button>{' '}
                <Button
                  color="secondary"
                  onClick={toggle}
                  style={{ borderRadius: '0px', fontSize: '15px' }}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Row>
          <Row className="pr-4">
            {/*   <Colxx xs='12' md="12">
            <h3 className="font-weight-bold">Tagline</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </Colxx> */}

            <Colxx xs="12" md="12">
              <h3 className="font-weight-bold">Description</h3>
              <p>{data.session_description}</p>
            </Colxx>
            <Colxx xs="12" md="12">
              <h3 className="font-weight-bold">Fees</h3>
              <p> {data.session_fee}</p>
            </Colxx>
            <Colxx xs="12" md="12">
              <h3 className="font-weight-bold">Registration</h3>
              <p>{data.session_registration}</p>
            </Colxx>
            <Colxx xs="12" md="12">
              <h3 className="font-weight-bold">Associated Courses</h3>
              <p>{data.session_tags}</p>
            </Colxx>
            <Colxx xs="12" md="12">
              <h3 className="font-weight-bold">Occurance</h3>
              <p>{data.session_occurance}</p>
            </Colxx>
            <Colxx xs="12" md="12">
              <h3 className="font-weight-bold">Fees Type</h3>
              <p>{data.session_fee_type}</p>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
      <Card className=" mb-3">
        <CardTitle
          className="font-weight-bold pl-4 pt-4"
          style={{ fontSize: '1.3rem' }}
        >
          Trainer Profile
        </CardTitle>
        <CardBody>
          <nav>
            <Row>
              {/* <Colxx md="1"></Colxx> */}

              <Colxx
                md="4"
                xs="12"
                className="cardseparations text-center font-weight-bold"
              >
                <h3 className="font-weight-bold" style={{ fontSize: '1.1rem' }}>
                  Vedant
                </h3>
                <img src={Avatar} alt="..." id="avatar" />
                <p>Web developer, IBM, bengaluru</p>
                <p>2017 to present</p>
                <Button outline color="secondary">
                  Edit Profile
                </Button>
              </Colxx>
              <Colxx md="4" xs="12" className="">
                <h5
                  className=" font-weight-bold text-center"
                  style={{ fontSize: '1.1rem' }}
                >
                  Career summary
                </h5>

                <p className="text-center" style={{ fontSize: '15px' }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Colxx>
              <Colxx md="4" xs="12">
                <h5
                  className=" font-weight-bold text-center"
                  style={{ fontSize: '1.1rem' }}
                >
                  Experience
                </h5>

                <div className="">
                  <p className="text-center" style={{ fontSize: '15px' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </Colxx>
            </Row>
          </nav>
        </CardBody>
      </Card>
      <Card className="p-4 mb-3">
        <CardBody>
          <Row>
            <Colxx md="6" xs="12">
              <h3 className="font-weight-bold text-center">
                List Of Occurance
              </h3>
              <p className="text-center">Occurance is here</p>
            </Colxx>
            <Colxx md="6" xs="12">
              <h3 className="font-weight-bold text-center">Session Material</h3>
              <Row className="text-center">
                <label className="input-label-1">
                  <input type="file" accept=".pdf,.word" />
                  <FiUpload />
                  <p id="ufd">Upload from device</p>
                </label>
                <label className="input-label-2">
                  <input type="file" />
                  <VscLibrary />
                  <p id="ufl">Upload from Library</p>
                </label>
              </Row>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
      <br />
    </section>
  );
};

export default Remotelook;
