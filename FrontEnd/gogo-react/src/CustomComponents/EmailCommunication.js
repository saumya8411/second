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
} from 'reactstrap';
import { Colxx } from '../components/common/CustomBootstrap';
import Switch from 'rc-switch';
import './Customcss.css';
import { useTable, usePagination, useSortBy } from 'react-table';
// import { handleDOMChanges } from 'react-sortablejs/dist/util';





import React, { Component } from 'react'
import Emailcommunicationfunction from './EmailCommunicationfunction';

export class EmailCommunication extends Component {
  constructor() {
    super();
    this.state = {courses: [
      { name: 'nikhil', id: '1', status: false },
      { name: 'vedant', id: '2', status: true },
      { name: 'Soumya', id: '3', status: false },
    ]};
    this.changeCourses = this.changeCourses.bind(this)

  }
  changeCourses(props){
    const newarray = this.state.courses;
newarray[props].status = !newarray[props].status
this.setState(newarray,console.log(this.state.courses))
  }
  render() {
    return (
      <div>

      <h2>Your Courses</h2> 
      <Card className="p-4 mb-3">
        {this.state.courses.map((item,index) => {
          return (
            <Row key={item.id} className="mb-3">
              <Colxx xxs="3">{item.name}</Colxx>
              <Colxx xxs="3">
                <FormGroup className="error-l-100">
                  <Switch
                    className="custom-switch custom-switch-secondary custom-switch-small"
                    checked={item.status}
                    onChange={
                      ()=>{
                      this.changeCourses(index)
                        // const newarray = courses;
                        // newarray[index].status = !newarray[index].status
                        // changeCourses(newarray)
                        // console.log(courses)
                      }
                      
                    }
                  />
                </FormGroup>
              </Colxx>
              <Colxx xxs="3" >
                <Button color="secondary">Edit</Button>
              </Colxx>
              <Colxx xxs="3" >
              <Button color="secondary">Preview</Button>

              </Colxx>
            </Row>
          );
        })}
      </Card>
      </div>
    )
  }
}

export default EmailCommunication
 