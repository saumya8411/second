import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  Form,
  CardTitle,
  ModalHeader,
  ModalFooter,
  Row,
  UncontrolledCollapse,
  FormGroup,
  Label,
  Input,
  CardText,
  Collapse,
  Col,
} from 'reactstrap';
import Switch from 'rc-switch';
import { iconsmind, simplelineicons } from '../data/icons';
import 'rc-switch/assets/index.css';
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import Editable from './Editable';
import './Customcss.css';
import { Link, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { MDBInput } from 'mdbreact';
import { useCounter } from './useCounter';
import Avatar from './avatarnew.png';
import { FaPlayCircle } from 'react-icons/fa';
import { RiAttachmentLine } from 'react-icons/ri';
import { BsQuestionDiamond } from 'react-icons/bs';
import { BsPlusCircle } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { BsCaretDownFill } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { VscLibrary } from 'react-icons/vsc';
import ScrollBar from 'react-perfect-scrollbar';
import { Scrollbars } from 'react-custom-scrollbars';
import Make_modal from './Make_modal';
import axiosInstance from '../helpers/axiosInstance';
import NotificationManager from '../components/common/react-notifications/NotificationManager';

//import {ContentEditable} from 'react-contenteditable'

export default class SessionMaterial extends Component {
  constructor(props) {
    // console.log(props.location.state.uniquesessionid);
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      modal: false,
      showMessage: false,
      showMessage2: false,
      showMessage3: false,
      showMessage4: false,
      option: [''],
      my_lesson: [
        {
          lname: 'NodeJS',
        },
      ],
      /* textv : '', */
      SessionMaterial: [
        {
          name: 'Chapter 1',
          lesson: [
            {
              id: 'theid',
              name: 'xyz',
              video: '',
              assignment: '',
              notes: '',
              thumbnail: '',
              quiz: '',
            },
          ],
        },
      ],
      data: {
        name: '',
        type: '',
        date: '',
        time: '',
        tagline: '',
        description: '',
        seo: '',
        session_fee: '0',
        Trainer: {
          name: 'Vedant',
          skills: [
            'HTML',
            'CSS',
            'JAVASCRIPT',
            'ANGULAR',
            'DJANGO',
            'MYSQL',
            'BOOTSTRAP',
          ],
        },
      },
      timeline: false,
      conclusion: '',

      html: '<b>Hello <i>World</i></b>',

      modal: false,
    };

    this.changeChapterAttribute = this.changeChapterAttribute.bind(this);
    this.changeLessonattribute = this.changeLessonattribute.bind(this);
    this.changepageattribute = this.changepageattribute.bind(this);

    this.addLesson = this.addLesson.bind(this);
    this.addChapter = this.addChapter.bind(this);

    this.fileUploadButton = this.fileUploadButton.bind(this);
  }

  componentDidMount() {
    console.log(
      this.state.data.tagline,
      this.state.data.seo,
      this.state.data.description
    );
    if (!this.props.location.state.uniquesessionid)
      this.props.history.push('/app/dashboard/default');
    axiosInstance
      .get(
        `/sessions/FindSessionById/${this.props.location.state.uniquesessionid}`
      )
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          const session = response.data.session;

          this.setState({
            ...this.state,
            data: {
              name: session.session_name,
              type: session.session_type,
              date: session.session_start_date,
              time: session.session_start_time,
              tagline: session.session_tagline || 'Default Tagline',
              description: session.session_description,
              seo: session.session_tags,
              session_fee: session.session_fee
                ? `${session.session_fee} INR`
                : '0',
              Trainer: this.state.data.Trainer,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push('/app/dashboard/default');
      });
  }

  toggle = () => {
    this.setState({ modal: true });
  };
  toggle2 = () => {
    this.setState({ modal: false });
  };
  addop = () => {
    this.setState((prevState) => ({ option: [...prevState.option, ''] }));
  };
  removeop = (i) => {
    let option = [...this.state.option];
    option.splice(i, 1);
    this.setState({ option });
  };
  handlemyChange = (i, event) => {
    let values = [...this.state.option];
    values[i] = event.target.value;
    this.setState({ values });
  };

  onButtonClickHandler = () => {
    this.setState({ showMessage: true });
    this.setState({ showMessage2: false });
    this.setState({ showMessage3: false });
    this.setState({ showMessage4: false });
  };
  onButtonClickHandler2 = () => {
    this.setState({ showMessage2: true });
    this.setState({ showMessage: false });
    this.setState({ showMessage3: false });
    this.setState({ showMessage4: false });
  };
  onButtonClickHandler3 = () => {
    this.setState({ showMessage3: true });
    this.setState({ showMessage2: false });
    this.setState({ showMessage: false });
    this.setState({ showMessage4: false });
  };
  onButtonClickHandler4 = () => {
    this.setState({ showMessage4: true });
    this.setState({ showMessage2: false });
    this.setState({ showMessage: false });
    this.setState({ showMessage3: false });
  };

  addLesson(props) {
    const newarray = this.state.SessionMaterial;
    const lessonlength = newarray[props].lesson.length;
    const newlesson = {
      id: `hello${lessonlength + 1}`,
      name: `lesson ${lessonlength + 1}`,
      video: '',
      assignment: '',
      notes: '',
      thumbnail: '',
      quiz: '',
    };
    newarray[props].lesson.push(newlesson);
    this.setState(
      { SessionMaterial: newarray },
      console.log(this.state.SessionMaterial)
    );
  }
  deleteTask(lessonindex) {
    alert('Are you sure to delete this?');
    console.log(lessonindex);
    let lesson = this.state.SessionMaterial;
    lesson.splice(lessonindex, 1);
    this.setState({
      lesson,
    });
  }

  addChapter() {
    const newarray = this.state.SessionMaterial;
    const arraysize = newarray.length;
    const newChapter = {
      name: `chapter ${arraysize + 1}`,
      lesson: [
        {
          name: 'lesson 1',
          video: '',
          assignment: '',
          notes: '',
          thumbnail: '',
          quiz: '',
        },
      ],
    };
    newarray.push(newChapter);
    this.setState(
      { SessionMaterial: newarray },
      console.log(this.state.SessionMaterial)
    );
  }
  toggle() {
    this.setState({ modal: true });
  }
  removeItem() {
    alert('Are you sure to delete this?');
    const lesson = this.state.SessionMaterial;
    lesson.splice(lesson.index, 1);
    this.setState({ lesson: lesson });
  }
  handleRemoveClick(index) {
    alert('Are you sure to delete this?');
    let lesson = this.state.SessionMaterial;
    let list = lesson[index].lesson;
    list.splice(list[index], 1);
    this.setState({ list });
  }

  changeChapterAttribute(props, index) {
    const newarray = this.state.SessionMaterial;
    newarray[index].name = props.target.value;
    this.setState(
      { SessionMaterial: newarray },
      console.log(this.state.SessionMaterial)
    );
  }
  changeLessonattribute(props, index, lessonindex) {
    const newarray = this.state.SessionMaterial;
    const named = props.target.name;
    console.log(props.target.value, index, lessonindex);
    newarray[index].lesson[lessonindex][props.target.name] = props.target.value;
    this.setState(
      { SessionMaterial: newarray },
      console.log(this.state.SessionMaterial)
    );
  }

  changepageattribute(props) {
    const newarray = this.state.data;
    const named = props.target.name;
    console.log(newarray, newarray[named], named);
    newarray[props.target.name] = props.target.value;
    this.setState({ data: newarray }, console.log(this.state.data));
  }
  handleChange(props) {
    const newarray = this.state.my_lesson;
    const named = props.target.name;
    console.log(newarray, newarray[named], named);
    newarray[props.target.html] = props.target.value;
    this.setState({ my_lesson: newarray }, console.log(this.state.my_lesson));
  }

  fileUploadButton = (index, lessonindex, id) => {
    document.getElementById('fileButton').click();
    // document.getElementById('fileButton').onchange = () =>{
    // this.setState({
    //      :document.getElementById('fileButton').value
    //         });
    //     }
    console.log(
      index,
      document.getElementById(id).value,
      document.getElementById(id).name
    );
  };

  render() {
    return (
      <section style={{ marginLeft: '7%', marginRight: '7%' }}>
        <Link to="/app/dashboard/default">
          <div
            className={`glyph-icon ${iconsmind[2].icons[42]} sessionlookicon`}
            style={{ fontSize: '3rem' }}
          />
        </Link>
        <Card className="p-4  mb-3">
          <CardBody>
            <Row>
              <Colxx md="7" sm="12">
                <Row>
                  <nav>
                    <ul className="d-flex">
                      <li style={{ display: 'flex', alignItems: 'center' }}>
                        <h3
                          className="font-weight-bold"
                          style={{ fontSize: '1.5rem' }}
                        >
                          {this.state.data.name}
                        </h3>
                      </li>
                      <li className="mb-2">
                        <span
                          style={{
                            padding: '2px 5px',
                            backgroundColor: '#CFEBFD',
                            borderRadius: '5px',
                            fontSize: '10px',
                            marginBottom: '10px',
                          }}
                        >
                          {this.state.data.type}
                        </span>
                      </li>
                    </ul>
                  </nav>
                </Row>
                <Row style={{ marginBottom: '20px' }}>
                  <nav>
                    <ul className="d-flex">
                      <li style={{ fontSize: '1rem' }}>
                        <span>{this.state.data.date}</span>
                      </li>
                      <li className="marking" style={{ fontSize: '1rem' }}>
                        <span>{this.state.data.time} PM</span>
                      </li>
                    </ul>
                  </nav>
                </Row>
              </Colxx>
              <Colxx md="5" sm="12">
                <Row>
                  <Button outline color="secondary" className="mr-3 butun">
                    Preview
                  </Button>
                  <Button
                    outline
                    color="secondary"
                    style={{ borderRadius: '3px', fontSize: '14px' }}
                  >
                    Launch
                  </Button>
                </Row>
                <Row>
                  <li className=" d-flex ">
                    <p style={{ marginLeft: '10px' }} className="mb-0 mt-4">
                      {' '}
                      <span className="font-weight-bold">Duration:</span> 1
                      month
                    </p>
                  </li>
                  <li className=" d-flex ">
                    <p style={{ marginLeft: '10px' }} className="mb-0 mt-4">
                      {' '}
                      <span className="font-weight-bold">Fees:</span>{' '}
                      {this.state.data.session_fee}
                    </p>
                  </li>
                </Row>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
        <Card className="p-4 mb-3">
          <CardBody>
            <Make_modal
              session_id={this.props.location.state.uniquesessionid}
              tagline={this.state.data.tagline}
              seotags={this.state.data.seo}
              description={this.state.data.description}
            />
            <Row>
              <Colxx sm="12">
                <Row style={{ marginBottom: '20px' }}>
                  <Colxx xxs="12" md="4">
                    <h3
                      className="font-weight-bold"
                      style={{ fontSize: '1.5rem' }}
                    >
                      Tagline
                    </h3>
                    <p>{this.state.data.tagline}</p>
                    {/* <Input
                      type="text"
                      name="tagline"
                      placeholder="Write a good tagline"
                      value={this.state.data.tagline}
                      onChange={(e) => this.changepageattribute(e)}
                    /> */}
                    {/* <p>Tagline is here</p> */}
                    {/* <Editable
                      style={{ fontSize: '15px' }}
                      text={this.state.data.tagline}
                      placeholder="Write a good tagline"
                      type="input"
                    >
                      
                    </Editable> */}
                  </Colxx>
                </Row>
              </Colxx>
            </Row>

            <Row>
              <Colxx sm="12">
                <Row style={{ marginBottom: '20px' }}>
                  <Colxx xxs="12" md="4">
                    <h3
                      className="font-weight-bold"
                      style={{ fontSize: '1.5rem' }}
                    >
                      SEO Tags
                    </h3>

                    <p>{this.state.data.seo}</p>
                    {/* <Input
                      type="text"
                      name="seo"
                      placeholder="SEO"
                      value={this.state.data.seo}
                      onChange={(e) => this.changepageattribute(e)}
                    /> */}
                    {/* <Editable
                      style={{ fontSize: '15px' }}
                      text={this.state.data.seo}
                      placeholder="SEO"
                      type="input"
                    >
                      
                     
                    </Editable> */}
                  </Colxx>
                </Row>
                <Row style={{ marginBottom: '20px' }}>
                  <Colxx xxs="12" md="4">
                    <h3
                      className="font-weight-bold"
                      style={{ fontSize: '1.5rem' }}
                    >
                      Description
                    </h3>
                    <p>{this.state.data.description}</p>
                    {/* <Input
                      type="text"
                      name="description"
                      placeholder="Write a good description"
                      value={this.state.data.description}
                      onChange={(e) => this.changepageattribute(e)}
                    /> */}
                    {/* <Editable
                      style={{ fontSize: '15px' }}
                      text={this.state.data.description}
                      placeholder="Write a good description"
                      type="input"
                    >
                     
                     
                    </Editable> */}
                  </Colxx>
                </Row>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
        <Card className="pl-4 mb-3">
          <CardTitle
            className="font-weight-bold"
            style={{ fontSize: '1.5rem' }}
          >
            Trainer Profile
          </CardTitle>
          <CardBody>
            <nav>
              <Row>
                <Colxx
                  md="4"
                  xs="12"
                  className="cardseparations text-center font-weight-bold"
                >
                  <h3
                    className="font-weight-bold"
                    style={{ fontSize: '1.3rem' }}
                  >
                    {this.state.data.Trainer.name}
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
                    className="ml-4 font-weight-bold text-center"
                    style={{ fontSize: '1.3rem' }}
                  >
                    Career Summary
                  </h5>
                  <p className="text-center">
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
                  {/* <ul className="skillslist">
                               
                               {this.state.data.Trainer.skills.map((skill)=>{
                                 return(
                                 <p className="ml-4 mt-4">{skill}</p>
                                 
                                 )
                               })}
                                 <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>ANGULAR</li>
                                <li>DEVOPS</li> 
                            </ul> */}
                </Colxx>
                <Colxx md="4" xs="12">
                  <h5
                    className=" font-weight-bold text-center"
                    style={{ fontSize: '1.3rem' }}
                  >
                    Experience
                  </h5>

                  <div className="">
                    <p className="text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Colxx>
              </Row>
            </nav>
          </CardBody>
        </Card>

        <Card className="p-4 mb-3">
          <Row>
            <Col md="4">
              <CardTitle className="font-weight-bold">
                Session Material
              </CardTitle>
            </Col>
          </Row>

          {/* <FormGroup className="error-l-100">
                      <Label>Multiple Chapters: </Label>
                      <Switch
                  className="custom-switch custom-switch-secondary custom-switch-small"
                  checked={multiplechapters}
                  onChange={(secondary) => setMultiplechapters(secondary)}
                />
                      </FormGroup> */}

          <Row>
            {' '}
            <Col md="6">
              <FormGroup className="error-l-100 mr-auto ml-4">
                <Row>
                  <Label style={{ fontSize: '1rem' }}>Enable Timeline: </Label>
                  <Switch
                    className="custom-switch custom-switch-secondary custom-switch-small ml-4"
                    checked={this.state.timeline}
                    onChange={(secondary) =>
                      this.setState({ timeline: secondary })
                    }
                  />{' '}
                </Row>
              </FormGroup>
            </Col>
            <Col md="6"> </Col>
          </Row>

          <Card className="p-4">
            <CardBody>
              {this.state.SessionMaterial.map((item, index) => {
                return (
                  <div
                    className="mb-2"
                    style={{ border: '1px solid #d7d7d7', borderRadius: '5px' }}
                  >
                    {/* <h3 className="mt-4 text-center font-weight-bold">{item.name}</h3> */}
                    <Card
                      id="toggle2"
                      className="text-center my-2"
                      style={{ cursor: 'pointer', boxShadow: 'none' }}
                    >
                      <Row className=" m-0 text-center mx-auto my-auto font-weight-bold">
                        {item.name}{' '}
                        <BiChevronDown
                          className="float-right mt-1 down-arr"
                          style={{ fontSize: '20px' }}
                        />
                      </Row>
                    </Card>
                    <UncontrolledCollapse toggler="#toggle2">
                      <Card style={{ boxShadow: 'none' }}>
                        <CardBody>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <Label for="exampleText d-flex justify-content-center">
                                  Chapter Name
                                </Label>
                                <MDBInput
                                  name="name"
                                  placeholder="Add Chapter Name"
                                  value={item.name}
                                  onChange={(e) =>
                                    this.changeChapterAttribute(e, index)
                                  }
                                />
                                <Label for="exampleText d-flex justify-content-center">
                                  What you will learn after this chapter?
                                </Label>

                                <Input
                                  type="textarea"
                                  name="text"
                                  id="exampleText"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <button
                                onClick={(evt) => {
                                  evt.stopPropagation();
                                  this.deleteTask(index);
                                }}
                                className="delete"
                              >
                                Delete Chapter
                              </button>
                            </Col>
                          </Row>

                          {item.lesson.map((lessonitem, lessonindex) => {
                            console.log(lessonitem);
                            return (
                              <div key={lessonindex}>
                                <div>
                                  {' '}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      this.handleRemoveClick(lessonindex);
                                    }}
                                    className="d-flex mt-4 ml-auto delete2 text-center"
                                  >
                                    Delete Lesson
                                  </button>
                                  <Card
                                    id="toggler"
                                    className="text-center mt-4"
                                    style={{
                                      width: '100%',
                                      height: '40px',
                                      cursor: 'pointer',
                                      boxShadow: 'none',
                                    }}
                                  >
                                    <Row className="text-center m-0 mx-auto my-auto">
                                      Lesson : {lessonitem.name}{' '}
                                      <BiChevronDown
                                        className="float-right mt-1"
                                        style={{ fontSize: '20px' }}
                                      />
                                    </Row>
                                  </Card>
                                  <UncontrolledCollapse toggler="#toggler">
                                    <Card style={{ boxShadow: 'none' }}>
                                      <CardBody>
                                        <Input
                                          type="text"
                                          name="name"
                                          placeholder="Write a Lesson name"
                                          value=""
                                          /* onChange={e => this.changeLessonattribute(e, lessonindex)} */ className="mt-4"
                                        />

                                        <Row className="mt-4">
                                          {/*           <Colxx  md="4">
          <Input value="First Lesson" onChange={onLessonnameChange}/> 
          

          </Colxx> */}

                                          <Colxx md="12">
                                            <Row className="mt-4 text-center">
                                              <div className="design">
                                                <h5 tag="h5">Get Started</h5>
                                                <Row className="row-ico">
                                                  <Col md="3">
                                                    <button
                                                      className="card2 text-center mt-2"
                                                      id="video"
                                                      style={{
                                                        background: 'none',
                                                      }}
                                                      onClick={
                                                        this
                                                          .onButtonClickHandler
                                                      }
                                                    >
                                                      <FaPlayCircle id="lower-icons" />
                                                      <br />
                                                      <p
                                                        className="mt-2 text-dark"
                                                        style={{
                                                          fontSize: '12px',
                                                        }}
                                                      >
                                                        Video
                                                      </p>
                                                    </button>
                                                  </Col>
                                                  <Col md="3">
                                                    <button
                                                      className="card2 mt-2"
                                                      style={{
                                                        background: 'none',
                                                      }}
                                                      onClick={
                                                        this
                                                          .onButtonClickHandler2
                                                      }
                                                    >
                                                      <RiAttachmentLine id="lower-icons" />
                                                      <p
                                                        className="mt-2 text-dark"
                                                        style={{
                                                          fontSize: '12px',
                                                        }}
                                                      >
                                                        Assignment
                                                      </p>
                                                    </button>
                                                  </Col>
                                                  <Col md="3">
                                                    <button
                                                      className="card2 mt-2"
                                                      style={{
                                                        background: 'none',
                                                      }}
                                                      onClick={
                                                        this
                                                          .onButtonClickHandler3
                                                      }
                                                    >
                                                      <BsQuestionDiamond id="lower-icons" />
                                                      <p
                                                        className="mt-2 text-dark"
                                                        style={{
                                                          fontSize: '12px',
                                                        }}
                                                      >
                                                        Quiz
                                                      </p>
                                                    </button>
                                                  </Col>
                                                  <Col md="3">
                                                    <button
                                                      className="card2 mt-2"
                                                      style={{
                                                        background: 'none',
                                                      }}
                                                      onClick={
                                                        this
                                                          .onButtonClickHandler4
                                                      }
                                                    >
                                                      <FaRegNewspaper id="lower-icons" />
                                                      <p
                                                        className="mt-2 text-dark"
                                                        style={{
                                                          fontSize: '12px',
                                                        }}
                                                      >
                                                        Handouts
                                                      </p>
                                                    </button>
                                                  </Col>
                                                </Row>
                                              </div>
                                            </Row>
                                            {this.state.showMessage && (
                                              <>
                                                <p
                                                  className="mx-auto mt-4 text-center"
                                                  style={{ fontSize: '15px' }}
                                                >
                                                  Videos must be in the .mp4,
                                                  .ogg or .mkv file.
                                                </p>
                                                <Row className="text-center">
                                                  <label className="input-label-1">
                                                    <input
                                                      type="file"
                                                      accept=".mp4,.ogg,.mkv,.mov"
                                                    />
                                                    <FiUpload />
                                                    <p id="ufd">
                                                      Upload from device
                                                    </p>
                                                  </label>
                                                  <label className="input-label-2">
                                                    <input type="file" />
                                                    <VscLibrary />
                                                    <p id="ufl">
                                                      Upload from Library
                                                    </p>
                                                  </label>
                                                </Row>
                                              </>
                                            )}
                                            {this.state.showMessage2 && (
                                              <>
                                                {' '}
                                                <p
                                                  className="mx-auto mt-4 text-center"
                                                  style={{ fontSize: '15px' }}
                                                >
                                                  The Attachment must be in .pdf
                                                  or .word format.
                                                </p>
                                                <Row className="text-center">
                                                  <label className="input-label-1">
                                                    <input
                                                      type="file"
                                                      accept=".pdf,.word"
                                                    />
                                                    <FiUpload />
                                                    <p id="ufd">
                                                      Upload from device
                                                    </p>
                                                  </label>
                                                  <label className="input-label-2">
                                                    <input type="file" />
                                                    <VscLibrary />
                                                    <p id="ufl">
                                                      Upload from Library
                                                    </p>
                                                  </label>
                                                </Row>
                                              </>
                                            )}
                                            {this.state.showMessage3 && (
                                              <>
                                                <Row>
                                                  <p
                                                    className="mx-auto mt-4 text-center"
                                                    style={{ fontSize: '15px' }}
                                                  >
                                                    The Attachment must be in
                                                    .pdf format.
                                                  </p>{' '}
                                                  <Link to="/app/preview">
                                                    <Button
                                                      className="d-flex mt-2"
                                                      style={{
                                                        borderRadius: '3px',
                                                        height: '35px',
                                                      }}
                                                    >
                                                      Preview
                                                    </Button>
                                                  </Link>
                                                </Row>
                                                <Row className="text-center">
                                                  <label className="input-label-1">
                                                    <BsPlusCircle
                                                      onClick={this.toggle}
                                                      style={{
                                                        cursor: 'pointer',
                                                      }}
                                                    />
                                                    <p id="ufd">Add a Quiz</p>
                                                  </label>
                                                  <label className="input-label-2">
                                                    <input type="file" />
                                                    <VscLibrary />
                                                    <p id="ufl">
                                                      Upload from Library
                                                    </p>
                                                    <Modal
                                                      isOpen={this.state.modal}
                                                      toggle={this.toggle}
                                                    >
                                                      <ModalHeader
                                                        toggle={this.toggle}
                                                      >
                                                        Modal title
                                                      </ModalHeader>
                                                      <Form>
                                                        {' '}
                                                        <ModalBody>
                                                          <Input
                                                            type="select"
                                                            name="select"
                                                            id="exampleSelect"
                                                          >
                                                            <option>
                                                              Select ...
                                                            </option>
                                                            <option>
                                                              Checkbox
                                                            </option>
                                                            <option>
                                                              Radio button
                                                            </option>
                                                          </Input>
                                                          <label>
                                                            Add Question
                                                          </label>
                                                          <Input
                                                            placeholder="Please don't forget '?' at the end..."
                                                            required
                                                          />

                                                          {this.state.option.map(
                                                            (val, myindex) => (
                                                              <>
                                                                <label className="mt-3">
                                                                  Options{' '}
                                                                  {myindex + 1}
                                                                </label>
                                                                <Row>
                                                                  <Col md={10}>
                                                                    <Input
                                                                      placeholder="Example: my answer one"
                                                                      onChange={this.handlemyChange.bind(
                                                                        this,
                                                                        myindex
                                                                      )}
                                                                      required
                                                                    />
                                                                  </Col>
                                                                  <Col md={2}>
                                                                    {' '}
                                                                    <IoMdRemoveCircleOutline
                                                                      style={{
                                                                        color:
                                                                          '#E74C3C',
                                                                        cursor:
                                                                          'pointer',
                                                                        fontSize:
                                                                          '20px',
                                                                      }}
                                                                      onClick={this.removeop.bind(
                                                                        this,
                                                                        myindex
                                                                      )}
                                                                    />
                                                                  </Col>
                                                                </Row>{' '}
                                                              </>
                                                            )
                                                          )}
                                                        </ModalBody>
                                                        <ModalFooter>
                                                          <Button
                                                            color="secondary"
                                                            onClick={this.addop.bind(
                                                              this
                                                            )}
                                                          >
                                                            Add Options
                                                          </Button>
                                                          <Button
                                                            color="primary"
                                                            type="submit"
                                                          >
                                                            Submit
                                                          </Button>{' '}
                                                          <Button
                                                            color="secondary"
                                                            onClick={
                                                              this.toggle2
                                                            }
                                                          >
                                                            Cancel
                                                          </Button>
                                                        </ModalFooter>
                                                      </Form>
                                                    </Modal>
                                                  </label>
                                                </Row>
                                              </>
                                            )}
                                            {this.state.showMessage4 && (
                                              <>
                                                {' '}
                                                <p
                                                  className="mx-auto mt-4 text-center"
                                                  style={{ fontSize: '15px' }}
                                                >
                                                  The Attachment must be in
                                                  .word format and scanned
                                                  clearly.
                                                </p>
                                                <Row className="text-center">
                                                  <label className="input-label-1">
                                                    <input
                                                      type="file"
                                                      accept=".pdf,.word"
                                                    />
                                                    <FiUpload />
                                                    <p id="ufd">
                                                      Upload from device
                                                    </p>
                                                  </label>
                                                  <label className="input-label-2">
                                                    <input type="file" />
                                                    <VscLibrary />
                                                    <p id="ufl">
                                                      Upload from Library
                                                    </p>
                                                  </label>
                                                </Row>
                                              </>
                                            )}
                                          </Colxx>
                                        </Row>
                                      </CardBody>
                                    </Card>
                                  </UncontrolledCollapse>
                                </div>
                              </div>
                            );
                          })}

                          <Button
                            mode="filled"
                            className="btn12 mb-4"
                            color="primary"
                            style={{ maxWidth: '200px' }}
                            onClick={() => this.addLesson(index)}
                          >
                            Add lesson
                          </Button>
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                  </div>
                );
              })}
              <Button
                mode="filled"
                className="btn13 "
                color="secondary"
                onClick={() => this.addChapter()}
              >
                Add Chapter{' '}
              </Button>
            </CardBody>
          </Card>
          {/* <Button className="mt-4 btn13">Next</Button> */}
        </Card>

        <br />
        <br />
      </section>
    );
  }
}
