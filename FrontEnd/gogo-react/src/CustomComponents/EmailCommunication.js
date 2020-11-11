// import React, { useState ,useEffect} from 'react';
import {
  Card,
  Row,
  Input,
  CardTitle,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  Button,
  Label,
  FormGroup,
  TabPane,
  CardImg,
  Form,
} from 'reactstrap';
import { Colxx } from '../components/common/CustomBootstrap';
import Switch from 'rc-switch';
import './Customcss.css';
import { useTable, usePagination, useSortBy } from 'react-table';
// import { handleDOMChanges } from 'react-sortablejs/dist/util';
import img from './bebinca-thumb.jpg';

import React, { Component } from 'react';
import Emailcommunicationfunction from './EmailCommunicationfunction';

export class EmailCommunication extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: 'nikhil', id: '1', status: false, notificationperiod: 1 },
        { name: 'vedant', id: '2', status: true, notificationperiod: 3 },
        { name: 'Soumya', id: '3', status: false, notificationperiod: 5 },
      ],
    };
    this.changeCourses = this.changeCourses.bind(this);
    this.changeNotification = this.changeNotification.bind(this);
  }
  changeCourses(props) {
    const newarray = this.state.courses;
    newarray[props].status = !newarray[props].status;
    this.setState(newarray, console.log(this.state.courses));
  }

  changeNotification(props, e) {
    const newarray = this.state.courses;
    console.log(e.target.value);
    newarray[props].notificationperiod = e.target.value;
    this.setState(newarray, console.log(this.state.courses));
  }
  render() {
    return (
      <div>
        <h1 className="mb-4 headingCA">Course Alert</h1>

        {this.state.courses.map((item, index) => {
          return (
            <>
              <Row key={item.id} className="mb-3 ml-4">
                <Colxx xxs="3" className="ml-4">{item.name}</Colxx>
                <Colxx xxs="3">
                  <FormGroup className="error-l-100">
                    <Switch
                      className="custom-switch custom-switch-secondary custom-switch-small"
                      checked={item.status}
                      onChange={() => {
                        this.changeCourses(index);
                        // const newarray = courses;
                        // newarray[index].status = !newarray[index].status
                        // changeCourses(newarray)
                        // console.log(courses)
                      }}
                    />
                  </FormGroup>
                </Colxx>
              </Row>
              {item.status && (
                <Row>
                  <Colxx sm="6" md="6">
                    <div className="front-end box">
                      <Card
                        className="p-4 mb-3 ml-4 inside"
                        style={{ minWidth: '200px', minHeight: '200px' }}
                      >
                        <CardImg
                          top
                          width="100%"
                          src={img}
                          alt="Theme1 img"
                          className="emailimg"
                        />
                        <CardBody>
                          <Button>
                            <a
                              href="http://localhost:3333/editnewsletter/1"
                              target="_blank"
                            >
                              Edit
                            </a>
                          </Button>
                        </CardBody>
                      </Card>
                    </div>
                  </Colxx>
                  <Colxx sm="6" md="6">
                    <p>
                      After how many days of inactivity do you want to notify
                      your user
                    </p>
                    <Form>
                      <Input
                        type="num"
                        name="notification"
                        onChange={(e) => {
                          this.changeNotification(index, e);
                          // const newarray = courses;
                          // newarray[index].status = !newarray[index].status
                          // changeCourses(newarray)
                          // console.log(courses)
                        }}
                        className="mb-3"
                      />
                      <div className="d-flex justify-content-center">
                        <Button className="">Submit</Button>
                      </div>
                    </Form>
                  </Colxx>
                </Row>
              )}
            </>
          );
        })}
      </div>
    );
  }
}

export default EmailCommunication;
