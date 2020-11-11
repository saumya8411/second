import React from 'react';
import { Row,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button,Col,  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu, } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import GradientWithRadialProgressCard from '../../components/cards/GradientWithRadialProgressCard';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import { injectIntl } from 'react-intl';
import './dash.css'
import { FaUsers } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';
import { LineChart } from '../../components/charts';

import { lineChartData } from '../../data/charts';


import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';



// Radial separators


const BlankPage = ({ intl,match }) => {
  const Enroll_percentage = 66;
  const course_percentage = 9;
  const data_percentage = '14';
  const bandwidth_percentage = 20
const number = 43;
  return (
    <>
      <Row> 
        <Colxx xxs="12">
          <h1>Dashboard</h1>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Col md = "3" xs = "12">
      <Card id="card121"> 
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          {/* <CardTitle tag="h5">Card title</CardTitle> */}
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <Row>
          <Col md="7">
            <FaUsers id="users"/>
            <h1 id="number" >{number}</h1>
            <CardText id="small">Enrollments till now</CardText>
          </Col>
          <Col md="5">
          <CircularProgressbar
            value={Enroll_percentage}
            text={`${Enroll_percentage}%`}
            styles={buildStyles({
              textColor: "#46b5d1",
              pathColor: "#151965"
            })}
          />
          </Col>
          </Row>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      <Col md = "3" xs = "12">
      <Card id="card122">
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
        <Row>
          <Col md="7">
            <FaCode id="users"/>
            <h1 id="number" >11</h1>
            <CardText id="small">Courses till now</CardText>
          </Col>
          <Col md="5">
          <CircularProgressbar
            value={course_percentage}
            text={`${course_percentage}%`}
            styles={buildStyles({
              textColor: "#46b5d1",
              pathColor: "#ea2c62"
            })}
          />
          </Col>
          </Row>
        </CardBody>
      </Card>
      </Col>
      <Col md = "3" xs = "12">
      <Card id="card123">
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
        <Row>
          <Col md="7">
            <FaDatabase id="users"/>
            <h1 id="number" >14GB</h1>
            <CardText id="small">Storage Used</CardText>
          </Col>
          <Col md="5">
          <CircularProgressbar
            value={data_percentage}
            text={`${data_percentage}%`}
            styles={buildStyles({
              textColor: "#46b5d1",
              pathColor: "#0e918c"
            })}
          />
          </Col>
          </Row>
        </CardBody>
      </Card>
      </Col>
      <Col md = "3" xs = "12">
      <Card id="card124">
        <CardBody>
        <Row>
          <Col md="7">
            <FaWifi id="users"/>
            <h1 id="number" >10GB</h1>
            <CardText id="small">bandwidth used</CardText>
          </Col>
          <Col md="5">
          <CircularProgressbar
            value={bandwidth_percentage}
            text={`${bandwidth_percentage}%`}
            styles={buildStyles({
              textColor: "#46b5d1",
              pathColor: "#151965"
            })}
          />
          </Col>
          </Row>
        </CardBody>
      </Card>
      </Col>
      </Row>
      <Card className="mt-4">
      <div className="position-absolute card-top-buttons">
        <UncontrolledDropdown>
          <DropdownToggle color="" className="btn btn-header-light icon-button">
            <i className="simple-icon-refresh" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Row className="ml-1">Sales <div id="dot"></div></Row>
            </DropdownItem>
            <DropdownItem>
            <Row className="ml-1">Enrolled<div id="dot2"></div></Row>
            </DropdownItem>
            <DropdownItem>
            <Row className="ml-1">Revenue<div id="dot3"></div></Row>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardBody>
        <CardTitle>
        </CardTitle>
        <div className="dashboard-line-chart">
          <LineChart shadow data={lineChartData} />
        </div>
      </CardBody>
    </Card>
    </>
  );
};

export default BlankPage;
